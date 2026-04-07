'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PhotoGalleryMasonryProps {
  images?: string[]
}

export default function PhotoGalleryMasonry({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10918163.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577044/site-images/restaurant/1121480.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577053/site-images/restaurant/1253122.jpg',
  ],
}: Partial<PhotoGalleryMasonryProps>) {
  const [active, setActive] = useState<string>('')

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, idx) => (
          <button key={src + idx} onClick={() => setActive(src)} className="relative mb-4 block overflow-hidden rounded-xl">
            <Image src={src} alt="Gallery photo" width={900} height={700} unoptimized className="w-full object-cover" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive('')}>
          <Image src={active} alt="Expanded gallery image" width={1400} height={1000} unoptimized className="max-h-[90vh] w-auto rounded-lg" />
        </div>
      )}
    </section>
  )
}
