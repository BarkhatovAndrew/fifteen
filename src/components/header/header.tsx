import { Suspense } from 'react'

import { Spinner } from '@/components/spinner'
import { useTheme } from '@/components/ui/theme-provider'

import { LangSwitcher } from './lang-switcher'
import { Leader } from './leader'
import { ThemeSwitcher } from './theme-switcher'

export const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="flex select-none flex-col items-center justify-center pt-4">
      <div className="mb-12 flex w-full items-center justify-between px-4">
        <ThemeSwitcher />
        <Suspense fallback={<Spinner size={32} color={theme === 'light' ? '#000' : '#fff'} />}>
          <Leader />
        </Suspense>
        <LangSwitcher />
      </div>
      <div className="w-2/3">
        <img
          draggable={false}
          src={theme === 'dark' ? '/logo-dark.webp' : '/logo-light.webp'}
          alt="kek"
        />
      </div>
    </header>
  )
}
