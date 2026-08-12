import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Languages', href: '/#languages' },
  { label: 'Exams',     href: '/#how-it-works' },
  { label: 'Books',     href: '/#languages' },
]

const Navbar = () => {
  const location = useLocation()

  const handleNavClick = (e, href) => {
    const [path, hash] = href.split('#')
    if (location.pathname === '/' && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,250,248,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <nav style={{
        maxWidth: '1120px', margin: '0 auto',
        padding: '0 var(--space-lg)',
        height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.4px' }}>
          Poly<span style={{ color: 'var(--color-brand)' }}>path</span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', fontWeight: 500,
                color: 'var(--color-text-secondary)',
                transition: 'color 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Link to="/signup" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px', fontWeight: 500,
          background: 'var(--color-brand)', color: '#fff',
          padding: '8px 16px', borderRadius: 'var(--radius-sm)',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Get started
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
