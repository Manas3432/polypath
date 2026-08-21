import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import SEO from '../components/SEO'; 

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setConfirmed(true)
    }
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
            marginBottom: 'var(--space-lg)',
          }}>
            We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account and start tracking your progress.
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
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
              placeholder="you@example.com"
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
            <input
              type="password"
              value={password}
              onChange={function(e) { setPassword(e.target.value) }}
              placeholder="Min. 6 characters"
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

          <button
            onClick={handleSignUp}
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
        </div>

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