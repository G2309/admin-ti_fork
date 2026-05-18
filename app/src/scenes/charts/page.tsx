import {
  Line, LineChart, Area, AreaChart, Bar, BarChart, Pie, PieChart, Cell,
  RadialBar, RadialBarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  Tooltip, Legend, ComposedChart, Scatter, ScatterChart, ZAxis,
} from 'recharts'
import { TrendingUp } from 'lucide-react'
import { ItemShowcase } from '@/components/ItemShowcase'

const timeseries = [
  { t: '09:00', v: 24, w: 18 },
  { t: '10:00', v: 31, w: 22 },
  { t: '11:00', v: 28, w: 25 },
  { t: '12:00', v: 42, w: 30 },
  { t: '13:00', v: 38, w: 28 },
  { t: '14:00', v: 51, w: 36 },
  { t: '15:00', v: 47, w: 33 },
]

const categories = [
  { name: 'Person', count: 142 },
  { name: 'Vehicle', count: 87 },
  { name: 'Bike', count: 34 },
  { name: 'Animal', count: 19 },
]

const stacked = [
  { hour: '09', low: 12, mid: 8, high: 2 },
  { hour: '10', low: 18, mid: 11, high: 4 },
  { hour: '11', low: 14, mid: 9, high: 3 },
  { hour: '12', low: 22, mid: 15, high: 6 },
  { hour: '13', low: 19, mid: 12, high: 5 },
]

const distribution = [
  { name: 'Person', value: 142 },
  { name: 'Vehicle', value: 87 },
  { name: 'Bike', value: 34 },
  { name: 'Other', value: 19 },
]

const radial = [{ name: 'Confidence', value: 76, fill: 'hsl(var(--foreground))' }]

const sparkline = timeseries.map((p) => ({ v: p.v }))

const palette = ['hsl(var(--foreground))', 'hsl(var(--muted-foreground))', 'hsl(var(--accent-foreground))', 'hsl(var(--border))']

const snippets = {
  line: `import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

<LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="t" />
  <YAxis />
  <Line type="monotone" dataKey="v" stroke="hsl(var(--foreground))" />
</LineChart>`,
  area: `import { AreaChart, Area, XAxis, YAxis } from 'recharts'

<AreaChart data={data}>
  <XAxis dataKey="t" />
  <YAxis />
  <Area dataKey="v" fill="hsl(var(--foreground)/0.2)" stroke="hsl(var(--foreground))" />
</AreaChart>`,
  bar: `import { BarChart, Bar, XAxis, YAxis } from 'recharts'

<BarChart data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Bar dataKey="count" fill="hsl(var(--foreground))" />
</BarChart>`,
  stacked: `<BarChart data={data}>
  <XAxis dataKey="hour" />
  <YAxis />
  <Bar dataKey="low" stackId="a" fill="..." />
  <Bar dataKey="mid" stackId="a" fill="..." />
  <Bar dataKey="high" stackId="a" fill="..." />
</BarChart>`,
  pie: `<PieChart>
  <Pie data={data} dataKey="value" outerRadius={60}>
    {data.map((d, i) => <Cell key={i} fill={palette[i]} />)}
  </Pie>
</PieChart>`,
  radial: `<RadialBarChart innerRadius={40} outerRadius={70} data={[{ value: 76 }]}>
  <RadialBar dataKey="value" cornerRadius={6} />
</RadialBarChart>`,
  kpi: `<div className="rounded-lg border p-4">
  <p className="text-xs text-muted-foreground">Detections</p>
  <p className="text-3xl font-semibold">1,284</p>
  <p className="text-xs text-emerald-500">+12.4%</p>
  <Sparkline data={data} />
</div>`,
  sparkline: `<LineChart data={data} width={120} height={32}>
  <Line dataKey="v" stroke="hsl(var(--foreground))" dot={false} />
</LineChart>`,
  dualLine: `<LineChart data={data}>
  <XAxis dataKey="t" />
  <YAxis />
  <Legend />
  <Line dataKey="v" name="Detections" stroke="hsl(var(--foreground))" />
  <Line dataKey="w" name="Confirmed" stroke="hsl(var(--muted-foreground))" />
</LineChart>`,
  dualBar: `<BarChart data={data}>
  <XAxis dataKey="hour" />
  <YAxis />
  <Legend />
  <Bar dataKey="cam1" fill="hsl(var(--foreground))" />
  <Bar dataKey="cam2" fill="hsl(var(--muted-foreground))" />
</BarChart>`,
  scatter: `import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts'

<ScatterChart>
  <XAxis type="number" dataKey="x" name="Latency" />
  <YAxis type="number" dataKey="y" name="Confidence" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Scatter data={data} fill="hsl(var(--primary))" />
</ScatterChart>`,
  areaWeek: `import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'

<AreaChart data={data}>
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))"
    fill="hsl(var(--primary))" fillOpacity={0.2} />
</AreaChart>`,
  combo: `<ComposedChart data={data}>
  <XAxis dataKey="t" />
  <YAxis yAxisId="left" />
  <YAxis yAxisId="right" orientation="right" />
  <Bar yAxisId="left" dataKey="count" fill="hsl(var(--muted-foreground))" />
  <Line yAxisId="right" dataKey="confidence" stroke="hsl(var(--foreground))" />
</ComposedChart>`,
}

