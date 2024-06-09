import { lazy } from 'react'

export const WinModalLazy = lazy(() =>
  import('./win-modal').then((module) => ({ default: module.WinModal })),
)
