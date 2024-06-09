import { supabase } from '@/config/supabase/client'
import { Leader } from '@/types/leader'

export const postResult = async ({ name, time, score, moves }: Leader) => {
  const { data, error } = await supabase
    .from('scores')
    .insert([{ name, time, score, moves }])
    .select()

  return { data, error }
}
