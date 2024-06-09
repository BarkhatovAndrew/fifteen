import { ReactNode, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

import { useModal } from '@/components/ui/modal-provider'

type Props = {
  content: ReactNode
}

export const Modal = ({ content }: Props) => {
  const { setModal } = useModal()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModal(undefined)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setModal])

  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center sm:inset-0">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative w-full rounded-t-2xl bg-orange-300 pb-6 pt-12 text-3xl text-neutral-900 sm:w-fit sm:rounded-b-2xl sm:px-6 dark:bg-neutral-800 dark:text-white">
        <div className="flex flex-col items-center gap-y-6">{content}</div>
        <button
          className="absolute right-3 top-3 focus-visible:outline-none active:scale-95"
          onClick={() => setModal(undefined)}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  )
}
