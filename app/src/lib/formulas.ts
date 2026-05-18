// Motor derivado puro. Sin estado. Cada función devuelve { value, ...meta }
// para alimentar tanto KPIs como popovers de explainability.

export type Salaries = {
  PM: number
  TechLead: number
  DevSenior: number
  DevJunior: number
  PO: number
}

export type Fte = {
  PM: number
  TechLead: number
  DevSenior: number
  DevJunior: number
  PO: number
}

export type ScenarioInputs = {
  salaries: Salaries
  fte: Fte
  alpha: number
  marginScrum: number
  tmar: number
  sprintLengthDays: number
  sprints: number
  reserve: number
  xpEnabled: boolean
  refactorOverheadPct: number
}

export type Derived = {
  burnRateInternal: number
  burnRateClient: number
  burnRateDaily: number
  scrumBase: number
  scrumTotal: number
  durationDays: number
  durationMonths: number
  pricePerMonthClient: number
  benefitClient: number
  roi: number
  reserveTotal: number
  xpThroughputFactor: number
}

const HEADS = ['PM', 'TechLead', 'DevSenior', 'DevJunior', 'PO'] as const

export function deriveBurnRateInternal(s: Salaries, f: Fte): number {
  return HEADS.reduce((acc, k) => acc + s[k] * f[k], 0)
}

export function deriveBurnRateClient(internal: number, alpha: number): number {
  return internal * (1 + alpha)
}

export function deriveAll(i: ScenarioInputs): Derived {
  const internalBase = deriveBurnRateInternal(i.salaries, i.fte)
  const xpThroughputFactor = i.xpEnabled ? 1 - 0.195 : 1
  const burnRateInternal = internalBase * (1 + i.refactorOverheadPct)
  const burnRateClient = deriveBurnRateClient(burnRateInternal, i.alpha)
  const durationDays = i.sprintLengthDays * i.sprints
  const durationMonths = durationDays / 30
  const scrumBase = burnRateClient * durationMonths
  const scrumTotal = scrumBase + i.reserve
  const pricePerMonthClient = burnRateClient / (1 - i.marginScrum)
  const benefitClient = scrumBase * i.marginScrum
  const roi = scrumBase > 0 ? benefitClient / scrumBase : 0
  return {
    burnRateInternal,
    burnRateClient,
    burnRateDaily: burnRateClient / 30,
    scrumBase,
    scrumTotal,
    durationDays,
    durationMonths,
    pricePerMonthClient,
    benefitClient,
    roi,
    reserveTotal: i.reserve,
    xpThroughputFactor,
  }
}

export function deriveEMV(probability: number, impact: number): number {
  return probability * impact
}

export function deriveTMAR(inflation: number, risk: number, yieldRate: number): number {
  return inflation + risk + yieldRate
}

export function applyPatch<T extends Record<string, unknown>>(base: T, patch: Record<string, unknown>): T {
  const next: Record<string, unknown> = JSON.parse(JSON.stringify(base))
  for (const [key, value] of Object.entries(patch)) {
    if (key.includes('.')) {
      const segs = key.split('.')
      let cursor = next
      for (let i = 0; i < segs.length - 1; i++) {
        const seg = segs[i]
        if (typeof cursor[seg] !== 'object' || cursor[seg] === null) cursor[seg] = {}
        cursor = cursor[seg] as Record<string, unknown>
      }
      cursor[segs[segs.length - 1]] = value
    } else {
      next[key] = value
    }
  }
  return next as T
}
