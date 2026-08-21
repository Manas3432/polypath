import { useParams, Link } from 'react-router-dom'
import { getExamById } from '../../data/exams'
import SEO from '../components/SEO'; 

const ExamGuide = () => {
  const { examId } = useParams()
  const exam = getExamById(examId)

  if (!exam) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <SEO
  title={`${exam.name} Guide`}
  description={`Complete guide to the ${exam.name} exam — structure, prep resources, and tips.`}
/>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>Exam not found</h2>
        <Link to="/" style={{ color: 'var(--color-brand)', fontWeight: 500 }}>← Back to home</Link>
      </div>
    )
  }

  /* Map language to color */
  const LANG_COLORS = {
    spanish: { color: '#E8A03A', colorDim: '#FEF3E2', colorText: '#A0620A' },
    french:  { color: '#9B8BE8', colorDim: '#F0EDFD', colorText: '#5842B0' },
    japanese:{ color: '#E85858', colorDim: '#FEF0F0', colorText: '#A02020' },
    german:  { color: '#4A9FE8', colorDim: '#EDF5FE', colorText: '#1A5C9A' },
    korean:  { color: '#3DCFA3', colorDim: '#E6FAF5', colorText: '#1A7A5E' },
  }
  const lc = LANG_COLORS[exam.language]

  return (
    <div>
<SEO
  title={`${exam.name} Guide`}
  description={`Complete guide to the ${exam.name} exam — structure, prep resources, and tips.`}
/>
      {/* ── Header ── */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: `linear-gradient(135deg, ${lc.colorDim} 0%, var(--color-bg) 60%)`,
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-lg)', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
            <span>›</span>
            <Link to={`/languages/${exam.language}`} style={{ color: 'var(--color-text-muted)' }}>{exam.languageName}</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{exam.name}</span>
          </div>

          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '52px', lineHeight: 1 }}>{exam.flag}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
                  letterSpacing: '-0.03em', color: 'var(--color-text-primary)',
                }}>
                  {exam.name}
                </h1>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600,
                  background: lc.colorDim, color: lc.colorText,
                  padding: '4px 10px', borderRadius: '20px',
                }}>
                  {exam.validity}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {exam.fullName}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {exam.conductedBy}
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
            {[
              { label: 'Levels', value: exam.levels.join(', ') },
              { label: 'Frequency', value: exam.frequency },
              { label: 'Validity', value: exam.validity },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '10px var(--space-md)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600, color: lc.color }}>{stat.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        maxWidth: '860px', margin: '0 auto',
        padding: 'var(--space-xl) var(--space-lg)',
        display: 'grid', gridTemplateColumns: '1fr 280px',
        gap: 'var(--space-xl)', alignItems: 'start',
      }}>

        {/* Left column */}
        <div>

          {/* About */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              About {exam.name}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              {exam.about}
            </p>
          </section>

          {/* Who should take it */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Who should take it?
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {exam.whoShouldTakeIt.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                }}>
                  <span style={{ color: lc.color, fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exam structure */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Exam structure
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {exam.structure.map((section, i) => (
                <div key={i} style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  borderLeft: `3px solid ${lc.color}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {section.section}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '12px',
                      color: lc.colorText, background: lc.colorDim,
                      padding: '3px 10px', borderRadius: '12px',
                    }}>
                      {section.duration}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Prep strategy */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Prep strategy
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {exam.prepStrategy.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 'var(--space-md)',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
                    color: lc.colorText, background: lc.colorDim,
                    padding: '4px 10px', borderRadius: 'var(--radius-sm)',
                    flexShrink: 0, height: 'fit-content', whiteSpace: 'nowrap',
                  }}>
                    {step.phase}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {step.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended books */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Recommended books
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {exam.recommendedBooks.map((book, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  gap: 'var(--space-md)', flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '3px' }}>
                      {book.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      {book.author}
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600,
                    color: lc.colorText, background: lc.colorDim,
                    padding: '4px 12px', borderRadius: '20px', flexShrink: 0,
                  }}>
                    {book.level}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

          {/* Level recommendation */}
          <div style={{
            background: `linear-gradient(135deg, ${lc.colorDim}, var(--color-surface))`,
            border: `1px solid ${lc.color}44`,
            borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>
              Which level to target?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {exam.levelRecommendation}
            </p>
          </div>

          {/* Useful links */}
          <div style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, marginBottom: 'var(--space-md)', color: 'var(--color-text-primary)' }}>
              Official links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exam.usefulLinks.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                  color: lc.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '8px',
                  padding: '10px var(--space-md)',
                  background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = lc.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  {link.label}
                  <span style={{ fontSize: '14px' }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to language */}
          <Link to={`/languages/${exam.language}`} style={{
            fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
            color: 'var(--color-text-secondary)',
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)',
            textAlign: 'center', display: 'block', transition: 'border-color 0.15s, color 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = lc.color; e.currentTarget.style.color = lc.color }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
          >
            ← Back to {exam.languageName}
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ExamGuide
