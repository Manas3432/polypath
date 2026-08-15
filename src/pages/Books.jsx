import { useState } from 'react'
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
      e.currentTarget.style.boxShadow = '0 8px 24px ' + book.color + '18'
      e.currentTarget.style.borderColor = book.color
    }}
    onMouseLeave={function(e) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = 'var(--color-border)'
    }}
    >
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

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '13px',
        color: 'var(--color-text-secondary)', lineHeight: 1.6, flex: 1,
      }}>
        {book.description}
      </p>

      <div style={{
        display: 'flex', gap: '8px',
        paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)',
        marginTop: 'auto',
      }}>
        <a
          href={'https://www.amazon.in/s?k=' + encodeURIComponent(book.title)}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
            background: book.colorDim, color: book.colorText,
            padding: '7px 12px', borderRadius: 'var(--radius-md)',
            display: 'inline-block', transition: 'opacity 0.15s',
            textDecoration: 'none', border: '1px solid ' + book.color + '44',
          }}
          onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.8' }}
          onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
        >
          Amazon
        </a>
        <a
          href={'https://www.flipkart.com/search?q=' + encodeURIComponent(book.title)}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
            background: book.colorDim, color: book.colorText,
            padding: '7px 12px', borderRadius: 'var(--radius-md)',
            display: 'inline-block', transition: 'opacity 0.15s',
            textDecoration: 'none', border: '1px solid ' + book.color + '44',
          }}
          onMouseEnter={function(e) { e.currentTarget.style.opacity = '0.8' }}
          onMouseLeave={function(e) { e.currentTarget.style.opacity = '1' }}
        >
          Flipkart
        </a>
      </div>
    </div>
  )
}

const Books = () => {
  const [activeLanguage, setActiveLanguage] = useState('all')

  const filteredBooks = activeLanguage === 'all'
    ? BOOKS
    : BOOKS.filter(function(b) { return b.language === activeLanguage })

  return (
    <div>
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
            {LANGUAGES.map(function(lang) {
              return (
                <button
                  key={lang.id}
                  onClick={function() { setActiveLanguage(lang.id) }}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
                    padding: '6px 16px', borderRadius: '20px', cursor: 'pointer',
                    border: '1px solid ' + (activeLanguage === lang.id ? lang.color : 'var(--color-border)'),
                    background: activeLanguage === lang.id ? lang.colorDim : 'var(--color-surface)',
                    color: activeLanguage === lang.id ? lang.colorText : 'var(--color-text-secondary)',
                    transition: 'all 0.15s',
                  }}
                >
                  {lang.flag} {lang.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

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
          {filteredBooks.map(function(book) {
            return <BookCard key={book.id} book={book} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Books
