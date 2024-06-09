const k1 = 1
const k2 = 0.5
const k3 = 1000000

type Props = {
  time: number
  moves: number
}

export const calculateScore = ({ time, moves }: Props) => {
  return Math.floor((1 / (moves * k1 + time * k2)) * k3)
}
