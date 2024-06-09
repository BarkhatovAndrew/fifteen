import { createContext } from 'react'

export type Theme = 'light' | 'dark'

type Context = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<Context>({})
