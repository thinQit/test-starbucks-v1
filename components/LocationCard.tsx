"use client";

import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface LocationCardProps {
  name?: string
  address?: string
  phone?: string
  hours?: string
  amenities?: string[]
}

export default function LocationCard({
  name = 'Starbucks Store',
  address = '123 Coffee Ave, Seattle, WA',
  phone = '(206) 555-0000',
  hours = '6:00 AM - 9:00 PM',
  amenities = ['Wi-Fi', 'Pickup'],
}: Partial<LocationCardProps>) {
  return (
    <Card className="rounded-xl p-5">
      <h4 className="font-serif text-xl text-[#1E3932]">{name}</h4>
      <div className="mt-3 space-y-2 text-sm text-[#333333]/80">
        <p className="flex gap-2"><MapPin size={16} /> {address}</p>
        <p className="flex gap-2"><Phone size={16} /> {phone}</p>
        <p className="flex gap-2"><Clock size={16} /> {hours}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {amenities.map((item) => (
          <span key={item} className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs">{item}</span>
        ))}
      </div>
      <Link href="#" className="mt-4 inline-block text-sm font-medium text-[#00704A]">Get Directions →</Link>
    </Card>
  )
}
