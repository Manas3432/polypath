import { create } from 'zustand'
import { supabase } from '../lib/supabase'

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  init: async () => {
    supabase.auth.onAuthStateChange((event, session) => {
      set({ user: session?.user ?? null })
      if (event === 'PASSWORD_RECOVERY') {
        if (typeof window !== 'undefined' && window.location.pathname !== '/reset-password') {
          window.location.replace('/reset-password')
        }
      }
    })

    const { data: { session } } = await supabase.auth.getSession()
    set({ user: session?.user ?? null, loading: false })
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },
}))

export default useAuthStore