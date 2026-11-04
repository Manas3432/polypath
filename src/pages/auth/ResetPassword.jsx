import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import useAuthStore from '../../store/authStore'
import SEO from '../../components/SEO'

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

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)
  const [hasValidSession, setHasValidSession] = useState(false)
  const { user } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we have an active recovery session or access token
    const verify = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const hasRecoveryHash = window.location.hash.includes('type=recovery') || window.location.hash.includes('access_token')
      if (session || user || hasRecoveryHash) {
        setHasValidSession(true)
      } else {
        setHasValidSession(false)
      }
      setCheckingSession(false)
    }
    verify()
  }, [user])

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setError(null)

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '80vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-lg)',
    }}>
      <SEO title="Set New Password" description="Create a new password for your Polypath account." />
      <div style={{
        width: '100%', maxWidth: '400px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
      }}>
        {checkingSession ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-muted)' }}>
              Verifying link...
            </p>
          </div>
        ) : success ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#E6FAF5', color: '#1A7A5E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', margin: '0 auto var(--space-md)',
            }}>
              ✓
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '22px',
              fontWeight: 700, marginBottom: '8px',
              color: 'var(--color-text-primary)',
            }}>
              Password updated
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', lineHeight: 1.6,
              marginBottom: 'var(--space-lg)',
            }}>
              Your password has been changed successfully. You can now continue learning.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                width: '100%', padding: '12px',
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600,
                background: 'var(--color-brand)', color: '#fff', border: 'none',
                borderRadius: 'var(--radius-md)', cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
            >
              Continue to Dashboard
            </button>
          </div>
        ) : !hasValidSession ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: 'var(--space-md)' }}>⚠️</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '20px',
              fontWeight: 700, marginBottom: '8px',
              color: 'var(--color-text-primary)',
            }}>
              Invalid or expired link
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', lineHeight: 1.6,
              marginBottom: 'var(--space-lg)',
            }}>
              This password reset link is invalid or has expired. Please request a new one.
            </p>
            <Link
              to="/forgot-password"
              style={{
                display: 'block', width: '100%', padding: '12px',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                background: 'var(--color-brand)', color: '#fff', textDecoration: 'none',
                borderRadius: 'var(--radius-md)', textAlign: 'center', boxSizing: 'border-box',
              }}
            >
              Request new reset link
            </Link>
          </div>
        ) : (
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '24px',
              fontWeight: 700, marginBottom: '8px',
              color: 'var(--color-text-primary)',
            }}>
              Set new password
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
            }}>
              Choose a strong password with at least 8 characters.
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

            <form onSubmit={handleUpdatePassword} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  fontWeight: 600, color: 'var(--color-text-primary)',
                  display: 'block', marginBottom: '6px',
                }}>
                  New password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={function(e) { setPassword(e.target.value) }}
                    placeholder="Enter Password"
                    required
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
                  }}>
                    {password.length >= 8 ? '✓' : '•'} At least 8 characters{password.length > 0 && password.length < 8 ? ` (${password.length}/8)` : ''}
                  </span>
                </div>
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  fontWeight: 600, color: 'var(--color-text-primary)',
                  display: 'block', marginBottom: '6px',
                }}>
                  Confirm new password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={function(e) { setConfirmPassword(e.target.value) }}
                    placeholder="Re-enter new password"
                    required
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    style={{
                      position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                      background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-text-muted)', transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={function(e) { e.currentTarget.style.color = 'var(--color-text-primary)' }}
                    onMouseLeave={function(e) { e.currentTarget.style.color = 'var(--color-text-muted)' }}
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px',
                      color: password === confirmPassword ? '#10B981' : '#E85858',
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      transition: 'color 0.15s ease',
                    }}>
                      {password === confirmPassword ? '✓ Passwords match' : '✕ Passwords do not match'}
                    </span>
                  </div>
                )}
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
                  marginTop: 'var(--space-xs)',
                }}
              >
                {loading ? 'Updating password...' : 'Update password'}
              </button>
            </form>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'var(--color-text-secondary)', textAlign: 'center',
              marginTop: 'var(--space-lg)',
            }}>
              <Link to="/login" style={{ color: 'var(--color-brand)', fontWeight: 600, textDecoration: 'none' }}>
                ← Back to log in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResetPassword

