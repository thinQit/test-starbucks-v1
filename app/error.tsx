"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-6 text-center max-w-xl">{error.message}</p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Try again
      </button>
    </div>
  )
}
