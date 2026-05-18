import { useState } from 'react'
import { Check, ChevronsUpDown, Filter, MoreVertical } from 'lucide-react'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Command, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList,
} from '@/components/ui/command'
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'
import { cn } from '@/lib/utils'

const cameras = [
  { value: 'cam-01', label: 'CAM-01 · Lobby' },
  { value: 'cam-02', label: 'CAM-02 · Entrance' },
  { value: 'cam-03', label: 'CAM-03 · Garage' },
  { value: 'cam-04', label: 'CAM-04 · Stairwell' },
  { value: 'cam-05', label: 'CAM-05 · Roof' },
]

const snippets = {
  dialog: `<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  sheet: `<Sheet>
  <SheetTrigger asChild><Button>Open sheet</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  popover: `<Popover>
  <PopoverTrigger asChild><Button>Open</Button></PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`,
  dropdown: `<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  combobox: `<Popover>
  <PopoverTrigger asChild><Button>{value || 'Pick...'}</Button></PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        {items.map(i => <CommandItem key={i.value}>{i.label}</CommandItem>)}
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`,
  filter: `<DropdownMenu>
  <DropdownMenuTrigger asChild><Button><Filter /> Filters</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Severity</DropdownMenuLabel>
    {opts.map(o => (
      <DropdownMenuCheckboxItem checked={s[o]} onCheckedChange={...}>{o}</DropdownMenuCheckboxItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>`,
  context: `<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
}

/** Scene de overlays: dialogs, sheets, popovers, dropdowns, combobox, context-menu, filter dropdown. */
export function OverlaysScene() {
  const [comboOpen, setComboOpen] = useState(false)
  const [comboVal, setComboVal] = useState<string>('')
  const [filters, setFilters] = useState({ low: true, mid: true, high: false })

  return (
    <section id="overlays" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Overlays</h2>
        <p className="text-sm text-muted-foreground">
          Primitives de overlays + composiciones combobox y filter dropdown.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Dialog" description="Modal centrado bloqueante." snippet={snippets.dialog}>
          <Dialog>
            <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete camera CAM-01?</DialogTitle>
                <DialogDescription>This action cannot be undone.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ItemShowcase>

        <ItemShowcase name="Sheet" description="Drawer lateral. Util para settings y formularios largos." snippet={snippets.sheet}>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Camera settings</SheetTitle>
                <SheetDescription>Adjust resolution, framerate and overlay options.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ItemShowcase>

        <ItemShowcase name="Popover" description="Contenido flotante anclado a un trigger." snippet={snippets.popover}>
          <Popover>
            <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
            <PopoverContent className="w-64">
              <p className="text-sm">Quick configuration panel.</p>
            </PopoverContent>
          </Popover>
        </ItemShowcase>

        <ItemShowcase name="Dropdown menu" description="Menu de acciones." snippet={snippets.dropdown}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon"><MoreVertical size={14} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ItemShowcase>

        <ItemShowcase name="Combobox" description="Popover + Command. Buscador con seleccion." snippet={snippets.combobox}>
          <Popover open={comboOpen} onOpenChange={setComboOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" className="w-64 justify-between">
                {comboVal ? cameras.find((c) => c.value === comboVal)?.label : 'Select camera...'}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput placeholder="Search camera..." />
                <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup>
                    {cameras.map((c) => (
                      <CommandItem
                        key={c.value}
                        value={c.value}
                        onSelect={(v) => {
                          setComboVal(v === comboVal ? '' : v)
                          setComboOpen(false)
                        }}
                      >
                        <Check className={cn('mr-2 h-4 w-4', comboVal === c.value ? 'opacity-100' : 'opacity-0')} />
                        {c.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </ItemShowcase>

        <ItemShowcase name="Filter dropdown" description="Dropdown con checkboxes para filtros multiples." snippet={snippets.filter}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Severity</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Severity</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {(['low', 'mid', 'high'] as const).map((k) => (
                <DropdownMenuCheckboxItem
                  key={k}
                  checked={filters[k]}
                  onCheckedChange={(v) => setFilters((f) => ({ ...f, [k]: !!v }))}
                  className="capitalize"
                >
                  {k}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </ItemShowcase>

        <ItemShowcase name="Context menu" description="Menu al click derecho sobre el target." snippet={snippets.context}>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
              <ContextMenuItem>Select all</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ItemShowcase>
      </div>
    </section>
  )
}
