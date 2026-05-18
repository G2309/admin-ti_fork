import { Flag, CalendarRange } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { sprintPlan, epics, stories, tasks } from '@/data/uvg-canonical'
import { cardVisible } from '@/lib/env'

const milestoneLabelById: Record<string, string> = {
  H1: 'Inicio de ejecución',
  H2: 'Perfil completo',
  H3: 'Encuesta lista',
  H4: 'Catálogo operativo',
  H5: 'Motor funcional',
  H6: 'Afinidad calibrada',
  H7: 'Panel inicial',
  H8: 'Pruebas de usabilidad',
  H9: 'Entrega final',
}

const priorityTone = {
  Alta: 'border-red-500/40 text-red-700 dark:text-red-300 bg-red-500/10',
  Media: 'border-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-500/10',
  Baja: 'border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10',
} as const

const laneLabel: Record<string, string> = {
  backlog: 'Backlog',
  ready: 'Ready',
  progress: 'In Progress',
  review: 'Review',
  done: 'Done',
  pair: 'Pair',
  tdd: 'TDD',
  refactor: 'Refactor',
  release: 'Release',
}

const maxSp = Math.max(...sprintPlan.map((s) => s.sp))

const DAY_MS = 1000 * 60 * 60 * 24
const SPRINT_START = new Date('2027-01-01').getTime()
const SPRINT_END = new Date('2027-04-23').getTime()

function pctOf(dateIso: string): number {
  const t = new Date(dateIso).getTime()
  return ((t - SPRINT_START) / (SPRINT_END - SPRINT_START)) * 100
}

function epicSpan(epicId: string): { start: number; width: number } | null {
  const sprints = sprintPlan.filter((s) => s.epics.includes(epicId))
  if (sprints.length === 0) return null
  const startPct = pctOf(sprints[0].start)
  const lastEndMs = new Date(sprints[sprints.length - 1].end).getTime() + DAY_MS
  const endPct = ((lastEndMs - SPRINT_START) / (SPRINT_END - SPRINT_START)) * 100
  return { start: startPct, width: Math.max(endPct - startPct, 4) }
}

