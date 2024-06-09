import { memo, useEffect, useState } from 'react'

type Props = {
  isStopped: boolean
}

export const Timer = memo(({ isStopped }: Props) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (isStopped) {
      return
    }

    const tick = () => {
      setTime((prev) => prev + 1)
    }

    const timerId = setTimeout(tick, 1000)

    return () => clearTimeout(timerId)
  }, [time, isStopped])

  return (
    <div className="w-[80px]">
      <p className="uppercase">Time</p>
      <p className="truncate text-xl font-bold">{time}s</p>
    </div>
  )
})
