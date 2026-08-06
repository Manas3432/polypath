import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
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
          {['Languages', 'Exams', 'Books'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? 'var(--color-brand)' : 'var(--color-text-secondary)',
                transition: 'color 0.15s',
              })}
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <Link to="/signup" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px', fontWeight: 500,
          background: 'var(--color-brand)', color: '#fff',
          padding: '8px 16px', borderRadius: 'var(--radius-sm)',
          transition: 'opacity 0.15s',
        }}>
          Get started
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
