import { useCallback, useEffect, useRef, useState } from 'react'

import { Howl } from 'howler'

import { Board } from '@/components/board'
import { GameInfo } from '@/components/game-info'
import { WinModalLazy } from '@/components/game/win-modal-lazy'
import { useModal } from '@/components/ui/modal-provider'

import { checkIsAdjacent } from './lib/check-is-adjacent'
import { checkIsWon } from './lib/check-is-won'
import { initialCells } from './lib/initial-cells'
import { shuffleSolvableArray } from './lib/shuffle-solvable-array'

const audio = new Howl({ src: ['/sounds/move.wav'], preload: false })

export const Game = () => {
  const [moves, setMoves] = useState(0)
  const [cells, setCells] = useState(() => shuffleSolvableArray(initialCells))
  const [isWon, setIsWon] = useState(false)
  const [isGameActive, setIsGameActive] = useState(false)

  const { setModal } = useModal()
  const timerRef = useRef(0)

  const startNewGame = useCallback(() => {
    setCells(shuffleSolvableArray(initialCells))
    setMoves(0)
    setIsWon(false)
    setIsGameActive(false)
    timerRef.current = 0
  }, [])

  const playSound = () => {
    audio.load()
    audio.play()
  }

  const makeMove = (index: number) => {
    if (isWon) {
      return
    }

    if (moves === 0) {
      setIsGameActive(true)
    }

    playSound()

    const emptyIndex = cells.indexOf(0)

    if (checkIsAdjacent(index, emptyIndex)) {
      const newCells = [...cells]
      ;[newCells[index], newCells[emptyIndex]] = [newCells[emptyIndex], newCells[index]]

      setCells(newCells)
      setMoves((prev) => prev + 1)

      if (checkIsWon(newCells)) {
        setIsWon(true)
        setIsGameActive(false)
        setModal(<WinModalLazy time={timerRef.current} moves={moves} />)
      }
    }
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (isGameActive) {
      interval = setInterval(() => {
        timerRef.current++
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isGameActive])

  return (
    <main>
      <GameInfo isGameActive={isGameActive} moves={moves} startNewGame={startNewGame} />
      <Board cells={cells} isWon={isWon} makeMove={makeMove} />
    </main>
  )
}
