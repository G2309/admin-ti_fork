import { useMemo, useState, useDeferredValue, useEffect } from 'react'
import { TrendingUp, Wallet, ShieldAlert, Gauge, Calculator, RotateCcw, Receipt } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, ReferenceLine, PieChart, Pie } from 'recharts'
import { fmtQ, fmtPct } from '@/data/uvg-canonical'
import { cardVisible, appConfig } from '@/lib/env'
import { Toaster, toast } from 'sonner'

// Inputs editables del Excel — hoja "XP + Scrumban" (vista cliente) e "Inputs"
type FinancialInputs = {
  // Sección 4 del Excel: Equipo XP + Scrumban (cliente) — salarios y FTE
  salaryCoach: number;        fteCoach: number
  salaryTracker: number;      fteTracker: number
  salarySenior1: number;      fteSenior1: number
  salarySenior2: number;      fteSenior2: number
  salaryJunior1: number;      fteJunior1: number
  salaryJunior2: number;      fteJunior2: number
  // Sección 1: parámetros comerciales y de cronograma
  bufferPct: number      // Holgura XP + Scrumban (10 %)
  marginPct: number      // Margen ejecutor (35 %)
  // Sección 1: BID / ROM (Scrumban)
  pbidPct: number        // Porción Build comprometida (80 %)
  promPct: number        // Porción Run reactiva (20 %)
  // Sección 8: TMAR (Tasa Mínima Aceptable de Rendimiento)
  inflation: number
  riskPremium: number
  expectedReturn: number
  // Retorno proyectado tras la entrega
  monthlyCashflow: number
}

// Valores por defecto extraídos directamente del Excel — hoja "XP + Scrumban" vista cliente
const DEFAULTS: FinancialInputs = {
  salaryCoach: 15000,    fteCoach: 1.00,
  salaryTracker: 13500,  fteTracker: 1.00,
  salarySenior1: 12904,  fteSenior1: 1.00,
  salarySenior2: 12904,  fteSenior2: 1.00,
  salaryJunior1: 9000,   fteJunior1: 1.00,
  salaryJunior2: 9000,   fteJunior2: 1.00,
  bufferPct: 0.10,
  marginPct: 0.35,
  pbidPct: 0.80,
  promPct: 0.20,
  inflation: 0.05,
  riskPremium: 0.10,
  expectedReturn: 0.20,
  monthlyCashflow: 90000,
}

// Constantes congeladas del proyecto (no editables — vienen del Excel)
const TOTAL_SP = 121
const TOTAL_EPICS = 6
const SPRINT_DAYS = 10        // días hábiles por sprint (= 2 semanas calendario)
const MONTH_DAYS = 20         // días hábiles por mes
const ADDITIONAL_COSTS_6M = 105870
const RESERVE_FROZEN = 133769.80  // Σ EMV de 9 riesgos · constante del proyecto (base Q 72,308)

function NumberField({ id, label, value, onChange, step, suffix, min, max, ariaLabel, readOnly, hint }: { id: string; label: string; value: number; onChange?: (n: number) => void; step?: number; suffix?: string; min?: number; max?: number; ariaLabel?: string; readOnly?: boolean; hint?: string }) {
  // Estado string interno: permite que el input quede vacío mientras se edita
  // sin que se rellene con un cero forzado (corrige el bug "0100" al borrar "20" y escribir "100").
  const [draft, setDraft] = useState<string>(String(value))
  const [focused, setFocused] = useState(false)

  // Sincroniza el estado externo solo cuando el input NO está enfocado
  // (evita que el reset o el deferred value pisen lo que el usuario está tecleando).
  useEffect(() => {
    if (!focused) setDraft(String(value))
  }, [value, focused])

  const clamp = (n: number) => {
    if (Number.isNaN(n)) return min ?? 0
    let out = n
    if (typeof min === 'number') out = Math.max(min, out)
    if (typeof max === 'number') out = Math.min(max, out)
    return out
  }

  const handleChange = (raw: string) => {
    // Aceptamos vacío, signo, punto decimal — sin forzar Number() inmediatamente
    setDraft(raw)
    if (raw === '' || raw === '-' || raw === '.') return
    const n = Number(raw)
    if (Number.isNaN(n)) return
    // Valida rango sin reescribir el draft (deja que el usuario termine de teclear)
    if (typeof max === 'number' && n > max) return
    if (typeof min === 'number' && n < min) return
    onChange?.(n)
  }

  const handleBlur = () => {
    setFocused(false)
    if (draft === '' || draft === '-' || draft === '.') {
      const fallback = clamp(Number.NaN)
      setDraft(String(fallback))
      onChange?.(fallback)
      return
    }
    const n = Number(draft)
    const c = clamp(n)
    setDraft(String(c))
    onChange?.(c)
  }

  return (
    <div className="space-y-1">
      {label ? <Label htmlFor={id} className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{label}</Label> : null}
      <div className="relative">
        <Input
          id={id}
          type={readOnly ? 'text' : 'number'}
          inputMode="decimal"
          value={readOnly ? value : draft}
          step={step ?? 1}
          min={min}
          max={max}
          readOnly={readOnly}
          tabIndex={readOnly ? -1 : undefined}
          onFocus={() => setFocused(true)}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          className={`h-8 text-sm tabular-nums pr-9 ${readOnly ? 'bg-muted/60 border-dashed text-muted-foreground cursor-not-allowed opacity-70' : ''}`}
          aria-label={!label ? ariaLabel : undefined}
          aria-readonly={readOnly}
        />
        {suffix ? <span className="absolute inset-y-0 right-2 flex items-center text-[10px] text-muted-foreground" aria-hidden="true">{suffix}</span> : null}
      </div>
      {hint ? <p className="text-[10px] text-muted-foreground/80 leading-tight">{hint}</p> : null}
    </div>
  )
}

