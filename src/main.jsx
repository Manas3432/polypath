import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import useAuthStore from './store/authStore'
import { HelmetProvider } from 'react-helmet-async'
import useThemeStore from './store/themestore'
useAuthStore.getState().init()
useThemeStore.getState().init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)