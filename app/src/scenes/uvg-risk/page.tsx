import { ShieldAlert, Flame, Activity, Wallet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { risks, financials, fmtQ, fmtPct } from '@/data/uvg-canonical'
import { cardVisible, isFullExplain } from '@/lib/env'

const probLabels = { 0.2: 'Baja', 0.4: 'Media', 0.7: 'Alta' } as const
const probRows = [0.7, 0.4, 0.2] as const
const impactCols = [
  { key: 'low', label: 'Bajo', range: (i: number) => i < 33606 },
  { key: 'med', label: 'Medio', range: (i: number) => i >= 33606 && i < 67212 },
  { key: 'high', label: 'Alto', range: (i: number) => i >= 67212 && i < 100818 },
  { key: 'crit', label: 'Crítico', range: (i: number) => i >= 100818 },
] as const

function cellRisks(p: number, predicate: (i: number) => boolean) {
  return risks.filter((r) => r.p === p && predicate(r.impact))
}

function cellTone(p: number, label: string) {
  if (label === 'Crítico' && p >= 0.4) return 'bg-red-500/30 border-red-500/40'
  if (label === 'Crítico') return 'bg-red-500/20 border-red-500/30'
  if (label === 'Alto' && p >= 0.4) return 'bg-red-500/25 border-red-500/40'
  if (label === 'Alto') return 'bg-amber-500/25 border-amber-500/30'
  if (label === 'Medio' && p >= 0.4) return 'bg-amber-500/20 border-amber-500/30'
  if (label === 'Medio') return 'bg-amber-500/10 border-amber-500/20'
  return 'bg-emerald-500/10 border-emerald-500/20'
}

const levelBadge = {
  Alto: 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/40',
  Medio: 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40',
  Bajo: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40',
} as const

const responseTone: Record<string, string> = {
  Mitigar: 'border-blue-500/40 text-blue-700 dark:text-blue-300 bg-blue-500/10',
  Evitar: 'border-red-500/40 text-red-700 dark:text-red-300 bg-red-500/10',
  Aceptar: 'border-muted-foreground/40 text-muted-foreground bg-muted/30',
  Transferir: 'border-violet-500/40 text-violet-700 dark:text-violet-300 bg-violet-500/10',
}

function StatCard({ label, value, sub, tone = 'default', icon: Icon }: { label: string; value: string; sub?: string; tone?: 'default' | 'warn' | 'reserve'; icon: React.ElementType }) {
  const toneClass = tone === 'warn' ? 'text-amber-600 dark:text-amber-400' : tone === 'reserve' ? 'text-emerald-600 dark:text-emerald-400' : ''
  const accent = tone === 'warn' ? 'via-amber-500/50' : tone === 'reserve' ? 'via-emerald-500/60' : 'via-foreground/30'
  const ring = tone === 'reserve' ? 'ring-2 ring-emerald-500/20' : ''
  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${ring}`}>
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent} to-transparent`} />
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">{label}</p>
            <p className={`mt-2 text-3xl font-semibold tabular-nums tracking-tight ${toneClass}`}>{value}</p>
            {sub ? <p className="mt-1 text-xs text-muted-foreground">{sub}</p> : null}
          </div>
          <div className="rounded-md border border-border/60 bg-muted/40 p-2 text-muted-foreground transition-colors group-hover:text-foreground">
            <Icon size={16} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function UvgRiskScene() {
  const showMatrix = cardVisible('risk.matrix')
  const showList = cardVisible('risk.list')
  const showReserve = cardVisible('risk.reserve')
  const fullExplain = isFullExplain()

  const sumEmv = risks.reduce((acc, r) => acc + r.emv, 0)
  const highCount = risks.filter((r) => r.level === 'Alto').length

  return (
    <section className="space-y-6">
      <header className="space-y-1 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Riesgos</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline">{risks.length} riesgos</Badge>
          <Badge variant="outline" className="border-red-500/40 text-red-700 dark:text-red-300">{highCount} con nivel Alto</Badge>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Riesgos cuantificados" value={String(risks.length)} sub="catálogo del proyecto" icon={ShieldAlert} />
        <StatCard label="Valor monetario esperado" value={fmtQ(sumEmv)} sub="suma sobre los nueve riesgos" icon={Flame} />
        {showReserve && (
          <StatCard label="Reserva de contingencia" value={fmtQ(financials.reserve)} sub="cubre el valor monetario esperado" icon={Wallet} tone="reserve" />
        )}
        <StatCard label="Rentabilidad bajo escenario adverso" value={fmtPct(financials.roiAdverse)} sub="con la reserva totalmente consumida" tone="warn" icon={Activity} />
      </div>

      {showMatrix && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Mapa de calor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-separate border-spacing-1">
                <thead>
                  <tr>
                    <th className="text-left text-[10px] uppercase tracking-wide text-muted-foreground font-medium w-32">Probabilidad</th>
                    {impactCols.map((c) => (
                      <th key={c.key} className="text-center text-[10px] uppercase tracking-wide text-muted-foreground font-medium py-1">{c.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {probRows.map((p) => (
                    <tr key={p}>
                      <td className="text-muted-foreground py-1 text-xs">
                        {probLabels[p as keyof typeof probLabels]} <span className="font-mono tabular-nums">({p.toFixed(2)})</span>
                      </td>
                      {impactCols.map((c) => {
                        const cell = cellRisks(p, c.range)
                        return (
                          <td key={c.key} className={`rounded-md p-2.5 text-center align-middle border transition-all hover:scale-[1.02] hover:shadow-sm ${cellTone(p, c.label)}`}>
                            {cell.length === 0 ? <span className="text-muted-foreground/50">—</span> : (
                              <div className="flex flex-wrap gap-1 justify-center">
                                {cell.map((r) => (
                                  <span key={r.id} title={`${r.label} · ${fmtQ(r.emv)}`} className="font-mono font-semibold px-1.5 py-0.5 rounded bg-background/60 backdrop-blur cursor-default">{r.id}</span>
                                ))}
                              </div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {showList && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Registro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">ID</TableHead>
                  <TableHead>Riesgo</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Probabilidad</TableHead>
                  <TableHead className="text-right">Impacto</TableHead>
                  <TableHead className="text-right">Valor esperado</TableHead>
                  <TableHead className="text-center">Nivel</TableHead>
                  <TableHead className="text-center">Respuesta</TableHead>
                  <TableHead>Responsable</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {risks.map((r) => (
                  <TableRow key={r.id} className="align-top">
                    <TableCell className="font-mono text-xs">{r.id}</TableCell>
                    <TableCell>
                      <p className="text-sm font-medium leading-tight">{r.label}</p>
                      <p className="text-[11px] text-muted-foreground leading-snug">Disparador: {r.trigger}</p>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{r.cat}</TableCell>
                    <TableCell className="text-right tabular-nums text-xs">{r.p.toFixed(2)}</TableCell>
                    <TableCell className="text-right tabular-nums text-xs">{fmtQ(r.impact)}</TableCell>
                    <TableCell className="text-right tabular-nums text-sm font-medium">{fmtQ(r.emv)}</TableCell>
                    <TableCell className="text-center">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${levelBadge[r.level as keyof typeof levelBadge]}`}>{r.level}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${responseTone[r.response] ?? 'border-border text-muted-foreground'}`}>{r.response}</span>
                    </TableCell>
                    <TableCell className="text-xs">{r.owner}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {fullExplain && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Fórmulas de respaldo</CardTitle>
            <p className="text-xs text-muted-foreground">Visible únicamente en modo explicativo</p>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p><span className="font-mono">Valor monetario esperado = Probabilidad × Impacto</span></p>
            <p><span className="font-mono">Reserva de contingencia = suma de valores monetarios esperados de los riesgos cubiertos</span></p>
            <p><span className="font-mono">Rentabilidad bajo escenario adverso = (Ahorro − Inversión total) ÷ Inversión total</span> con reserva totalmente consumida.</p>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
