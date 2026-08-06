import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import LanguageOverview from './pages/language/LanguageOverview'
import Roadmap from './pages/language/Roadmap'
import ExamGuide from './pages/exam/ExamGuide'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages/:languageId" element={<LanguageOverview />} />
          <Route path="/languages/:languageId/roadmap" element={<Roadmap />} />
          <Route path="/exams/:examId" element={<ExamGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