type FieldTone = 'neutral' | 'ok' | 'warn' | 'bad'

const toneClass: Record<FieldTone, string> = {
  neutral: 'border-border border-dashed bg-muted/60 text-muted-foreground opacity-80',
  ok: 'border-emerald-500/60 border-dashed bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  warn: 'border-amber-500/60 border-dashed bg-amber-500/15 text-amber-700 dark:text-amber-300',
  bad: 'border-red-500/60 border-dashed bg-red-500/15 text-red-700 dark:text-red-300',
}

const toneHint: Record<FieldTone, string> = {
  neutral: '',
  ok: 'text-emerald-700 dark:text-emerald-400',
  warn: 'text-amber-700 dark:text-amber-400',
  bad: 'text-red-700 dark:text-red-400',
}

function ReadOnlyField({ id, label, value, suffix, hint, tone = 'neutral', toneNote }: { id: string; label: string; value: string; suffix?: string; hint?: string; tone?: FieldTone; toneNote?: string }) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id} className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{label}</Label>
      <div className="relative">
        <div id={id} className={`h-8 rounded-md border px-2 pr-9 flex items-center font-mono tabular-nums text-sm cursor-not-allowed transition-colors ${toneClass[tone]}`} aria-readonly="true">{value}</div>
        {suffix ? <span className="absolute inset-y-0 right-2 flex items-center text-[10px] text-muted-foreground" aria-hidden="true">{suffix}</span> : null}
      </div>
      {toneNote ? <p className={`text-[10px] leading-tight ${toneHint[tone]}`}>{toneNote}</p> : null}
      {hint ? <p className="text-[10px] text-muted-foreground/80 leading-tight">{hint}</p> : null}
    </div>
  )
}

