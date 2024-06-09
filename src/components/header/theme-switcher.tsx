import { GoMoon, GoSun } from 'react-icons/go'

import { useTheme } from '@/components/ui/theme-provider'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <GoMoon size={32} className="fill-slate-950 active:scale-95" />
      ) : (
        <GoSun size={32} className="active:scale-95" />
      )}
    </button>
  )
}
