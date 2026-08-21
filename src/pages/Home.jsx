import { Link } from 'react-router-dom'
import { LANGUAGES } from '../data/languages'
import SEO from '../components/SEO'; 

/* ── Language Card ── */
const LanguageCard = ({ lang }) => {
  return (
    <Link
      to={`/languages/${lang.id}`}
      style={{
        display: 'block',
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
        e.currentTarget.style.boxShadow = `0 12px 32px ${lang.color}22`
        e.currentTarget.style.borderColor = lang.color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      {/* Top row — flag + level badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
        <span style={{ fontSize: '36px', lineHeight: 1 }}>{lang.flag}</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          background: lang.colorDim,
          color: lang.colorText,
          padding: '4px 10px',
          borderRadius: '20px',
        }}>
          {lang.levels[0]} → {lang.levels[lang.levels.length - 1]}
        </span>
      </div>

      {/* Name + native */}
      <div style={{ marginBottom: 'var(--space-sm)' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '2px',
        }}>
          {lang.name}
        </h3>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--color-text-muted)',
        }}>
          {lang.nativeName} · {lang.speakers} speakers
        </span>
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
        marginBottom: 'var(--space-md)',
      }}>
        {lang.tagline}
      </p>

      {/* Exams */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {lang.exams.map(exam => (
          <span key={exam} style={{
            fontSize: '11px',
            fontWeight: 500,
            color: lang.colorText,
            background: lang.colorDim,
            padding: '3px 8px',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-body)',
          }}>
            {exam}
          </span>
        ))}
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
          color: lang.color,
          fontFamily: 'var(--font-body)',
        }}>
          View roadmap
        </span>
        <span style={{ color: lang.color, fontSize: '16px' }}>→</span>
      </div>
    </Link>
  )
}

/* ── How It Works Step ── */
const Step = ({ number, title, description }) => (
  <div style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
    <div style={{
      width: '44px', height: '44px',
      background: 'var(--color-brand-dim)',
      color: 'var(--color-brand)',
      borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700, fontSize: '16px',
      margin: '0 auto var(--space-md)',
    }}>
      {number}
    </div>
    <h4 style={{
      fontFamily: 'var(--font-display)',
      fontSize: '16px', fontWeight: 700,
      marginBottom: 'var(--space-sm)',
      color: 'var(--color-text-primary)',
    }}>
      {title}
    </h4>
    <p style={{
      fontSize: '14px',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6,
      maxWidth: '220px',
      margin: '0 auto',
    }}>
      {description}
    </p>
  </div>
)

/* ── Home Page ── */
const Home = () => {
  return (
    <div>
<SEO
        title="Home"
        description="Structured language learning roadmaps for Spanish, French, Japanese, German, and Korean — with exam prep and curated resources."
      />
      {/* ── Hero ── */}
      <section style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--space-lg)',
        textAlign: 'center',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--color-brand-dim)',
          color: 'var(--color-brand)',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-body)',
          marginBottom: 'var(--space-lg)',
        }}>
          <span>🗺️</span> Structured · Exam-ready · Free to start
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-lg)',
          maxWidth: '760px',
          margin: '0 auto var(--space-lg)',
        }}>
          Learn a language,{' '}
          <span style={{ color: 'var(--color-brand)' }}>the right way.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          maxWidth: '560px',
          margin: '0 auto var(--space-xl)',
          fontFamily: 'var(--font-body)',
        }}>
          Step-by-step roadmaps, curated resources, and exam guides for
          Spanish, French, Japanese, German, and Korean — all in one place.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#languages"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px', fontWeight: 600,
              background: 'var(--color-brand)', color: '#fff',
              padding: '14px 28px', borderRadius: 'var(--radius-md)',
              transition: 'opacity 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Pick a language →
          </a>
          <a
            href="#how-it-works"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px', fontWeight: 500,
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              padding: '14px 28px', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-strong)',
              transition: 'border-color 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-brand)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border-strong)'}
          >
            How it works
          </a>
        </div>
      </section>

      {/* ── Language Cards ── */}
      <section id="languages" style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '0 var(--space-lg) var(--space-2xl)',
      }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 700,
            marginBottom: 'var(--space-sm)',
          }}>
            Choose your language
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
          }}>
            Each language comes with a full roadmap, exam guide, and curated resources.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {LANGUAGES.map(lang => (
            <LanguageCard key={lang.id} lang={lang} />
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: 'var(--space-2xl) var(--space-lg)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 700,
            marginBottom: 'var(--space-sm)',
          }}>
            How Polypath works
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-xl)',
            fontFamily: 'var(--font-body)',
          }}>
            No confusion, no overwhelm. Just a clear path from day one.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Step
              number="1"
              title="Pick a language"
              description="Choose from Spanish, French, Japanese, German, or Korean based on your goal."
            />
            <Step
              number="2"
              title="Follow the roadmap"
              description="Level-by-level path with curated resources, timelines, and what to expect at each stage."
            />
            <Step
              number="3"
              title="Ace your exam"
              description="Dedicated exam guides with prep strategies, recommended books, and mock test tips."
            />
          </div>
        </div>
      </section>

      {/* ── Footer nudge ── */}
      <section style={{
        textAlign: 'center',
        padding: 'var(--space-2xl) var(--space-lg)',
        maxWidth: '1120px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 700,
          marginBottom: 'var(--space-sm)',
        }}>
          Ready to start?
        </h2>
        <p style={{
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-lg)',
          fontFamily: 'var(--font-body)',
        }}>
          Pick a language and get your roadmap for free. No sign-up needed to explore.
        </p>
        <a
          href="#languages"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', fontWeight: 600,
            background: 'var(--color-brand)', color: '#fff',
            padding: '14px 32px', borderRadius: 'var(--radius-md)',
            display: 'inline-block',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Explore languages →
        </a>
      </section>

    </div>
  )
}

export default Home

