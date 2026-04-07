"use client";

import { Button } from '@/components/ui/button'

interface CtaBandProps {
  title?: string
  description?: string
  primaryText?: string
  secondaryText?: string
}

export default function CtaBand({
  title = 'Join Starbucks Rewards',
  description = 'Earn stars on every order, unlock free drinks, and get personalized offers.',
  primaryText = 'Join Now',
  secondaryText = 'Learn More',
}: Partial<CtaBandProps>) {
  return (
    <section className="bg-[#00704A] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h3 className="font-serif text-3xl">{title}</h3>
          <p className="mt-2 text-white/90">{description}</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-white text-[#1E3932] hover:bg-white/90">{primaryText}</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">{secondaryText}</Button>
        </div>
      </div>
    </section>
  )
}