// Mini gauge radial compacto para KPIs (porcentaje sobre un máximo)
function MiniGauge({ value, max, color, sublabel }: { value: number; max: number; color: string; sublabel?: string }) {
  const pct = Math.max(0, Math.min(1, value / max))
  const R = 42
  const C = 2 * Math.PI * R
  const dash = C * pct
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={R} stroke="hsl(var(--muted))" strokeWidth={10} fill="none" />
        <circle
          cx="50" cy="50" r={R}
          stroke={color} strokeWidth={10} fill="none" strokeLinecap="round"
          strokeDasharray={`${dash} ${C - dash}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold tabular-nums" style={{ color }}>{(value * 100).toFixed(2)}%</span>
        {sublabel ? <span className="text-[9px] text-muted-foreground">{sublabel}</span> : null}
      </div>
    </div>
  )
}

// Tarjeta KPI con gráfico — sustituye al KpiCard textual
function KpiChartCard({ label, icon: Icon, children, footer }: { label: string; icon: React.ElementType; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">{label}</p>
          <Icon size={14} className="text-muted-foreground" aria-hidden="true" />
        </div>
        <div className="flex items-center justify-center">{children}</div>
        {footer ? <div className="text-[10px] text-muted-foreground text-center">{footer}</div> : null}
      </CardContent>
    </Card>
  )
}


export function UvgFinancialScene() {
  const showInputs = cardVisible('financial.sandboxInputs')
  const showRoi = cardVisible('financial.roi')
  const showRoiAdverse = cardVisible('financial.roiAdverse')
  const showTmar = cardVisible('financial.tmar')

  const [v, setV] = useState<FinancialInputs>(DEFAULTS)
  // useDeferredValue mantiene los inputs responsivos: el usuario teclea contra `v`
  // y los gráficos (recharts pesados) se recalculan con `vDeferred` en idle.
  const vDeferred = useDeferredValue(v)

  const calc = useMemo(() => {
    const v = vDeferred
    // Sección 4 del Excel: costo mensual por rol = salario × FTE
    const roles = [
      { name: 'Coach', salary: v.salaryCoach, fte: v.fteCoach },
      { name: 'Tracker / Tester', salary: v.salaryTracker, fte: v.fteTracker },
      { name: 'Developer Senior 1', salary: v.salarySenior1, fte: v.fteSenior1 },
      { name: 'Developer Senior 2', salary: v.salarySenior2, fte: v.fteSenior2 },
      { name: 'Developer Junior 1', salary: v.salaryJunior1, fte: v.fteJunior1 },
      { name: 'Developer Junior 2', salary: v.salaryJunior2, fte: v.fteJunior2 },
    ].map((r) => ({ ...r, monthly: r.salary * r.fte }))
    const burnRateClient = roles.reduce((acc, r) => acc + r.monthly, 0)

    // Velocidad y sprints (fórmula del Excel)
    const velocity = Math.floor(TOTAL_SP / TOTAL_EPICS)              // 20 SP/sprint
    const sprintsNeeded = Math.ceil(TOTAL_SP / velocity)             // 7 sprints
    const sprintsWithBuffer = Math.ceil(sprintsNeeded * (1 + v.bufferPct))  // 8 sprints
    const durationDays = sprintsNeeded * SPRINT_DAYS                 // 70 días hábiles
    const durationDaysWithBuffer = sprintsWithBuffer * SPRINT_DAYS   // 80 días hábiles ≈ 16 semanas calendario

    // Costos por sprint y equipo
    const costPerSprint = burnRateClient * (SPRINT_DAYS / MONTH_DAYS)
    const teamCostBase = costPerSprint * sprintsNeeded
    const teamCost = costPerSprint * sprintsWithBuffer

    // Desglose BID / ROM (Scrumban) por sprint
    const costPerSprintBid = costPerSprint * v.pbidPct
    const costPerSprintRom = costPerSprint * v.promPct

    // Inversión total
    const investment = teamCost + ADDITIONAL_COSTS_6M + RESERVE_FROZEN

    // Precio cliente (patrón curso: Inversión / (1 − margen), redondeo CEILING a 1 000)
    const exactPrice = v.marginPct < 1 ? investment / (1 - v.marginPct) : investment
    const roundedPrice = Math.ceil(exactPrice / 1000) * 1000
    const roundingDelta = roundedPrice - exactPrice
    const effectiveMargin = roundedPrice > 0 ? (roundedPrice - investment) / roundedPrice : 0

    // Indicadores financieros
    const tmar = v.inflation + v.riskPremium + v.expectedReturn
    const benefit = roundedPrice - investment
    const roi = investment > 0 ? benefit / investment : 0
    const roiAdverse = investment > 0 ? (benefit - RESERVE_FROZEN) / (investment + RESERVE_FROZEN) : 0
    const roiDeltaPp = (roi - tmar) * 100

    // Payback: meses para recuperar la inversión con el flujo mensual estimado
    const paybackMonths = v.monthlyCashflow > 0 ? investment / v.monthlyCashflow : 0

    return {
      roles,
      burnRateClient,
      velocity,
      sprintsNeeded,
      sprintsWithBuffer,
      durationDays,
      durationDaysWithBuffer,
      costPerSprint,
      teamCostBase,
      teamCost,
      costPerSprintBid,
      costPerSprintRom,
      additionals: ADDITIONAL_COSTS_6M,
      reserve: RESERVE_FROZEN,
      investment,
      exactPrice,
      roundedPrice,
      roundingDelta,
      effectiveMargin,
      tmar,
      benefit,
      roi,
      roiAdverse,
      roiDeltaPp,
      paybackMonths,
    }
  }, [vDeferred])

  const set = <K extends keyof FinancialInputs>(k: K) => (n: number) => setV((prev) => ({ ...prev, [k]: n }))
  const reset = () => {
    setV(DEFAULTS)
    toast.success('Valores restablecidos', { description: 'Se restauraron los datos base del modelo financiero.' })
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold tracking-tight">Financiero</h2>
        </div>
        {showInputs && (
          <Button variant="outline" size="sm" onClick={reset} className="gap-2 text-xs">
            <RotateCcw size={14} aria-hidden="true" /> Restablecer valores del Excel
          </Button>
        )}
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiChartCard label="Burn rate mensual" icon={Gauge} footer={`${calc.sprintsWithBuffer} sprints · ${calc.velocity} SP/sprint`}>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={calc.roles.map((r) => ({ name: r.name.replace('Developer ', '').replace('Tracker / Tester', 'Tracker'), q: r.monthly }))}
                margin={{ top: 2, right: 8, left: 0, bottom: 2 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 9 }}
                  stroke="hsl(var(--muted-foreground))"
                  width={56}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(val) => [fmtQ(Number(val)), 'Costo mensual']}
                  contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 11, color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Bar dataKey="q" fill="#0ea5e9" radius={[0, 3, 3, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-lg font-semibold tabular-nums">{fmtQ(calc.burnRateClient)}</p>
        </KpiChartCard>

        {showTmar && (
          <KpiChartCard label="Rentabilidad mínima exigida (TMAR)" icon={Wallet} footer={`Infl. ${(v.inflation * 100).toFixed(1)}% · Riesgo ${(v.riskPremium * 100).toFixed(1)}% · Rend. ${(v.expectedReturn * 100).toFixed(1)}%`}>
            <MiniGauge value={calc.tmar} max={1} color="#d97706" sublabel="TMAR" />
          </KpiChartCard>
        )}

        {showRoi && (
          <KpiChartCard
            label="Rentabilidad esperada"
            icon={TrendingUp}
            footer={calc.roi >= calc.tmar ? `Supera TMAR · +${calc.roiDeltaPp.toFixed(2)} pp` : `Bajo TMAR · −${Math.abs(calc.roiDeltaPp).toFixed(2)} pp`}
          >
            <MiniGauge value={calc.roi} max={Math.max(1, calc.roi * 1.2)} color={calc.roi >= calc.tmar ? '#16a34a' : '#d97706'} sublabel="ROI" />
          </KpiChartCard>
        )}

        {showRoiAdverse && (
          <KpiChartCard label="Rentabilidad adversa" icon={ShieldAlert} footer="con reserva consumida en su totalidad">
            <MiniGauge value={calc.roiAdverse} max={Math.max(1, calc.roi * 1.2)} color="#dc2626" sublabel="ROI adverso" />
          </KpiChartCard>
        )}
      </div>

      {showInputs && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Calculator size={16} aria-hidden="true" /> Modelo financiero
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 1. Parámetros del proyecto */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">1 · Parámetros</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <NumberField id="bufferPct" label="Holgura XP + Scrumban" value={v.bufferPct * 100} onChange={(n) => set('bufferPct')(n / 100)} step={1} suffix="%" min={0} max={50} />
                <NumberField id="marginPct" label="Margen ejecutor" value={v.marginPct * 100} onChange={(n) => set('marginPct')(n / 100)} step={1} suffix="%" min={0} max={90} />
                <NumberField id="pbidPct" label="PBID · Build comprometida" value={v.pbidPct * 100} onChange={(n) => set('pbidPct')(n / 100)} step={1} suffix="%" min={0} max={99} />
                <NumberField id="promPct" label="PROM · Run reactiva" value={v.promPct * 100} onChange={(n) => set('promPct')(n / 100)} step={1} suffix="%" min={0} max={99} />
              </div>
              {Math.abs(v.pbidPct + v.promPct - 1) > 0.001 && (
                <p className="mt-2 text-[10px] text-red-700 dark:text-red-400">
                  PBID + PROM debe sumar 100 % · actualmente suma {fmtPct(v.pbidPct + v.promPct)}
                </p>
              )}
            </div>

            {/* 4. Equipo XP + Scrumban (cliente) */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">2 · Equipo XP + Scrumban (cliente)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wide text-muted-foreground border-b border-border">
                      <th className="text-left font-medium py-1.5 w-[28%]">Rol</th>
                      <th className="text-left font-medium py-1.5 w-[22%]">FTE</th>
                      <th className="text-left font-medium py-1.5 w-[28%]">Salario mensual</th>
                      <th className="text-right font-medium py-1.5">Costo mensual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      ['Coach', 'fteCoach', 'salaryCoach'],
                      ['Tracker / Tester', 'fteTracker', 'salaryTracker'],
                      ['Developer Senior 1', 'fteSenior1', 'salarySenior1'],
                      ['Developer Senior 2', 'fteSenior2', 'salarySenior2'],
                      ['Developer Junior 1', 'fteJunior1', 'salaryJunior1'],
                      ['Developer Junior 2', 'fteJunior2', 'salaryJunior2'],
                    ] as const).map(([name, fteKey, salKey], i) => (
                      <tr key={name} className="border-b border-border/40 last:border-0">
                        <td className="py-1.5 text-muted-foreground">{name}</td>
                        <td className="py-1.5 pr-3"><NumberField id={`fte-${i}`} label="" ariaLabel={`FTE de ${name}`} value={v[fteKey]} onChange={set(fteKey)} step={0.05} min={0} max={1} /></td>
                        <td className="py-1.5 pr-3"><NumberField id={`sal-${i}`} label="" ariaLabel={`Salario mensual de ${name}`} value={v[salKey]} onChange={set(salKey)} step={500} suffix="Q" min={0} max={100000} /></td>
                        <td className="py-1.5 text-right font-mono tabular-nums">{fmtQ(calc.roles[i].monthly)}</td>
                      </tr>
                    ))}
                    <tr className="font-medium">
                      <td className="py-2" colSpan={3}>Suma costo mensual XP cliente · burn rate</td>
                      <td className="py-2 text-right font-mono tabular-nums">{fmtQ(calc.burnRateClient)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. TMAR */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">3 · TMAR · Tasa Mínima Aceptable de Rendimiento</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <NumberField id="inflation" label="Inflación anual" value={v.inflation * 100} onChange={(n) => set('inflation')(n / 100)} step={0.5} suffix="%" min={0} max={50} />
                <NumberField id="riskPremium" label="Prima por riesgo" value={v.riskPremium * 100} onChange={(n) => set('riskPremium')(n / 100)} step={0.5} suffix="%" min={0} max={50} />
                <NumberField id="expectedReturn" label="Rendimiento mínimo esperado" value={v.expectedReturn * 100} onChange={(n) => set('expectedReturn')(n / 100)} step={0.5} suffix="%" min={0} max={50} />
                <ReadOnlyField id="tmar" label="TMAR total (calculada)" value={fmtPct(calc.tmar)} hint="inflación + riesgo + rendimiento" tone={calc.tmar <= 0.5 ? 'ok' : calc.tmar <= 0.8 ? 'warn' : 'bad'} toneNote={calc.tmar <= 0.5 ? 'Exigencia razonable' : calc.tmar <= 0.8 ? 'Exigencia alta · revisa supuestos' : 'TMAR excesiva · supuestos agresivos'} />
              </div>
            </div>

            <Separator />

            {/* 4. Constantes del proyecto */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">4 · Constantes del proyecto</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <ReadOnlyField id="c-epics" label="Épicas" value={String(TOTAL_EPICS)} />
                <ReadOnlyField id="c-stories" label="Historias" value="32" />
                <ReadOnlyField id="c-sp" label="Story points" value={String(TOTAL_SP)} />
                <ReadOnlyField id="c-tasks" label="Tareas" value="133" />
                <ReadOnlyField id="c-sprint-days" label="Días hábiles por sprint" value={String(SPRINT_DAYS)} />
                <ReadOnlyField id="c-month-days" label="Días hábiles / mes" value={String(MONTH_DAYS)} />
                <ReadOnlyField id="c-additionals" label="Adicionales (6 meses)" value={fmtQ(ADDITIONAL_COSTS_6M)} />
                <ReadOnlyField id="c-reserve" label="Reserva (Σ EMV)" value={fmtQ(RESERVE_FROZEN)} />
              </div>
            </div>

            <Separator />

            {/* 5. Cálculo de costos derivados */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">5 · Cálculo de costos</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <ReadOnlyField id="d-burn" label="Burn rate mensual" value={fmtQ(calc.burnRateClient)} hint="Σ (salario × FTE)" />
                <ReadOnlyField id="d-velocity" label="Velocidad (SP / sprint)" value={String(calc.velocity)} hint="FLOOR(SP / épicas)" />
                <ReadOnlyField id="d-sprints" label="Sprints necesarios" value={String(calc.sprintsNeeded)} hint="CEILING(SP / velocidad)" />
                <ReadOnlyField id="d-sprints-buf" label="Sprints con buffer" value={String(calc.sprintsWithBuffer)} hint="CEILING(sprints × (1 + holgura))" tone={calc.sprintsWithBuffer <= 8 ? 'ok' : calc.sprintsWithBuffer <= 10 ? 'warn' : 'bad'} toneNote={calc.sprintsWithBuffer <= 8 ? 'Cabe en el cronograma de 8 sprints' : calc.sprintsWithBuffer <= 10 ? 'Excede el plan original' : 'Excede ampliamente el cronograma'} />
                <ReadOnlyField id="d-duration" label="Duración (días)" value={`${calc.durationDays}`} hint="sprints × días por sprint" />
                <ReadOnlyField id="d-duration-buf" label="Duración con buffer (días)" value={`${calc.durationDaysWithBuffer}`} hint="sprints con buffer × días por sprint" />
                <ReadOnlyField id="d-cost-sprint" label="Costo por sprint" value={fmtQ(calc.costPerSprint)} hint="burn rate × (días sprint / mes)" />
                <ReadOnlyField id="d-cost-team" label="Costo equipo del proyecto" value={fmtQ(calc.teamCostBase)} hint="costo por sprint × sprints" />
                <ReadOnlyField id="d-cost-team-buf" label="Costo equipo (con buffer)" value={fmtQ(calc.teamCost)} hint="costo por sprint × sprints con buffer" />
              </div>
            </div>

            <Separator />

            {/* 6. Desglose BID / ROM */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">6 · BID / ROM</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <ReadOnlyField id="d-bid" label="Costo por sprint BID" value={fmtQ(calc.costPerSprintBid)} hint={`costo por sprint × ${fmtPct(v.pbidPct)}`} />
                <ReadOnlyField id="d-rom" label="Costo por sprint ROM" value={fmtQ(calc.costPerSprintRom)} hint={`costo por sprint × ${fmtPct(v.promPct)}`} />
              </div>
            </div>

            <Separator />

            {/* 7. Precio cliente */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-foreground font-semibold mb-2">7 · Precio cliente</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <ReadOnlyField id="d-investment" label="Inversión total" value={fmtQ(calc.investment)} hint="equipo + adicionales + reserva" />
                <ReadOnlyField id="d-price-exact" label="Precio cliente (exacto)" value={fmtQ(calc.exactPrice)} hint="inversión ÷ (1 − margen)" />
                <ReadOnlyField id="d-price-rounded" label="Precio cliente redondeado" value={fmtQ(calc.roundedPrice)} hint="CEILING(precio, 1 000)" />
                <ReadOnlyField
                  id="d-benefit"
                  label="Beneficio neto"
                  value={fmtQ(calc.benefit)}
                  hint="precio − inversión"
                  tone={calc.benefit > 0 ? 'ok' : calc.benefit === 0 ? 'warn' : 'bad'}
                  toneNote={calc.benefit > 0 ? 'Proyecto genera ganancia' : calc.benefit === 0 ? 'Punto de equilibrio' : 'Proyecto en pérdida'}
                />
                <ReadOnlyField
                  id="d-roi"
                  label="ROI"
                  value={fmtPct(calc.roi)}
                  hint="beneficio / inversión"
                  tone={calc.roi > calc.tmar ? 'ok' : calc.roi === calc.tmar ? 'warn' : 'bad'}
                  toneNote={calc.roi > calc.tmar ? `Supera TMAR · +${calc.roiDeltaPp.toFixed(2)} pp` : calc.roi === calc.tmar ? 'Iguala TMAR exactamente' : `Bajo TMAR · −${Math.abs(calc.roiDeltaPp).toFixed(2)} pp`}
                />
                <ReadOnlyField
                  id="d-margin-eff"
                  label="Margen efectivo"
                  value={fmtPct(calc.effectiveMargin)}
                  hint="(precio − inversión) / precio"
                  tone={calc.effectiveMargin >= v.marginPct ? 'ok' : calc.effectiveMargin >= v.marginPct - 0.02 ? 'warn' : 'bad'}
                  toneNote={calc.effectiveMargin >= v.marginPct ? 'Cumple el margen objetivo' : calc.effectiveMargin >= v.marginPct - 0.02 ? 'Cerca del objetivo' : 'Bajo el margen objetivo'}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {(appConfig.stakeholder === 'sponsor' || appConfig.stakeholder === 'internal') && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2"><TrendingUp size={16} aria-hidden="true" /> Payback period</CardTitle>
            <p className="text-xs text-muted-foreground">El cruce del eje cero marca el mes en que se recupera la inversión</p>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <NumberField id="monthlyCashflow" label="Flujo mensual estimado" value={v.monthlyCashflow} onChange={set('monthlyCashflow')} step={5000} suffix="Q" min={0} max={1000000} />
            </div>
            {(() => {
              const HORIZON_CAP = 60
              const months = Math.min(HORIZON_CAP, Math.max(6, Math.ceil(calc.paybackMonths) + 3))
              const data = Array.from({ length: months + 1 }, (_, m) => {
                const cum = -calc.investment + m * v.monthlyCashflow
                return { month: m, cumulative: cum, recovered: cum >= 0 }
              })
              const paybackFloor = Math.floor(calc.paybackMonths)
              const paybackFrac = calc.paybackMonths - paybackFloor
              const paybackOutOfRange = calc.paybackMonths > HORIZON_CAP
              const tickStep = months <= 12 ? 1 : months <= 24 ? 3 : 6
              const ticks = Array.from({ length: Math.floor(months / tickStep) + 1 }, (_, i) => i * tickStep)
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-2 text-[11px]">
                      <span className="text-muted-foreground">Caja acumulada (Q) por mes desde la entrega</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-rose-500" /> Aún sin recuperar</span>
                        <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-emerald-500" /> Ganancia neta</span>
                      </div>
                    </div>
                    <div className="h-72" role="img" aria-label={`Flujo de caja acumulado por mes. Inversión a recuperar ${fmtQ(calc.investment)}, flujo mensual estimado ${fmtQ(v.monthlyCashflow)}. Payback estimado en ${calc.paybackMonths.toFixed(1)} meses.`}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 16, left: 8, bottom: 24 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                          <XAxis
                            dataKey="month"
                            ticks={ticks}
                            tickFormatter={(m) => `M${m}`}
                            tick={{ fontSize: 11 }}
                            stroke="hsl(var(--muted-foreground))"
                            label={{ value: 'Mes desde la entrega', position: 'insideBottom', offset: -14, fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                          />
                          <YAxis tick={{ fontSize: 11 }} tickFormatter={(val) => `${(val / 1000).toFixed(0)} k`} stroke="hsl(var(--muted-foreground))" width={56} />
                          <Tooltip
                            formatter={(val) => [fmtQ(Number(val)), 'Caja acumulada']}
                            labelFormatter={(m) => `Mes ${m}`}
                            contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12, color: 'hsl(var(--foreground))' }}
                            labelStyle={{ color: 'hsl(var(--foreground))' }}
                            itemStyle={{ color: 'hsl(var(--foreground))' }}
                          />
                          <ReferenceLine y={0} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                          {!paybackOutOfRange && (
                            <ReferenceLine
                              x={calc.paybackMonths}
                              stroke="#0ea5e9"
                              strokeDasharray="4 4"
                              label={{ value: `Payback · M${calc.paybackMonths.toFixed(1)}`, fill: '#0ea5e9', fontSize: 11, position: 'top' }}
                            />
                          )}
                          <Bar dataKey="cumulative" radius={[3, 3, 0, 0]} isAnimationActive={false}>
                            {data.map((d) => (
                              <Cell key={d.month} fill={d.recovered ? '#16a34a' : '#e11d48'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    {paybackOutOfRange && (
                      <p className="mt-2 text-[11px] text-amber-600 dark:text-amber-400">
                        El payback ({calc.paybackMonths.toFixed(1)} meses) supera el horizonte de 60 meses. Aumenta el flujo mensual para verlo en el gráfico.
                      </p>
                    )}
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Inversión a recuperar</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums">{fmtQ(calc.investment)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Flujo mensual estimado</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums">{fmtQ(v.monthlyCashflow)}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Payback period</p>
                      <p className="mt-1 text-2xl font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">
                        {calc.paybackMonths.toFixed(2)} meses
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">≈ {paybackFloor} {paybackFloor === 1 ? 'mes' : 'meses'} y {Math.round(paybackFrac * 30)} días</p>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Inversión {fmtQ(calc.investment)} ÷ flujo mensual {fmtQ(v.monthlyCashflow)} = {calc.paybackMonths.toFixed(2)} meses.</p>
                  </div>
                </div>
              )
            })()}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2"><TrendingUp size={16} aria-hidden="true" /> Composición del precio cliente</CardTitle>
        </CardHeader>
        <CardContent>
          {(() => {
            const slices = [
              { name: 'Costo equipo', value: calc.teamCost, color: '#0ea5e9' },
              { name: 'Adicionales', value: calc.additionals, color: '#14b8a6' },
              { name: 'Reserva', value: calc.reserve, color: '#f59e0b' },
              { name: 'Margen ejecutor', value: calc.exactPrice - calc.investment, color: '#7c3aed' },
              { name: 'Redondeo', value: calc.roundingDelta, color: '#16a34a' },
            ]
            const total = slices.reduce((acc, s) => acc + s.value, 0)
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative h-72" role="img" aria-label={`Composición del precio cliente ${fmtQ(calc.roundedPrice)}: costo equipo ${fmtQ(calc.teamCost)}, adicionales ${fmtQ(calc.additionals)}, reserva ${fmtQ(calc.reserve)}, margen ${fmtQ(calc.exactPrice - calc.investment)}, redondeo ${fmtQ(calc.roundingDelta)}.`}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip
                        formatter={(val, name) => {
                          const n = Number(val)
                          return [`${fmtQ(n)} · ${((n / total) * 100).toFixed(1)} %`, String(name)]
                        }}
                        contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12, color: 'hsl(var(--foreground))' }}
                        labelStyle={{ color: 'hsl(var(--foreground))' }}
                        itemStyle={{ color: 'hsl(var(--foreground))' }}
                        position={{ x: 0, y: 0 }}
                      />
                      <Pie data={slices} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={2} stroke="hsl(var(--card))" strokeWidth={2} isAnimationActive={false}>
                        {slices.map((s) => <Cell key={s.name} fill={s.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Precio cliente</p>
                    <p className="text-2xl font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">{fmtQ(calc.roundedPrice)}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {slices.map((s) => (
                    <div key={s.name} className="flex items-center gap-3 text-sm">
                      <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: s.color }} />
                      <span className="flex-1 text-muted-foreground">{s.name}</span>
                      <span className="font-mono tabular-nums">{fmtQ(s.value)}</span>
                      <span className="font-mono tabular-nums text-[11px] text-muted-foreground w-12 text-right">{((s.value / total) * 100).toFixed(1)} %</span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex-1">Inversión total</span>
                    <span className="font-mono tabular-nums">{fmtQ(calc.investment)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex-1">Precio cliente final</span>
                    <span className="font-mono tabular-nums text-emerald-600 dark:text-emerald-400">{fmtQ(calc.roundedPrice)}</span>
                  </div>
                  <div className="pt-1 text-[11px] text-muted-foreground">
                    Margen efectivo {fmtPct(calc.effectiveMargin)} · Rentabilidad {fmtPct(calc.roi)}
                  </div>
                </div>
              </div>
            )
          })()}
        </CardContent>
      </Card>

      {cardVisible('overview.proposal') && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Receipt size={16} aria-hidden="true" /> Esquema de pagos
            </CardTitle>
            <p className="text-[11px] text-muted-foreground">Distribución contractual 30 / 40 / 30 sobre el precio cliente {fmtQ(calc.roundedPrice)}.</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { phase: 'Anticipo', pct: 0.30, milestone: 'Firma de contrato · arranque Sprint 1', date: '1 de enero de 2027', anchor: 'Inicio' },
                { phase: 'Avance', pct: 0.40, milestone: 'Cierre Sprint 4 · punto medio del proyecto', date: '25 de febrero de 2027', anchor: 'Medio' },
                { phase: 'Cierre', pct: 0.30, milestone: 'Entrega del MVP · Acta de Cierre (cierre Sprint 8)', date: '22 de abril de 2027', anchor: 'Final' },
              ].map((p) => (
                <div key={p.phase} className="rounded-lg border border-border bg-card/60 p-4 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <Badge variant="outline" className="text-[10px]">{p.anchor}</Badge>
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-mono">{(p.pct * 100).toFixed(0)} %</span>
                  </div>
                  <p className="text-2xl font-semibold tabular-nums">{fmtQ(calc.roundedPrice * p.pct)}</p>
                  <Separator />
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Fecha de cobro</p>
                    <p className="text-sm font-medium leading-tight">{p.date}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">{p.milestone}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Toaster richColors position="bottom-right" />
    </section>
  )
}
