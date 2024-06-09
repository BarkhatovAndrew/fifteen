import React from 'react'

type Props = {
  children: React.JSX.Element | React.JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="m-auto flex h-dvh max-w-screen-sm flex-col gap-y-12 bg-neutral-900 px-24 text-white">
      {children}
    </div>
  )
}
