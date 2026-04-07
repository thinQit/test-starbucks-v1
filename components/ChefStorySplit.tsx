"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface ChefStorySplitProps {
  imageSrc?: string
  name?: string
  bio?: string
  recommendation?: string
}

export default function ChefStorySplit({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577363/site-images/team-people/12903169.jpg',
  name = 'Chef Elena Marquez',
  bio = 'With over 15 years in specialty coffee and pastry craft, Chef Elena leads our menu with seasonal ingredients and globally inspired flavors.',
  recommendation = 'Try our Honey Cinnamon Cortado with almond biscotti for a warm, aromatic pairing.',
}: Partial<ChefStorySplitProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
      <div className="overflow-hidden rounded-xl">
        <Image src={imageSrc} alt={name} width={1200} height={900} unoptimized className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#00704A]">Chef Story</p>
        <h3 className="mt-2 font-serif text-4xl text-[#1E3932]">{name}</h3>
        <p className="mt-4 text-[#333333]/80">{bio}</p>
        <blockquote className="mt-6 border-l-2 border-[#00704A] pl-4 italic text-[#1E3932]">“{recommendation}”</blockquote>
        <ul className="mt-6 space-y-2 text-sm text-[#333333]">
          <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00704A]" /> Freshly sourced beans</li>
          <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00704A]" /> Small-batch pastry program</li>
          <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00704A]" /> Crafted-to-order beverages</li>
        </ul>
      </div>
    </section>
  )
}
