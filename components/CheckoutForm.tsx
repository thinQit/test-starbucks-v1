'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface CheckoutFormProps {
  total?: string
}

export default function CheckoutForm({ total = '$18.40' }: Partial<CheckoutFormProps>) {
  return (
    <form className="mx-auto max-w-2xl space-y-5 rounded-xl border bg-white p-6">
      <h3 className="font-serif text-3xl text-[#1E3932]">Checkout</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label>Name</Label><Input placeholder="Jane Doe" /></div>
        <div><Label>Email</Label><Input placeholder="jane@email.com" type="email" /></div>
      </div>
      <div><Label>Pickup Location</Label><Input placeholder="Starbucks Downtown" /></div>
      <div><Label>Pickup Notes</Label><Textarea placeholder="Curbside pickup, blue sedan." /></div>
      <div className="rounded-lg border bg-[#F5F5F5] p-4 text-sm text-[#333333]/80">Stripe Payment Element mounts here.</div>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#1E3932]">Total: {total}</span>
        <Button className="bg-[#00704A] text-white hover:bg-[#1E3932]">Pay Now</Button>
      </div>
    </form>
  )
}
