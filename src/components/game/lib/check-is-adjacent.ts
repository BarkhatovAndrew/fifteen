export const checkIsAdjacent = (index1: number, index2: number) => {
  const row1 = Math.floor(index1 / 4)
  const col1 = index1 % 4
  const row2 = Math.floor(index2 / 4)
  const col2 = index2 % 4

  return (
    (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2)
  )
}
