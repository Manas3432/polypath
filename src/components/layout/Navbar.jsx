import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'
import useThemeStore from '../../store/themestore'

const NAV_LINKS = [
  { label: 'Languages', href: '/#languages' },
  { label: 'Exams', href: '/#how-it-works' },
  { label: 'Books', href: '/books' },
]

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const handleNavClick = (e, href) => {
    const parts = href.split('#')
    const hash = parts[1]
    if (location.pathname === '/' && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    setMenuOpen(false)
  }

  return (
    <header style={{
  position: 'sticky', top: 0, zIndex: 50,
  background: 'var(--color-bg)',
  opacity: 0.95,
  backdropFilter: 'blur(12px)',
  borderBottom: '1px solid var(--color-border)',
}}>
      <nav style={{
        maxWidth: '1120px', margin: '0 auto',
        padding: '0 var(--space-lg)',
        height: '60px',
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link to="/" onClick={function() { setMenuOpen(false) }} style={{
          fontFamily: 'var(--font-display)', fontSize: '20px',
          fontWeight: 700, letterSpacing: '-0.4px', zIndex: 60,
        }}>
          Poly<span style={{ color: 'var(--color-brand)' }}>path</span>
        </Link>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{
            display: 'flex', gap: 'var(--space-lg)', alignItems: 'center',
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          }}>
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
        )}

        {/* Desktop auth */}
{!isMobile && (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <button
      onClick={toggleTheme}
      style={{
        background: 'none', border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)', cursor: 'pointer',
        padding: '8px 10px', fontSize: '14px',
        color: 'var(--color-text-secondary)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    {user ? (
              <>
                <Link to="/dashboard" style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  color: 'var(--color-brand)', fontWeight: 500,
                  maxWidth: '160px', overflow: 'hidden',
                  textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {user.email.split('@')[0]}
                </Link>
                <button onClick={handleSignOut} style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                  background: 'transparent', color: 'var(--color-text-secondary)',
                  padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer', transition: 'border-color 0.15s',
                }}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                  color: 'var(--color-text-secondary)', transition: 'color 0.15s',
                }}>
                  Log in
                </Link>
                <Link to="/signup" style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                  background: 'var(--color-brand)', color: '#fff',
                  padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                  transition: 'opacity 0.15s',
                }}>
                  Get started
                </Link>
              </>
            )}
          </div>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={function() { setMenuOpen(!menuOpen) }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', zIndex: 60,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--color-text-primary)', transition: 'all 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--color-text-primary)', transition: 'all 0.2s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--color-text-primary)', transition: 'all 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
{isMobile && menuOpen && (
  <div style={{
    background: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    padding: 'var(--space-lg)',
    display: 'flex', flexDirection: 'column', gap: 'var(--space-md)',
  }}>
    <button
      onClick={toggleTheme}
      style={{
        background: 'none', border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)', cursor: 'pointer',
        padding: '10px', fontSize: '14px',
        color: 'var(--color-text-secondary)',
        textAlign: 'left', width: 'fit-content',
      }}
    >
      {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
    </button>
          {NAV_LINKS.map(function(item) {
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={function(e) { handleNavClick(e, item.href) }}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500,
                  color: 'var(--color-text-primary)', textDecoration: 'none',
                  padding: 'var(--space-sm) 0',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {item.label}
              </a>
            )
          })}

          {user ? (
            <>
              <Link to="/dashboard" onClick={function() { setMenuOpen(false) }} style={{
                fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500,
                color: 'var(--color-brand)', textDecoration: 'none',
                padding: 'var(--space-sm) 0',
                borderBottom: '1px solid var(--color-border)',
              }}>
                {user.email.split('@')[0]} — Dashboard
              </Link>
              <button onClick={handleSignOut} style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500,
                background: 'transparent', color: 'var(--color-text-secondary)',
                padding: 'var(--space-sm) 0', border: 'none',
                cursor: 'pointer', textAlign: 'left',
              }}>
                Sign out
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: 'var(--space-sm)', paddingTop: 'var(--space-sm)' }}>
              <Link to="/login" onClick={function() { setMenuOpen(false) }} style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                color: 'var(--color-text-secondary)',
                padding: '10px 20px', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none', flex: 1, textAlign: 'center',
              }}>
                Log in
              </Link>
              <Link to="/signup" onClick={function() { setMenuOpen(false) }} style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                background: 'var(--color-brand)', color: '#fff',
                padding: '10px 20px', borderRadius: 'var(--radius-md)',
                textDecoration: 'none', flex: 1, textAlign: 'center',
              }}>
                Get started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
