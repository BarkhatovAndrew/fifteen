import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  isGameActive: boolean
}

export const Timer = memo(({ isGameActive }: Props) => {
  const { t } = useTranslation()
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (!isGameActive) {
      return
    }

    const intervalId = setInterval(() => setTime((prev) => prev + 1), 1000)

    return () => clearTimeout(intervalId)
  }, [isGameActive])

  return (
    <div className="w-[80px]">
      <p className="uppercase">{t('Time')}</p>
      <p className="truncate text-xl font-bold">
        {time}
        {t('s')}
      </p>
    </div>
  )
})
