import { useContext } from 'react'

import { LOCALSTORAGE_THEME_KEY } from './const'
import { ThemeContext } from './theme-context'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme?.(newTheme)
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme)
    document.body.className = newTheme
  }

  return {
    theme: theme ?? 'dark',
    toggleTheme,
  }
}
