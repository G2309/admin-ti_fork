type Flag = boolean

const env = import.meta.env as Record<string, string | undefined>

function flag(name: string, fallback: Flag): Flag {
  const raw = env[name]
  if (raw === undefined || raw === '') return fallback
  return raw === '1' || raw.toLowerCase() === 'true'
}

function list(name: string): string[] | null {
  const raw = env[name]
  if (!raw) return null
  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}

function str(name: string, fallback: string): string {
  const raw = env[name]
  if (raw === undefined || raw === '') return fallback
  return raw
}

export type StakeholderProfile = 'client' | 'sponsor' | 'internal' | 'pm'

const validProfiles: StakeholderProfile[] = ['client', 'sponsor', 'internal', 'pm']

export const STAKEHOLDER_STORAGE_KEY = 'preview-stakeholder'

function readStoredStakeholder(): StakeholderProfile | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem(STAKEHOLDER_STORAGE_KEY)
  if (raw && (validProfiles as string[]).includes(raw)) return raw as StakeholderProfile
  return null
}

function initialStakeholder(): StakeholderProfile {
  return readStoredStakeholder() ?? 'client'
}

export const appConfig = {
  stakeholder: initialStakeholder(),
  defaultView: str('VITE_DEFAULT_VIEW', ''),
  fullExplain: flag('VITE_FULL_EXPLAIN', false),
  presentationMode: flag('VITE_PRESENTATION_MODE', false),
  playground: flag('VITE_PLAYGROUND', false),
  themeSwitcher: flag('VITE_THEME_SWITCHER', true),
  brandLabel: str('VITE_BRAND_LABEL', ''),
  viewsOverride: list('VITE_VIEWS'),
}

export function setStakeholder(profile: StakeholderProfile): void {
  if (!(validProfiles as string[]).includes(profile)) return
  appConfig.stakeholder = profile
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STAKEHOLDER_STORAGE_KEY, profile)
  }
}

export const stakeholderOptions: ReadonlyArray<{ id: StakeholderProfile; label: string }> = [
  { id: 'client', label: 'Cliente' },
  { id: 'sponsor', label: 'Sponsor' },
  { id: 'pm', label: 'PM' },
  { id: 'internal', label: 'Interno' },
]

const viewsByProfile: Record<StakeholderProfile, readonly string[]> = {
  client: ['overview', 'wbs', 'sprints', 'costs'],
  sponsor: ['overview', 'wbs', 'financial', 'costs', 'sprints'],
  internal: ['overview', 'wbs', 'financial', 'methodology', 'risk', 'sprints', 'costs'],
  pm: ['overview', 'wbs', 'sprints', 'methodology', 'risk'],
}

const defaultViewByProfile: Record<StakeholderProfile, string> = {
  client: 'overview',
  sponsor: 'overview',
  internal: 'overview',
  pm: 'sprints',
}

export function visibleViews(): readonly string[] {
  if (appConfig.viewsOverride && appConfig.viewsOverride.length > 0) return appConfig.viewsOverride
  return viewsByProfile[appConfig.stakeholder]
}

export function isViewEnabled(id: string): boolean {
  return visibleViews().includes(id)
}

export function resolveDefaultView(): string {
  if (appConfig.defaultView && isViewEnabled(appConfig.defaultView)) return appConfig.defaultView
  return defaultViewByProfile[appConfig.stakeholder]
}

const cardsByProfile: Record<string, readonly StakeholderProfile[]> = {
  'overview.proposal': ['client', 'sponsor'],
  'overview.profitability': ['sponsor', 'internal'],
  'overview.reserve': ['sponsor', 'internal'],
  'overview.team': ['client', 'sponsor', 'internal', 'pm'],
  'overview.epics': ['client', 'sponsor', 'internal', 'pm'],
  'overview.methodology': ['client', 'sponsor', 'internal', 'pm'],

  'financial.burnRate': ['sponsor', 'internal'],
  'financial.tmar': ['sponsor', 'internal'],
  'financial.roi': ['sponsor', 'internal'],
  'financial.roiAdverse': ['internal'],
  'financial.sandboxInputs': ['internal'],
  'financial.evmPlan': ['sponsor', 'internal', 'pm'],
  'financial.payments': ['client', 'sponsor', 'internal'],

  'risk.matrix': ['internal', 'pm'],
  'risk.list': ['internal', 'pm'],
  'risk.reserve': ['sponsor', 'internal'],

  'methodology.comparison': ['sponsor', 'internal'],
  'methodology.layers': ['internal', 'pm'],
  'methodology.selected': ['client', 'sponsor', 'internal', 'pm'],
  'methodology.boards': ['internal', 'pm'],
  'methodology.kanban': ['internal', 'pm'],
  'methodology.gantt': ['client', 'sponsor', 'internal', 'pm'],

  'sprints.drilldown': ['internal', 'pm'],
  'sprints.xp': ['internal', 'pm'],
  'sprints.tasks': ['internal', 'pm'],

  'costs.breakdown': ['sponsor', 'internal'],
  'costs.summary': ['client', 'sponsor', 'internal'],
  'costs.editable': ['internal'],

  'explain.formulas': ['internal'],
}

export function cardVisible(cardId: string): boolean {
  const allowed = cardsByProfile[cardId]
  if (!allowed) return true
  return allowed.includes(appConfig.stakeholder)
}

export function isFullExplain(): boolean {
  return appConfig.fullExplain && appConfig.stakeholder === 'internal'
}
