import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  HoverCard, HoverCardContent, HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'

const snippets = {
  alert: `<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Your model finished training.</AlertDescription>
</Alert>`,
  toast: `import { Toaster, toast } from 'sonner'

<Toaster richColors />
<Button onClick={() => toast.success('Saved')}>Show toast</Button>`,
  skeleton: `<Skeleton className="h-4 w-32" />
<Skeleton className="h-4 w-48" />`,
  progress: `<Progress value={progress} />`,
  badge: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
  tooltip: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger>
    <TooltipContent>Helpful hint</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  hover: `<HoverCard>
  <HoverCardTrigger>@user</HoverCardTrigger>
  <HoverCardContent>Bio + meta</HoverCardContent>
</HoverCard>`,
}

/** Scene de primitives de feedback shadcn: alerts, toasts, skeletons, progress, badges, tooltips. */
export function FeedbackScene() {
  const [progress, setProgress] = useState(63)

  return (
    <section id="feedback" className="space-y-8">
      <Toaster richColors position="bottom-right" />
      <header>
        <h2 className="text-2xl font-semibold">Feedback</h2>
        <p className="text-sm text-muted-foreground">
          Primitives de feedback: alerts, toasts (sonner), skeletons, progress, badges, tooltips, hover-cards.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Alert" description="Mensaje persistente en flujo. Variants default y destructive." snippet={snippets.alert}>
          <div className="w-full max-w-md space-y-2">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Model deployed</AlertTitle>
              <AlertDescription>Latest version is now serving traffic.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Inference error</AlertTitle>
              <AlertDescription>Camera 3 dropped from the cluster.</AlertDescription>
            </Alert>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Toast (sonner)" description="Notificacion efimera con variants." snippet={snippets.toast}>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => toast.success('Configuration saved')}>Success</Button>
            <Button size="sm" variant="destructive" onClick={() => toast.error('Connection lost')}>Error</Button>
            <Button size="sm" variant="outline" onClick={() => toast.info('Sync in progress', { description: '12 of 48 records' })}>Info</Button>
            <Button size="sm" variant="secondary" onClick={() => toast('Plain message')}>Default</Button>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Skeleton" description="Placeholder durante fetch." snippet={snippets.skeleton}>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-20 w-full rounded-md" />
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Progress"
          description={`Barra de progreso determinada. Valor: ${progress}%`}
          snippet={snippets.progress}
        >
          <div className="w-full max-w-sm space-y-3">
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 10))}>-10</Button>
              <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10</Button>
            </div>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Badge" description="Etiquetas inline para estado, categoria o conteo." snippet={snippets.badge}>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Tooltip" description="Hint corto al hover/focus." snippet={snippets.tooltip}>
          <TooltipProvider>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon"><Info size={14} /></Button></TooltipTrigger>
                <TooltipContent>Quick info</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
                <TooltipContent>Helpful tooltip text</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ItemShowcase>

        <ItemShowcase name="Hover card" description="Preview rico al hover. Util para perfiles, links o entidades." snippet={snippets.hover}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@viewbox</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="space-y-2">
                <p className="text-sm font-semibold">ViewBox AI</p>
                <p className="text-xs text-muted-foreground">
                  Real-time tracking dashboard. 1284 detections in the last hour.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ItemShowcase>
      </div>
    </section>
  )
}
