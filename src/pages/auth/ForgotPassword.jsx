import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import SEO from '../../components/SEO'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleReset = async (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '80vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-lg)',
    }}>
      <SEO title="Reset Password" description="Request a password reset link for your Polypath account." />
      <div style={{
        width: '100%', maxWidth: '400px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>📬</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '22px',
              fontWeight: 700, marginBottom: '8px',
              color: 'var(--color-text-primary)',
            }}>
              Check your inbox
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', lineHeight: 1.7,
              marginBottom: 'var(--space-md)',
            }}>
              We sent a password reset link to <strong>{email}</strong>. Click the link in the email to create a new password.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '12px',
              color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
              background: 'var(--color-bg)', padding: '8px 12px', borderRadius: 'var(--radius-md)',
            }}>
              💡 Don't see it? Check your Spam, Junk, or Promotions folder.
            </p>
            <Link
              to="/login"
              style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                color: 'var(--color-brand)', textDecoration: 'none',
              }}
            >
              ← Back to log in
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--color-text-muted)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                marginBottom: 'var(--space-md)',
              }}
              onMouseEnter={function(e) { e.currentTarget.style.color = 'var(--color-text-primary)' }}
              onMouseLeave={function(e) { e.currentTarget.style.color = 'var(--color-text-muted)' }}
            >
              ← Back to log in
            </Link>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '24px',
              fontWeight: 700, marginBottom: '8px',
              color: 'var(--color-text-primary)',
            }}>
              Forgot password?
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
              lineHeight: 1.6,
            }}>
              Enter the email associated with your account, and we'll send you a link to reset your password.
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

            <form onSubmit={handleReset} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  fontWeight: 600, color: 'var(--color-text-primary)',
                  display: 'block', marginBottom: '6px',
                }}>
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={function(e) { setEmail(e.target.value) }}
                  placeholder="you@gmail.com"
                  required
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
                {loading ? 'Sending link...' : 'Send reset link'}
              </button>
            </form>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'var(--color-text-secondary)', textAlign: 'center',
              marginTop: 'var(--space-lg)',
            }}>
              Remember your password?{' '}
              <Link to="/login" style={{ color: 'var(--color-brand)', fontWeight: 600, textDecoration: 'none' }}>
                Log in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword

