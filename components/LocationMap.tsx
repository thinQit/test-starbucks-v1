'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { MapPin } from 'lucide-react'
import LocationCard from '@/components/LocationCard'

interface Location {
  name: string
  address: string
  phone: string
  hours: string
  amenities: string[]
}

interface LocationMapProps {
  locations?: Location[]
}

export default function LocationMap({
  locations = [
    { name: 'Starbucks Downtown', address: '101 Main St, Seattle, WA', phone: '(206) 555-1001', hours: '6:00 AM - 9:00 PM', amenities: ['Wi-Fi', 'Pickup', 'Outdoor Seating'] },
    { name: 'Starbucks Capitol Hill', address: '242 Pine St, Seattle, WA', phone: '(206) 555-2210', hours: '5:30 AM - 10:00 PM', amenities: ['Drive-Thru', 'Delivery'] },
  ],
}: Partial<LocationMapProps>) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => locations.filter((l) => l.name.toLowerCase().includes(query.toLowerCase()) || l.address.toLowerCase().includes(query.toLowerCase())), [locations, query])

  return (
    <section id="locations" className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="rounded-xl border bg-white p-4">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="text-[#00704A]" />
            <h3 className="font-serif text-2xl text-[#1E3932]">Find a Store</h3>
          </div>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by city or neighborhood" />
          <div className="mt-4 h-[360px] rounded-lg bg-[#F5F5F5] p-4 text-sm text-[#333333]/70">Map placeholder for Google Places + pins integration</div>
        </div>
        <div className="space-y-4">
          {filtered.map((location) => (
            <LocationCard key={location.name} {...location} />
          ))}
        </div>
      </div>
    </section>
  )
}