const dualBars = [
  { hour: '09', cam1: 12, cam2: 8 },
  { hour: '10', cam1: 18, cam2: 14 },
  { hour: '11', cam1: 15, cam2: 11 },
  { hour: '12', cam1: 24, cam2: 19 },
  { hour: '13', cam1: 21, cam2: 17 },
  { hour: '14', cam1: 28, cam2: 22 },
]

const combo = timeseries.map((p, i) => ({ t: p.t, count: p.v, confidence: 0.7 + (i * 0.03) }))

const scatterData = [
  { x: 5, y: 8 }, { x: 8, y: 11 }, { x: 12, y: 14 }, { x: 15, y: 16 },
  { x: 18, y: 19 }, { x: 22, y: 21 }, { x: 25, y: 24 }, { x: 28, y: 27 },
  { x: 32, y: 30 }, { x: 35, y: 32 }, { x: 38, y: 35 }, { x: 42, y: 38 },
  { x: 45, y: 40 }, { x: 48, y: 43 }, { x: 52, y: 46 }, { x: 55, y: 48 },
  { x: 10, y: 6 }, { x: 14, y: 18 }, { x: 20, y: 15 }, { x: 24, y: 28 },
  { x: 30, y: 22 }, { x: 36, y: 38 }, { x: 40, y: 32 }, { x: 44, y: 45 },
  { x: 50, y: 41 }, { x: 6, y: 10 }, { x: 16, y: 21 }, { x: 26, y: 26 },
  { x: 33, y: 36 }, { x: 47, y: 44 },
]

const weekArea = [
  { day: 'Lun', value: 38 },
  { day: 'Mar', value: 52 },
  { day: 'Mie', value: 47 },
  { day: 'Jue', value: 61 },
  { day: 'Vie', value: 73 },
  { day: 'Sab', value: 45 },
  { day: 'Dom', value: 32 },
]

