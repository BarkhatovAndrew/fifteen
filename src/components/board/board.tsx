import { Cell } from './cell'

type Props = {
  makeMove: (index: number) => void
  cells: number[]
  isWon: boolean
}

export const Board = ({ makeMove, cells, isWon }: Props) => {
  const emptyIndex = cells.indexOf(0)

  return (
    <div className="grid touch-none grid-cols-4 grid-rows-4 gap-3">
      {cells.map((item, index) => (
        <Cell
          value={item}
          key={item}
          position={index}
          isWon={isWon}
          emptyIndex={emptyIndex}
          onClick={() => makeMove(index)}
        />
      ))}
    </div>
  )
}
