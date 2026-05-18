import { useEffect, type ReactNode } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.heat'
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  GeoJSON,
  useMap,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { AlertTriangle, RotateCcw } from 'lucide-react'
import { ItemShowcase } from '@/components/ItemShowcase'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Button } from '@/components/ui/button'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const CENTER: [number, number] = [14.6349, -90.5069]
const ZOOM = 12
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

const trackingPath: [number, number][] = [
  [14.628, -90.520], [14.631, -90.515], [14.634, -90.512],
  [14.637, -90.508], [14.640, -90.503], [14.642, -90.499],
]

const clusterPoints: [number, number][] = [
  [14.630, -90.520], [14.631, -90.519], [14.629, -90.518], [14.632, -90.517],
  [14.640, -90.510], [14.641, -90.509], [14.635, -90.500], [14.638, -90.495],
  [14.625, -90.522], [14.626, -90.521], [14.633, -90.514], [14.636, -90.511],
  [14.642, -90.506], [14.644, -90.502], [14.628, -90.497], [14.624, -90.494],
  [14.637, -90.523], [14.639, -90.520], [14.631, -90.508], [14.633, -90.504],
  [14.645, -90.515], [14.643, -90.518], [14.620, -90.513], [14.622, -90.510],
  [14.627, -90.506], [14.629, -90.503], [14.634, -90.499], [14.640, -90.493],
  [14.646, -90.508], [14.648, -90.504],
]

const heatPoints: [number, number, number][] = [
  [14.630, -90.520, 0.8], [14.632, -90.515, 0.5], [14.635, -90.510, 0.9],
  [14.638, -90.505, 0.4], [14.640, -90.500, 0.7], [14.642, -90.495, 0.6],
  [14.628, -90.512, 0.55], [14.633, -90.503, 0.65], [14.637, -90.498, 0.45],
]

const polygonGeo: GeoJSON.Feature = {
  type: 'Feature',
  properties: { name: 'Zona cobertura' },
  geometry: {
    type: 'Polygon',
    coordinates: [[
      [-90.525, 14.625], [-90.490, 14.625], [-90.490, 14.650],
      [-90.525, 14.650], [-90.525, 14.625],
    ]],
  },
}

function MapErrorFallback(reset: () => void, error: Error | null) {
  return (
    <div className="flex h-[220px] w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-destructive/50 bg-destructive/5 p-6 text-center">
      <AlertTriangle size={20} className="text-destructive" />
      <p className="text-sm font-medium">Error al cargar el mapa</p>
      <p className="text-xs text-muted-foreground max-w-xs">{error?.message ?? 'Fallo desconocido al inicializar leaflet'}</p>
      <Button size="sm" variant="outline" onClick={reset} className="mt-1 gap-1">
        <RotateCcw size={12} /> Reintentar
      </Button>
    </div>
  )
}

function SafeMap({ children }: { children: ReactNode }) {
  return <ErrorBoundary fallback={MapErrorFallback}>{children}</ErrorBoundary>
}

const containerCls = 'w-full h-[220px] rounded-md overflow-hidden'

function BaseMap() {
  return (
    <MapContainer center={CENTER} zoom={ZOOM} className={containerCls}>
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />
    </MapContainer>
  )
}

function ClusterMap() {
  return (
    <MapContainer center={CENTER} zoom={ZOOM} className={containerCls}>
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />
      <MarkerClusterGroup chunkedLoading>
        {clusterPoints.map((pos, i) => (
          <Marker key={i} position={pos} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

function TrackingMap() {
  const last = trackingPath[trackingPath.length - 1]
  return (
    <MapContainer center={CENTER} zoom={ZOOM} className={containerCls}>
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />
      <Polyline positions={trackingPath} pathOptions={{ color: '#222', weight: 3 }} />
      <Marker position={last} />
    </MapContainer>
  )
}

function HeatLayer({ points }: { points: [number, number, number][] }) {
  const map = useMap()
  useEffect(() => {
    const layer = L.heatLayer(points, { radius: 30, blur: 20 })
    layer.addTo(map)
    return () => {
      map.removeLayer(layer)
    }
  }, [map, points])
  return null
}

function HeatMap() {
  return (
    <MapContainer center={CENTER} zoom={ZOOM} className={containerCls}>
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />
      <HeatLayer points={heatPoints} />
    </MapContainer>
  )
}

function GeoJsonMap() {
  return (
    <MapContainer center={CENTER} zoom={ZOOM} className={containerCls}>
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />
      <GeoJSON data={polygonGeo} style={{ color: '#222', weight: 2, fillColor: '#444', fillOpacity: 0.25 }} />
    </MapContainer>
  )
}

const snippets = {
  base: `import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

<MapContainer center={[14.6349, -90.5069]} zoom={12} className="h-[220px]">
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; OpenStreetMap'
  />
</MapContainer>`,
  cluster: `import MarkerClusterGroup from 'react-leaflet-cluster'

<MapContainer center={CENTER} zoom={12}>
  <TileLayer url={TILE_URL} />
  <MarkerClusterGroup chunkedLoading>
    {points.map((pos, i) => <Marker key={i} position={pos} />)}
  </MarkerClusterGroup>
</MapContainer>`,
  path: `import { Polyline, Marker } from 'react-leaflet'

<MapContainer center={CENTER} zoom={12}>
  <TileLayer url={TILE_URL} />
  <Polyline positions={coords} pathOptions={{ color: '#222', weight: 3 }} />
  <Marker position={coords.at(-1)!} />
</MapContainer>`,
  heat: `import L from 'leaflet'
import 'leaflet.heat'
import { useMap } from 'react-leaflet'

function HeatLayer({ points }) {
  const map = useMap()
  useEffect(() => {
    const layer = L.heatLayer(points, { radius: 30, blur: 20 }).addTo(map)
    return () => { map.removeLayer(layer) }
  }, [map, points])
  return null
}`,
  geo: `import { GeoJSON } from 'react-leaflet'

<MapContainer center={CENTER} zoom={12}>
  <TileLayer url={TILE_URL} />
  <GeoJSON data={feature} style={{ color: '#222', fillOpacity: 0.25 }} />
</MapContainer>`,
}

/** Scene de mapas con leaflet + react-leaflet. Raster tiles, sin WebGL. */
export function MapsScene() {
  return (
    <section id="maps" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Maps</h2>
        <p className="text-sm text-muted-foreground">
          Patrones en `visual-maps`. Stack: leaflet + react-leaflet (tiles raster OpenStreetMap, sin WebGL).
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Base map" description="Mapa interactivo basico con centro y zoom." snippet={snippets.base}>
          <SafeMap><BaseMap /></SafeMap>
        </ItemShowcase>
        <ItemShowcase name="Markers with clustering" description="Agrupacion de puntos cercanos via react-leaflet-cluster." snippet={snippets.cluster}>
          <SafeMap><ClusterMap /></SafeMap>
        </ItemShowcase>
        <ItemShowcase name="Tracking path" description="Polyline conectando posiciones consecutivas." snippet={snippets.path}>
          <SafeMap><TrackingMap /></SafeMap>
        </ItemShowcase>
        <ItemShowcase name="Heatmap" description="Densidad de eventos via leaflet.heat." snippet={snippets.heat}>
          <SafeMap><HeatMap /></SafeMap>
        </ItemShowcase>
        <ItemShowcase name="GeoJSON overlay" description="Overlay vectorial para zonas y perimetros." snippet={snippets.geo}>
          <SafeMap><GeoJsonMap /></SafeMap>
        </ItemShowcase>
      </div>
    </section>
  )
}
