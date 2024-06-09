import { useSuspenseQuery } from '@tanstack/react-query'

import { getLeaders } from '@/api/get-leaders'

export const useGetLeaders = () => {
  return useSuspenseQuery({
    queryKey: ['leaders-top'],
    queryFn: getLeaders,
    select: (data) => data?.data,
  })
}
