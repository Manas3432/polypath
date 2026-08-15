import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

const NAV_LINKS = [
  { label: 'Languages', href: '/#languages' },
  { label: 'Exams', href: '/#how-it-works' },
  { label: 'Books', href: '/#languages' },
]

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuthStore()

  const handleNavClick = (e, href) => {
    const parts = href.split('#')
    const hash = parts[1]
    if (location.pathname === '/' && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
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

        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.4px' }}>
          Poly<span style={{ color: 'var(--color-brand)' }}>path</span>
        </Link>

        <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
          {NAV_LINKS.map(function(item) {
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={function(e) { handleNavClick(e, item.href) }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px', fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  transition: 'color 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={function(e) { e.currentTarget.style.color = 'var(--color-brand)' }}
                onMouseLeave={function(e) { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              {user.email}
            </span>
            <button
              onClick={handleSignOut}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                background: 'transparent', color: 'var(--color-text-secondary)',
                padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer', transition: 'border-color 0.15s',
              }}
              onMouseEnter={function(e) { e.currentTarget.style.borderColor = 'var(--color-brand)' }}
              onMouseLeave={function(e) { e.currentTarget.style.borderColor = 'var(--color-border)' }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/login" style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
              color: 'var(--color-text-secondary)', transition: 'color 0.15s',
            }}
            onMouseEnter={function(e) { e.currentTarget.style.color = 'var(--color-brand)' }}
            onMouseLeave={function(e) { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              Log in
            </Link>
            <Link to="/signup" style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
              background: 'var(--color-brand)', color: '#fff',
              padding: '8px 16px', borderRadius: 'var(--radius-sm)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.88' }}
            onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
            >
              Get started
            </Link>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar
