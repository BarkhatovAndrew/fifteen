import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

import { Moves } from './moves'
import { Timer } from './timer'

type Props = {
  startNewGame: () => void
  moves: number
  isGameActive: boolean
}

export const GameInfo = ({ startNewGame, moves, isGameActive }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="mb-3 flex justify-between gap-x-2 sm:mb-6">
      <Button text={t('New Game')} onClick={startNewGame} />
      <div className="flex gap-x-4 rounded-xl bg-orange-300 px-6 py-4 text-slate-900 dark:bg-neutral-800 dark:text-white">
        <Timer isGameActive={isGameActive} key={moves === 0 ? Math.random() : 1} />
        <Moves moves={moves} />
      </div>
    </div>
  )
}
