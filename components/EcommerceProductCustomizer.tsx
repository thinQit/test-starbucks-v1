'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'

interface EcommerceProductCustomizerProps {
  productName?: string
  basePrice?: number
  onAddToCart?: (item: { name: string; total: number }) => void
}

export default function EcommerceProductCustomizer({
  productName = 'Iced Vanilla Latte',
  basePrice = 5.45,
  onAddToCart,
}: Partial<EcommerceProductCustomizerProps>) {
  const [size, setSize] = useState('Grande')
  const [shots, setShots] = useState(2)
  const [milk, setMilk] = useState('Oat')

  const total = useMemo(() => basePrice + (size === 'Venti' ? 0.8 : 0) + (shots > 2 ? (shots - 2) * 0.6 : 0), [basePrice, size, shots])

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-serif text-2xl text-[#1E3932]">{productName}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <select value={size} onChange={(e) => setSize(e.target.value)} className="rounded-md border p-2">
          <option>Tall</option><option>Grande</option><option>Venti</option>
        </select>
        <select value={milk} onChange={(e) => setMilk(e.target.value)} className="rounded-md border p-2">
          <option>Whole</option><option>Oat</option><option>Almond</option>
        </select>
        <select value={shots} onChange={(e) => setShots(Number(e.target.value))} className="rounded-md border p-2">
          <option value={1}>1 shot</option><option value={2}>2 shots</option><option value={3}>3 shots</option><option value={4}>4 shots</option>
        </select>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-semibold text-[#00704A]">${total.toFixed(2)}</p>
        <Button onClick={() => onAddToCart?.({ name: productName + ' (' + size + ', ' + milk + ')', total })} className="bg-[#00704A] text-white hover:bg-[#1E3932]">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
