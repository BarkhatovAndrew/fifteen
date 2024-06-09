import React from 'react'

type Props = {
  header: React.JSX.Element
  content: React.JSX.Element
  footer: React.JSX.Element
  modal: React.JSX.Element
}

export const Layout = ({ header, content, footer, modal }: Props) => {
  return (
    <div className="m-auto flex h-dvh w-[370px] flex-col gap-y-6 bg-orange-100 px-4 text-white sm:w-[500px] sm:gap-y-12 dark:bg-neutral-900">
      {header}
      {content}
      {footer}
      {modal}
    </div>
  )
}
