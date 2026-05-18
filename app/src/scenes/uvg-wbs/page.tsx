import { useState } from 'react'
import { Layers, Boxes, GitBranch, Sparkles, KanbanSquare, Wallet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { methodologies, epics, stories, sprintPlan, kanbanBoard, financials, fmtQ, project } from '@/data/uvg-canonical'
import { cardVisible, isFullExplain } from '@/lib/env'

const traditionalLayers = [
  { key: 'PMI / PMBOK', desc: 'Marco integrador · 10 áreas de conocimiento · cost baseline · valor ganado.', icon: Layers, accent: 'from-slate-500/30 to-transparent' },
  { key: 'Water-Scrum-Fall', desc: 'Modelo macro · contrato, ejecución ágil y cierre contractual.', icon: Boxes, accent: 'from-blue-500/25 to-transparent' },
] as const

const agileLayers = [
  { key: 'Scrum', desc: 'Capa de cadencia dentro de Scrumban + XP · 8 sprints de 2 semanas · velocidad 20 SP.', icon: GitBranch, accent: 'from-emerald-500/25 to-transparent' },
  { key: 'Kanban', desc: 'Operación continua · WIP limitado por columna · cycle time 6.13 días (con Code Review XP).', icon: KanbanSquare, accent: 'from-cyan-500/25 to-transparent' },
  { key: 'Scrumban', desc: 'Híbrido Build + Run 80 / 20 · margen 35 %.', icon: GitBranch, accent: 'from-violet-500/25 to-transparent' },
  { key: 'XP', desc: 'Capa técnica transversal · 8 prácticas · 7 historias técnicas.', icon: Sparkles, accent: 'from-amber-500/25 to-transparent' },
] as const

const priorityTone = {
  Alta: 'border-red-500/40 text-red-700 dark:text-red-300 bg-red-500/10',
  Media: 'border-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-500/10',
  Baja: 'border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10',
} as const

const inScopeEpics = [
  { id: 'EP01', name: 'Registro y perfiles', desc: 'Creación de cuenta, autenticación y gestión del perfil del aspirante.' },
  { id: 'EP02', name: 'Encuesta vocacional', desc: 'Formulario interactivo de intereses académicos y preferencias vocacionales.' },
  { id: 'EP03', name: 'Carreras y pensum 2026', desc: 'Catálogo digital de pregrado UVG Campus Central validado por Admisiones.' },
  { id: 'EP04', name: 'Motor de recomendación', desc: 'Algoritmo de afinidad que genera un ranking de compatibilidad por carrera.' },
  { id: 'EP05', name: 'Análisis de afinidad', desc: 'Clasifica resultados en categorías comprensibles: alta, media y baja afinidad.' },
  { id: 'EP06', name: 'Panel de resultados', desc: 'Interfaz con el ranking de carreras recomendadas e información de apoyo.' },
]

const outOfScope = [
  { icon: 'link-off', text: 'Integración con ERP o sistema de admisiones de UVG' },
  { icon: 'user-heart', text: 'Orientación psicológica o asesoría por profesional humano' },
  { icon: 'chart-line', text: 'Seguimiento del desempeño académico post-admisión' },
  { icon: 'building', text: 'Cobertura de otros campus o sedes de UVG' },
  { icon: 'device-mobile-off', text: 'Aplicación móvil nativa (iOS / Android)' },
  { icon: 'lock', text: 'SSO institucional o integración con Active Directory' },
  { icon: 'school-off', text: 'Postgrados, técnicos o programas fuera del pensum 2026' },
  { icon: 'report-off', text: 'Módulo de reportes estadísticos para Dirección de Admisiones' },
  { icon: 'settings-off', text: 'Personalización del motor sin asistencia del equipo técnico' },
  { icon: 'calendar-off', text: 'Soporte o mantenimiento post-cierre del contrato 2026–2027' },
]

function LayerCard({ title, items }: { title: string; items: readonly { key: string; desc: string; icon: React.ElementType; accent: string }[] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((l) => (
          <div key={l.key} className="relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:-translate-y-0.5">
            <div className={`absolute inset-0 bg-gradient-to-br ${l.accent} opacity-60 pointer-events-none`} />
            <div className="relative flex items-start gap-3">
              <div className="rounded-md border border-border/60 bg-card p-2 text-foreground">
                <l.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{l.key}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-snug">{l.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function ScopeSection() {
  return (
    <div className="space-y-4">
      {/* En alcance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            En alcance
          </CardTitle>
          <p className="text-xs text-muted-foreground">6 épicas · 32 historias de usuario · 121 story points · 133 tareas</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inScopeEpics.map((ep) => (
              <div key={ep.id} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-300">
                  {ep.id}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-tight">{ep.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">{ep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fuera de alcance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15 text-red-700 dark:text-red-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </span>
            Fuera de alcance
          </CardTitle>
          <p className="text-xs text-muted-foreground">El sistema informa y recomienda, pero no ejecuta acciones institucionales ni extiende su cobertura más allá del MVP.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outOfScope.map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-700 dark:text-red-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <p className="text-sm text-muted-foreground leading-snug pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

type StoryRow = { id: string; epic: string; name: string; sp: number; sprint: number; priority: string }

const storiesByEpic = (epicId: string): StoryRow[] =>
  (stories as StoryRow[]).filter((s) => s.epic === epicId)

function wbsPriorityTone(priority: string) {
  if (priority === 'Alta') return 'border-emerald-500/50 text-emerald-700 dark:text-emerald-300'
  if (priority === 'Media') return 'border-amber-500/50 text-amber-700 dark:text-amber-300'
  return 'border-border text-muted-foreground'
}

export function UvgWbsScene() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(epics.map((e) => [e.id, true])),
  )

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-tight">Estructura de Desglose del Trabajo</h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-md border border-border bg-card/60 px-3 py-3">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Nivel 1 · Producto</p>
          <p className="mt-1 text-base font-medium leading-tight">{project.name}</p>
        </div>
        <div className="rounded-md border border-border bg-card/60 px-3 py-3">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Nivel 2 · Épicas</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums">{epics.length}</p>
        </div>
        <div className="rounded-md border border-border bg-card/60 px-3 py-3">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Nivel 3 · Historias</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums">{project.stories}</p>
        </div>
        <div className="rounded-md border border-border bg-card/60 px-3 py-3">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Story Points totales</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums">{project.storyPoints}</p>
        </div>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <div className="min-w-[1100px] py-4">
            {/* Nivel 1: Producto */}
            <div className="flex justify-center">
              <div className="relative rounded-lg border-2 border-foreground/80 bg-foreground text-background px-5 py-3 shadow-sm text-center min-w-[260px]">
                <p className="text-[10px] uppercase tracking-wide opacity-70">Producto</p>
                <p className="text-sm font-semibold leading-tight mt-0.5">{project.name}</p>
              </div>
            </div>

            {/* Conector vertical Nivel 1 → 2 */}
            <div className="flex justify-center">
              <div className="w-px h-6 bg-border" />
            </div>

            {/* Conector horizontal entre épicas */}
            <div className="relative">
              <div
                className="absolute top-0 h-px bg-border"
                style={{
                  left: `calc((100% / ${epics.length}) / 2)`,
                  right: `calc((100% / ${epics.length}) / 2)`,
                }}
              />
            </div>

            {/* Nivel 2: Épicas */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: `repeat(${epics.length}, minmax(0, 1fr))` }}
            >
              {epics.map((ep) => {
                const isOpen = expanded[ep.id]
                const epicStories = storiesByEpic(ep.id)
                const sprintRange = ep.sprints.length > 1
                  ? `S${ep.sprints[0]}–S${ep.sprints[ep.sprints.length - 1]}`
                  : `S${ep.sprints[0]}`
                return (
                  <div key={ep.id} className="flex flex-col items-center">
                    {/* Bajada desde la barra horizontal */}
                    <div className="w-px h-6 bg-border" />

                    {/* Tarjeta épica */}
                    <button
                      type="button"
                      onClick={() => toggle(ep.id)}
                      className={`w-full rounded-lg border-2 px-3 py-2.5 text-center transition-all hover:shadow-md ${isOpen ? 'shadow-md' : ''}`}
                      style={{ borderColor: ep.color, background: `${ep.color}14` }}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ background: ep.color }}
                          aria-hidden
                        />
                        <span className="text-[10px] font-mono text-muted-foreground">{ep.id}</span>
                      </div>
                      <p className="text-xs font-semibold leading-tight mt-1">{ep.name}</p>
                      <div className="mt-1.5 flex items-center justify-center gap-1 flex-wrap">
                        <Badge variant="outline" className="tabular-nums text-[9px] px-1.5 py-0">{sprintRange}</Badge>
                        <Badge variant="outline" className="tabular-nums text-[9px] px-1.5 py-0">{ep.stories} HU</Badge>
                        <Badge variant="outline" className="tabular-nums text-[9px] px-1.5 py-0">{ep.sp} SP</Badge>
                      </div>
                    </button>

                    {/* Conector y nivel 3: Historias */}
                    {isOpen && (
                      <>
                        <div className="w-px h-4 bg-border" />
                        <div className="w-full flex flex-col gap-2">
                          {epicStories.map((s, idx) => (
                            <div key={s.id} className="relative flex flex-col items-center">
                              {idx > 0 && <div className="w-px h-2 bg-border" />}
                              <div className="w-full rounded-md border border-border bg-card px-2.5 py-1.5 text-center shadow-sm">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-[9px] font-mono text-muted-foreground">{s.id}</span>
                                  <Badge variant="outline" className={`text-[8px] px-1 py-0 ${wbsPriorityTone(s.priority)}`}>{s.priority}</Badge>
                                </div>
                                <p className="text-[11px] font-medium leading-tight mt-0.5">{s.name}</p>
                                <p className="text-[9px] text-muted-foreground tabular-nums mt-0.5">S{s.sprint} · {s.sp} SP</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

    </section>
  )
}

export function UvgMethodologyScene() {
  const showComparison = cardVisible('methodology.comparison')
  const showKanban = cardVisible('methodology.kanban')
  const fullExplain = isFullExplain()

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-tight">Metodología</h2>
        <p className="text-sm text-muted-foreground">
          Enfoque tradicional integrador (PMI y Water-Scrum-Fall) sobre un núcleo ágil. Metodología elegida: Scrumban + XP.
        </p>
      </header>

      <ScopeSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LayerCard title="Enfoque tradicional · marco integrador" items={traditionalLayers} />
        <LayerCard title="Enfoque ágil · ejecución" items={agileLayers} />
      </div>

      {showComparison && (
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><Wallet size={16} /> Presupuesto por enfoque</CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const res = financials.reserve
              const rows = methodologies.map((m) => {
                const margin = m.price - m.investment
                const rounding = m.total - m.price
                const additionals = Math.max(0, m.investment - m.base - res)
                return {
                  name: m.name,
                  selected: m.selected,
                  teamCost: m.base,
                  additionals,
                  reserve: res,
                  margin,
                  rounding,
                  investment: m.investment,
                  total: m.total,
                }
              })
              const maxTotal = Math.max(...rows.map((r) => r.total))
              const palette = {
                teamCost: '#475569',
                additionals: '#94a3b8',
                reserve: '#334155',
                margin: '#7c3aed',
                rounding: '#0ea5e9',
              }
              const segDefs: Array<{ key: 'teamCost' | 'additionals' | 'reserve' | 'margin' | 'rounding'; label: string }> = [
                { key: 'teamCost', label: 'Costo equipo' },
                { key: 'additionals', label: 'Adicionales' },
                { key: 'reserve', label: 'Reserva' },
                { key: 'margin', label: 'Margen' },
                { key: 'rounding', label: 'Redondeo' },
              ]
              return (
                <div className="space-y-4">
                  <div className="space-y-3" role="img" aria-label="Comparación de precio cliente por metodología con sus 5 componentes: costo equipo, adicionales, reserva, margen y redondeo.">
                    {rows.map((r) => (
                      <div key={r.name} className="grid grid-cols-12 items-center gap-3">
                        <div className="col-span-12 md:col-span-2">
                          <p className={`text-[12px] leading-tight ${r.selected ? 'font-semibold' : 'font-medium'}`}>{r.name}</p>
                          {r.selected && <p className="text-[10px] text-emerald-700 dark:text-emerald-300">Seleccionada</p>}
                        </div>
                        <div className="col-span-12 md:col-span-7">
                          <div className="relative h-7 w-full">
                            <div className="absolute inset-y-0 left-0 flex rounded" style={{ width: `${(r.total / maxTotal) * 100}%` }}>
                              {segDefs.map((s, idx) => {
                                const v = r[s.key]
                                if (v <= 0) return null
                                const pct = (v / r.total) * 100
                                const isFirst = idx === 0
                                const isLast = idx === segDefs.length - 1 || segDefs.slice(idx + 1).every((next) => r[next.key] <= 0)
                                return (
                                  <div
                                    key={s.key}
                                    className="group relative flex items-center justify-center text-[10px] font-medium text-white cursor-default"
                                    style={{
                                      width: `${pct}%`,
                                      background: palette[s.key],
                                      borderTopLeftRadius: isFirst ? 4 : 0,
                                      borderBottomLeftRadius: isFirst ? 4 : 0,
                                      borderTopRightRadius: isLast ? 4 : 0,
                                      borderBottomRightRadius: isLast ? 4 : 0,
                                    }}
                                  >
                                    <span>{pct >= 4 ? `${pct.toFixed(0)} %` : ''}</span>
                                    <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 hidden -translate-x-1/2 group-hover:block">
                                      <div className="whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 text-[11px] text-popover-foreground shadow-md">
                                        <p className="font-medium text-foreground">{s.label}</p>
                                        <p className="font-mono tabular-nums text-foreground">{fmtQ(v)}</p>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          <div className="mt-1 text-[10px] text-muted-foreground font-mono tabular-nums">
                            <span>Inversión {fmtQ(r.investment)}</span>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 text-right">
                          <p className="text-[13px] font-semibold tabular-nums">{fmtQ(r.total)}</p>
                          <p className="text-[10px] text-muted-foreground">Precio cliente</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground pt-2 border-t border-border/60">
                    {segDefs.map((s) => (
                      <span key={s.key} className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-sm" style={{ background: palette[s.key] }} aria-hidden="true" />
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })()}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Backlog y tableros Scrum</CardTitle>
          <p className="text-xs text-muted-foreground">Historias por sprint con la épica de cada historia · estado al inicio de cada iteración</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {epics.map((ep) => (
              <span
                key={ep.id}
                className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-card px-2 py-1 text-[11px]"
                title={ep.name}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: ep.color }} />
                <span className="font-mono text-[10px] text-muted-foreground">{ep.id}</span>
                <span className="font-medium leading-tight">{ep.name}</span>
                <span className="text-[10px] text-muted-foreground tabular-nums">{ep.stories}h · {ep.sp} SP</span>
              </span>
            ))}
          </div>

          <Accordion type="single" collapsible className="space-y-1">
            {sprintPlan.map((s) => {
              const sprintStories = stories.filter((h) => h.sprint === s.sprint)
              return (
                <AccordionItem key={s.sprint} value={`s${s.sprint}`} className="border border-border/60 rounded-md px-3">
                  <AccordionTrigger className="hover:no-underline py-2.5">
                    <div className="flex items-center justify-between gap-3 w-full pr-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-[10px] text-muted-foreground">Sprint {s.sprint}</span>
                        <span className="text-sm font-medium text-left">{s.focus}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] tabular-nums text-muted-foreground">{s.sp} SP</span>
                        <span className="text-[10px] tabular-nums text-muted-foreground">{s.dates}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {sprintStories.map((h) => {
                        const ep = epics.find((e) => e.id === h.epic)
                        return (
                          <li key={h.id} className="flex items-center justify-between gap-2 text-[11px] border border-border/60 rounded px-2 py-1.5 bg-card">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="font-mono text-[10px] text-muted-foreground">{h.id.split('-')[1] ?? h.id}</span>
                              <span className="truncate">{h.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {ep && (
                                <span
                                  className="inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[9px] font-mono"
                                  style={{ borderColor: `${ep.color}66`, background: `${ep.color}14`, color: ep.color }}
                                  title={ep.name}
                                >
                                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ep.color }} />
                                  {ep.id}
                                </span>
                              )}
                              <span className={`text-[9px] px-1.5 py-0.5 rounded border ${priorityTone[h.priority as keyof typeof priorityTone]}`}>{h.priority}</span>
                              <span className="text-[10px] text-muted-foreground tabular-nums">{h.sp} SP</span>
                            </div>
                          </li>
                        )
                      })}
                      {sprintStories.length === 0 && <li className="text-[11px] text-muted-foreground/60">Sin historias</li>}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </CardContent>
      </Card>

      {showKanban && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <KanbanSquare size={16} /> Tablero operativo
            </CardTitle>
            <p className="text-xs text-muted-foreground">Estado inicial al arranque del proyecto · muestra ilustrativa de historias en backlog</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 items-start">
              {kanbanBoard.columns.map((c) => {
                const cards = c.id === 'backlog' ? stories.slice(0, 3) : []
                const description = c.id === 'backlog' ? 'Historias pendientes sin compromiso de sprint.'
                  : c.id === 'todo' ? 'Comprometidas para el sprint en curso.'
                  : c.id === 'progress' ? 'En desarrollo activo por el equipo.'
                  : c.id === 'testing' ? 'Verificación funcional y automatizada.'
                  : c.id === 'codeReview' ? 'Pair review XP: revisión técnica por pares antes de aceptación.'
                  : c.id === 'review' ? 'Revisión final del PO antes del DoD.'
                  : c.id === 'done' ? 'Aceptadas según definición de hecho.'
                  : ''
                return (
                  <div
                    key={c.id}
                    className="rounded-md border overflow-hidden min-h-[110px]"
                    style={{ borderColor: c.color, background: `${c.color}1a` }}
                  >
                    <div
                      className="flex items-center justify-between px-2 py-1.5"
                      style={{ background: c.color, color: '#fff' }}
                    >
                      <span className="text-[10px] uppercase tracking-wide font-semibold">{c.label}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] tabular-nums opacity-90">{cards.length}</span>
                        {c.wip != null && (
                          <span className="text-[9px] rounded border border-white/40 bg-white/15 px-1.5 py-0 leading-4">WIP {c.wip}</span>
                        )}
                      </div>
                    </div>
                    <div className="p-2">
                    <p className="text-[10px] text-muted-foreground leading-snug mb-2">{description}</p>
                    {cards.length > 0 && (
                      <ul className="space-y-1">
                        {cards.map((h) => {
                          const ep = epics.find((e) => e.id === h.epic)
                          return (
                            <li
                              key={h.id}
                              className="rounded border bg-card/80 px-1.5 py-1 text-[10px] leading-tight"
                              style={{ borderColor: ep ? `${ep.color}66` : undefined, borderLeftWidth: 3, borderLeftColor: ep?.color }}
                              title={ep ? `${ep.id} · ${ep.name}` : undefined}
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-mono text-[9px] text-muted-foreground">{h.id.split('-')[1] ?? h.id}</span>
                                <span className="font-mono text-[9px] tabular-nums text-muted-foreground">{h.sp}</span>
                              </div>
                              <p className="truncate">{h.name}</p>
                              <div className="mt-0.5 flex items-center justify-between gap-1">
                                {ep && <span className="font-mono text-[8px]" style={{ color: ep.color }}>{ep.id}</span>}
                                <span className="text-[8px] text-muted-foreground">S{h.sprint}</span>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
              <span className="font-medium text-foreground mr-1">Leyenda de estados:</span>
              {kanbanBoard.statusLegend.map((s) => (
                <span key={s.id} className="inline-flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                  {s.label}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {fullExplain && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Fórmulas formales del marco PMI</CardTitle>
            <p className="text-xs text-muted-foreground">Visible únicamente en modo explicativo</p>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p><span className="font-mono">Cost Performance Index (CPI) = Earned Value ÷ Actual Cost</span></p>
            <p><span className="font-mono">Schedule Performance Index (SPI) = Earned Value ÷ Planned Value</span></p>
            <p><span className="font-mono">Estimate At Completion (EAC) = Budget At Completion ÷ CPI</span></p>
            <p><span className="font-mono">Valor monetario esperado por riesgo = Probabilidad × Impacto</span></p>
            <p><span className="font-mono">Reserva de contingencia = suma de valores monetarios esperados</span></p>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
