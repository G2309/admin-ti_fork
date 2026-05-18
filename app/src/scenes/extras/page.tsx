import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  DndContext, type DragEndEvent, KeyboardSensor, PointerSensor,
  closestCenter, useSensor, useSensors,
} from '@dnd-kit/core'
import {
  SortableContext, arrayMove, sortableKeyboardCoordinates,
  useSortable, verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Loader2, Upload, Video, FileText, CheckCircle2, AlertCircle } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ItemShowcase } from '@/components/ItemShowcase'
import { cn } from '@/lib/utils'

const snippets = {
  dropzone: `const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
<div {...getRootProps()} className="border-dashed rounded-md p-6">
  <input {...getInputProps()} />
  {isDragActive ? 'Drop here' : 'Drag files or click'}
</div>`,
  sortable: `<DndContext onDragEnd={handle}>
  <SortableContext items={ids} strategy={verticalListSortingStrategy}>
    {items.map(i => <SortableItem key={i.id} id={i.id}>{i.label}</SortableItem>)}
  </SortableContext>
</DndContext>`,
  timeline: `<ol className="relative border-l border-border ml-3">
  {events.map(e => (
    <li key={e.id} className="mb-6 ml-4">
      <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary" />
      <time className="text-xs text-muted-foreground">{e.time}</time>
      <p className="text-sm">{e.label}</p>
    </li>
  ))}
</ol>`,
  spinner: `<Loader2 className="h-4 w-4 animate-spin" />`,
  mediaFrame: `<AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
  <video src={src} className="h-full w-full object-cover" />
</AspectRatio>`,
  uploaderList: `{slots.map(s => (
  <div key={s.id} className="flex items-center justify-between rounded-md border p-3">
    <div>
      <p className="text-sm font-medium">{s.label}</p>
      <Badge>{s.status}</Badge>
    </div>
    <Button onClick={() => open(s.id)}>Upload</Button>
  </div>
))}`,
}

const events = [
  { id: 1, time: '14:32', label: 'Detection: person in CAM-01' },
  { id: 2, time: '14:30', label: 'Model deployed v2.1.4' },
  { id: 3, time: '14:18', label: 'Operator Carla joined' },
  { id: 4, time: '14:05', label: 'Camera CAM-03 reconnected' },
]

type Slot = {
  id: string
  label: string
  status: 'empty' | 'uploaded' | 'error'
}

const initialSlots: Slot[] = [
  { id: 'rtn', label: 'Constancia RTN', status: 'uploaded' },
  { id: 'id', label: 'Documento de identidad', status: 'uploaded' },
  { id: 'commerce', label: 'Registro de comercio', status: 'empty' },
  { id: 'bank', label: 'Certificacion bancaria', status: 'empty' },
  { id: 'proposal', label: 'Propuesta de servicio', status: 'error' },
  { id: 'auth', label: 'Carta de autorizacion', status: 'empty' },
]

const statusBadge = {
  empty: { variant: 'outline' as const, label: 'Empty', icon: Upload },
  uploaded: { variant: 'default' as const, label: 'Uploaded', icon: CheckCircle2 },
  error: { variant: 'destructive' as const, label: 'Error', icon: AlertCircle },
}

function SortableItem({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        'flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm',
        isDragging && 'opacity-50',
      )}
    >
      <button type="button" {...attributes} {...listeners} className="cursor-grab text-muted-foreground">
        <GripVertical size={14} />
      </button>
      {label}
    </li>
  )
}

