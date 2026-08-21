import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'
import useProgressStore from '../../store/progressStore'
import { LANGUAGES } from '../../data/languages'
import { ROADMAPS } from '../../data/roadmaps'
import SEO from '../../components/SEO';

const LanguageProgressCard = ({ lang }) => {
  const { fetchProgress, progress } = useProgressStore()
  const { user } = useAuthStore()
  const roadmap = ROADMAPS[lang.id]
  const totalLevels = roadmap.levels.length
  const completedLevels = progress.filter(p => p.language_id === lang.id).length
  const percentage = Math.round((completedLevels / totalLevels) * 100)

  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
    }}
    onMouseEnter={function(e) {
      e.currentTarget.style.transform = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = `0 8px 24px ${lang.color}18`
      e.currentTarget.style.borderColor = lang.color
    }}
    onMouseLeave={function(e) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = 'var(--color-border)'
    }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>{lang.flag}</span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {lang.name}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: lang.colorText, background: lang.colorDim, padding: '2px 8px', borderRadius: '12px', display: 'inline-block', marginTop: '2px' }}>
              {completedLevels}/{totalLevels} levels
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700,
          color: completedLevels > 0 ? lang.color : 'var(--color-text-muted)',
        }}>
          {percentage}%
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '6px', background: 'var(--color-surface-2)',
        borderRadius: '99px', marginBottom: 'var(--space-md)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${percentage}%`,
          background: lang.color, borderRadius: '99px',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Level dots */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: 'var(--space-md)', flexWrap: 'wrap' }}>
        {roadmap.levels.map((level) => {
          const done = progress.some(p => p.language_id === lang.id && p.level_code === level.code)
          return (
            <div key={level.code} style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
              padding: '3px 8px', borderRadius: '4px',
              background: done ? lang.color : lang.colorDim,
              color: done ? '#fff' : lang.colorText,
              transition: 'all 0.2s',
            }}>
              {done ? '✓' : ''} {level.code}
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <Link to={`/languages/${lang.id}/roadmap`} style={{
        display: 'block', textAlign: 'center',
        fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
        color: lang.colorText, background: lang.colorDim,
        padding: '8px', borderRadius: 'var(--radius-md)',
        transition: 'opacity 0.15s',
      }}
      onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.8' }}
      onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
      >
        {completedLevels === 0 ? 'Start learning →' : completedLevels === totalLevels ? '🎉 Completed!' : 'Continue →'}
      </Link>
    </div>
  )
}

const Dashboard = () => {
  const { user, signOut } = useAuthStore()
  const { fetchProgress, progress } = useProgressStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    LANGUAGES.forEach(lang => fetchProgress(user.id, lang.id))
  }, [user])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const totalCompleted = progress.length

  if (!user) return null

  return (
    <div>
      <SEO
        title="Dashboard"
        description="Your personalized language learning dashboard with progress tracking."
      />
      {/* Header */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Welcome back
              </p>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--color-text-primary)',
              }}>
                {user.email}
              </h1>
            </div>
            <button
              onClick={handleSignOut}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                background: 'transparent', color: 'var(--color-text-secondary)',
                padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)', cursor: 'pointer',
              }}
            >
              Sign out
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
            {[
              { label: 'Levels completed', value: totalCompleted },
              { label: 'Languages started', value: LANGUAGES.filter(l => progress.some(p => p.language_id === l.id)).length },
              { label: 'Languages available', value: LANGUAGES.length },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)', padding: '12px var(--space-md)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 700, color: 'var(--color-brand)' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language progress grid */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700,
          marginBottom: 'var(--space-lg)', color: 'var(--color-text-primary)',
        }}>
          Your progress
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {LANGUAGES.map(lang => (
            <LanguageProgressCard key={lang.id} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
