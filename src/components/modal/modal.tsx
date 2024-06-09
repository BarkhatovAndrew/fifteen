import { useRef } from 'react'

type Props = {
  text: string
  open: boolean
}

export const Modal = ({ text, open }: Props) => {
  const ref = useRef<HTMLDialogElement>(null)

  if (open) {
    ref.current?.showModal()
  }

  return (
    <dialog
      className="rounded-2xl bg-neutral-800 p-12 text-3xl uppercase text-white focus-visible:outline-none"
      open={open}
      ref={ref}
    >
      {text}
    </dialog>
  )
}
