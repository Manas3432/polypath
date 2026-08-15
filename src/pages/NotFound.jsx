import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: 'var(--space-xl) var(--space-lg)',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(80px, 15vw, 140px)',
        fontWeight: 600, color: 'var(--color-border)',
        lineHeight: 1, marginBottom: 'var(--space-lg)', userSelect: 'none',
      }}>
        404
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700,
        color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)',
      }}>
        Page not found
      </h1>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15px',
        color: 'var(--color-text-secondary)', lineHeight: 1.7,
        maxWidth: '380px', marginBottom: 'var(--space-xl)',
      }}>
        The page you're looking for doesn't exist. It may have moved or the URL might be wrong.
      </p>

      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)',
          textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600,
        }}>
          Pick a language instead
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { id: 'spanish', flag: '🇪🇸', dim: '#FEF3E2', text: '#A0620A' },
            { id: 'french',  flag: '🇫🇷', dim: '#F0EDFD', text: '#5842B0' },
            { id: 'japanese',flag: '🇯🇵', dim: '#FEF0F0', text: '#A02020' },
            { id: 'german',  flag: '🇩🇪', dim: '#EDF5FE', text: '#1A5C9A' },
            { id: 'korean',  flag: '🇰🇷', dim: '#E6FAF5', text: '#1A7A5E' },
          ].map(lang => (
            <Link key={lang.id} to={`/languages/${lang.id}`} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
              background: lang.dim, color: lang.text,
              padding: '8px 16px', borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'transform 0.15s', textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span>{lang.flag}</span>
              <span style={{ textTransform: 'capitalize' }}>{lang.id}</span>
            </Link>
          ))}
        </div>
      </div>

      <Link to="/" style={{
        fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
        background: 'var(--color-brand)', color: '#fff',
        padding: '12px 24px', borderRadius: 'var(--radius-md)',
        display: 'inline-block', transition: 'opacity 0.15s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        ← Back to home
      </Link>
    </div>
  )
}

export default NotFound