/** Scene tipo galeria de graficos. Cada ItemShowcase con un tipo del catalogo visual-charts. */
export function ChartsScene() {
  return (
    <section id="charts" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Charts</h2>
        <p className="text-sm text-muted-foreground">
          Tipos curados en `visual-charts`. Datos mock estables. Stack: recharts + shadcn-charts.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase
          name="Line chart"
          description="Series temporales continuas. Tendencias de metricas a lo largo del tiempo."
          snippet={snippets.line}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <LineChart data={timeseries}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="t" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Line type="monotone" dataKey="v" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Area chart"
          description="Volumen acumulado a lo largo del tiempo. Util para flujo de eventos."
          snippet={snippets.area}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <AreaChart data={timeseries}>
                <XAxis dataKey="t" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Area type="monotone" dataKey="v" stroke="hsl(var(--foreground))" fill="hsl(var(--foreground))" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Bar chart"
          description="Comparativo entre categorias discretas (clases detectadas)."
          snippet={snippets.bar}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <BarChart data={categories}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="count" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Stacked bar chart"
          description="Composicion interna por categoria (severidad por hora)."
          snippet={snippets.stacked}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <BarChart data={stacked}>
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="low" stackId="a" fill="hsl(var(--muted-foreground))" />
                <Bar dataKey="mid" stackId="a" fill="hsl(var(--accent-foreground))" />
                <Bar dataKey="high" stackId="a" fill="hsl(var(--foreground))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Pie chart"
          description="Distribucion porcentual de categorias (composicion total)."
          snippet={snippets.pie}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={distribution} dataKey="value" nameKey="name" outerRadius={60} innerRadius={28}>
                  {distribution.map((_, i) => (
                    <Cell key={i} fill={palette[i % palette.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Radial chart"
          description="Gauge de progreso circular. Confianza media del modelo o KPI porcentual."
          snippet={snippets.radial}
        >
          <div className="w-full h-[160px]">
            <ResponsiveContainer>
              <RadialBarChart innerRadius={40} outerRadius={75} data={radial} startAngle={90} endAngle={-270}>
                <RadialBar dataKey="value" cornerRadius={6} fill="hsl(var(--foreground))" background={{ fill: 'hsl(var(--muted))' }} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="KPI card"
          description="Numero grande + delta + sparkline. Patron core de dashboards."
          snippet={snippets.kpi}
        >
          <div className="w-full max-w-xs rounded-lg border border-border p-4 space-y-1">
            <p className="text-xs text-muted-foreground">Detections (last hour)</p>
            <p className="text-3xl font-semibold tabular-nums">1,284</p>
            <p className="text-xs flex items-center gap-1 text-emerald-500">
              <TrendingUp size={12} /> +12.4%
            </p>
            <div className="h-8 mt-2">
              <ResponsiveContainer>
                <LineChart data={sparkline}>
                  <Line dataKey="v" stroke="hsl(var(--foreground))" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Dual line chart"
          description="Dos series temporales en mismo eje. Comparativa detections vs confirmed."
          snippet={snippets.dualLine}
        >
          <div className="w-full h-[180px]">
            <ResponsiveContainer>
              <LineChart data={timeseries}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="t" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="v" name="Detections" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="w" name="Confirmed" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Dual bar grouped"
          description="Dos series de barras agrupadas. Comparativa entre dos camaras por hora."
          snippet={snippets.dualBar}
        >
          <div className="w-full h-[180px]">
            <ResponsiveContainer>
              <BarChart data={dualBars}>
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="cam1" name="CAM-01" fill="hsl(var(--foreground))" radius={[3, 3, 0, 0]} />
                <Bar dataKey="cam2" name="CAM-02" fill="hsl(var(--muted-foreground))" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Combo line + bar"
          description="Bar (volumen) + Line (confidence). Dos ejes Y, dos magnitudes diferentes."
          snippet={snippets.combo}
        >
          <div className="w-full h-[180px]">
            <ResponsiveContainer>
              <ComposedChart data={combo}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="t" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={11} domain={[0, 1]} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar yAxisId="left" dataKey="count" name="Detections" fill="hsl(var(--muted-foreground))" radius={[3, 3, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="confidence" name="Confidence" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Scatter plot"
          description="Correlacion entre dos variables numericas (latency vs confidence). 30 puntos."
          snippet={snippets.scatter}
        >
          <div className="w-full h-[200px]">
            <ResponsiveContainer>
              <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" dataKey="x" name="Latency (ms)" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis type="number" dataKey="y" name="Confidence" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <ZAxis range={[40, 40]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Scatter data={scatterData} fill="hsl(var(--primary))" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Area chart (single series)"
          description="Una serie con relleno semitransparente. Volumen acumulado por dia de la semana."
          snippet={snippets.areaWeek}
        >
          <div className="w-full h-[180px]">
            <ResponsiveContainer>
              <AreaChart data={weekArea}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }} />
                <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Sparkline"
          description="Mini chart sin ejes para embeber en cards, tablas o headers."
          snippet={snippets.sparkline}
        >
          <div className="w-32 h-10">
            <ResponsiveContainer>
              <LineChart data={sparkline}>
                <Line dataKey="v" stroke="hsl(var(--foreground))" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ItemShowcase>
      </div>
    </section>
  )
}
