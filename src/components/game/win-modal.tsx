import { SyntheticEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Howl } from 'howler'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useModal } from '@/components/ui/modal-provider'
import { usePostResult } from '@/hooks/use-post-result'
import { clsx } from '@/utils/clsx'

import { calculateScore } from './lib/calculate-score'
import { containsBannedPatterns } from './lib/check-banned-words'

type Props = {
  moves: number
  time: number
}

const audio = new Howl({ src: ['/sounds/win.wav'], preload: false })

export const WinModal = ({ moves, time }: Props) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [isInputError, setIsInputError] = useState(false)
  const { mutate, isPending } = usePostResult()

  const { setModal } = useModal()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const isLatin = /^[a-zA-Z]+$/.test(name)

    if (name.length < 3 || name.length > 12 || !isLatin || containsBannedPatterns(name)) {
      setIsInputError(true)
      setTimeout(() => setIsInputError(false), 200)
      return
    }

    const score = calculateScore({ time, moves })

    mutate({ moves, time, name, score }, { onSuccess: () => setModal(undefined) })
  }

  useEffect(() => {
    audio.load()
    audio.play()
  }, [])

  return (
    <Modal
      content={
        <>
          <p className="text-6xl">🎉</p>
          <p className="font-bold">{t('You have won!')}</p>
          <div>
            <p className="text-xl">
              {t('Your moves')}: {moves}
            </p>
            <p className="text-xl">
              {t('Your time')}: {time}
              {t('s')}
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
            <input
              type="text"
              value={name}
              className={clsx(
                'block w-full rounded-lg p-3 text-xl text-neutral-900 focus:outline-none',
                isInputError && 'animate-error',
              )}
              placeholder="John Wick"
              onChange={(e) => {
                setName(e.target.value)
                setIsInputError(false)
              }}
            />
            <Button
              disabled={isPending}
              isLoading={isPending}
              appearance="secondary"
              text={t('Share result')}
              type="submit"
            />
          </form>
        </>
      }
    />
  )
}
