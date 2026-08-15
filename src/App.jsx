import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import LanguageOverview from './pages/language/LanguageOverview'
import Roadmap from './pages/language/Roadmap'
import ExamGuide from './pages/exam/ExamGuide'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import NotFound from './pages/NotFound'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages/:languageId" element={<LanguageOverview />} />
            <Route path="/languages/:languageId/roadmap" element={<Roadmap />} />
            <Route path="/exams/:examId" element={<ExamGuide />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App