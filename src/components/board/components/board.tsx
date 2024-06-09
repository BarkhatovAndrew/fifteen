import { Cell } from './cell'

type Props = {
  makeMove: (index: number) => void
  cells: Array<number | null>
}

export const Board = ({ makeMove, cells }: Props) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-3">
      {cells.map((item, index) => (
        <Cell value={item} key={item} position={index} onClick={() => makeMove(index)} />
      ))}
    </div>
  )
}
