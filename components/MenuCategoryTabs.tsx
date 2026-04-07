'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuCategoryTabsProps {
  categories?: string[]
  onChange?: (value: string) => void
}

export default function MenuCategoryTabs({
  categories = ['Espresso', 'Cold Brew', 'Frappuccino', 'Tea', 'Bakery'],
  onChange,
}: Partial<MenuCategoryTabsProps>) {
  const [active, setActive] = useState(categories[0] || 'Espresso')

  return (
    <div className="overflow-x-auto">
      <div role="tablist" aria-label="Menu categories" className="relative flex min-w-max gap-2 border-b pb-2">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={active === category}
            onClick={() => {
              setActive(category)
              onChange?.(category)
            }}
            className={cn(
              'relative rounded-md px-4 py-2 text-sm font-medium transition',
              active === category ? 'text-[#00704A]' : 'text-[#333333]/70 hover:text-[#1E3932]'
            )}
          >
            {category}
            {active === category && <span className="absolute inset-x-2 -bottom-2 h-0.5 rounded bg-[#00704A]" />}
          </button>
        ))}
      </div>
    </div>
  )
}
