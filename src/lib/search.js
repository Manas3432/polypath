import { LANGUAGES } from '../data/languages'
import { EXAMS } from '../data/exams'
import { BOOKS } from '../data/books'

export const searchAll = (query) => {
  if (!query || query.trim() === '') return []

  const q = query.toLowerCase()
  const results = []

  LANGUAGES.forEach((lang) => {
    if (lang.name.toLowerCase().includes(q) || lang.nativeName.toLowerCase().includes(q)) {
      results.push({ type: 'Language', label: lang.name, path: `/languages/${lang.id}` })
    }
  })

  Object.values(EXAMS).forEach((exam) => {
    if (exam.name.toLowerCase().includes(q) || exam.fullName.toLowerCase().includes(q)) {
      results.push({ type: 'Exam', label: `${exam.name} (${exam.languageName})`, path: `/exams/${exam.id}` })
    }
  })

  BOOKS.forEach((book) => {
    if (book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q)) {
      results.push({ type: 'Book', label: book.title, path: '/books' })
    }
  })

  return results
}