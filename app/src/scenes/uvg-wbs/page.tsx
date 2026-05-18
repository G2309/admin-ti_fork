import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { epics, stories, project } from '@/data/uvg-canonical'

type StoryRow = { id: string; epic: string; name: string; sp: number; sprint: number; priority: string }

const storiesByEpic = (epicId: string): StoryRow[] =>
  (stories as StoryRow[]).filter((s) => s.epic === epicId)

function priorityTone(priority: string) {
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
                                  <Badge variant="outline" className={`text-[8px] px-1 py-0 ${priorityTone(s.priority)}`}>{s.priority}</Badge>
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
