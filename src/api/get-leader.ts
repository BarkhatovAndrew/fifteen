import { supabase } from '@/config/supabase/client'
import { Leader } from '@/types/leader'

type Response = {
  data: Leader[] | null
  error: unknown
}

export const getLeader = async (): Promise<Response> => {
  const { data, error } = await supabase
    .from('scores')
    .select()
    .order('score', { ascending: false })
    .limit(1)

  return { data, error }
}
