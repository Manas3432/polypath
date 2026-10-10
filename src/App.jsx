import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import LanguageOverview from './pages/language/LanguageOverview'
import Roadmap from './pages/language/Roadmap'
import ExamGuide from './pages/exam/ExamGuide'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import NotFound from './pages/NotFound' 
import Dashboard from './pages/DashBoard/Dashboard'
import { AnimatePresence } from 'framer-motion'
import AnimatedPage from './components/AnimatedPage'
import Books from './pages/Books'
import ScrollToTop from './components/ScrollToTop'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/languages/:languageId" element={<AnimatedPage><LanguageOverview /></AnimatedPage>} />
        <Route path="/languages/:languageId/roadmap" element={<AnimatedPage><Roadmap /></AnimatedPage>} />
        <Route path="/exams/:examId" element={<AnimatedPage><ExamGuide /></AnimatedPage>} />
        <Route path="/signup" element={<AnimatedPage><SignUp /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
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