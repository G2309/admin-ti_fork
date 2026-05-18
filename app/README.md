# Preview app

Galeria visual del stack curado de Syntel-Labs. Renderiza componentes, temas y patrones definidos en las skills `visual-*` de `.claude/skills/`.

No se distribuye como skill: vive en el repo solo para iterar visualmente y, eventualmente, deployarse a `syntel-stack.vercel.app`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3 (default del CLI shadcn actual)
- shadcn/ui con base color `zinc`

## Scripts

```bash
pnpm install
pnpm dev      # servidor local en http://localhost:5173
pnpm build    # compila a dist/
pnpm preview  # sirve el build
```

## Estructura

- `src/scenes/<categoria>/page.tsx` — una scene por categoria visual.
- `src/components/ui/` — primitives shadcn agregados via `npx shadcn@latest add <id>`.
- `src/lib/utils.ts` — helper `cn()` de shadcn.
- `src/index.css` — tema `zinc-default` (definido en `visual-themes`).

## Agregar una scene

1. Crear `src/scenes/<categoria>/page.tsx` exportando un componente.
2. Registrar la entrada en el sidebar de `src/App.tsx`.
3. Si requiere un primitive nuevo: `npx shadcn@latest add <id>` segun el catalogo de `visual-shadcn`.
