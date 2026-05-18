import { CheckCircle2, Calculator, ShieldCheck, Clock, RefreshCw, Wallet, Users, ShieldAlert, TrendingUp, CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Area, AreaChart } from 'recharts'
import { methodologies, additionalCosts, financials, risks, evmPlan, fmtQ, fmtPct } from '@/data/uvg-canonical'
import { appConfig } from '@/lib/env'

const selectedMethodology = 'scrumban-xp'

export function UvgCostsScene() {
  const selected = methodologies.find((m) => m.id === selectedMethodology)

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-tight">Costos</h2>
      </header>

      {appConfig.stakeholder === 'client' ? (
        <>
          <Card className="overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Metodología seleccionada</p>
                </div>
                <p className="text-2xl font-semibold">{selected?.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Combinamos ciclos planeados de dos semanas con un flujo continuo para atender ajustes sin frenar el avance del proyecto.
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Inversión base del contrato</p>
                <p className="text-3xl md:text-4xl font-semibold tabular-nums">{fmtQ(selected?.total ?? 0)}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <ShieldCheck size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm font-medium mt-2">Compromisos por escrito</p>
              <p className="text-xs text-muted-foreground mt-1">Tiempos de respuesta y disponibilidad acordados en el contrato.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <RefreshCw size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm font-medium mt-2">Ajustes sin frenar el avance</p>
              <p className="text-xs text-muted-foreground mt-1">Cada ciclo absorbe una porción de cambios y soporte sin renegociar el plan.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <Clock size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm font-medium mt-2">Entregas verificables cada dos semanas</p>
              <p className="text-xs text-muted-foreground mt-1">Resultados tangibles al final de cada ciclo, no al final del proyecto.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <Wallet size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm font-medium mt-2">Soporte incluido en cada ciclo</p>
              <p className="text-xs text-muted-foreground mt-1">Cada ciclo reserva un 20 % de capacidad para ajustes y soporte sin costo extra.</p>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
                Acuerdo de servicio
              </CardTitle>
              <p className="text-xs text-muted-foreground">Compromisos contractuales que protegen su inversión durante los ocho ciclos del proyecto.</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-md border border-border bg-card/60 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Respuesta a su solicitud</p>
                  <p className="mt-1 text-lg font-semibold">≤ 24 horas hábiles</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Acuse de recibo y plan de atención.</p>
                </div>
                <div className="rounded-md border border-border bg-card/60 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Tiempo de entrega</p>
                  <p className="mt-1 text-lg font-semibold">≤ 8 días hábiles</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Desde la solicitud hasta la entrega.</p>
                </div>
                <div className="rounded-md border border-border bg-card/60 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Disponibilidad de pruebas</p>
                  <p className="mt-1 text-lg font-semibold">≥ 80 % mensual</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Ambiente accesible para revisión.</p>
                </div>
                <div className="rounded-md border border-border bg-card/60 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Capacidad para ajustes</p>
                  <p className="mt-1 text-lg font-semibold">20 % por ciclo </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Soporte y correcciones incluidas.</p>
                </div>
              </div>

              <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-4">
                <p className="text-sm font-medium">Importante sobre el costo</p>
                <p className="text-xs text-muted-foreground mt-1">
                  La inversión base cubre el alcance comprometido y un 20 % de capacidad por ciclo para ajustes y soporte. Las solicitudes que excedan ese margen tienen un cargo adicional:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs">
                  <li className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-1.5">
                    <span>Solicitud adicional fuera del margen de soporte del ciclo </span>
                    <span className="font-semibold tabular-nums whitespace-nowrap">Q 3,000.00 por solicitud</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span>Funcionalidades nuevas no contempladas</span>
                    <span className="font-medium text-muted-foreground whitespace-nowrap">Se cotizan aparte</span>
                  </li>
                </ul>
                <p className="text-[11px] text-muted-foreground mt-2">
                  Cada solicitud queda registrada y se le avisa antes de aplicar cualquier cargo.
                </p>
              </div>

              <div className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-4">
                <p className="text-sm font-medium">Si nosotros incumplimos</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Penalización del 5 % del valor total del contrato por cada ciclo de retraso atribuible a Strategic IT Project Solutions.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 p-4">
                <p className="text-sm font-medium">Forma de pago</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Esquema 30 / 40 / 30: 30 % al inicio del proyecto, 40 % al cierre del ciclo medio (validación parcial) y 30 % en la entrega final. Plazo: cinco días hábiles después de cada hito.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><RefreshCw size={16} /> Comparativa con las alternativas evaluadas</CardTitle>
              <p className="text-xs text-muted-foreground">Cuatro marcos analizados; {selected?.name} fue la opción que mejor equilibra precio, plazo, prácticas técnicas y protección.</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {methodologies.map((m) => {
                  const isSelected = m.id === selectedMethodology
                  const pros: Record<string, { protection: string; speed: string; risk: string }> = {
                    scrum: { protection: 'Limitada', speed: 'Buena', risk: 'Cambios fuera de ciclo quedan pendientes' },
                    kanban: { protection: 'Alta para soporte', speed: 'Sin fechas fijas', risk: 'Sin compromiso de cierre' },
                    scrumban: { protection: 'Alta', speed: 'Buena', risk: 'Equilibrado sin prácticas técnicas' },
                    'scrumban-xp': { protection: 'Alta', speed: 'Muy buena', risk: 'Equilibrio óptimo · holgura reducida 10 %' },
                  }
                  const p = pros[m.id]
                  return (
                    <div
                      key={m.id}
                      className={`rounded-lg border p-4 ${isSelected ? 'border-emerald-500 bg-emerald-500/5 shadow-sm' : 'border-border bg-card'}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-base font-semibold">{m.name}</p>
                        {isSelected ? (
                          <Badge variant="outline" className="border-emerald-500/50 text-emerald-700 dark:text-emerald-300 text-[10px]">Escogida</Badge>
                        ) : (
                          <Badge variant="outline" className="text-muted-foreground text-[10px]">Validada</Badge>
                        )}
                      </div>
                      <p className="text-xl font-semibold tabular-nums mt-2">{fmtQ(m.total)}</p>
                      <p className="text-[11px] text-muted-foreground">{m.duration}</p>
                      <div className="mt-3 space-y-1.5 text-xs">
                        <div className="flex justify-between gap-2"><span className="text-muted-foreground">Protección ante cambios</span><span className="font-medium text-right">{p.protection}</span></div>
                        <div className="flex justify-between gap-2"><span className="text-muted-foreground">Ritmo de entrega</span><span className="font-medium text-right">{p.speed}</span></div>
                        <div className="flex justify-between gap-2"><span className="text-muted-foreground">Limitante</span><span className="font-medium text-right">{p.risk}</span></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* a) Resumen de la metodología elegida */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <Users size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-2">Equipo (6 roles)</p>
              <p className="text-xl font-semibold tabular-nums mt-1">{fmtQ(financials.burnRateClient)}<span className="text-xs text-muted-foreground font-normal"> /mes</span></p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Burn rate cliente · 8 sprints</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <Calculator size={18} className="text-muted-foreground" />
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-2">Costos adicionales</p>
              <p className="text-xl font-semibold tabular-nums mt-1">{fmtQ(financials.additionalCosts6m)}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Insumos externos · 6 meses</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <ShieldAlert size={18} className="text-amber-600 dark:text-amber-400" />
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-2">Reserva (Σ EMV)</p>
              <p className="text-xl font-semibold tabular-nums mt-1">{fmtQ(financials.reserve)}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">9 riesgos cuantificados</p>
            </div>
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4">
              <TrendingUp size={18} className="text-emerald-600 dark:text-emerald-400" />
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-2">Inversión total</p>
              <p className="text-xl font-semibold tabular-nums mt-1">{fmtQ(financials.scrumbanXp.investment)}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Precio cliente {fmtQ(financials.scrumbanXp.priceRounded)}</p>
            </div>
          </div>

          {/* Esquema de pagos + plan de inversión por sprint */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <CreditCard size={16} /> Esquema de pagos y plan de inversión por ciclo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                {(() => {
                  const milestones: Record<string, { date: string; milestone: string }> = {
                    Inicio: { date: '1 de enero de 2027', milestone: 'Firma de contrato · arranque ciclo 1' },
                    Medio: { date: '25 de febrero de 2027', milestone: 'Cierre ciclo 4 · punto medio del proyecto' },
                    Cierre: { date: '22 de abril de 2027', milestone: 'Entrega del MVP · Acta de Cierre (cierre ciclo 8)' },
                    Final: { date: '22 de abril de 2027', milestone: 'Entrega del MVP · Acta de Cierre (cierre ciclo 8)' },
                  }
                  return (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/4 text-center">Fase</TableHead>
                          <TableHead className="w-1/4 text-center">Porcentaje</TableHead>
                          <TableHead className="w-1/4 text-center">Monto</TableHead>
                          <TableHead className="w-1/4 text-center">Fecha de cobro</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {financials.payments.map((p) => {
                          const m = milestones[p.phase] ?? { date: '—', milestone: '—' }
                          return (
                            <TableRow key={p.phase} className="transition-colors hover:bg-muted/50">
                              <TableCell className="text-center font-medium">{p.phase}</TableCell>
                              <TableCell className="text-center tabular-nums">{p.pct} %</TableCell>
                              <TableCell className="text-center tabular-nums">{fmtQ(p.amount)}</TableCell>
                              <TableCell className="text-center text-xs">{m.date}</TableCell>
                            </TableRow>
                          )
                        })}
                        <TableRow className="bg-muted/30">
                          <TableCell className="text-center font-semibold">Total</TableCell>
                          <TableCell className="text-center font-semibold">100 %</TableCell>
                          <TableCell className="text-center font-semibold tabular-nums">{fmtQ(financials.scrumbanXp.priceRounded)}</TableCell>
                          <TableCell />
                        </TableRow>
                      </TableBody>
                    </Table>
                  )
                })()}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-2">Inversión acumulada planificada por ciclo</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={evmPlan} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="pvGradientCosts" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity={0.25} />
                          <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="sprint" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                      <YAxis tick={{ fontSize: 11 }} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} stroke="hsl(var(--muted-foreground))" />
                      <Tooltip formatter={(val) => fmtQ(Number(val))} contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12 }} />
                      <Area type="monotone" dataKey="pv" stroke="hsl(var(--foreground))" strokeWidth={2} fill="url(#pvGradientCosts)" dot={{ r: 3, strokeWidth: 1 }} activeDot={{ r: 5 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* b) Cadena de cálculo del precio — Sankey compacto */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><TrendingUp size={16} /> Cadena de cálculo del precio cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(() => {
                const team = financials.scrumbanXp.team
                const add = financials.additionalCosts6m
                const res = financials.reserve
                const investment = financials.scrumbanXp.investment
                const priceExact = financials.scrumbanXp.price
                const priceRounded = financials.scrumbanXp.priceRounded
                const margin = priceExact - investment
                const rounding = priceRounded - priceExact
                const total = priceRounded
                const fmtPctVal = (n: number, d: number) => d > 0 ? `${((n / d) * 100).toFixed(1)} %` : '0 %'

                const investmentParts = [
                  { name: 'Costo equipo', value: team, color: '#64748b', desc: 'Sueldos del equipo XP por 8 ciclos' },
                  { name: 'Adicionales', value: add, color: '#94a3b8', desc: 'Licencias, infra y soporte (6 meses)' },
                  { name: 'Reserva', value: res, color: '#334155', desc: 'Σ EMV: contingencia de riesgos' },
                ]
                const priceParts = [
                  { name: 'Inversión', value: investment, color: '#475569', desc: 'Costo de entregar el proyecto' },
                  { name: 'Margen', value: margin, color: '#7c3aed', desc: 'Utilidad del ejecutor' },
                  { name: 'Redondeo', value: rounding, color: '#0ea5e9', desc: 'Ajuste al múltiplo de Q 10 000' },
                ]

                const W = 912
                const H = 323
                const barW = 133
                const padTop = 26
                const padBottom = 30
                const leftX = 142
                const rightX = W - leftX - barW
                const usableH = H - padTop - padBottom
                const scale = usableH / total

                type Seg = { name: string; value: number; color: string }
                const left: Seg[] = [
                  { name: 'Costo equipo', value: team, color: '#64748b' },
                  { name: 'Adicionales', value: add, color: '#94a3b8' },
                  { name: 'Reserva', value: res, color: '#334155' },
                ]
                const right: Seg[] = [
                  { name: 'Inversión', value: investment, color: '#475569' },
                  { name: 'Margen', value: margin, color: '#7c3aed' },
                  { name: 'Redondeo', value: rounding, color: '#0ea5e9' },
                ]

                const leftTopOffset = padTop + (total - investment) * scale
                let acc = leftTopOffset
                const leftRects = left.map((s) => {
                  const h = s.value * scale
                  const r = { ...s, y: acc, h }
                  acc += h
                  return r
                })
                acc = padTop
                const rightRects = right.map((s) => {
                  const h = s.value * scale
                  const r = { ...s, y: acc, h }
                  acc += h
                  return r
                })

                const investmentLink = {
                  x1: leftX + barW,
                  y1Top: leftRects[0].y,
                  y1Bot: leftRects[2].y + leftRects[2].h,
                  x2: rightX,
                  y2Top: rightRects[0].y,
                  y2Bot: rightRects[0].y + rightRects[0].h,
                }

                return (
                  <div className="space-y-4">
                  <div
                    role="img"
                    aria-label={`Diagrama de flujo: costo equipo ${fmtQ(team)}, adicionales ${fmtQ(add)} y reserva ${fmtQ(res)} suman la inversión ${fmtQ(investment)}. A esa inversión se le añade margen ${fmtQ(margin)} y redondeo ${fmtQ(rounding)} para llegar al precio cliente ${fmtQ(priceRounded)}.`}
                    className="mx-auto"
                    style={{ maxWidth: '100%' }}
                  >
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="flow-investment" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#334155" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#475569" stopOpacity="0.7" />
                        </linearGradient>
                      </defs>

                      <path
                        d={`M ${investmentLink.x1} ${investmentLink.y1Top} L ${investmentLink.x2} ${investmentLink.y2Top} L ${investmentLink.x2} ${investmentLink.y2Bot} L ${investmentLink.x1} ${investmentLink.y1Bot} Z`}
                        fill="url(#flow-investment)"
                      />

                      <text x={leftX + barW / 2} y={padTop - 10} textAnchor="middle" fontSize="14" fill="hsl(var(--muted-foreground))">Inversión</text>
                      <text x={leftX + barW / 2} y={H - 8} textAnchor="middle" fontSize="15" fontWeight="600" fill="hsl(var(--foreground))">{fmtQ(investment)}</text>
                      {leftRects.map((s) => (
                        <g key={s.name}>
                          <rect x={leftX} y={s.y} width={barW} height={s.h} fill={s.color} rx={3} />
                          {s.h > 22 && (
                            <text x={leftX + barW / 2} y={s.y + s.h / 2 + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff">
                              {fmtPctVal(s.value, investment)}
                            </text>
                          )}
                          <text x={leftX - 10} y={s.y + s.h / 2 + 5} textAnchor="end" fontSize="13" fill="hsl(var(--muted-foreground))">{s.name}</text>
                        </g>
                      ))}

                      <text x={rightX + barW / 2} y={padTop - 10} textAnchor="middle" fontSize="14" fill="hsl(var(--muted-foreground))">Precio cliente</text>
                      <text x={rightX + barW / 2} y={H - 8} textAnchor="middle" fontSize="15" fontWeight="600" fill="#15803d">{fmtQ(priceRounded)}</text>
                      {rightRects.map((s) => (
                        <g key={s.name}>
                          <rect x={rightX} y={s.y} width={barW} height={s.h} fill={s.color} rx={3} />
                          {s.h > 22 && (
                            <text x={rightX + barW / 2} y={s.y + s.h / 2 + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff">
                              {fmtPctVal(s.value, total)}
                            </text>
                          )}
                          <text x={rightX + barW + 10} y={s.y + s.h / 2 + 5} textAnchor="start" fontSize="13" fill="hsl(var(--muted-foreground))">
                            {s.name}{s.h < 18 ? ` · ${fmtPctVal(s.value, total)}` : ''}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Componentes de la inversión</p>
                      {investmentParts.map((s) => (
                        <div key={s.name} className="flex gap-2 rounded-md border border-border bg-card/60 px-3 py-2">
                          <span className="mt-1 h-3 w-3 shrink-0 rounded-sm" style={{ background: s.color }} aria-hidden="true" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="text-[11px] font-medium leading-tight">{s.name}</p>
                              <p className="text-[11px] font-mono tabular-nums">{fmtQ(s.value)} <span className="text-muted-foreground">· {fmtPctVal(s.value, investment)}</span></p>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-snug">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Componentes del precio cliente</p>
                      {priceParts.map((s) => (
                        <div key={s.name} className="flex gap-2 rounded-md border border-border bg-card/60 px-3 py-2">
                          <span className="mt-1 h-3 w-3 shrink-0 rounded-sm" style={{ background: s.color }} aria-hidden="true" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="text-[11px] font-medium leading-tight">{s.name}</p>
                              <p className="text-[11px] font-mono tabular-nums">{fmtQ(s.value)} <span className="text-muted-foreground">· {fmtPctVal(s.value, total)}</span></p>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-snug">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Inversión total</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums">{fmtQ(investment)}</p>
                      <p className="text-[11px] text-muted-foreground mt-1">Equipo + adicionales + reserva</p>
                    </div>
                    <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Precio cliente final</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">{fmtQ(priceRounded)}</p>
                      <p className="text-[11px] text-muted-foreground mt-1">Exacto {fmtQ(priceExact)} · redondeo + {fmtQ(rounding)}</p>
                    </div>
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Indicadores</p>
                      <div className="mt-1 flex gap-2 flex-wrap">
                        <Badge variant="outline">Margen 35 %</Badge>
                        <Badge variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300">ROI {fmtPct(financials.scrumbanXp.roi)}</Badge>
                      </div>
                    </div>
                  </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>

          {/* c) Cliente vs Interno — cálculo XP + Scrumban */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Users size={16} /> Cálculo de costos
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const client = { label: 'Cliente', badge: 'PO 1.0 FTE', color: '#10b981', burnRate: 72308, costPerSprint: 36154, teamCostBuffer: 289232, investment: 528871.80, priceRounded: 814000, benefit: 285128.20 }
                const internal = { label: 'Interno', badge: 'PO 0.7 FTE', color: '#0ea5e9', burnRate: 67808, costPerSprint: 33904, teamCostBuffer: 271232, investment: 510871.80, priceRounded: 786000, benefit: 275128.20 }
                const metrics = [
                  { key: 'burnRate', label: 'Burn rate mensual', help: 'Sueldos del equipo por mes' },
                  { key: 'costPerSprint', label: 'Costo por sprint', help: 'Burn rate × (días sprint / días mes)' },
                  { key: 'teamCostBuffer', label: 'Costo equipo (con buffer)', help: '8 sprints incluyendo 10 % de holgura' },
                  { key: 'investment', label: 'Inversión total', help: 'Equipo + adicionales + reserva' },
                  { key: 'priceRounded', label: 'Precio cliente', help: 'Inversión ÷ (1 − margen), redondeado' },
                  { key: 'benefit', label: 'Beneficio neto', help: 'Precio − inversión' },
                ] as const

                return (
                  <div className="space-y-5">
                    {/* Encabezado de escenarios */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Cliente</p>
                          <Badge variant="outline" className="text-[10px]">PO 1.0 FTE</Badge>
                        </div>
                        <p className="mt-1 text-[11px] text-muted-foreground">Base contractual: Product Owner a tiempo completo.</p>
                      </div>
                      <div className="rounded-lg border border-sky-500/40 bg-sky-500/5 p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">Interno</p>
                          <Badge variant="outline" className="text-[10px]">PO 0.7 FTE</Badge>
                        </div>
                        <p className="mt-1 text-[11px] text-muted-foreground">Costo real para Strategic IT (Coach 0.7 FTE).</p>
                      </div>
                      <div className="rounded-lg border border-border bg-card/60 p-3">
                        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Constantes en ambos</p>
                        <p className="mt-1 text-[11px]">Velocidad 20 SP/sprint · 8 sprints (con buffer) · 80 días · BID/ROM 80/20 · margen 35 % · ROI 53.85 %</p>
                      </div>
                    </div>

                    {/* Tarjetas KPI con barra delta */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {metrics.map((m) => {
                        const vc = client[m.key]
                        const vi = internal[m.key]
                        const delta = vc - vi
                        const deltaPct = vi > 0 ? (delta / vi) * 100 : 0
                        const maxPair = Math.max(vc, vi) || 1
                        const wc = (vc / maxPair) * 100
                        const wi = (vi / maxPair) * 100
                        return (
                          <div key={m.key} className="rounded-lg border border-border bg-card/60 p-3 space-y-2">
                            <div>
                              <p className="text-[11px] font-semibold leading-tight">{m.label}</p>
                              <p className="text-[10px] text-muted-foreground leading-snug">{m.help}</p>
                            </div>
                            <div className="space-y-1.5">
                              <div>
                                <div className="flex items-baseline justify-between">
                                  <span className="text-[10px] uppercase tracking-wide" style={{ color: client.color }}>Cliente</span>
                                  <span className="text-[13px] font-mono tabular-nums font-semibold">{fmtQ(vc)}</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-muted/50 overflow-hidden">
                                  <div className="h-full rounded-full" style={{ width: `${wc}%`, background: client.color }} />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-baseline justify-between">
                                  <span className="text-[10px] uppercase tracking-wide" style={{ color: internal.color }}>Interno</span>
                                  <span className="text-[12px] font-mono tabular-nums text-muted-foreground">{fmtQ(vi)}</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-muted/50 overflow-hidden">
                                  <div className="h-full rounded-full" style={{ width: `${wi}%`, background: internal.color, opacity: 0.75 }} />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-1 border-t border-border/60">
                              <span className="text-[10px] text-muted-foreground">Δ Cliente − Interno</span>
                              <span className={`text-[11px] font-mono tabular-nums font-medium ${delta >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                                {delta >= 0 ? '+' : ''}{fmtQ(delta)} ({deltaPct >= 0 ? '+' : ''}{deltaPct.toFixed(1)} %)
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                  </div>
                )
              })()}
            </CardContent>
          </Card>

          {/* d) Costos adicionales — plan medio vs largo */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Calculator size={16} /> Costos adicionales del proyecto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { label: 'Plan medio', items: additionalCosts.sixMonths, total: additionalCosts.sixMonthsTotal, accent: 'border-emerald-500/40 bg-emerald-500/5', badge: 'Vigente del contrato' },
                  { label: 'Plan largo', items: additionalCosts.twelveMonths, total: additionalCosts.twelveMonthsTotal, accent: 'border-border bg-muted/20', badge: 'Proyección a un año' },
                ].map((plan) => (
                  <div key={plan.label} className={`rounded-lg border p-4 space-y-3 ${plan.accent}`}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{plan.label}</p>
                      <Badge variant="outline" className="text-[10px]">{plan.badge}</Badge>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Concepto</TableHead>
                          <TableHead>Detalle</TableHead>
                          <TableHead className="text-right">Monto</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {plan.items.map((it) => (
                          <TableRow key={it.item}>
                            <TableCell className="font-medium text-xs">{it.item}</TableCell>
                            <TableCell className="text-xs text-muted-foreground">{it.detail}</TableCell>
                            <TableCell className="text-right tabular-nums text-xs">{fmtQ(it.amount)}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="bg-muted/30">
                          <TableCell colSpan={2} className="font-semibold text-xs">Total</TableCell>
                          <TableCell className="text-right font-semibold tabular-nums text-xs">{fmtQ(plan.total)}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* e) Reserva de contingencia — tabla de 9 riesgos */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldAlert size={16} className="text-amber-600 dark:text-amber-400" /> Reserva de contingencia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Riesgo</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Prob.</TableHead>
                    <TableHead className="text-right">Impacto (meses)</TableHead>
                    <TableHead className="text-right">Impacto (Q)</TableHead>
                    <TableHead className="text-right">EMV (Q)</TableHead>
                    <TableHead className="text-center">Nivel</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {risks.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-mono text-xs">{r.id}</TableCell>
                      <TableCell className="text-xs">{r.label}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{r.cat}</TableCell>
                      <TableCell className="text-right tabular-nums text-xs">{fmtPct(r.p)}</TableCell>
                      <TableCell className="text-right tabular-nums text-xs">{r.months}</TableCell>
                      <TableCell className="text-right tabular-nums text-xs">{fmtQ(r.impact)}</TableCell>
                      <TableCell className="text-right tabular-nums text-xs font-medium">{fmtQ(r.emv)}</TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="outline"
                          className={
                            r.level === 'Alto'
                              ? 'border-rose-500/50 text-rose-700 dark:text-rose-300 text-[10px]'
                              : r.level === 'Medio'
                              ? 'border-amber-500/50 text-amber-700 dark:text-amber-300 text-[10px]'
                              : 'text-muted-foreground text-[10px]'
                          }
                        >
                          {r.level}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/30">
                    <TableCell colSpan={6} className="font-semibold">Σ EMV total</TableCell>
                    <TableCell className="text-right font-semibold tabular-nums">{fmtQ(financials.reserve)}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}

    </section>
  )
}
