import { Clock, Target, AlertTriangle, Users, Layers, Wallet, Receipt } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { project, financials, epics, methodologies, additionalCosts, fmtQ, fmtPct } from '@/data/uvg-canonical'
import { appConfig, cardVisible } from '@/lib/env'

const teamByRole = [
  { role: 'Coach (PO + XP)', count: 1, focus: 'Refinamiento del backlog, priorización, validación de entregables y coaching técnico XP.' },
  { role: 'Tracker / Tester (SM + XP)', count: 1, focus: 'Facilitación de ceremonias, gestión de impedimentos y trazabilidad de pruebas (TDD).' },
  { role: 'Developer Senior', count: 2, focus: 'Arquitectura, integraciones y pair programming con devs junior.' },
  { role: 'Developer Junior', count: 2, focus: 'Implementación de historias bajo pair programming y prácticas XP.' },
] as const

const monthMap: Record<string, string> = {
  ene: 'enero', feb: 'febrero', mar: 'marzo', abr: 'abril', may: 'mayo', jun: 'junio',
  jul: 'julio', ago: 'agosto', sep: 'septiembre', oct: 'octubre', nov: 'noviembre', dic: 'diciembre',
}
function formatLongDate(s: string) {
  const parts = s.split('-')
  if (parts.length !== 3) return s
  const [d, m, y] = parts
  return `${parseInt(d, 10)} de ${monthMap[m.toLowerCase()] ?? m} de ${y}`
}

const profileCopy: Record<string, { eyebrow: string; intro: string }> = {
  client: {
    eyebrow: 'Resumen para Dirección de Admisiones',
    intro: 'Plataforma web que orienta al aspirante hacia la carrera UVG con mayor afinidad a su perfil académico e intereses.',
  },
  sponsor: {
    eyebrow: 'Resumen para Sponsor',
    intro: 'Inversión, rentabilidad y cobertura de riesgo del proyecto vocacional UVG.',
  },
  internal: {
    eyebrow: 'Resumen operativo interno',
    intro: 'Estado consolidado del proyecto: alcance, costo, tiempo y riesgo bajo Scrumban + XP, integrado con PMI / Water-Scrum-Fall.',
  },
  pm: {
    eyebrow: 'Resumen para gestión de proyecto',
    intro: 'Plan de entrega, equipo, épicas y línea de hitos del proyecto vocacional UVG.',
  },
}

