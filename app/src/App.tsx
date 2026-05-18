import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { Sun, Moon, ChevronDown, ChevronRight, FlaskConical, PanelLeftClose, PanelLeftOpen, LayoutDashboard, Wallet, GitBranch, ShieldAlert, KanbanSquare, Calculator, Network } from 'lucide-react'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { appConfig, isViewEnabled, resolveDefaultView, setStakeholder, stakeholderOptions, type StakeholderProfile } from '@/lib/env'
import { SceneSkeleton } from '@/components/scene-skeleton'

const UvgExecutiveScene = lazy(() => import('@/scenes/uvg-executive/page').then((m) => ({ default: m.UvgExecutiveScene })))
const UvgFinancialScene = lazy(() => import('@/scenes/uvg-financial/page').then((m) => ({ default: m.UvgFinancialScene })))
const UvgMethodologyScene = lazy(() => import('@/scenes/uvg-methodology/page').then((m) => ({ default: m.UvgMethodologyScene })))
const UvgRiskScene = lazy(() => import('@/scenes/uvg-risk/page').then((m) => ({ default: m.UvgRiskScene })))
const UvgSprintsScene = lazy(() => import('@/scenes/uvg-sprints/page').then((m) => ({ default: m.UvgSprintsScene })))
const UvgCostsScene = lazy(() => import('@/scenes/uvg-costs/page').then((m) => ({ default: m.UvgCostsScene })))
const UvgWbsScene = lazy(() => import('@/scenes/uvg-wbs/page').then((m) => ({ default: m.UvgWbsScene })))

const ButtonsScene = lazy(() => import('@/scenes/buttons/page').then((m) => ({ default: m.ButtonsScene })))
const FontsScene = lazy(() => import('@/scenes/fonts/page').then((m) => ({ default: m.FontsScene })))
const IconsScene = lazy(() => import('@/scenes/icons/page').then((m) => ({ default: m.IconsScene })))
const ChartsScene = lazy(() => import('@/scenes/charts/page').then((m) => ({ default: m.ChartsScene })))
const BackgroundsScene = lazy(() => import('@/scenes/backgrounds/page').then((m) => ({ default: m.BackgroundsScene })))
const MapsScene = lazy(() => import('@/scenes/maps/page').then((m) => ({ default: m.MapsScene })))
const AiDashboardScene = lazy(() => import('@/scenes/ai-dashboard/page').then((m) => ({ default: m.AiDashboardScene })))
const AnimationsScene = lazy(() => import('@/scenes/animations/page').then((m) => ({ default: m.AnimationsScene })))
const FormsScene = lazy(() => import('@/scenes/forms/page').then((m) => ({ default: m.FormsScene })))
const FeedbackScene = lazy(() => import('@/scenes/feedback/page').then((m) => ({ default: m.FeedbackScene })))
const OverlaysScene = lazy(() => import('@/scenes/overlays/page').then((m) => ({ default: m.OverlaysScene })))
const LayoutScene = lazy(() => import('@/scenes/layout/page').then((m) => ({ default: m.LayoutScene })))
const DataScene = lazy(() => import('@/scenes/data/page').then((m) => ({ default: m.DataScene })))
const ExtrasScene = lazy(() => import('@/scenes/extras/page').then((m) => ({ default: m.ExtrasScene })))

const executiveScenes = [
  { id: 'overview', label: 'Resumen', icon: LayoutDashboard, component: UvgExecutiveScene },
  { id: 'wbs', label: 'Alcance', icon: Network, component: UvgWbsScene },
  { id: 'financial', label: 'Financiero', icon: Wallet, component: UvgFinancialScene },
  { id: 'costs', label: 'Costos', icon: Calculator, component: UvgCostsScene },
  { id: 'methodology', label: 'Metodología', icon: GitBranch, component: UvgMethodologyScene },
  { id: 'risk', label: 'Riesgos', icon: ShieldAlert, component: UvgRiskScene },
  { id: 'sprints', label: 'Plan de entrega', icon: KanbanSquare, component: UvgSprintsScene },
] as const

const playgroundScenes = [
  { id: 'buttons', label: 'Buttons', component: ButtonsScene },
  { id: 'fonts', label: 'Fonts', component: FontsScene },
  { id: 'icons', label: 'Icons', component: IconsScene },
  { id: 'forms', label: 'Forms', component: FormsScene },
  { id: 'feedback', label: 'Feedback', component: FeedbackScene },
  { id: 'overlays', label: 'Overlays', component: OverlaysScene },
  { id: 'layout', label: 'Layout', component: LayoutScene },
  { id: 'data', label: 'Data', component: DataScene },
  { id: 'extras', label: 'Extras', component: ExtrasScene },
  { id: 'charts', label: 'Charts', component: ChartsScene },
  { id: 'backgrounds', label: 'Backgrounds', component: BackgroundsScene },
  { id: 'maps', label: 'Maps', component: MapsScene },
  { id: 'ai-dashboard', label: 'AI Dashboard', component: AiDashboardScene },
  { id: 'animations', label: 'Animations', component: AnimationsScene },
] as const

type SceneId = string
type Mode = 'light' | 'dark'
type ThemeId = string

const themes: Array<{ id: string; label: string; disabled: boolean }> = [
  { id: 'zinc-default', label: 'Zinc (default)', disabled: false },
  { id: 'mindora-landing', label: 'Mindora Landing', disabled: false },
  { id: 'slate-default', label: 'Slate', disabled: false },
  { id: 'dark-neon-tracking', label: 'Dark Neon Tracking', disabled: false },
  { id: 'light-saas-modern', label: 'Light SaaS Modern', disabled: false },
  { id: 'dark-data-dashboard', label: 'Dark Data Dashboard', disabled: false },
  { id: 'corporate-blue', label: 'Corporate Blue', disabled: false },
]

