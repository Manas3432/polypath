import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EXAMS } from '../data/exams'
import { LANGUAGES } from '../data/languages'
import SEO from '../components/SEO'

/* ── Exam Card ── */
const ExamCard = ({ exam }) => {
  const lang = LANGUAGES.find(l => l.id === exam.language)
  const color = lang?.color || 'var(--color-brand)'

  return (
    <Link
      to={`/exams/${exam.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = `0 12px 32px ${color}22`
        e.currentTarget.style.borderColor = color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      <div>
        {/* Top row — flag + validity badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
          <span style={{ fontSize: '32px', lineHeight: 1 }}>{exam.flag}</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            background: `color-mix(in srgb, ${color} 18%, var(--color-bg))`,
            color: color,
            padding: '3px 8px',
            borderRadius: '20px',
          }}>
            {exam.validity.split('—')[0].trim()}
          </span>
        </div>

        {/* Name + language */}
        <div style={{ marginBottom: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}>
              {exam.name}
            </h3>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 600,
              color: color,
            }}>
              {exam.languageName}
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-text-muted)',
            marginTop: '4px',
            marginBottom: 'var(--space-sm)',
            lineHeight: 1.4,
          }}>
            {exam.conductedBy}
          </p>
        </div>

        {/* Levels */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: 'var(--space-md)' }}>
          {exam.levels.map(lvl => (
            <span key={lvl} style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              background: 'var(--color-surface-2)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-sm)',
            }}>
              {lvl}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        marginTop: 'var(--space-md)',
        paddingTop: 'var(--space-md)',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 600,
          color: color,
          fontFamily: 'var(--font-body)',
        }}>
          Exam guide & tips
        </span>
        <span style={{ color: color, fontSize: '16px' }}>→</span>
      </div>
    </Link>
  )
}

/* ── Exams Page ── */
const Exams = () => {
  const [activeLanguage, setActiveLanguage] = useState('all')

  const examList = Object.values(EXAMS)
  const filteredExams = activeLanguage === 'all'
    ? examList
    : examList.filter(e => e.language === activeLanguage)

  return (
    <div>
      <SEO
        title="Official Exam Guides"
        description="Comprehensive guides to DELE, DELF, JLPT, Goethe-Zertifikat, TOPIK, HSK, and HSKK language certifications."
      />

      {/* Header banner */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '8px',
          }}>
            Official Exam Guides
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-lg)',
          }}>
            Test structures, scoring criteria, preparation strategies, and practice resources for all major certifications.
          </p>

          {/* Language filter pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveLanguage('all')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '6px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                border: '1px solid var(--color-border)',
                background: activeLanguage === 'all' ? 'var(--color-brand)' : 'var(--color-surface)',
                color: activeLanguage === 'all' ? '#fff' : 'var(--color-text-secondary)',
                transition: 'all 0.15s',
              }}
            >
              All
            </button>
            {LANGUAGES.map(lang => (
              <button
                key={lang.id}
                onClick={() => setActiveLanguage(lang.id)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '6px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  border: '1px solid ' + (activeLanguage === lang.id ? lang.color : 'var(--color-border)'),
                  background: activeLanguage === lang.id ? `color-mix(in srgb, ${lang.color} 18%, var(--color-bg))` : 'var(--color-surface)',
                  color: activeLanguage === lang.id ? lang.color : 'var(--color-text-secondary)',
                  transition: 'all 0.15s',
                }}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of exam cards */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-lg)',
        }}>
          {filteredExams.length} {filteredExams.length === 1 ? 'exam guide' : 'exam guides'}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
          gap: 'var(--space-md)',
        }}>
          {filteredExams.map(exam => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exams
