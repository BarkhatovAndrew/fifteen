import { useTranslation } from 'react-i18next'

type Props = {
  moves: number
}

export const Moves = ({ moves }: Props) => {
  const { t } = useTranslation()

  return (
    <div>
      <p className="uppercase">{t('Moves')}</p>
      <p className="text-xl font-bold">{moves}</p>
    </div>
  )
}
