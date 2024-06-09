import React, { createContext } from 'react'

type Context = {
  modal?: React.JSX.Element
  setModal: (modal: React.JSX.Element | undefined) => void
}

export const ModalContext = createContext<Context>({ setModal: () => {} })
