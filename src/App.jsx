import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from './lib/supabase'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import LanguageOverview from './pages/language/LanguageOverview'
import Roadmap from './pages/language/Roadmap'
import Exams from './pages/Exams'
import ExamGuide from './pages/exam/ExamGuide'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import NotFound from './pages/NotFound' 
import Dashboard from './pages/DashBoard/Dashboard'
import { AnimatePresence } from 'framer-motion'
import AnimatedPage from './components/AnimatedPage'
import Books from './pages/Books'
import ScrollToTop from './components/ScrollToTop'

const AuthRecoveryListener = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // 1. If URL contains recovery token in hash or query, navigate to /reset-password
    const hasRecoveryHash = window.location.hash.includes('type=recovery')
    const hasRecoveryParam = new URLSearchParams(window.location.search).get('type') === 'recovery'

    if ((hasRecoveryHash || hasRecoveryParam) && location.pathname !== '/reset-password') {
      navigate('/reset-password' + window.location.hash + window.location.search, { replace: true })
    }

    // 2. Listen for Supabase PASSWORD_RECOVERY event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        navigate('/reset-password')
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [navigate, location.pathname])

  return null
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/languages/:languageId" element={<AnimatedPage><LanguageOverview /></AnimatedPage>} />
        <Route path="/languages/:languageId/roadmap" element={<AnimatedPage><Roadmap /></AnimatedPage>} />
        <Route path="/exams" element={<AnimatedPage><Exams /></AnimatedPage>} />
        <Route path="/exams/:examId" element={<AnimatedPage><ExamGuide /></AnimatedPage>} />
        <Route path="/signup" element={<AnimatedPage><SignUp /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/forgot-password" element={<AnimatedPage><ForgotPassword /></AnimatedPage>} />
        <Route path="/reset-password" element={<AnimatedPage><ResetPassword /></AnimatedPage>} />
        <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
        <Route path="/books" element={<AnimatedPage><Books /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthRecoveryListener />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App