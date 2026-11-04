import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import SEO from '../../components/SEO';

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate('/')
    }
  }

  return (
    
    <div style={{
      minHeight: '80vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-lg)',
    }}>
      <SEO title="Log In" description="Log in to Polypath to track your language learning progress." />
      <div style={{
        width: '100%', maxWidth: '400px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '24px',
          fontWeight: 700, marginBottom: '8px',
        }}>
          Welcome back
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '14px',
          color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
        }}>
          Log in to continue your language journey.
        </p>

        {error && (
          <div style={{
            background: '#FEF0F0', border: '1px solid #E85858',
            borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
            marginBottom: 'var(--space-md)', fontSize: '14px', color: '#A02020',
            fontFamily: 'var(--font-body)',
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div>
            <label style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              fontWeight: 600, color: 'var(--color-text-primary)',
              display: 'block', marginBottom: '6px',
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@gmail.com"
              style={{
                width: '100%', padding: '10px 14px',
                fontFamily: 'var(--font-body)', fontSize: '14px',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg)',
                color: 'var(--color-text-primary)',
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                fontWeight: 600, color: 'var(--color-text-primary)',
              }}>
                Password
              </label>
              <Link
                to="/forgot-password"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '12px',
                  color: 'var(--color-brand)', textDecoration: 'none', fontWeight: 500,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.8' }}
                onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
              >
                Forgot password?
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                style={{
                  width: '100%', padding: '10px 42px 10px 14px',
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-primary)',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                style={{
                  position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-muted)', transition: 'color 0.15s ease',
                }}
                onMouseEnter={function(e) { e.currentTarget.style.color = 'var(--color-text-primary)' }}
                onMouseLeave={function(e) { e.currentTarget.style.color = 'var(--color-text-muted)' }}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '12px',
              fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600,
              background: loading ? 'var(--color-border)' : 'var(--color-brand)',
              color: '#fff', border: 'none',
              borderRadius: 'var(--radius-md)', cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.15s',
            }}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: 'var(--color-text-secondary)', textAlign: 'center',
          marginTop: 'var(--space-lg)',
        }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: 'var(--color-brand)', fontWeight: 600 }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login