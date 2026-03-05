import Link from 'next/link'

export default function NotFound() {
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
          fontSize: '3.75rem',
          fontWeight: 700,
          color: 'var(--foreground)',
        }}>404</h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted-foreground)',
        }}>Page not found</p>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.625rem 1.5rem',
            border: '1px solid var(--foreground)',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginTop: '1.5rem',
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
