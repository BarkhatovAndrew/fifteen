import { useTranslation } from 'react-i18next'
import { MdOutlineTranslate } from 'react-icons/md'

import { useTheme } from '@/components/ui/theme-provider'
import { clsx } from '@/utils/clsx'

export const LangSwitcher = () => {
  const { i18n } = useTranslation()
  const { theme } = useTheme()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button>
      <MdOutlineTranslate
        onClick={toggleLang}
        size={32}
        className={clsx('active:scale-95', theme === 'light' ? 'fill-slate-950' : '')}
      />
    </button>
  )
}
