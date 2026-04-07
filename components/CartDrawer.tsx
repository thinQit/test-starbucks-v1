'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface CartItem {
  name: string
  qty: number
  price: number
}

interface CartDrawerProps {
  initialItems?: CartItem[]
}

export default function CartDrawer({
  initialItems = [{ name: 'Iced Caramel Macchiato', qty: 1, price: 6.25 }],
}: Partial<CartDrawerProps>) {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initialItems)

  const subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-[#1E3932] text-white">Open Cart</Button>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 shadow-xl">
            <h3 className="font-serif text-2xl text-[#1E3932]">Your Cart</h3>
            <div className="mt-4 space-y-4">
              {items.map((item, idx) => (
                <div key={item.name + idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-[#333333]/70">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setItems(items.map((it, i) => i === idx ? { ...it, qty: Math.max(1, it.qty - 1) } : it))} className="rounded border px-2">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => setItems(items.map((it, i) => i === idx ? { ...it, qty: it.qty + 1 } : it))} className="rounded border px-2">+</button>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Button className="mt-6 w-full bg-[#00704A] text-white hover:bg-[#1E3932]">Checkout</Button>
          </aside>
        </div>
      )}
    </>
  )
}