export function UvgExecutiveScene() {
  const copy = profileCopy[appConfig.stakeholder] ?? profileCopy.internal
  const selected = methodologies.find((m) => m.id === 'scrumban-xp')
  const priceClient = financials.scrumbanXp.priceRounded
  const teamCost = financials.scrumbanXp.team
  const adicionales = additionalCosts.sixMonthsTotal
  const reserve = financials.reserve
  const investment = financials.scrumbanXp.investment
  const priceExact = investment / (1 - 0.35)
  const roundingDelta = priceClient - priceExact
  const marginEffective = (priceClient - investment) / priceClient
  const reservePct = (reserve / priceClient) * 100
  const roiVsTmarPct = (financials.roi - financials.tmar) * 100
  const isClient = appConfig.stakeholder === 'client'

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{project.name}</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">{copy.intro}</p>
      </header>

      {cardVisible('overview.proposal') && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <CardContent className="p-6">
            <div className={`flex flex-col ${isClient ? 'md:flex-row md:items-stretch md:divide-x md:divide-border' : 'lg:flex-row lg:items-stretch'} gap-6`}>
              <div className={`${isClient ? 'md:flex-1 md:pr-6' : 'lg:w-2/5'} space-y-1`}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Wallet size={14} aria-hidden="true" />
                  <p className="text-[10px] uppercase tracking-[0.12em] font-medium">Inversión</p>
                </div>
                <p className="text-5xl font-semibold tabular-nums tracking-tight">{fmtQ(priceClient)}</p>
                {!isClient && (
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-[10px] border-emerald-500/40 text-emerald-700 dark:text-emerald-300">Margen efectivo {fmtPct(marginEffective)}</Badge>
                  </div>
                )}
              </div>
              {isClient && (
                <div className="md:flex-1 md:pl-6 space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={14} aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-[0.12em] font-medium">Calendario de ejecución</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Inicio</p>
                      <p className="mt-1 text-2xl md:text-3xl font-semibold tabular-nums tracking-tight leading-tight">{formatLongDate(project.executionStart)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Cierre</p>
                      <p className="mt-1 text-2xl md:text-3xl font-semibold tabular-nums tracking-tight leading-tight">{formatLongDate(project.end)}</p>
                    </div>
                  </div>
                </div>
              )}
              {!isClient && (
                <>
                  <Separator orientation="vertical" className="hidden lg:block" />
                  <div className="flex-1 space-y-2">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Composición de la inversión</p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Costo equipo (8 sprints con buffer)</span>
                        <span className="font-mono tabular-nums">{fmtQ(teamCost)}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Costos adicionales (6 meses)</span>
                        <span className="font-mono tabular-nums">{fmtQ(adicionales)}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Reserva de contingencia</span>
                        <span className="font-mono tabular-nums">{fmtQ(reserve)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-baseline font-medium">
                        <span>Inversión total</span>
                        <span className="font-mono tabular-nums">{fmtQ(investment)}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs text-muted-foreground">
                        <span>Precio exacto</span>
                        <span className="font-mono tabular-nums">{fmtQ(priceExact)}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs text-muted-foreground">
                        <span>Redondeo comercial al alza</span>
                        <span className="font-mono tabular-nums">+ {fmtQ(roundingDelta)}</span>
                      </div>
                      <div className="flex justify-between items-baseline font-semibold pt-1 border-t border-border/60">
                        <span>Precio cliente final</span>
                        <span className="font-mono tabular-nums text-emerald-700 dark:text-emerald-300">{fmtQ(priceClient)}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardVisible('overview.profitability') && (
          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">Rentabilidad del proyecto</p>
                <div className="rounded-md border border-border/60 bg-muted/40 p-2 text-muted-foreground"><Target size={16} aria-hidden="true" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">ROI esperado</p>
                  <p className="mt-1 text-3xl font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
                    {fmtPct(financials.roi)}
                    <span className="ml-1 text-xs font-medium align-middle">(+{roiVsTmarPct.toFixed(2)} pp)</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Mínimo exigido (TMAR)</p>
                  <p className="mt-1 text-3xl font-semibold tabular-nums text-muted-foreground">{fmtPct(financials.tmar)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!isClient && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">Calendario de ejecución</p>
              <div className="rounded-md border border-border/60 bg-muted/40 p-2 text-muted-foreground"><Clock size={16} aria-hidden="true" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Inicio</p>
                <p className="mt-1 text-sm font-semibold leading-tight">{formatLongDate(project.executionStart)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Cierre</p>
                <p className="mt-1 text-sm font-semibold leading-tight">{formatLongDate(project.end)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        )}

        {cardVisible('overview.reserve') && (
          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">Reserva de contingencia</p>
                <div className="rounded-md border border-border/60 bg-muted/40 p-2 text-muted-foreground"><AlertTriangle size={16} aria-hidden="true" /></div>
              </div>
              <p className="text-3xl font-semibold tabular-nums">{fmtQ(reserve)}</p>
              <div className="flex justify-end">
                <Badge variant="outline" className="text-[10px] border-amber-500/40 text-amber-700 dark:text-amber-300">{reservePct.toFixed(2)} % del precio</Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {(cardVisible('overview.methodology') || cardVisible('overview.team')) && selected && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Layers size={16} aria-hidden="true" /> Metodología y equipo ejecutor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:divide-x md:divide-border">
              {cardVisible('overview.methodology') && (
                <div className="md:pr-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-muted-foreground" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Metodología</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Marco</p>
                      <p className="mt-1 text-base font-medium">{selected.name}</p>
                    </div>
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Sprints</p>
                      <p className="mt-1 text-base font-medium tabular-nums">{project.sprints}</p>
                    </div>
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Story points</p>
                      <p className="mt-1 text-base font-medium tabular-nums">{project.storyPoints}</p>
                    </div>
                    <div className="rounded-md border border-border bg-card/60 px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Épicas</p>
                      <p className="mt-1 text-base font-medium tabular-nums">{project.epics}</p>
                    </div>
                  </div>
                </div>
              )}
              {cardVisible('overview.team') && (
                <div className="md:pl-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-muted-foreground" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Equipo ejecutor</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {teamByRole.map((t) => (
                      <div key={t.role} className="rounded-md border border-border bg-card/60 px-3 py-3">
                        <div className="flex items-baseline justify-between">
                          <p className="text-sm font-medium">{t.role}</p>
                          <Badge variant="outline" className="tabular-nums">{t.count}</Badge>
                        </div>
                        <p className="mt-1 text-[11px] text-muted-foreground leading-snug">{t.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {cardVisible('overview.proposal') && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Receipt size={16} aria-hidden="true" /> Esquema de pagos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { phase: 'Anticipo', pct: 30, amount: 244200, milestone: 'Firma de contrato · arranque Sprint 1', date: '1 de enero de 2027', anchor: 'Inicio' },
                { phase: 'Avance', pct: 40, amount: 325600, milestone: 'Cierre Sprint 4 · punto medio del proyecto', date: '25 de febrero de 2027', anchor: 'Medio' },
                { phase: 'Cierre', pct: 30, amount: 244200, milestone: 'Entrega del MVP · Acta de Cierre (cierre Sprint 8)', date: '22 de abril de 2027', anchor: 'Final' },
              ].map((p) => (
                <div key={p.phase} className="rounded-lg border border-border bg-card/60 p-4 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <Badge variant="outline" className="text-[10px]">{p.anchor}</Badge>
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-mono">{p.pct} %</span>
                  </div>
                  <p className="text-2xl font-semibold tabular-nums">{fmtQ(p.amount)}</p>
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

      {cardVisible('overview.epics') && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Épicas del producto</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {epics.map((ep) => (
              <div
                key={ep.id}
                className="relative rounded-md border border-border bg-card/60 p-4 transition-all hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-md" style={{ background: ep.color }} />
                <div className="flex items-baseline justify-between gap-2 pt-1">
                  <p className="text-[10px] font-mono text-muted-foreground">{ep.id}</p>
                  <span className="text-[10px] text-muted-foreground tabular-nums">S{ep.sprints[0]}{ep.sprints.length > 1 ? `–S${ep.sprints[ep.sprints.length - 1]}` : ''}</span>
                </div>
                <p className="mt-1 text-sm font-medium leading-tight">{ep.name}</p>
                <p className="mt-1 text-[11px] text-muted-foreground leading-snug">{ep.summary}</p>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                  <Badge variant="outline" className="tabular-nums">{ep.stories} HU</Badge>
                  <Badge variant="outline" className="tabular-nums">{ep.sp} SP</Badge>
                  <Badge variant="outline" className="tabular-nums">{ep.tasks} tareas</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

    </section>
  )
}
