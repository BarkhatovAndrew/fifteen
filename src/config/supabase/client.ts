import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://chfoarukbjrhheikyhgf.supabase.co'

export const supabase = createClient(SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
