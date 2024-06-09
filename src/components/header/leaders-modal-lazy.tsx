import { lazy } from 'react'

export const LeadersModalLazy = lazy(() =>
  import('./leaders-modal').then((module) => ({ default: module.LeadersModal })),
)