/** Scene visual-extras: dropzone, sortable, timeline, spinner, media-frame, document-uploader-list. */
export function ExtrasScene() {
  const [files, setFiles] = useState<string[]>([])
  const [items, setItems] = useState([
    { id: 'a', label: 'Priority 1 — Lobby alerts' },
    { id: 'b', label: 'Priority 2 — Garage motion' },
    { id: 'c', label: 'Priority 3 — Roof access' },
    { id: 'd', label: 'Priority 4 — Stairwell loiter' },
  ])
  const [slots, setSlots] = useState<Slot[]>(initialSlots)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const onDrop = useCallback((accepted: File[]) => {
    setFiles((prev) => [...prev, ...accepted.map((f) => f.name)])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e
    if (over && active.id !== over.id) {
      setItems((curr) => {
        const oldIdx = curr.findIndex((i) => i.id === active.id)
        const newIdx = curr.findIndex((i) => i.id === over.id)
        return arrayMove(curr, oldIdx, newIdx)
      })
    }
  }

  function toggleSlot(id: string) {
    setSlots((curr) => curr.map((s) => (s.id === id ? { ...s, status: s.status === 'uploaded' ? 'empty' : 'uploaded' } : s)))
  }

  return (
    <section id="extras" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Extras</h2>
        <p className="text-sm text-muted-foreground">
          Patrones auxiliares fuera de shadcn base: file upload, drag-and-drop, timeline, spinners, media frame, document uploader.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="File upload (dropzone)" description="Drag-and-drop con click-to-browse. react-dropzone." snippet={snippets.dropzone}>
          <div className="w-full max-w-md space-y-2">
            <div
              {...getRootProps()}
              className={cn(
                'flex flex-col items-center gap-2 rounded-md border-2 border-dashed p-8 text-center cursor-pointer transition-colors',
                isDragActive ? 'border-primary bg-accent' : 'border-border',
              )}
            >
              <input {...getInputProps()} />
              <Upload size={20} className="text-muted-foreground" />
              <p className="text-sm">{isDragActive ? 'Drop files here' : 'Drag files or click to browse'}</p>
            </div>
            {files.length > 0 && (
              <ul className="text-xs text-muted-foreground space-y-1">
                {files.map((f, i) => (<li key={`${f}-${i}`}>· {f}</li>))}
              </ul>
            )}
          </div>
        </ItemShowcase>

        <ItemShowcase name="Sortable list" description="Lista reordenable con teclado y mouse. @dnd-kit/sortable." snippet={snippets.sortable}>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
              <ol className="w-full max-w-md space-y-2">
                {items.map((i) => (<SortableItem key={i.id} id={i.id} label={i.label} />))}
              </ol>
            </SortableContext>
          </DndContext>
        </ItemShowcase>

        <ItemShowcase name="Vertical timeline" description="Eventos verticales con dot y linea conectora." snippet={snippets.timeline}>
          <ol className="relative border-l border-border ml-3 max-w-md">
            {events.map((e) => (
              <li key={e.id} className="mb-6 ml-4">
                <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                <time className="text-xs text-muted-foreground font-mono">{e.time}</time>
                <p className="text-sm">{e.label}</p>
              </li>
            ))}
          </ol>
        </ItemShowcase>

        <ItemShowcase name="Spinner" description="Loader inline lucide y dots pulse." snippet={snippets.spinner}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing
            </div>
            <span className="inline-flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse [animation-delay:300ms]" />
            </span>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Media frame" description="Aspect ratio fijo para video/canvas. shadcn aspect-ratio." snippet={snippets.mediaFrame}>
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden flex items-center justify-center text-muted-foreground">
              <Video size={32} />
            </AspectRatio>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Document uploader list" description="6 slots fijos requeridos. Click toggles estado uploaded/empty." snippet={snippets.uploaderList}>
          <ul className="w-full max-w-lg space-y-2">
            {slots.map((s) => {
              const cfg = statusBadge[s.status]
              const Icon = cfg.icon
              return (
                <li key={s.id} className="flex items-center justify-between rounded-md border border-border p-3">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{s.label}</p>
                      <Badge variant={cfg.variant} className="mt-1 gap-1"><Icon size={10} />{cfg.label}</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => toggleSlot(s.id)}>
                    {s.status === 'uploaded' ? 'Replace' : 'Upload'}
                  </Button>
                </li>
              )
            })}
          </ul>
        </ItemShowcase>
      </div>
    </section>
  )
}
