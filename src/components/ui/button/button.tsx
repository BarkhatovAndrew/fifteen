import { memo } from 'react'

import { Spinner } from '@/components/spinner'
import { clsx } from '@/utils/clsx'

type Props = {
  text: string
  appearance?: 'primary' | 'secondary'
  isLoading?: boolean
} & JSX.IntrinsicElements['button']

export const Button = memo(
  ({ text, onClick, appearance = 'primary', isLoading, ...rest }: Props) => {
    return (
      <button
        className={clsx(
          'flex items-center justify-center rounded-xl px-6 py-4 text-xl active:scale-[99%] disabled:pointer-events-none disabled:opacity-80',
          appearance === 'primary' &&
            'bg-orange-300 text-slate-900 hover:betterhover:bg-amber-400 hover:betterhover:text-neutral-900 dark:bg-neutral-800 dark:text-white',
          appearance === 'secondary' &&
            'bg-blue-300 hover:betterhover:bg-blue-400 dark:bg-amber-400 dark:text-neutral-900 dark:hover:betterhover:bg-amber-300',
        )}
        onClick={onClick}
        {...rest}
      >
        {isLoading ? <Spinner size={32} color="#000" /> : text}
      </button>
    )
  },
)
