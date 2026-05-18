import { ItemShowcase } from '@/components/ItemShowcase'

type Pair = {
  id: string
  name: string
  purpose: string
  fonts: { display: string; body: string; mono: string }
  install: string
}

const pairs: Pair[] = [
  {
    id: 'system-stack',
    name: 'System Stack',
    purpose:
      'Default sin descarga. Tipografia nativa del sistema operativo. Maximo rendimiento, cero requests.',
    fonts: { display: 'system-ui', body: 'system-ui', mono: 'ui-monospace' },
    install: '/* sin descarga: usa la pila nativa del sistema */',
  },
  {
    id: 'inter-jetbrains',
    name: 'Inter + JetBrains Mono',
    purpose:
      'Par moderno default para SaaS, dashboards y herramientas internas. Inter es el sans-serif mas usado en interfaces modernas; JetBrains Mono es excelente para codigo y datos.',
    fonts: { display: 'Inter', body: 'Inter', mono: 'JetBrains Mono' },
    install:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  },
  {
    id: 'geist-stack',
    name: 'Geist Sans + Geist Mono',
    purpose:
      'Clean tech alineado con shadcn y el ecosistema Vercel. Encaja en landing pages tech, herramientas para developers y productos con estetica minimalista contemporanea.',
    fonts: { display: 'Geist', body: 'Geist', mono: 'Geist Mono' },
    install:
      'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
  },
  {
    id: 'editorial-serif',
    name: 'Fraunces + Inter',
    purpose:
      'Estilo editorial con display serif expresivo (Fraunces) y body sans neutro (Inter). Encaja en blogs, landing pages de producto con personalidad y sitios con foco en lectura.',
    fonts: { display: 'Fraunces', body: 'Inter', mono: 'JetBrains Mono' },
    install:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap',
  },
  {
    id: 'signal-techy',
    name: 'Space Grotesk + IBM Plex Mono',
    purpose:
      'Estetica techy y signal-driven con display geometrico (Space Grotesk) y mono industrial (IBM Plex Mono). Candidato fuerte para dashboards de IA, tracking en tiempo real y paneles con overlays.',
    fonts: { display: 'Space Grotesk', body: 'Space Grotesk', mono: 'IBM Plex Mono' },
    install:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap',
  },
  {
    id: 'corporate-sober',
    name: 'Source Sans 3 + Source Code Pro',
    purpose:
      'Corporate clasico con tipografia institucional Adobe Source. Encaja en herramientas empresariales, intranets y productos B2B con identidad sobria y legibilidad maxima en bloques largos.',
    fonts: { display: 'Source Sans 3', body: 'Source Sans 3', mono: 'Source Code Pro' },
    install:
      'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap',
  },
  {
    id: 'mindora-pair',
    name: 'Fredoka + Inter (Mindora)',
    purpose:
      'Par de marca Mindora. Display: Fredoka (geometrico, suave, amigable). Body: Inter como fallback gratuito de Gully (TypeMates, paid). Mono: JetBrains Mono.',
    fonts: { display: 'Fredoka', body: 'Inter', mono: 'JetBrains Mono' },
    install:
      'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  },
]

function buildSnippet(pair: Pair) {
  return `body {
  font-family: '${pair.fonts.body}', sans-serif;
}

h1, h2, h3 {
  font-family: '${pair.fonts.display}', sans-serif;
}

code, pre {
  font-family: '${pair.fonts.mono}', monospace;
}`
}

export function FontsScene() {
  return (
    <section id="fonts" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Fonts</h2>
        <p className="text-sm text-muted-foreground">
          Pares tipograficos curados (display + body + mono). Catalogo en `visual-fonts`.
        </p>
      </header>

      <div className="space-y-4">
        {pairs.map((pair) => (
          <ItemShowcase
            key={pair.id}
            name={pair.name}
            description={`Display: ${pair.fonts.display} · Body: ${pair.fonts.body} · Mono: ${pair.fonts.mono}`}
            snippet={buildSnippet(pair)}
          >
            <div className="w-full space-y-3">
              <h3
                className="text-3xl font-semibold leading-tight"
                style={{ fontFamily: `'${pair.fonts.display}', sans-serif` }}
              >
                {pair.name}
              </h3>
              <p
                className="text-sm leading-relaxed text-muted-foreground"
                style={{ fontFamily: `'${pair.fonts.body}', sans-serif` }}
              >
                {pair.purpose}
              </p>
              <pre
                className="text-xs rounded-md border border-border bg-muted/40 px-3 py-2 overflow-x-auto"
                style={{ fontFamily: `'${pair.fonts.mono}', monospace` }}
              >
                <code>{pair.install}</code>
              </pre>
            </div>
          </ItemShowcase>
        ))}
      </div>
    </section>
  )
}
