import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'
import useThemeStore from '../../store/themestore'
import SearchBar from '../SearchBar'
import useIsMobile from '../../hooks/useIsMobile'

const NAV_LINKS = [
  { label: 'Languages', href: '/#languages' },
  { label: 'Exams', href: '/#exams' },
  { label: 'Books', href: '/books' },
]

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
            <SearchBar />
            <button
              onClick={toggleTheme}
              style={{
                background: 'none', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                padding: '8px 10px', fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              gap: '8px', flex: '0 0 156px',
            }}>
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    title={`Signed in as ${user.email}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontFamily: 'var(--font-body)', fontSize: '13px',
                      color: 'var(--color-brand)', fontWeight: 500,
                      textDecoration: 'none', transition: 'opacity 0.15s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                  >
                    <span style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      background: 'var(--color-brand)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                      flexShrink: 0,
                    }}>
                      {user.email?.[0] || 'U'}
                    </span>
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500,
                      background: 'transparent', color: 'var(--color-text-secondary)',
                      padding: '6px 10px', borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-text-secondary)'
                      e.currentTarget.style.color = 'var(--color-text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                      e.currentTarget.style.color = 'var(--color-text-secondary)'
                    }}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                      color: 'var(--color-text-secondary)', transition: 'color 0.15s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-brand)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                      background: 'var(--color-brand)', color: '#fff',
                      padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                      transition: 'opacity 0.15s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>
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
    <SearchBar onNavigate={() => setMenuOpen(false)} />
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
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'var(--color-brand)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                  flexShrink: 0,
                }}>
                  {user.email?.[0] || 'U'}
                </span>
                <span>{user.email.split('@')[0]} — Dashboard</span>
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
