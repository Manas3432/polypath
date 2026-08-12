import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1120px', margin: '0 auto',
        padding: 'var(--space-xl) var(--space-lg)',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 'var(--space-xl)',
      }}>

        {/* Brand column */}
        <div>
          <Link to="/" style={{
            fontFamily: 'var(--font-display)', fontSize: '20px',
            fontWeight: 700, letterSpacing: '-0.4px',
            display: 'inline-block', marginBottom: 'var(--space-sm)',
          }}>
            Poly<span style={{ color: 'var(--color-brand)' }}>path</span>
          </Link>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '13px',
            color: 'var(--color-text-secondary)', lineHeight: 1.7,
            maxWidth: '240px', marginBottom: 'var(--space-md)',
          }}>
            Structured language learning roadmaps, exam guides, and curated resources — all in one place.
          </p>
          {/* Language pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['🇪🇸', '🇫🇷', '🇯🇵', '🇩🇪', '🇰🇷'].map(flag => (
              <span key={flag} style={{ fontSize: '18px' }}>{flag}</span>
            ))}
          </div>
        </div>

        {/* Languages column */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
            color: 'var(--color-text-muted)', textTransform: 'uppercase',
            letterSpacing: '0.06em', marginBottom: 'var(--space-md)',
          }}>
            Languages
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'spanish', name: 'Spanish' },
              { id: 'french', name: 'French' },
              { id: 'japanese', name: 'Japanese' },
              { id: 'german', name: 'German' },
              { id: 'korean', name: 'Korean' },
            ].map(lang => (
              <Link key={lang.id} to={`/languages/${lang.id}`} style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Exams column */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
            color: 'var(--color-text-muted)', textTransform: 'uppercase',
            letterSpacing: '0.06em', marginBottom: 'var(--space-md)',
          }}>
            Exams
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['DELE', 'DELF / DALF', 'JLPT', 'Goethe', 'TOPIK'].map(exam => (
              <span key={exam} style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)', fontSize: '13px',
              }}>
                {exam}
              </span>
            ))}
          </div>
        </div>

        {/* Resources column */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
            color: 'var(--color-text-muted)', textTransform: 'uppercase',
            letterSpacing: '0.06em', marginBottom: 'var(--space-md)',
          }}>
            Resources
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'How it works', to: '/#how-it-works' },
              { label: 'Pick a language', to: '/#languages' },
              { label: 'Book store', to: '/books' },
            ].map(link => (
              <Link key={link.label} to={link.to} style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-md) var(--space-lg)',
        maxWidth: '1120px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          color: 'var(--color-text-muted)',
        }}>
          © 2026 Polypath. Built with React + Vite.
        </span>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          color: 'var(--color-text-muted)',
        }}>
          Free to use · No sign-up needed to explore
        </span>
      </div>
    </footer>
  )
}

export default Footer
