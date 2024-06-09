import { useMutation } from '@tanstack/react-query'

import { postResult } from '@/api/post-result'
import { Leader } from '@/types/leader'

export const usePostResult = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (params: Leader) => postResult(params),
  })

  return {
    mutate: (
      params: Leader,
      options?: {
        onError?: (e: unknown) => void
        onSuccess?: () => void
      },
    ) => mutate(params, options),
    isPending,
  }
}
