import { useSuspenseQuery } from '@tanstack/react-query'

import { getLeader } from '@/api/get-leader'

export const useGetLeader = () => {
  return useSuspenseQuery({
    queryKey: ['leaders'],
    queryFn: getLeader,
    select: (data) => data?.data?.[0].name,
  })
}
