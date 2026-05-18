import { useMemo, useState } from 'react'
import {
  Home, Menu, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, X,
  Plus, Edit, Trash2, Save, Search, Filter, Settings, Download, Upload,
  Camera, Eye, MapPin, Activity, Target, Crosshair,
  BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, AlertCircle,
  Database, Layers, Tag, Calendar, Clock,
  CheckCircle, XCircle, AlertTriangle, Info, Loader,
  Play, Pause, Square, SkipForward, Volume2,
  type LucideIcon,
} from 'lucide-react'
import { ItemShowcase } from '@/components/ItemShowcase'

type Category =
  | 'navigation'
  | 'actions'
  | 'tracking'
  | 'metrics'
  | 'data'
  | 'status'
  | 'media'

type IconEntry = {
  id: string
  component: string
  category: Category
  purpose: string
}

const iconMap: Record<string, LucideIcon> = {
  Home, Menu, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, X,
  Plus, Edit, Trash2, Save, Search, Filter, Settings, Download, Upload,
  Camera, Eye, MapPin, Activity, Target, Crosshair,
  BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, AlertCircle,
  Database, Layers, Tag, Calendar, Clock,
  CheckCircle, XCircle, AlertTriangle, Info, Loader,
  Play, Pause, Square, SkipForward, Volume2,
}

const icons: IconEntry[] = [
  { id: 'home', component: 'Home', category: 'navigation', purpose: 'Volver al inicio o landing principal del producto.' },
  { id: 'menu', component: 'Menu', category: 'navigation', purpose: 'Abrir menu lateral o drawer en mobile.' },
  { id: 'chevron-right', component: 'ChevronRight', category: 'navigation', purpose: 'Avanzar, expandir item o indicar nivel siguiente en breadcrumb.' },
  { id: 'chevron-left', component: 'ChevronLeft', category: 'navigation', purpose: 'Retroceder o colapsar nivel previo.' },
  { id: 'arrow-left', component: 'ArrowLeft', category: 'navigation', purpose: 'Back explicito a paso o vista anterior.' },
  { id: 'arrow-right', component: 'ArrowRight', category: 'navigation', purpose: 'Forward o CTA de continuar al siguiente paso.' },
  { id: 'x', component: 'X', category: 'navigation', purpose: 'Cerrar modal, drawer, dialog o dismiss de toast.' },
  { id: 'plus', component: 'Plus', category: 'actions', purpose: 'Crear nueva entidad (item, registro, recurso).' },
  { id: 'edit', component: 'Edit', category: 'actions', purpose: 'Editar entidad existente.' },
  { id: 'trash-2', component: 'Trash2', category: 'actions', purpose: 'Eliminar entidad (variante con tapa, mas legible).' },
  { id: 'save', component: 'Save', category: 'actions', purpose: 'Guardar cambios o exportar configuracion.' },
  { id: 'search', component: 'Search', category: 'actions', purpose: 'Buscar dentro de listas, tablas o command palette.' },
  { id: 'filter', component: 'Filter', category: 'actions', purpose: 'Filtrar resultados en tablas, dashboards o feeds.' },
  { id: 'settings', component: 'Settings', category: 'actions', purpose: 'Abrir configuracion de cuenta, app o panel.' },
  { id: 'download', component: 'Download', category: 'actions', purpose: 'Descargar archivo, reporte o snapshot.' },
  { id: 'upload', component: 'Upload', category: 'actions', purpose: 'Subir archivo, dataset o configuracion.' },
  { id: 'camera', component: 'Camera', category: 'tracking', purpose: 'Camera feed, captura o stream de video en dashboards de vision.' },
  { id: 'eye', component: 'Eye', category: 'tracking', purpose: 'Vista en vivo, observacion activa o toggle de visibilidad.' },
  { id: 'map-pin', component: 'MapPin', category: 'tracking', purpose: 'Ubicacion en mapa, marker de entidad rastreada.' },
  { id: 'activity', component: 'Activity', category: 'tracking', purpose: 'Pulso de eventos en tiempo real, actividad de stream.' },
  { id: 'target', component: 'Target', category: 'tracking', purpose: 'Objetivo asignado, foco de tracking o KPI principal.' },
  { id: 'crosshair', component: 'Crosshair', category: 'tracking', purpose: 'Punto exacto, overlay de seleccion en feed de camara.' },
  { id: 'bar-chart-3', component: 'BarChart3', category: 'metrics', purpose: 'Grafico de barras (variante 3 con altura escalonada).' },
  { id: 'line-chart', component: 'LineChart', category: 'metrics', purpose: 'Series temporales o tendencias continuas.' },
  { id: 'pie-chart', component: 'PieChart', category: 'metrics', purpose: 'Distribucion porcentual o composicion de categorias.' },
  { id: 'trending-up', component: 'TrendingUp', category: 'metrics', purpose: 'KPI en alza, mejora o crecimiento positivo.' },
  { id: 'trending-down', component: 'TrendingDown', category: 'metrics', purpose: 'KPI en caida, degradacion o regresion.' },
  { id: 'alert-circle', component: 'AlertCircle', category: 'metrics', purpose: 'Anomalia detectada en metricas o threshold superado.' },
  { id: 'database', component: 'Database', category: 'data', purpose: 'Fuente de datos, dataset o backend storage.' },
  { id: 'layers', component: 'Layers', category: 'data', purpose: 'Capas de datos, overlays apilados o niveles de agregacion.' },
  { id: 'tag', component: 'Tag', category: 'data', purpose: 'Etiqueta, label o categoria asignada a entidad.' },
  { id: 'calendar', component: 'Calendar', category: 'data', purpose: 'Fecha, rango temporal o scheduler.' },
  { id: 'clock', component: 'Clock', category: 'data', purpose: 'Hora puntual, timestamp o duracion.' },
  { id: 'check-circle', component: 'CheckCircle', category: 'status', purpose: 'Exito confirmado, validacion pasada.' },
  { id: 'x-circle', component: 'XCircle', category: 'status', purpose: 'Error, fallo de validacion o operacion rechazada.' },
  { id: 'alert-triangle', component: 'AlertTriangle', category: 'status', purpose: 'Warning, atencion requerida sin bloquear flujo.' },
  { id: 'info', component: 'Info', category: 'status', purpose: 'Informacion contextual o tooltip de ayuda.' },
  { id: 'loader', component: 'Loader', category: 'status', purpose: 'Estado de carga (animar con className spin).' },
  { id: 'play', component: 'Play', category: 'media', purpose: 'Iniciar reproduccion de video, stream o secuencia.' },
  { id: 'pause', component: 'Pause', category: 'media', purpose: 'Pausar reproduccion sin perder posicion.' },
  { id: 'square', component: 'Square', category: 'media', purpose: 'Stop completo, reset al inicio.' },
  { id: 'skip-forward', component: 'SkipForward', category: 'media', purpose: 'Saltar al siguiente segmento o frame clave.' },
  { id: 'volume-2', component: 'Volume2', category: 'media', purpose: 'Audio activo (variante con dos ondas, nivel medio-alto).' },
]

