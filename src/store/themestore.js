import { create } from 'zustand'

const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem('theme') || 'light',

  toggleTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    set({ theme: newTheme })
  },

  init: () => {
    const theme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', theme)
    set({ theme })
  },
}))

export default useThemeStore