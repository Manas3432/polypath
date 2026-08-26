import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchAll } from '../lib/search'

const SearchBar = ({ onNavigate }) => {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const navigate = useNavigate()

  const results = searchAll(query)

  const handleSelect = (path) => {
    navigate(path)
    setQuery('')
    setFocused(false)
    if (onNavigate) onNavigate()
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '260px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)}
        placeholder="Search..."
        style={{
          width: '100%', padding: '8px 12px',
          fontFamily: 'var(--font-body)', fontSize: '13px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          outline: 'none', boxSizing: 'border-box',
        }}
      />

      {focused && query.trim() !== '' && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          marginTop: '4px', background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          maxHeight: '280px', overflowY: 'auto', zIndex: 100,
        }}>
          {results.length === 0 ? (
            <div style={{
              padding: '12px', fontFamily: 'var(--font-body)',
              fontSize: '13px', color: 'var(--color-text-muted)',
            }}>
              No results found
            </div>
          ) : (
            results.map((r, i) => (
  <div
    key={i}
    onMouseDown={() => handleSelect(r.path)}
    style={{
      padding: '10px 12px', cursor: 'pointer',
      borderBottom: i < results.length - 1 ? '1px solid var(--color-border)' : 'none',
      fontFamily: 'var(--font-body)', fontSize: '13px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}
  >
    <span style={{ color: 'var(--color-text-primary)' }}>{r.label}</span>
    <span style={{
      fontSize: '11px', color: 'var(--color-text-muted)',
      background: 'var(--color-surface-2)', padding: '2px 8px', borderRadius: '10px',
    }}>
      {r.type}
    </span>
  </div>
))
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar