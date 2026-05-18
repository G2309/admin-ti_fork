import { Camera, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import { ItemShowcase } from '@/components/ItemShowcase'

const sparkline = [{ v: 12 }, { v: 18 }, { v: 14 }, { v: 22 }, { v: 19 }, { v: 28 }, { v: 24 }]

const detections = [
  { id: 1, x: 12, y: 22, w: 18, h: 30, label: 'Person 0.92' },
  { id: 2, x: 48, y: 35, w: 22, h: 28, label: 'Vehicle 0.87' },
  { id: 3, x: 72, y: 18, w: 14, h: 22, label: 'Person 0.78' },
]

const alerts = [
  { id: 1, severity: 'high', msg: 'Intrusion detected — Zone A', t: '14:32:11' },
  { id: 2, severity: 'mid', msg: 'Vehicle stationary > 5min', t: '14:28:04' },
  { id: 3, severity: 'low', msg: 'Camera 3 reconnected', t: '14:21:55' },
  { id: 4, severity: 'mid', msg: 'Confidence dropped < 0.6', t: '14:18:42' },
  { id: 5, severity: 'low', msg: 'New person registered', t: '14:14:09' },
]

const timelineDots = [12, 28, 35, 47, 58, 64, 71, 82, 89]

const sevColor = {
  high: 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/40',
  mid: 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40',
  low: 'bg-zinc-500/20 text-zinc-700 dark:text-zinc-300 border-zinc-500/40',
} as const

const snippets = {
  camera: `<div className="relative aspect-video rounded-md overflow-hidden bg-muted">
  <img src={frame} className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute top-2 left-2 px-2 py-0.5 text-xs bg-background/80 rounded">
    CAM-01 · Lobby
  </div>
  <div className="absolute bottom-2 right-2 text-xs font-mono">14:32:11</div>
</div>`,
  tracking: `<div className="relative">
  <img src={frame} />
  {detections.map((d) => (
    <div key={d.id} className="absolute border-2 border-foreground"
      style={{ top: \`\${d.y}%\`, left: \`\${d.x}%\`, width: \`\${d.w}%\`, height: \`\${d.h}%\` }}>
      <span className="absolute -top-5 left-0 text-xs">{d.label}</span>
    </div>
  ))}
</div>`,
  kpi: `<div className="grid grid-cols-3 gap-3">
  {kpis.map(k => (
    <Card>
      <p className="text-xs text-muted-foreground">{k.label}</p>
      <p className="text-2xl font-semibold tabular-nums">{k.value}</p>
      <p className="text-xs">{k.delta}</p>
    </Card>
  ))}
</div>`,
  alert: `<ScrollArea className="h-64">
  {alerts.map(a => (
    <div className="flex items-center gap-2 py-2 border-b">
      <Badge variant={a.severity}>{a.severity}</Badge>
      <span className="flex-1 text-sm">{a.msg}</span>
      <span className="text-xs font-mono text-muted-foreground">{a.t}</span>
    </div>
  ))}
</ScrollArea>`,
  timeline: `<div className="relative h-12 rounded-md border bg-muted/30">
  <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
  {events.map(pct => (
    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground"
      style={{ left: \`\${pct}%\` }} />
  ))}
</div>`,
  inference: `<Card className="flex items-center gap-3 p-3">
  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
  <div>
    <p className="text-xs">Inference</p>
    <p className="text-sm font-mono">running · 28 FPS</p>
  </div>
</Card>`,
}

/** Scene de patrones especificos para dashboards de IA tipo ViewBox. */
export function AiDashboardScene() {
  return (
    <section id="ai-dashboard" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">AI Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Patrones en `visual-ai-dashboard`. Composiciones sobre shadcn primitives, sin libs extra.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase
          name="Camera preview tile"
          description="Feed con label de camara y timestamp."
          snippet={snippets.camera}
        >
          <div className="relative w-full max-w-md aspect-video rounded-md overflow-hidden border border-border bg-zinc-900 flex items-center justify-center">
            <Camera size={48} className="text-zinc-600" />
            <div className="absolute top-2 left-2 px-2 py-0.5 text-[11px] font-medium bg-background/80 backdrop-blur rounded">
              CAM-01 · Lobby
            </div>
            <div className="absolute bottom-2 right-2 text-[11px] font-mono text-zinc-300 bg-black/40 px-1.5 rounded">
              14:32:11
            </div>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Tracking overlay"
          description="Bounding boxes con etiqueta sobre frame."
          snippet={snippets.tracking}
        >
          <div className="relative w-full max-w-md aspect-video rounded-md overflow-hidden border border-border bg-zinc-800">
            {detections.map((d) => (
              <div
                key={d.id}
                className="absolute border-2 border-emerald-400/80"
                style={{ top: `${d.y}%`, left: `${d.x}%`, width: `${d.w}%`, height: `${d.h}%` }}
              >
                <span className="absolute -top-5 left-0 text-[10px] font-mono px-1 bg-emerald-400/90 text-black rounded-sm whitespace-nowrap">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="KPI grid"
          description="Grid de metricas con delta y sparkline."
          snippet={snippets.kpi}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {[
              { label: 'Detections', val: '1,284', delta: '+12.4%', up: true },
              { label: 'Avg confidence', val: '0.87', delta: '+0.03', up: true },
              { label: 'Avg latency', val: '42ms', delta: '-3ms', up: false },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-border p-3 space-y-1">
                <p className="text-[11px] text-muted-foreground">{k.label}</p>
                <p className="text-2xl font-semibold tabular-nums">{k.val}</p>
                <p className={`text-[11px] flex items-center gap-1 ${k.up ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {k.delta}
                </p>
                <div className="h-6">
                  <ResponsiveContainer>
                    <LineChart data={sparkline}>
                      <Line dataKey="v" stroke="hsl(var(--foreground))" strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Alert feed"
          description="Lista cronologica con severidad."
          snippet={snippets.alert}
        >
          <div className="w-full max-w-md max-h-64 overflow-y-auto rounded-md border border-border divide-y divide-border">
            {alerts.map((a) => (
              <div key={a.id} className="flex items-center gap-2 px-3 py-2">
                <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border ${sevColor[a.severity as keyof typeof sevColor]}`}>
                  {a.severity}
                </span>
                <span className="flex-1 text-xs">{a.msg}</span>
                <span className="text-[10px] font-mono text-muted-foreground">{a.t}</span>
              </div>
            ))}
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Timeline events"
          description="Marcadores temporales sobre rango horizontal."
          snippet={snippets.timeline}
        >
          <div className="w-full space-y-2">
            <div className="relative h-12 rounded-md border border-border bg-muted/30">
              <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
              {timelineDots.map((pct) => (
                <div
                  key={pct}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>09:00</span><span>12:00</span><span>15:00</span>
            </div>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Inference status"
          description="Indicador de estado del modelo + metrica."
          snippet={snippets.inference}
        >
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex-1">
                <p className="text-[11px] text-muted-foreground">Inference</p>
                <p className="text-sm font-mono">running · 28 FPS</p>
              </div>
              <CheckCircle size={16} className="text-emerald-500" />
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="flex-1">
                <p className="text-[11px] text-muted-foreground">Inference</p>
                <p className="text-sm font-mono">degraded · 12 FPS</p>
              </div>
              <Activity size={16} className="text-amber-500" />
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <div className="flex-1">
                <p className="text-[11px] text-muted-foreground">Inference</p>
                <p className="text-sm font-mono">error · 0 FPS</p>
              </div>
              <AlertTriangle size={16} className="text-red-500" />
            </div>
          </div>
        </ItemShowcase>
      </div>
    </section>
  )
}
