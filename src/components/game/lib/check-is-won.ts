export const checkIsWon = (cells: number[]) => {
  for (let i = 0; i < cells.length - 1; i++) {
    if (cells[i] !== i + 1) {
      return false
    }
  }

  return true
}
