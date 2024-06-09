import React, { ReactNode, useMemo, useState } from 'react'

import { ModalContext } from './modal-context'

type Props = {
  children: ReactNode
}

export const ModalProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<React.JSX.Element | undefined>()

  const contextValue = useMemo(() => ({ modal, setModal }), [modal])

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
}
