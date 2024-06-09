export const initialCells = Array(16)
  .fill(null)
  .map((_, index) => (index !== 15 ? index + 1 : null))