const categories: Array<Category | 'all'> = [
  'all', 'navigation', 'actions', 'tracking', 'metrics', 'data', 'status', 'media',
]

function buildSnippet(componentName: string) {
  return `import { ${componentName} } from 'lucide-react'

<${componentName} size={20} strokeWidth={1.75} className="text-muted-foreground" />`
}

/**
 * Scene tipo grid con filtro por categoria. Click en un icono muestra
 * un detalle abajo con preview grande, snippet de uso y proposito.
 */
export function IconsScene() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [selectedId, setSelectedId] = useState<string>('camera')

  const visible = useMemo(
    () => (filter === 'all' ? icons : icons.filter((i) => i.category === filter)),
    [filter],
  )

  const selected = icons.find((i) => i.id === selectedId) ?? icons[0]
  const SelectedIcon = iconMap[selected.component]

  return (
    <section id="icons" className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Icons</h2>
        <p className="text-sm text-muted-foreground">
          Catalogo en `visual-icons`. Filtra por categoria y haz click para ver el snippet.
        </p>
      </header>

      <nav className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors border ${
              filter === c
                ? 'bg-accent text-accent-foreground border-border'
                : 'border-border hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {visible.map((entry) => {
          const Icon = iconMap[entry.component]
          const isActive = entry.id === selectedId
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => setSelectedId(entry.id)}
              className={`flex flex-col items-center justify-center gap-2 rounded-lg border p-4 transition-colors ${
                isActive
                  ? 'border-foreground/40 bg-accent text-accent-foreground'
                  : 'border-border hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon size={28} strokeWidth={1.75} />
              <span className="text-[11px] font-mono text-muted-foreground truncate w-full text-center">
                {entry.component}
              </span>
            </button>
          )
        })}
      </div>

      <ItemShowcase
        name={selected.component}
        description={`Categoria: ${selected.category} · ${selected.purpose}`}
        snippet={buildSnippet(selected.component)}
      >
        <SelectedIcon size={64} strokeWidth={1.5} />
      </ItemShowcase>
    </section>
  )
}
