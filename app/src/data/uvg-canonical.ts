// Índice del canon oficial. Las cifras viven en preview/src/data/canon/*.json.
// Este archivo solo reexporta y conserva la API previa para no romper imports.

import projectJson from './canon/project.json'
import financialsJson from './canon/financials.json'
import risksJson from './canon/risks.json'
import roadmapJson from './canon/roadmap.json'
import epicsJson from './canon/epics.json'
import storiesJson from './canon/stories.json'
import tasksJson from './canon/tasks.json'
import methodologiesJson from './canon/methodologies.json'
import opMetricsJson from './canon/operational-metrics.json'
import formulasJson from './canon/formulas.json'
import stakeholdersJson from './canon/stakeholders.json'
import scenariosJson from './canon/scenarios.json'
import boardsJson from './canon/sprint-boards.json'

export const project = projectJson
export const financials = financialsJson
export const risks = risksJson
export const milestones = roadmapJson.milestones
export const epics = epicsJson
export const stories = storiesJson
export const tasks = tasksJson
export const methodologies = methodologiesJson.summary
export const methodologyLayers = methodologiesJson.layers
export const operationalMetrics = opMetricsJson
export const formulas = formulasJson
export type StakeholderId = 'client' | 'sponsor' | 'internal' | 'pm'
type StakeholderView = {
  id: StakeholderId
  label: string
  audience: string
  headline: string
  headlineValue: number
  headlineFormat: 'q' | 'pct'
  burnRate: number
  pitch: string
}
export const stakeholderViews = stakeholdersJson as ReadonlyArray<StakeholderView>
export const scenarios = scenariosJson
export const boards = boardsJson
export const kanbanBoard = boardsJson.kanban
export const sprintPlan = roadmapJson.sprintPlan

export const evmPlan = [
  { sprint: 'S1', pv: 86000.00 },
  { sprint: 'S2', pv: 184000.00 },
  { sprint: 'S3', pv: 290000.00 },
  { sprint: 'S4', pv: 396000.00 },
  { sprint: 'S5', pv: 502000.00 },
  { sprint: 'S6', pv: 608000.00 },
  { sprint: 'S7', pv: 706000.00 },
  { sprint: 'S8', pv: 800000.00 },
] as const

export const additionalCosts = {
  sixMonths: [
    { item: 'Microsoft Office Business Standard', detail: '6 meses · equipo completo', amount: 4500 },
    { item: 'Equipo de cómputo', detail: 'hardware del equipo (compra única)', amount: 51000 },
    { item: 'Claude Team Pro', detail: '6 meses', amount: 4500 },
    { item: 'Internet Tigo residencial', detail: '6 meses · equipo completo', amount: 13500 },
    { item: 'Energía eléctrica EEGSA', detail: '6 meses', amount: 30000 },
    { item: 'Google Colab Pro', detail: 'ejecución', amount: 1170 },
    { item: 'Infraestructura cloud', detail: 'ejecución', amount: 1200 },
  ],
  twelveMonths: [
    { item: 'Microsoft Office Business Standard', detail: '12 meses', amount: 9000 },
    { item: 'Equipo de cómputo', detail: 'hardware del equipo (compra única)', amount: 51000 },
    { item: 'Claude Team Pro', detail: '12 meses', amount: 9000 },
    { item: 'Internet Tigo residencial', detail: '12 meses', amount: 27000 },
    { item: 'Energía eléctrica EEGSA', detail: '12 meses', amount: 60000 },
    { item: 'Google Colab Pro', detail: 'operación', amount: 2340 },
    { item: 'Infraestructura cloud', detail: 'operación', amount: 2400 },
  ],
  sixMonthsTotal: 105870,
  twelveMonthsTotal: 160740,
  note: 'Insumos externos al costo del equipo. Se suman explícitamente a la inversión total junto con la reserva de riesgos antes de aplicar el margen del 35 %.',
} as const

export const xpScenario = {
  name: 'Scrumban + XP (metodología elegida)',
  selected: true,
  team: [
    { role: 'Coach (PO/XP)', fte: 1.0, count: 1 },
    { role: 'Tracker / Tester (SM/XP)', fte: 1.0, count: 1 },
    { role: 'Dev Senior', fte: 1.0, count: 2 },
    { role: 'Dev Junior', fte: 1.0, count: 2 },
  ],
  burnRateClient: 72308,
  burnRateInternal: 67808,
  holguraInternal: 0.10,
  throughputDaily: 0.3264,
  tasksWithoutXp: 682,
  tasksWithXp: 815,
  overheadPct: 0.195,
  investment: 519444.20,
  priceClient: 799144.92,
  priceRounded: 800000,
  roi: 0.5385,
  note: 'Metodología elegida del proyecto: Scrumban + XP. Combina BID/ROM 80/20 con las 8 prácticas XP y 7 historias técnicas (HT-01–HT-07). La holgura se reduce a 10 % gracias a TDD, CI y pair programming.',
} as const

export const reserveTraceability = {
  original: { value: 135432.18, risks: 7, label: 'Versión inicial · 7 riesgos' },
  current: { value: 124342.20, risks: 9, label: 'Versión vigente · 9 riesgos (Σ EMV)' },
  reason: 'Recalibración con burn rate base académico Q 67,212 (sin alpha) e impactos en meses según la matriz consolidada del Excel UVG-Admon-TI-Costos-Unificado.xlsx. El equipo Scrumban + XP opera a Q 72,308/mes pero la matriz de riesgos se mantiene sobre la base académica de 5 personas para consistencia con el curso.',
} as const

export const xpPractices = [
  { name: 'Pair Programming', lane: 'pair', desc: 'Dos pares por historia compleja' },
  { name: 'TDD', lane: 'test', desc: 'Tests antes que código' },
  { name: 'Refactoring', lane: 'refactor', desc: 'Mejora continua sin cambiar comportamiento' },
  { name: 'CI desde Sprint 1', lane: 'ci', desc: 'Integración continua obligatoria' },
  { name: 'Small Releases', lane: 'release', desc: 'Entregas frecuentes y pequeñas' },
  { name: 'Simple Design', lane: 'design', desc: 'YAGNI · diseño mínimo necesario' },
  { name: 'Collective Ownership', lane: 'ownership', desc: 'Cualquiera puede tocar cualquier código' },
  { name: 'Sustainable Pace', lane: 'pace', desc: 'Ritmo sostenible · sin horas extra' },
] as const

export const xpTechStories = [
  { id: 'HT-01', name: 'Setup CI/CD', sprint: 1 },
  { id: 'HT-02', name: 'Cobertura mínima TDD 70 %', sprint: 1 },
  { id: 'HT-03', name: 'Lineamientos de pair programming', sprint: 2 },
  { id: 'HT-04', name: 'Refactor continuo · deuda técnica', sprint: 4 },
  { id: 'HT-05', name: 'Pipelines de release pequeño', sprint: 5 },
  { id: 'HT-06', name: 'Code review estructurado', sprint: 6 },
  { id: 'HT-07', name: 'Hardening y observabilidad', sprint: 8 },
] as const

export const fmtQ = (n: number) =>
  'Q ' + n.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
export const fmtPct = (n: number) => (n * 100).toFixed(2) + ' %'
