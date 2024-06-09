import { shuffleArray } from '@/utils/shuffle-array'

import { checkIsArraySolvable } from './check-is-array-solvable'

export const shuffleSolvableArray = (cells: number[]): number[] => {
  let shuffledCells

  do {
    shuffledCells = shuffleArray([...cells])
  } while (!checkIsArraySolvable(shuffledCells))

  return shuffledCells
}
