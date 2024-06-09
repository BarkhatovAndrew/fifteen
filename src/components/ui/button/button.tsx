import { memo } from 'react'

type Props = {
  text: string
  onClick: () => void
}

export const Button = memo(({ text, onClick }: Props) => {
  return (
    <button
      className="rounded-xl bg-neutral-800 px-6 py-4 text-xl hover:bg-amber-600"
      onClick={onClick}
    >
      {text}
    </button>
  )
})
