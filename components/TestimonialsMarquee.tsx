'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

interface TestimonialsMarqueeProps {
  testimonials?: { name: string; quote: string }[]
}

export default function TestimonialsMarquee({
  testimonials = [
    { name: 'Amelia R.', quote: 'Best matcha latte in town and the staff always remembers my order.' },
    { name: 'Jordan P.', quote: 'Perfect morning spot — calm atmosphere, reliable Wi-Fi, and amazing espresso.' },
    { name: 'Chris T.', quote: 'Rewards program is worth it. I’m here three times a week.' },
  ],
}: Partial<TestimonialsMarqueeProps>) {
  const [paused, setPaused] = useState(false)

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div
        className="flex gap-4 px-4 md:px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={'flex min-w-full gap-4 ' + (paused ? '' : 'animate-[scroll_20s_linear_infinite]')}>
          {[...testimonials, ...testimonials].map((item, idx) => (
            <Card key={item.name + idx} className="min-w-[280px] rounded-xl p-5 md:min-w-[360px]">
              <p className="text-sm text-[#333333]/80">“{item.quote}”</p>
              <p className="mt-3 font-semibold text-[#1E3932]">{item.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
