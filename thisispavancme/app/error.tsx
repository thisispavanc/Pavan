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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Oops!</h1>
        <p className="text-xl text-muted-foreground">Something went wrong</p>
        <p className="text-sm text-muted-foreground">
          {error.message || "An unexpected error occurred"}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2.5 border border-foreground bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm font-medium"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 border border-border text-foreground hover:bg-accent/5 transition text-sm font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