function App() {
  const visibleExecutive = useMemo(() => executiveScenes.filter((s) => isViewEnabled(s.id)), [])
  const initialView = useMemo(() => {
    const wanted = resolveDefaultView()
    return visibleExecutive.find((s) => s.id === wanted)?.id ?? visibleExecutive[0]?.id ?? 'overview'
  }, [visibleExecutive])

  const [active, setActive] = useState<SceneId>(initialView)
  const [mode, setMode] = useState<Mode>(() => (localStorage.getItem('preview-mode') as Mode) || 'light')
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const stored = localStorage.getItem('preview-theme')
    return stored && themes.some((t) => t.id === stored) ? stored : 'dark-data-dashboard'
  })
  const playgroundAllowed = appConfig.playground && !appConfig.presentationMode
  const [showPlayground, setShowPlayground] = useState<boolean>(() => playgroundAllowed && localStorage.getItem('preview-playground') === '1')
  const [collapsed, setCollapsed] = useState<boolean>(() => localStorage.getItem('preview-sidebar') === 'collapsed')

  const allScenes = useMemo(() => [...executiveScenes, ...playgroundScenes], [])
  const Active = allScenes.find((s) => s.id === active)?.component ?? UvgExecutiveScene

  useEffect(() => {
    const root = document.documentElement
    if (mode === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('preview-mode', mode)
  }, [mode])

  useEffect(() => {
    const root = document.documentElement
    if (themeId === 'zinc-default') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', themeId)
    localStorage.setItem('preview-theme', themeId)
  }, [themeId])

  useEffect(() => {
    localStorage.setItem('preview-playground', showPlayground ? '1' : '0')
  }, [showPlayground])

  useEffect(() => {
    localStorage.setItem('preview-sidebar', collapsed ? 'collapsed' : 'expanded')
  }, [collapsed])

  const showThemeSwitcher = appConfig.themeSwitcher && !appConfig.presentationMode

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside
        className={`${collapsed ? 'w-14' : 'w-60'} border-r border-border flex flex-col transition-[width] duration-200 ease-out`}
      >
        <div className="flex items-center justify-between gap-2 px-3 py-3 border-b border-border/60">
          {!collapsed && (
            <div className="min-w-0">
              {appConfig.brandLabel ? (
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium truncate">{appConfig.brandLabel}</p>
              ) : null}
              <h1 className="text-sm font-semibold leading-tight truncate">Recomendación Vocacional</h1>
            </div>
          )}
          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            className="shrink-0 p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label={collapsed ? 'Expandir' : 'Colapsar'}
            title={collapsed ? 'Expandir' : 'Colapsar'}
          >
            {collapsed ? <PanelLeftOpen size={15} /> : <PanelLeftClose size={15} />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-3 flex flex-col gap-0.5 overflow-y-auto">
          {visibleExecutive.map((s) => {
            const Icon = s.icon
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`group flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? s.label : undefined}
              >
                <Icon size={15} className="shrink-0" />
                {!collapsed && <span className="truncate">{s.label}</span>}
              </button>
            )
          })}

          {playgroundAllowed && (
            <div className={`mt-3 pt-3 border-t border-border/60 ${collapsed ? 'hidden' : ''}`}>
              <button
                type="button"
                onClick={() => setShowPlayground((v) => !v)}
                className="w-full flex items-center justify-between text-[10px] uppercase tracking-wide text-muted-foreground hover:text-foreground px-1 py-1 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <FlaskConical size={11} /> Componentes
                </span>
                {showPlayground ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              </button>
              {showPlayground && (
                <div className="flex flex-col gap-0.5 mt-1.5">
                  {playgroundScenes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActive(s.id)}
                      className={`text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        active === s.id
                          ? 'bg-secondary text-secondary-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        {!collapsed && (showThemeSwitcher || !appConfig.presentationMode) && (
          <div className="border-t border-border/60 px-3 py-3 space-y-2">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Configuración</p>
            {!appConfig.presentationMode && (
              <Select
                value={appConfig.stakeholder}
                onValueChange={(v) => {
                  setStakeholder(v as StakeholderProfile)
                  window.location.reload()
                }}
              >
                <SelectTrigger className="h-8 text-xs w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {stakeholderOptions.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <div className="flex items-center gap-2">
              {showThemeSwitcher && (
                <Select value={themeId} onValueChange={(v) => setThemeId(v as ThemeId)}>
                  <SelectTrigger className="h-8 text-xs flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((t) => (
                      <SelectItem key={t.id} value={t.id} disabled={t.disabled}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {!appConfig.presentationMode && (
                <button
                  type="button"
                  onClick={() => setMode((t) => (t === 'light' ? 'dark' : 'light'))}
                  className="shrink-0 p-1.5 rounded-md border border-border hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Cambiar modo"
                  title={`Modo: ${mode}`}
                >
                  {mode === 'light' ? <Moon size={14} /> : <Sun size={14} />}
                </button>
              )}
            </div>
          </div>
        )}
        {collapsed && !appConfig.presentationMode && (
          <div className="border-t border-border/60 px-2 py-2 flex justify-center">
            <button
              type="button"
              onClick={() => setMode((t) => (t === 'light' ? 'dark' : 'light'))}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cambiar modo"
              title={`Modo: ${mode}`}
            >
              {mode === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        )}
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Suspense key={active} fallback={<SceneSkeleton />}>
          <Active />
        </Suspense>
      </main>
    </div>
  )
}

export default App
