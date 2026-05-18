import { ChevronRight } from 'lucide-react'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'

const snippets = {
  card: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>`,
  separator: `<Separator />
<Separator orientation="vertical" />`,
  tabs: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="cameras">Cameras</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="cameras">...</TabsContent>
</Tabs>`,
  accordion: `<Accordion type="single" collapsible>
  <AccordionItem value="a">
    <AccordionTrigger>Section A</AccordionTrigger>
    <AccordionContent>Content A</AccordionContent>
  </AccordionItem>
</Accordion>`,
  breadcrumb: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Cameras</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  scroll: `<ScrollArea className="h-48 w-64 rounded-md border p-3">
  {items.map(i => <p>{i}</p>)}
</ScrollArea>`,
  resizable: `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Right</ResizablePanel>
</ResizablePanelGroup>`,
}

const longList = Array.from({ length: 20 }, (_, i) => `Event #${i + 1} — 14:${String(32 - i).padStart(2, '0')}:11`)

/** Scene de primitives de layout shadcn. */
export function LayoutScene() {
  return (
    <section id="layout" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Layout</h2>
        <p className="text-sm text-muted-foreground">
          Primitives de layout: cards, tabs, accordion, breadcrumb, separator, scroll-area, resizable.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Card" description="Contenedor con header, body y footer." snippet={snippets.card}>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>CAM-01</CardTitle>
              <CardDescription>Lobby · 1080p · 30 FPS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Last detection 2 minutes ago. Confidence 0.92.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">View feed</Button>
              <Button size="sm" variant="outline">Settings</Button>
            </CardFooter>
          </Card>
        </ItemShowcase>

        <ItemShowcase name="Separator" description="Divider horizontal o vertical." snippet={snippets.separator}>
          <div className="w-full max-w-md space-y-2">
            <div className="text-sm">Section A</div>
            <Separator />
            <div className="text-sm">Section B</div>
            <div className="flex h-8 items-center gap-3 text-sm">
              <span>Inline</span>
              <Separator orientation="vertical" />
              <span>Vertical</span>
              <Separator orientation="vertical" />
              <span>Divider</span>
            </div>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Tabs" description="Cambio entre vistas relacionadas." snippet={snippets.tabs}>
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cameras">Cameras</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-3 text-sm text-muted-foreground">
              1284 detections in the last hour across 5 cameras.
            </TabsContent>
            <TabsContent value="cameras" className="mt-3 text-sm text-muted-foreground">
              5 active cameras, 0 disconnected.
            </TabsContent>
            <TabsContent value="alerts" className="mt-3 text-sm text-muted-foreground">
              3 high-severity alerts pending review.
            </TabsContent>
          </Tabs>
        </ItemShowcase>

        <ItemShowcase name="Accordion" description="Secciones expandibles independientes o exclusivas." snippet={snippets.accordion}>
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="model">
              <AccordionTrigger>Model configuration</AccordionTrigger>
              <AccordionContent>YOLOv8 with custom head, 640x640 input.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="streaming">
              <AccordionTrigger>Streaming</AccordionTrigger>
              <AccordionContent>RTSP ingest with HLS fallback.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="alerts">
              <AccordionTrigger>Alert routing</AccordionTrigger>
              <AccordionContent>Webhook + email digest every 15 minutes.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </ItemShowcase>

        <ItemShowcase name="Breadcrumb" description="Indicador de jerarquia y navegacion ascendente." snippet={snippets.breadcrumb}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight size={12} /></BreadcrumbSeparator>
              <BreadcrumbItem><BreadcrumbLink href="#">Cameras</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight size={12} /></BreadcrumbSeparator>
              <BreadcrumbItem><BreadcrumbPage>CAM-01</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ItemShowcase>

        <ItemShowcase name="Scroll area" description="Scroll personalizado para contenedores con altura fija." snippet={snippets.scroll}>
          <ScrollArea className="h-48 w-72 rounded-md border border-border p-3">
            <ul className="space-y-1 text-xs font-mono">
              {longList.map((l) => (<li key={l}>{l}</li>))}
            </ul>
          </ScrollArea>
        </ItemShowcase>

        <ItemShowcase name="Resizable panels" description="Paneles ajustables. Util para editores y dashboards split." snippet={snippets.resizable}>
          <ResizablePanelGroup direction="horizontal" className="w-full max-w-2xl rounded-md border border-border h-40">
            <ResizablePanel defaultSize={40} className="flex items-center justify-center text-sm text-muted-foreground">
              Left
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60} className="flex items-center justify-center text-sm text-muted-foreground">
              Right
            </ResizablePanel>
          </ResizablePanelGroup>
        </ItemShowcase>
      </div>
    </section>
  )
}
