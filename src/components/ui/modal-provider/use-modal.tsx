import { useContext } from 'react'

import { ModalContext } from './modal-context'

export const useModal = () => {
  const { modal, setModal } = useContext(ModalContext)

  return {
    modal,
    setModal,
  }
}
