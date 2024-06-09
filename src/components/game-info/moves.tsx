type Props = {
  moves: number
}

export const Moves = ({ moves }: Props) => {
  return (
    <div>
      <p className="uppercase">Moves</p>
      <p className="text-xl font-bold">{moves}</p>
    </div>
  )
}
