import { useMemo, useState } from 'react'
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from '@/components/ui/pagination'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'

const detections = [
  { id: 'D-1042', cam: 'CAM-01', label: 'Person', confidence: 0.96, status: 'reviewed' },
  { id: 'D-1041', cam: 'CAM-03', label: 'Vehicle', confidence: 0.88, status: 'pending' },
  { id: 'D-1040', cam: 'CAM-02', label: 'Person', confidence: 0.74, status: 'pending' },
  { id: 'D-1039', cam: 'CAM-05', label: 'Animal', confidence: 0.62, status: 'discarded' },
  { id: 'D-1038', cam: 'CAM-01', label: 'Vehicle', confidence: 0.91, status: 'reviewed' },
]

const operators = [
  { name: 'Ana Lopez', role: 'Operator', shift: 'Morning', img: '' },
  { name: 'Bryan Soto', role: 'Operator', shift: 'Night', img: '' },
  { name: 'Carla Ruiz', role: 'Lead', shift: 'Morning', img: '' },
  { name: 'Diego Mora', role: 'Operator', shift: 'Evening', img: '' },
]

const snippets = {
  table: `<Table>
  <TableHeader>
    <TableRow><TableHead>ID</TableHead><TableHead>Camera</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    {rows.map(r => (
      <TableRow key={r.id}><TableCell>{r.id}</TableCell><TableCell>{r.cam}</TableCell></TableRow>
    ))}
  </TableBody>
</Table>`,
  avatar: `<Avatar>
  <AvatarImage src={user.img} />
  <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
</Avatar>`,
  pagination: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  rowActions: `<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Review</DropdownMenuItem>
    <DropdownMenuItem>Discard</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
}

const statusVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  reviewed: 'default',
  pending: 'secondary',
  discarded: 'outline',
}

/** Scene de data: table, avatar, pagination, row actions. */
export function DataScene() {
  const [sortDesc, setSortDesc] = useState(true)
  const [page, setPage] = useState(1)

  const sorted = useMemo(
    () => [...detections].sort((a, b) => (sortDesc ? b.confidence - a.confidence : a.confidence - b.confidence)),
    [sortDesc],
  )

  return (
    <section id="data" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Data</h2>
        <p className="text-sm text-muted-foreground">
          Tablas, avatares, paginacion y row actions. Patrones tipicos para listados densos.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Table" description="Tabla con sort por confidence y row actions." snippet={snippets.table}>
          <div className="w-full max-w-3xl">
            <Table>
              <TableCaption>Recent detections</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Camera</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>
                    <button
                      type="button"
                      onClick={() => setSortDesc((v) => !v)}
                      className="inline-flex items-center gap-1 hover:text-foreground"
                    >
                      Confidence <ArrowUpDown size={12} />
                    </button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sorted.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-mono text-xs">{d.id}</TableCell>
                    <TableCell>{d.cam}</TableCell>
                    <TableCell>{d.label}</TableCell>
                    <TableCell>{d.confidence.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[d.status]} className="capitalize">{d.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <MoreHorizontal size={14} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Review</DropdownMenuItem>
                          <DropdownMenuItem>Mark discarded</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Avatar" description="Imagen + fallback con iniciales. Util en listas de operadores." snippet={snippets.avatar}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center -space-x-2">
              {operators.map((o) => (
                <Avatar key={o.name} className="border-2 border-background">
                  <AvatarImage src={o.img} alt={o.name} />
                  <AvatarFallback>{o.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <ul className="space-y-2">
              {operators.map((o) => (
                <li key={o.name} className="flex items-center gap-3 text-sm">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{o.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{o.name}</span>
                  <span className="text-muted-foreground">· {o.role} · {o.shift}</span>
                </li>
              ))}
            </ul>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Pagination" description="Navegacion entre paginas. Pagina activa actual." snippet={snippets.pagination}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)) }} />
              </PaginationItem>
              {[1, 2, 3].map((n) => (
                <PaginationItem key={n}>
                  <PaginationLink
                    href="#"
                    isActive={page === n}
                    onClick={(e) => { e.preventDefault(); setPage(n) }}
                  >
                    {n}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" onClick={(e) => { e.preventDefault(); setPage(8) }} isActive={page === 8}>8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(8, p + 1)) }} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </ItemShowcase>

        <ItemShowcase name="Row actions" description="Dropdown menu disparado desde un boton ghost por fila." snippet={snippets.rowActions}>
          <div className="flex items-center justify-between w-full max-w-sm rounded-md border border-border px-3 py-2">
            <div className="flex items-center gap-3 text-sm">
              <Avatar className="h-7 w-7"><AvatarFallback className="text-xs">CR</AvatarFallback></Avatar>
              <span>Carla Ruiz</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal size={14} /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Reassign shift</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ItemShowcase>
      </div>
    </section>
  )
}
