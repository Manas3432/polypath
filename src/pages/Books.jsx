import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BOOKS } from '../data/books'
import { LANGUAGES } from '../data/languages'

const BookCard = ({ book }) => {
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)',
      transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
    }}
    onMouseEnter={function(e) {
      e.currentTarget.style.transform = 'translateY(-3px)'
      e.currentTarget.style.boxShadow = `0 8px 24px ${book.color}18`
      e.currentTarget.style.borderColor = book.color
    }}
    onMouseLeave={function(e) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = 'var(--color-border)'
    }}
    >
      {/* Tag + Level */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
          background: book.colorDim, color: book.colorText,
          padding: '3px 10px', borderRadius: '20px',
        }}>
          {book.tag}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
          color: 'var(--color-text-muted)',
        }}>
          {book.level}
        </span>
      </div>

      {/* Title + Author */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700,
          color: 'var(--color-text-primary)', marginBottom: '4px', lineHeight: 1.3,
        }}>
          {book.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          color: 'var(--color-text-muted)',
        }}>
          by {book.author}
        </p>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '13px',
        color: 'var(--color-text-secondary)', lineHeight: 1.6, flex: 1,
      }}>
        {book.description}
      </p>

      {/* Price + Buy */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)',
        marginTop: 'auto',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
          color: 'var(--color-text-primary)',
        }}>
          ₹{book.price}
        </span>
        <button style={{
          fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
          background: book.color, color: '#fff',
          padding: '8px 18px', borderRadius: 'var(--radius-md)',
          border: 'none', cursor: 'pointer', transition: 'opacity 0.15s',
        }}
        onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.88' }}
        onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
        onClick={function() { alert('Razorpay payments coming soon!') }}
        >
          Buy now
        </button>
      </div>
    </div>
  )
}

const Books = () => {
  const [activeLanguage, setActiveLanguage] = useState('all')

  const filteredBooks = activeLanguage === 'all'
    ? BOOKS
    : BOOKS.filter(b => b.language === activeLanguage)

  return (
    <div>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px',
          }}>
            Book Store
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '15px',
            color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)',
          }}>
            Handpicked books for every language and level. From beginner guides to exam prep.
          </p>

          {/* Language filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={function() { setActiveLanguage('all') }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                padding: '6px 16px', borderRadius: '20px', cursor: 'pointer',
                border: '1px solid var(--color-border)',
                background: activeLanguage === 'all' ? 'var(--color-brand)' : 'var(--color-surface)',
                color: activeLanguage === 'all' ? '#fff' : 'var(--color-text-secondary)',
                transition: 'all 0.15s',
              }}
            >
              All
            </button>
            {LANGUAGES.map(lang => (
              <button
                key={lang.id}
                onClick={function() { setActiveLanguage(lang.id) }}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                  padding: '6px 16px', borderRadius: '20px', cursor: 'pointer',
                  border: `1px solid ${activeLanguage === lang.id ? lang.color : 'var(--color-border)'}`,
                  background: activeLanguage === lang.id ? lang.colorDim : 'var(--color-surface)',
                  color: activeLanguage === lang.id ? lang.colorText : 'var(--color-text-secondary)',
                  transition: 'all 0.15s',
                }}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Books grid */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg)' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)',
        }}>
          {filteredBooks.length} books
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books