export const checkIsArraySolvable = (puzzle: number[]): boolean => {
  const size = Math.sqrt(puzzle.length)

  if (size % 1 !== 0) {
    throw new Error('The puzzle is not a square')
  }

  const emptyTileIndex = puzzle.indexOf(0)
  const rowFromBottom = size - Math.floor(emptyTileIndex / size)

  const inversions = getInversions(puzzle.filter((num) => num !== 0))

  if (size % 2 === 1) {
    return inversions % 2 === 0
  } else {
    if (rowFromBottom % 2 === 1) {
      return inversions % 2 === 0
    } else {
      return inversions % 2 === 1
    }
  }
}

const getInversions = (arr: number[]): number => {
  let inversions = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversions++
      }
    }
  }
  return inversions
}
