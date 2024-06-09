import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-4 pb-12">
      <p className="text-center text-neutral-500">{t('Made by Barkhatov Andrew')}</p>
      <div className="flex justify-center gap-x-4">
        <a href="https://www.linkedin.com/in/andrew-barkhatov-8ba999231/" target="_blank">
          <FaLinkedin
            size={24}
            className="cursor-pointer fill-slate-800 hover:fill-amber-300 dark:fill-white dark:hover:fill-amber-300"
          />
        </a>
        <a href="https://t.me/barkhatovandrew" target="_blank">
          <FaTelegramPlane
            size={24}
            className="cursor-pointer fill-slate-800 hover:fill-amber-300 dark:fill-white dark:hover:fill-amber-300"
          />
        </a>
        <a href="https://github.com/BarkhatovAndrew" target="_blank">
          <FaGithub
            size={24}
            className="cursor-pointer fill-slate-800 hover:fill-amber-300 dark:fill-white dark:hover:fill-amber-300"
          />
        </a>
      </div>
    </div>
  )
}
