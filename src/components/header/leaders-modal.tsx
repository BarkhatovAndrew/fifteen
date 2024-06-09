import { useTranslation } from 'react-i18next'

import { Spinner } from '@/components/spinner'
import { Modal } from '@/components/ui/modal'
import { useGetLeaders } from '@/hooks/use-get-leaders'

export const LeadersModal = () => {
  const { t } = useTranslation()
  const { data, isLoading } = useGetLeaders()

  return (
    <Modal
      content={
        <>
          <p className="text-6xl">🏆</p>
          <p className="font-bold">{t('Top-10')}</p>
          {isLoading ? (
            <Spinner size={48} color="#fff" />
          ) : (
            <table className="w-full text-left text-sm sm:text-xl">
              <thead>
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">{t('Name')}</th>
                  <th className="px-4 py-2">{t('Moves')}</th>
                  <th className="px-4 py-2">{t('Time')}</th>
                  <th className="px-4 py-2">{t('Score')}</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2 text-center">{item.moves}</td>
                    <td className="px-4 py-2 text-center">{item.time}</td>
                    <td className="px-4 py-2 text-center">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      }
    />
  )
}