export function UvgSprintsScene() {
  const showDrilldown = cardVisible('sprints.drilldown')
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-tight">Plan de entrega</h2>
      </header>

      {/* Carrusel de sprints con drilldown a tareas */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <CardTitle className="text-base">Plan de sprints</CardTitle>
            <Badge variant="outline" className="tabular-nums text-[10px]">Velocidad 20 SP / sprint</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Story points distribuidos por épicas · expandir para ver tareas del sprint</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-8 gap-2">
            {sprintPlan.map((s) => (
              <div
                key={s.sprint}
                className="group relative rounded-lg border border-border bg-card p-3 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-muted-foreground">S{s.sprint}</span>
                  <span className="text-[10px] text-muted-foreground tabular-nums">{s.sp} SP</span>
                </div>
                <p className="mt-1.5 text-xs leading-snug font-medium">{s.focus}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {s.epics.map((e) => (
                    <span key={e} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{e}</span>
                  ))}
                </div>
                <Progress value={(s.sp / maxSp) * 100} className="h-1 mt-2" />
                <p className="mt-2 text-[10px] text-muted-foreground tabular-nums">{s.dates}</p>
                {s.milestone && (
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-medium border-t border-border/60 pt-1.5">
                    <Flag size={10} className="text-foreground" />
                    <span className="truncate">{milestoneLabelById[s.milestone] ?? s.milestone}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {showDrilldown && (
          <Accordion type="single" collapsible className="mt-5">
            {sprintPlan.map((s) => {
              const sprintTasks = tasks.filter((t) => t.sprint === s.sprint)
              const sprintStories = stories.filter((h) => h.sprint === s.sprint)
              return (
                <AccordionItem key={s.sprint} value={`s-${s.sprint}`}>
                  <AccordionTrigger className="text-xs py-2.5">
                    <div className="grid w-full items-center gap-3 pr-2" style={{ gridTemplateColumns: '40px minmax(0,1fr) 70px 70px 80px' }}>
                      <span className="font-mono text-muted-foreground">S{s.sprint}</span>
                      <span className="font-medium truncate text-left">{s.focus}</span>
                      <span className="text-[10px] text-muted-foreground tabular-nums text-right">{sprintStories.length} hist</span>
                      <span className="text-[10px] text-muted-foreground tabular-nums text-right">{sprintStories.reduce((acc, h) => acc + h.sp, 0)} SP</span>
                      <span className="text-[10px] text-muted-foreground tabular-nums text-right">{sprintTasks.length} tareas</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-1">
                      {sprintStories.map((h) => {
                        const storyTasks = sprintTasks.filter((t) => t.story === h.id)
                        return (
                          <div key={h.id} className="rounded-md border border-border/60 bg-card">
                            <div className="flex items-center justify-between gap-2 px-2 py-1.5 border-b border-border/60 bg-muted/30">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="font-mono text-[10px] text-muted-foreground">{h.id}</span>
                                <span className="text-[11px] font-medium truncate">{h.name}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className={`text-[9px] px-1.5 py-0.5 rounded border ${priorityTone[h.priority as keyof typeof priorityTone]}`}>{h.priority}</span>
                                <span className="text-[10px] text-muted-foreground tabular-nums">{h.sp} SP</span>
                                <span className="text-[10px] text-muted-foreground">{storyTasks.length} tareas</span>
                              </div>
                            </div>
                            {storyTasks.length > 0 ? (
                              <ul className="divide-y divide-border/40">
                                {storyTasks.map((t) => (
                                  <li key={t.id} className="flex items-center justify-between gap-2 px-2 py-1 text-[11px]">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <span className="font-mono text-[10px] text-muted-foreground">{t.id}</span>
                                      <span className="truncate">{t.name}</span>
                                    </div>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground shrink-0">{laneLabel[t.lane] ?? t.lane}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="px-2 py-1.5 text-[10px] text-muted-foreground/70">Sin tareas trazadas para esta historia.</p>
                            )}
                          </div>
                        )
                      })}
                      {(() => {
                        const orphanTasks = sprintTasks.filter((t) => !t.story || !sprintStories.some((h) => h.id === t.story))
                        if (orphanTasks.length === 0) return null
                        return (
                          <div className="rounded-md border border-dashed border-border/60 bg-card">
                            <div className="px-2 py-1.5 border-b border-border/60 bg-muted/30">
                              <span className="text-[11px] font-medium">Tareas técnicas / sin historia asignada</span>
                            </div>
                            <ul className="divide-y divide-border/40">
                              {orphanTasks.map((t) => (
                                <li key={t.id} className="flex items-center justify-between gap-2 px-2 py-1 text-[11px]">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="font-mono text-[10px] text-muted-foreground">{t.id}</span>
                                    <span className="truncate">{t.name}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {t.story && <span className="font-mono text-[9px] text-muted-foreground">{t.story}</span>}
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{laneLabel[t.lane] ?? t.lane}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })()}
                      {sprintStories.length === 0 && sprintTasks.length === 0 && (
                        <p className="text-[11px] text-muted-foreground/60">Sin historias ni tareas asignadas a este sprint.</p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
          )}
        </CardContent>
      </Card>

      {/* Diagrama de Gantt */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <CalendarRange size={16} /> Diagrama de Gantt
          </CardTitle>
          <p className="text-xs text-muted-foreground">Despliegue temporal de las épicas sobre los ocho sprints del proyecto</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[640px] space-y-2">
              <div className="grid grid-cols-8 gap-px border border-border rounded-md overflow-hidden bg-border">
                {sprintPlan.map((s) => (
                  <div key={s.sprint} className="bg-muted/30 px-2 py-1.5 text-center">
                    <p className="text-[10px] font-mono text-muted-foreground">S{s.sprint}</p>
                    <p className="text-[9px] text-muted-foreground/70 tabular-nums leading-tight">{s.dates}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                {epics.map((ep) => {
                  const span = epicSpan(ep.id)
                  if (!span) return null
                  return (
                    <div key={ep.id} className="relative h-8">
                      <div className="absolute inset-0 grid grid-cols-8 gap-px">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="bg-muted/10 border-r border-border/30 last:border-r-0" />
                        ))}
                      </div>
                      <div
                        className="absolute top-1 bottom-1 rounded-md flex items-center px-2 shadow-sm transition-all hover:shadow-md"
                        style={{
                          left: `${span.start}%`,
                          width: `${span.width}%`,
                          background: ep.color,
                        }}
                        title={`${ep.id} · ${ep.name}`}
                      >
                        <span className="text-[10px] font-mono text-white/90 whitespace-nowrap">{ep.id}</span>
                        <span className="text-[10px] text-white/95 ml-2 truncate">{ep.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-8 gap-px text-[10px] text-muted-foreground mt-2">
                {sprintPlan.map((s) => (
                  <div key={s.sprint} className="px-1 text-center">
                    <span className="tabular-nums">{s.sp} SP</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </section>
  )
}
