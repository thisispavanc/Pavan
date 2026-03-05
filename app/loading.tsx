export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        space: '1rem',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'relative',
          width: '4rem',
          height: '4rem',
          margin: '0 auto 1rem',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '4px solid var(--border)',
            borderRadius: '9999px',
          }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '4px solid var(--primary)',
            borderTopColor: 'transparent',
            borderRadius: '9999px',
            animation: 'spin 1s linear infinite',
          }}></div>
        </div>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
        }}>Loading...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
