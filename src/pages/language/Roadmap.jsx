import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLanguageById } from '../../data/languages'
import { ROADMAPS } from '../../data/roadmaps'

/* ── Resource type colors ── */
const TYPE_STYLES = {
  App:      { bg: '#EEF2FF', color: '#4338CA' },
  Book:     { bg: '#FEF3E2', color: '#A0620A' },
  Course:   { bg: '#F0FDF4', color: '#16803C' },
  Video:    { bg: '#FEF0F0', color: '#A02020' },
  Audio:    { bg: '#F5F3FF', color: '#7C3AED' },
  Podcast:  { bg: '#FFF7ED', color: '#C2410C' },
  Reading:  { bg: '#EFF6FF', color: '#1D4ED8' },
  Immersion:{ bg: '#F0FDFA', color: '#0F766E' },
  Speaking: { bg: '#FDF4FF', color: '#9333EA' },
}

/* ── Single Level Card ── */
const LevelCard = ({ level, lang, index, isLast }) => {
  const [open, setOpen] = useState(index === 0)

  return (
    <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}>

      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '18px' }}>
        {/* Node */}
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: open ? lang.color : 'var(--color-surface)',
          border: `2px solid ${lang.color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
          color: open ? '#fff' : lang.color,
          transition: 'all 0.2s ease',
          flexShrink: 0, zIndex: 1,
        }}>
          {index + 1}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div style={{
            width: '2px',
            flex: 1,
            minHeight: '24px',
            background: `linear-gradient(to bottom, ${lang.color}66, ${lang.color}22)`,
            marginTop: '4px',
          }} />
        )}
      </div>

      {/* Card */}
      <div style={{
        flex: 1,
        marginBottom: isLast ? 0 : 'var(--space-md)',
        background: 'var(--color-surface)',
        border: `1px solid ${open ? lang.color + '66' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        boxShadow: open ? `0 4px 24px ${lang.color}18` : 'none',
      }}>

        {/* Card header — always visible */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center',
            gap: 'var(--space-md)', padding: 'var(--space-md) var(--space-lg)',
            background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          {/* Level badge */}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
            background: lang.colorDim, color: lang.colorText,
            padding: '5px 12px', borderRadius: 'var(--radius-sm)', flexShrink: 0,
          }}>
            {level.code}
          </span>

          {/* Name + duration */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {level.name}
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                · {level.duration}
              </span>
            </div>
            {!open && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {level.description}
              </p>
            )}
          </div>

          {/* Chevron */}
          <span style={{
            color: lang.color, fontSize: '18px', flexShrink: 0,
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            fontWeight: 300,
          }}>
            ›
          </span>
        </button>

        {/* Expanded content */}
        {open && (
          <div style={{ padding: '0 var(--space-lg) var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', lineHeight: 1.7,
              margin: 'var(--space-md) 0',
            }}>
              {level.description}
            </p>

            {/* Skills */}
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
                color: 'var(--color-text-muted)', textTransform: 'uppercase',
                letterSpacing: '0.06em', marginBottom: 'var(--space-sm)',
              }}>
                What you'll learn
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {level.skills.map((skill, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    padding: '5px 12px', borderRadius: '20px',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
                color: 'var(--color-text-muted)', textTransform: 'uppercase',
                letterSpacing: '0.06em', marginBottom: 'var(--space-sm)',
              }}>
                Recommended resources
              </h4>
              <div style={{ display: 'grid', gap: '8px' }}>
                {level.resources.map((res, i) => {
                  const typeStyle = TYPE_STYLES[res.type] || TYPE_STYLES.App
                  return (
                    <a
                      key={i}
                      href={res.url !== '#' ? res.url : undefined}
                      target={res.url !== '#' ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 'var(--space-md)',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: '10px var(--space-md)',
                        textDecoration: 'none',
                        cursor: res.url !== '#' ? 'pointer' : 'default',
                        transition: 'border-color 0.15s',
                      }}
                      onMouseEnter={e => { if (res.url !== '#') e.currentTarget.style.borderColor = lang.color }}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                        {/* Type badge */}
                        <span style={{
                          fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                          background: typeStyle.bg, color: typeStyle.color,
                          padding: '3px 8px', borderRadius: '4px', flexShrink: 0,
                        }}>
                          {res.type}
                        </span>
                        {/* Name */}
                        <span style={{
                          fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                          color: 'var(--color-text-primary)',
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>
                          {res.name}
                        </span>
                      </div>
                      {/* Free/Paid + link arrow */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <span style={{
                          fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                          color: res.free ? '#16803C' : 'var(--color-text-muted)',
                          background: res.free ? '#F0FDF4' : 'var(--color-surface-2)',
                          padding: '2px 8px', borderRadius: '12px',
                        }}>
                          {res.free ? 'Free' : 'Paid'}
                        </span>
                        {res.url !== '#' && (
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>↗</span>
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Roadmap Page ── */
const Roadmap = () => {
  const { languageId } = useParams()
  const lang = getLanguageById(languageId)
  const roadmap = ROADMAPS[languageId]

  if (!lang || !roadmap) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>Roadmap not found</h2>
        <Link to="/" style={{ color: 'var(--color-brand)', fontWeight: 500 }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div>

      {/* ── Header ── */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: `linear-gradient(135deg, ${lang.colorDim} 0%, var(--color-bg) 60%)`,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-lg)', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
            <span>›</span>
            <Link to={`/languages/${lang.id}`} style={{ color: 'var(--color-text-muted)' }}>{lang.name}</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>Roadmap</span>
          </div>

          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
            <span style={{ fontSize: '40px', lineHeight: 1 }}>{lang.flag}</span>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--color-text-primary)',
              }}>
                {lang.name} Roadmap
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                {lang.levels[0]} → {lang.levels[lang.levels.length - 1]} · {roadmap.levels.length} levels · Click any level to expand
              </p>
            </div>
          </div>

          {/* Level pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {roadmap.levels.map((level, i) => (
              <span key={level.code} style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600,
                background: lang.colorDim, color: lang.colorText,
                padding: '5px 12px', borderRadius: '20px',
              }}>
                {level.code}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Roadmap timeline ── */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
        {roadmap.levels.map((level, i) => (
          <LevelCard
            key={level.code}
            level={level}
            lang={lang}
            index={i}
            isLast={i === roadmap.levels.length - 1}
          />
        ))}

        {/* Bottom CTA */}
        <div style={{
          marginTop: 'var(--space-xl)',
          background: 'var(--color-surface)',
          border: `1px solid ${lang.color}44`,
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '32px', display: 'block', marginBottom: '12px' }}>🎯</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
            Ready to take the exam?
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>
            Check out our {lang.exams.join(' and ')} exam guide — structure, prep strategy, and recommended books.
          </p>
          <Link
            to={`/languages/${lang.id}`}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
              background: lang.color, color: '#fff',
              padding: '12px 24px', borderRadius: 'var(--radius-md)',
              display: 'inline-block', transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View exam guides →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

