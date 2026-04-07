'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logo: string
  navItems: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function Navbar({
  logo = 'Starbucks Coffeehouse',
  navItems = [],
  ctaLabel,
  ctaHref,
  className = '',
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-background/95 backdrop-blur',
        className
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold text-foreground">
            {logo}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          {ctaLabel && ctaHref && (
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground hover:bg-muted transition"
              >
                {item.label}
              </Link>
            ))}
            {ctaLabel && ctaHref && (
              <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
