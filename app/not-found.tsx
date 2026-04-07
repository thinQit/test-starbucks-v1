import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-3">Page not found</h1>
      <p className="text-muted-foreground mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  )
}
