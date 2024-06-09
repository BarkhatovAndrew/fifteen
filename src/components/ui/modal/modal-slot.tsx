import { Suspense } from 'react'

import { useModal } from '@/components/ui/modal-provider'

export const ModalSlot = () => {
  const { modal } = useModal()

  if (!modal) {
    return null
  }

  return <Suspense fallback={null}>{modal}</Suspense>
}
