'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        textAlign: 'center',
        space: '1.5rem',
      }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          color: 'var(--foreground)',
        }}>Oops!</h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted-foreground)',
        }}>Something went wrong</p>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
        }}>
          {error.message || "An unexpected error occurred"}
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1.5rem',
        }}>
          <button
            onClick={reset}
            style={{
              padding: '0.625rem 1.5rem',
              border: '1px solid var(--foreground)',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{
              padding: '0.625rem 1.5rem',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
