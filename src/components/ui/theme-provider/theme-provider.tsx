import { ReactNode, useEffect, useMemo, useState } from 'react'

import { LOCALSTORAGE_THEME_KEY } from './const'
import { Theme, ThemeContext } from './theme-context'

type Props = {
  children: ReactNode
  initialTheme?: Theme
}

const storedTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme

export const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? storedTheme ?? 'dark')

  useEffect(() => {
    document.body.className = `${theme} ${theme === 'dark' ? 'bg-neutral-900' : 'bg-orange-100'}`
  }, [theme])

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
