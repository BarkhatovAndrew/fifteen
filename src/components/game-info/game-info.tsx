import { Button } from '@/components/ui/button'

import { Moves } from './moves'
import { Timer } from './timer'

type Props = {
  isWon: boolean
  startNewGame: () => void
  moves: number
}

export const GameInfo = ({ isWon, startNewGame, moves }: Props) => {
  return (
    <div className="mb-6 flex justify-between">
      <Button text="New Game" onClick={startNewGame} />
      <div className="flex gap-x-4 rounded-xl bg-neutral-800 px-6 py-4">
        <Timer isStopped={isWon || moves === 0} key={moves === 0 ? Math.random() : 'first'} />
        <Moves moves={moves} />
      </div>
    </div>
  )
}
