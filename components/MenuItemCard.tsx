"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  badges?: string[]
  className?: string
}

export default function MenuItemCard({
  name = 'Caffè Latte',
  description = 'Rich espresso balanced with steamed milk and a light layer of foam.',
  price = '$5.95',
  badges = ['Popular'],
  className = '',
}: Partial<MenuItemCardProps>) {
  return (
    <Card className={cn('rounded-xl border bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg', className)}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl text-[#1E3932]">{name}</h3>
        <span className="text-sm font-semibold text-[#00704A]">{price}</span>
      </div>
      <p className="mt-3 text-sm text-[#333333]/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span key={badge} className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs text-[#1E3932]">
            {badge}
          </span>
        ))}
      </div>
    </Card>
  )
}
