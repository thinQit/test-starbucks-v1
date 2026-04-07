"use client";

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  brand: string
  description?: string
  columns?: FooterColumn[]
  copyright?: string
}

export default function Footer({
  brand = 'Starbucks Coffeehouse',
  description = 'Your daily ritual—crafted coffee, warm food, and rewards that add up.',
  columns = [],
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl">{brand}</h3>
          <p className="mt-3 text-sm text-secondary-foreground/80">{description}</p>
        </div>

        {columns && columns.length > 0 ? (
          columns.slice(0, 3).map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-secondary-foreground/80">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:underline">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div />
            <div />
            <div />
          </>
        )}

        <div className="hidden md:block">
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-secondary-foreground/80">Get seasonal drink launches and rewards offers.</p>
          <div className="mt-4 flex gap-2">
            <Input
              placeholder="Email address"
              className="border-white/20 bg-background/10 text-secondary-foreground placeholder:text-white/60"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join</Button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <Link href="#" className="rounded-full bg-background/10 p-2 hover:bg-background/20"><Instagram size={18} /></Link>
            <Link href="#" className="rounded-full bg-background/10 p-2 hover:bg-background/20"><Facebook size={18} /></Link>
            <Link href="#" className="rounded-full bg-background/10 p-2 hover:bg-background/20"><Twitter size={18} /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-secondary-foreground/70">
        {copyright ?? (
          <>
            © {new Date().getFullYear()} {brand}. All rights reserved. Privacy • Terms • Accessibility
          </>
        )}
      </div>
    </footer>
  )
}
