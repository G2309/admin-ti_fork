import { Info } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Props = {
  title: string
  formula?: string
  inputs?: string
  source?: string
  interpretation?: string
}

export function KpiExplain({ title, formula, inputs, source, interpretation }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Cómo se calcula ${title}`}
          className="shrink-0 p-1 rounded-md text-muted-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
        >
          <Info size={13} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 text-xs space-y-2" align="end">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{title}</p>
        {formula ? (
          <p className="font-mono text-[11px] rounded-md border border-border/60 bg-muted/30 px-2 py-1.5">{formula}</p>
        ) : null}
        {inputs ? (
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Variables</p>
            <p>{inputs}</p>
          </div>
        ) : null}
        {interpretation ? (
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Lectura ejecutiva</p>
            <p>{interpretation}</p>
          </div>
        ) : null}
        {source ? (
          <p className="text-[10px] text-muted-foreground/80 pt-1 border-t border-border/40">{source}</p>
        ) : null}
      </PopoverContent>
    </Popover>
  )
}
