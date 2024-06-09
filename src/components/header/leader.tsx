import { useTranslation } from 'react-i18next'

import { useModal } from '@/components/ui/modal-provider'
import { useGetLeader } from '@/hooks/use-get-leader'

import { LeadersModalLazy } from './leaders-modal-lazy'

export const Leader = () => {
  const { t } = useTranslation()
  const { setModal } = useModal()

  const { data: name } = useGetLeader()

  return (
    <>
      <div onClick={() => setModal(<LeadersModalLazy />)} className="cursor-pointer">
        <span className="relative inline-block transition before:absolute before:-inset-2 before:block before:-skew-y-3 before:bg-pink-500 hover:rotate-2">
          <span className="relative text-xs text-white">
            {t('Champion')}: <b className="text-xl">{name} 🏆</b>
          </span>
        </span>
      </div>
    </>
  )
}
