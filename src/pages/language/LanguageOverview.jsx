import { useParams, Link } from 'react-router-dom'
import { getLanguageById } from '../../data/languages'
import { ROADMAPS } from '../../data/roadmaps'

const LanguageOverview = () => {
  const { languageId } = useParams()
  const lang = getLanguageById(languageId)
  const roadmap = ROADMAPS[languageId]

  if (!lang || !roadmap) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>Language not found</h2>
        <Link to="/" style={{ color: 'var(--color-brand)', fontWeight: 500 }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div>

      {/* ── Hero Banner ── */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: `linear-gradient(135deg, ${lang.colorDim} 0%, var(--color-bg) 60%)`,
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-lg)', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{lang.name}</span>
          </div>

          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '64px', lineHeight: 1 }}>{lang.flag}</span>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginBottom: '8px',
              }}>
                Learn {lang.name}
                <span style={{ color: lang.color }}> ·</span>
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '560px' }}>
                {lang.tagline}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 'var(--space-lg)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
            {[
              { label: 'Native speakers', value: lang.speakers },
              { label: 'Certifications', value: lang.exams.join(', ') },
              { label: 'Level system', value: lang.levelSystem },
              { label: 'Levels covered', value: `${lang.levels[0]} → ${lang.levels[lang.levels.length - 1]}` },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px var(--space-md)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: lang.color }}>{stat.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-xl)', alignItems: 'start' }}>

        {/* Left column */}
        <div>

          {/* About */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: 'var(--space-md)', color: 'var(--color-text-primary)' }}>
              About {lang.name}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              {roadmap.about}
            </p>
          </section>

          {/* Why learn */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Why learn {lang.name}?
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {roadmap.whyLearn.map((reason, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md)',
                }}>
                  <span style={{ color: lang.color, fontSize: '16px', marginTop: '1px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
              Realistic timeline
            </h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {Object.entries(roadmap.timeline).map(([stage, time]) => (
                <div key={stage} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md)',
                  flexWrap: 'wrap', gap: '8px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    textTransform: 'capitalize',
                  }}>
                    {stage}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '13px',
                    color: lang.colorText,
                    background: lang.colorDim,
                    padding: '4px 10px', borderRadius: '20px',
                  }}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Level preview */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700 }}>
                Roadmap overview
              </h2>
              <Link
                to={`/languages/${lang.id}/roadmap`}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
                  color: lang.color,
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}
              >
                Full roadmap →
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {roadmap.levels.map((level, i) => (
                <div key={level.code} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md)',
                  transition: 'border-color 0.2s',
                }}>
                  {/* Level badge */}
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
                    background: lang.colorDim, color: lang.colorText,
                    padding: '6px 12px', borderRadius: 'var(--radius-sm)',
                    flexShrink: 0, minWidth: '48px', textAlign: 'center',
                  }}>
                    {level.code}
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{level.name}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)' }}>· {level.duration}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {level.description}
                    </p>
                  </div>
                  {/* Arrow */}
                  <span style={{ color: lang.color, fontSize: '16px', flexShrink: 0 }}>›</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right sidebar ── */}
        <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

          {/* CTA Card */}
          <div style={{
            background: `linear-gradient(135deg, ${lang.colorDim}, var(--color-surface))`,
            border: `1px solid ${lang.color}44`,
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '12px' }}>{lang.flag}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
              Ready to start {lang.name}?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
              Follow the full step-by-step roadmap from absolute beginner to exam-ready.
            </p>
            <Link
              to={`/languages/${lang.id}/roadmap`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                background: lang.color, color: '#fff',
                padding: '12px', borderRadius: 'var(--radius-md)',
                textAlign: 'center', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              View full roadmap →
            </Link>
          </div>

          {/* Exams Card */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, marginBottom: 'var(--space-md)', color: 'var(--color-text-primary)' }}>
              Certifications
            </h3>
            {roadmap.exams.map(exam => (
              <div key={exam.name} style={{
                paddingBottom: 'var(--space-md)', marginBottom: 'var(--space-md)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600, color: lang.color }}>{exam.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)', background: 'var(--color-surface-2)', padding: '2px 8px', borderRadius: '12px' }}>
                    {exam.validity}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {exam.whyTakeIt}
                </p>
              </div>
            ))}
          </div>

          {/* Other languages */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Other languages
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['spanish', 'french', 'japanese', 'german', 'korean']
                .filter(id => id !== languageId)
                .map(id => {
                  const names = { spanish: '🇪🇸 Spanish', french: '🇫🇷 French', japanese: '🇯🇵 Japanese', german: '🇩🇪 German', korean: '🇰🇷 Korean' }
                  return (
                    <Link key={id} to={`/languages/${id}`} style={{
                      fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-surface-2)',
                      padding: '6px 12px', borderRadius: 'var(--radius-sm)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                      {names[id]}
                    </Link>
                  )
                })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LanguageOverview

