import type { ReactNode } from 'react'

type ItemShowcaseProps = {
  name: string
  description?: string
  snippet: string
  children: ReactNode
}

export function ItemShowcase({ name, description, snippet, children }: ItemShowcaseProps) {
  return (
    <article className="rounded-lg border border-border overflow-hidden flex flex-col lg:flex-row">
      <div className="flex-1 p-8 flex items-center justify-center bg-background min-h-[160px]">
        {children}
      </div>
      <div className="lg:w-[400px] border-t lg:border-t-0 lg:border-l border-border p-5 flex flex-col gap-3 bg-muted/30">
        <header>
          <h3 className="text-base font-semibold leading-tight">{name}</h3>
          {description ? (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          ) : null}
        </header>
        <pre className="rounded-md border border-border bg-background p-3 text-[11px] leading-snug overflow-x-auto">
          <code>{snippet}</code>
        </pre>
      </div>
    </article>
  )
}
