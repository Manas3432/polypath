import { create } from 'zustand'
import { supabase } from '../lib/supabase'

const useProgressStore = create((set, get) => ({
  progress: [],

  fetchProgress: async (userId, languageId) => {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('language_id', languageId)

    if (!error) {
      set((state) => ({
        progress: [
          ...state.progress.filter(p => p.language_id !== languageId),
          ...data,
        ]
      }))
    }
  },

  toggleLevel: async (userId, languageId, levelCode) => {
    const existing = get().progress.find(
      p => p.language_id === languageId && p.level_code === levelCode
    )

    if (existing) {
      await supabase
        .from('user_progress')
        .delete()
        .eq('id', existing.id)

      set({ progress: get().progress.filter(p => p.id !== existing.id) })
    } else {
      const { data, error } = await supabase
        .from('user_progress')
        .insert({ user_id: userId, language_id: languageId, level_code: levelCode, completed: true })
        .select()
        .single()

      if (!error) {
        set({ progress: [...get().progress, data] })
      }
    }
  },

  isCompleted: (languageId, levelCode) => {
    return get().progress.some(
      p => p.language_id === languageId && p.level_code === levelCode
    )
  },
}))

export default useProgressStore