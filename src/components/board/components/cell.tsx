import { clsx } from '@/utils/clsx'

type Props = {
  value: number | null
  position: number
  onClick: () => void
}

export const Cell = ({ value, position, onClick }: Props) => {
  if (value === null) {
    return <div className="aspect-square" />
  }

  const isCellCorrect = value === position + 1

  return (
    <div
      onClick={onClick}
      className={clsx(
        'font-nabla flex aspect-square cursor-pointer select-none items-center justify-center rounded-2xl bg-sky-800 text-6xl drop-shadow-md transition hover:border-2 hover:border-amber-300',
        isCellCorrect && 'border-4 border-amber-300',
      )}
    >
      {value}
    </div>
  )
}
