"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  className?: string
}

export default function SectionHeader({
  eyebrow = 'Discover',
  headline = 'Our Signature Experience',
  subheadline = 'From handcrafted drinks to cozy community spaces, every detail is designed for your daily ritual.',
  primaryCtaText = '',
  primaryCtaHref = '#',
  secondaryCtaText = '',
  secondaryCtaHref = '#',
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00704A]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl text-[#1E3932] md:text-5xl">{headline}</h2>
      <p className="mt-4 text-base text-[#333333]/80 md:text-lg">{subheadline}</p>
      {(primaryCtaText || secondaryCtaText) && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {primaryCtaText && <Button asChild className="bg-[#00704A] text-white hover:bg-[#1E3932]"><a href={primaryCtaHref}>{primaryCtaText}</a></Button>}
          {secondaryCtaText && <Button asChild variant="outline"><a href={secondaryCtaHref}>{secondaryCtaText}</a></Button>}
        </div>
      )}
    </div>
  )
}
