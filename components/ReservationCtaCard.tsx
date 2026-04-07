"use client";

import Link from 'next/link'
import { CalendarDays, Users, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ReservationCtaCardProps {
  title?: string
  description?: string
}

export default function ReservationCtaCard({
  title = 'Plan Your Coffee Meetup',
  description = 'Reserve a cozy corner for team catchups, study groups, or intimate gatherings.',
}: Partial<ReservationCtaCardProps>) {
  return (
    <Card className="rounded-xl bg-[#F5F5F5] p-8">
      <h3 className="font-serif text-3xl text-[#1E3932]">{title}</h3>
      <p className="mt-3 text-[#333333]/80">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-[#333333]">
        <li className="flex items-center gap-2"><Users size={16} /> Up to 20 guests</li>
        <li className="flex items-center gap-2"><Clock size={16} /> 60–120 minute booking slots</li>
        <li className="flex items-center gap-2"><CalendarDays size={16} /> Available daily 8am–8pm</li>
      </ul>
      <Button asChild className="mt-6 bg-[#00704A] text-white hover:bg-[#1E3932]">
        <Link href="/contact?topic=reservation">Request Reservation</Link>
      </Button>
    </Card>
  )
}
