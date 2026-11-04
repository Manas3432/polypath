import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import SEO from "../../components/SEO";

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

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      setLoading(false)
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Supabase returns an empty identities list when an account already exists
    if (data?.user?.identities && data.user.identities.length === 0) {
      setError('An account with this email already exists. Please log in instead.')
      setLoading(false)
      return
    }

    // If "Confirm email" is disabled in Supabase, a session is created immediately
    if (data?.session) {
      navigate('/dashboard')
      return
    }

    // Confirmation email was requested
    setConfirmed(true)
    setLoading(false)
  }

  if (confirmed) {
    return (
      <div style={{
        minHeight: '80vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-lg)',
      }}>
        <SEO title="Sign Up" description="Create a Polypath account to start tracking your language learning journey." />
        <div style={{
          width: '100%', maxWidth: '400px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>📬</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '22px',
            fontWeight: 700, marginBottom: '8px',
          }}>
            Check your email
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '14px',
            color: 'var(--color-text-secondary)', lineHeight: 1.7,
            marginBottom: 'var(--space-md)',
          }}>
            We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account and start tracking your progress.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '12px',
            color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
            background: 'var(--color-bg)', padding: '8px 12px', borderRadius: 'var(--radius-md)',
          }}>
            💡 Don't see it? Be sure to check your Spam, Junk, or Promotions folder.
          </p>
          <Link to="/login" style={{
            fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
            color: 'var(--color-brand)',
          }}>
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '80vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-lg)',
    }}>
      <SEO title="Sign Up" description="Create a Polypath account to start tracking your language learning journey." />
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
          Create your account
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '14px',
          color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
        }}>
          Start tracking your language learning journey.
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

        <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
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
              onChange={function(e) { setEmail(e.target.value) }}
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
            <label style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              fontWeight: 600, color: 'var(--color-text-primary)',
              display: 'block', marginBottom: '6px',
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={function(e) { setPassword(e.target.value) }}
                placeholder="Create Password"
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
            <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: password.length >= 8 ? '#10B981' : password.length > 0 ? '#E8A03A' : 'var(--color-text-muted)',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                transition: 'color 0.15s ease',
              }}>
                {password.length >= 8 ? '✓' : '•'} At least 8 characters{password.length > 0 && password.length < 8 ? ` (${password.length}/8)` : ''}
              </span>
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
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: 'var(--color-text-secondary)', textAlign: 'center',
          marginTop: 'var(--space-lg)',
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--color-brand)', fontWeight: 600 }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp