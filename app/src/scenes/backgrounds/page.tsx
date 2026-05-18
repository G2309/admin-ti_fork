import { ItemShowcase } from '@/components/ItemShowcase'
import type { CSSProperties } from 'react'

type Bg = {
  id: string
  name: string
  description: string
  style: CSSProperties
  snippet: string
}

const noiseUrl =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")"

const backgrounds: Bg[] = [
  {
    id: 'gradient-radial',
    name: 'Radial gradient',
    description: 'Hero con foco central. Categoria: gradient.',
    style: {
      background:
        'radial-gradient(circle at 50% 30%, hsl(var(--accent)) 0%, hsl(var(--background)) 70%)',
    },
    snippet: `background: radial-gradient(circle at 50% 30%, hsl(var(--accent)) 0%, hsl(var(--background)) 70%);`,
  },
  {
    id: 'gradient-mesh',
    name: 'Mesh gradient',
    description: 'Blobs organicos. Categoria: gradient.',
    style: {
      background: [
        'radial-gradient(at 20% 30%, hsl(var(--accent)) 0%, transparent 50%)',
        'radial-gradient(at 80% 70%, hsl(var(--muted)) 0%, transparent 50%)',
        'radial-gradient(at 60% 20%, hsl(var(--secondary)) 0%, transparent 50%)',
      ].join(', '),
    },
    snippet: `background:
  radial-gradient(at 20% 30%, hsl(var(--accent)) 0%, transparent 50%),
  radial-gradient(at 80% 70%, hsl(var(--muted)) 0%, transparent 50%),
  radial-gradient(at 60% 20%, hsl(var(--secondary)) 0%, transparent 50%);`,
  },
  {
    id: 'gradient-linear',
    name: 'Linear gradient',
    description: 'Direccional simple. Categoria: gradient.',
    style: {
      background:
        'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
    },
    snippet: `background: linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%);`,
  },
  {
    id: 'grid-soft',
    name: 'Soft grid',
    description: 'Grid sutil 32px. Categoria: pattern.',
    style: {
      backgroundImage:
        'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    },
    snippet: `background-image:
  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
background-size: 32px 32px;`,
  },
  {
    id: 'grid-dense',
    name: 'Dense grid',
    description: 'Grid blueprint 16px. Categoria: pattern.',
    style: {
      backgroundImage:
        'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
      backgroundSize: '16px 16px',
    },
    snippet: `background-image:
  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
background-size: 16px 16px;`,
  },
  {
    id: 'dots',
    name: 'Dot pattern',
    description: 'Puntos uniformes. Categoria: pattern.',
    style: {
      backgroundImage:
        'radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
    snippet: `background-image: radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px);
background-size: 20px 20px;`,
  },
  {
    id: 'noise',
    name: 'Noise texture',
    description: 'Granulado SVG inline. Categoria: pattern.',
    style: {
      backgroundColor: 'hsl(var(--muted))',
      backgroundImage: noiseUrl,
    },
    snippet: `background-image: url("data:image/svg+xml,%3Csvg ... feTurbulence ...%3E%3C/svg%3E");`,
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Bandas conicas blureadas. Categoria: atmospheric.',
    style: {
      background:
        'conic-gradient(from 180deg at 50% 50%, hsl(var(--accent)) 0deg, hsl(var(--secondary)) 120deg, hsl(var(--muted)) 240deg, hsl(var(--accent)) 360deg)',
      filter: 'blur(40px)',
      opacity: 0.7,
    },
    snippet: `background: conic-gradient(from 180deg at 50% 50%, hsl(var(--accent)) 0deg, hsl(var(--secondary)) 120deg, hsl(var(--muted)) 240deg, hsl(var(--accent)) 360deg);
filter: blur(60px);
opacity: 0.5;`,
  },
  {
    id: 'stage-backdrop',
    name: 'Stage backdrop',
    description: 'Vignette para camara/tracking. Categoria: atmospheric.',
    style: {
      background:
        'radial-gradient(ellipse at center, hsl(var(--muted)) 0%, hsl(var(--foreground)) 100%)',
    },
    snippet: `background:
  radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(var(--background)/0.6) 100%),
  hsl(var(--foreground));`,
  },
  {
    id: 'glow-spot',
    name: 'Glow spot',
    description: 'Spot luminoso localizado. Categoria: atmospheric.',
    style: {
      background:
        'radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 60%)',
      filter: 'blur(20px)',
    },
    snippet: `background: radial-gradient(circle at 50% 50%, hsl(var(--accent)/0.4) 0%, transparent 60%);
filter: blur(20px);`,
  },
]

/** Galeria de fondos CSS-only del catalogo visual-backgrounds. */
export function BackgroundsScene() {
  return (
    <section id="backgrounds" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Backgrounds</h2>
        <p className="text-sm text-muted-foreground">
          Catalogo en `visual-backgrounds`. CSS puro, sin librerias externas. Compatibles con tokens del tema.
        </p>
      </header>

      <div className="space-y-4">
        {backgrounds.map((bg) => (
          <ItemShowcase
            key={bg.id}
            name={bg.name}
            description={bg.description}
            snippet={bg.snippet}
          >
            <div className="w-full min-h-[200px] rounded-md border border-border" style={bg.style} />
          </ItemShowcase>
        ))}
      </div>
    </section>
  )
}
