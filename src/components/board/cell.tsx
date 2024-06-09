import { useState } from 'react'
import { checkIsAdjacent } from '@/components/game'
import { clsx } from '@/utils/clsx'

type Props = {
  value: number | null
  position: number
  emptyIndex: number
  isWon: boolean
  onClick: () => void
}

export const Cell = ({ value, position, emptyIndex, isWon, onClick }: Props) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const [direction, setDirection] = useState<string>()

  if (value === 0) {
    return <div className="aspect-square" />
  }

  const isCellCorrect = value === position + 1

  const getDirection = (index: number, emptyIndex: number) => {
    const rowDiff = Math.floor(index / 4) - Math.floor(emptyIndex / 4)
    const colDiff = (index % 4) - (emptyIndex % 4)

    if (rowDiff === 1) {
      return `-translate-y-[88px] sm:-translate-y-[120px]`
    }
    if (rowDiff === -1) {
      return `translate-y-[88px] sm:translate-y-[120px]`
    }
    if (colDiff === 1) {
      return `-translate-x-[88px] sm:-translate-x-[120px]`
    }
    if (colDiff === -1) {
      return `translate-x-[88px] sm:translate-x-[120px]`
    }
  }

  const handleClick = () => {
    if (isAnimated) {
      return
    }

    if (checkIsAdjacent(position, emptyIndex)) {
      const direction = getDirection(position, emptyIndex)
      if (!isWon && direction) {
        setDirection(direction)
        setIsAnimated(true)

        const timer = setTimeout(() => {
          setIsAnimated(false)
          onClick()
        }, 100)

        return () => clearTimeout(timer)
      }
    }
  }

  return (
    <div
      onClick={handleClick}
      onTouchEnd={handleClick}
      className={clsx(
        'flex cursor-pointer select-none items-center justify-center rounded-2xl bg-blue-300 text-5xl text-slate-800 drop-shadow-md transition-transform will-change-transform sm:text-6xl betterhover:hover:border-2 betterhover:hover:border-slate-900 dark:bg-sky-800 dark:text-white dark:betterhover:hover:border-amber-300',
        isCellCorrect && 'border-4 border-slate-900 dark:border-amber-300',
        isAnimated && direction,
      )}
      style={{ transition: isAnimated ? 'transform 100ms ease' : 'none' }}
    >
      {value}
    </div>
  )
}
