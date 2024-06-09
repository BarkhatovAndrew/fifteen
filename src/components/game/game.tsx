import { useCallback, useState } from 'react'

import { Board } from '@/components/board'
import { GameInfo } from '@/components/game-info'
import { shuffleArray } from '@/utils/shuffleArray'

import { checkIsAdjacent } from './lib/checkIsAdjacent'
import { checkIsWon } from './lib/checkIsWon'
import { initialCells } from './lib/initialCells'

export const Game = () => {
  const [moves, setMoves] = useState(0)
  const [cells, setCells] = useState(initialCells)
  const [isWon, setIsWon] = useState(false)

  const startNewGame = useCallback(() => {
    setCells(shuffleArray(initialCells))
    setMoves(0)
    setIsWon(false)
  }, [])

  const makeMove = (index: number) => {
    if (isWon) {
      return
    }

    const emptyIndex = cells.indexOf(null)

    if (checkIsAdjacent(index, emptyIndex)) {
      const newCells = [...cells]
      ;[newCells[index], newCells[emptyIndex]] = [newCells[emptyIndex], newCells[index]]

      setCells(newCells)
      setMoves((prev) => prev + 1)

      setIsWon(checkIsWon(newCells))
    }
  }

  return (
    <main>
      <GameInfo moves={moves} isWon={isWon} startNewGame={startNewGame} />
      <Board cells={cells} makeMove={makeMove} />
    </main>
  )
}
