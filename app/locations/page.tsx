export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import LocationMap from "@/components/LocationMap"
import CtaBand from "@/components/CtaBand"
import ScrollReveal from "@/components/ScrollReveal"

export default function LocationsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Locations"
          title="Stores, hours, and amenities—at a glance."
          subtitle="Search by neighborhood and filter for drive‑thru, seating, pickup, and Wi‑Fi."
          primaryCta={{ label: "Use Store Finder", href: "#store-finder" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577102/site-images/restaurant/12387873.jpg"
        />
      </div>
      <ScrollReveal>
        <section id="store-finder" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <LocationMap headline="Store finder" subheadline="Tap a pin for hours, phone, and directions." locations={[]} />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CtaBand
              headline="Planning a meetup or need accessibility info?"
              subheadline="We’ll help you choose the best store for your needs."
              primaryCta={{ label: "Contact Support", href: "/contact?topic=accessibility" }}
              secondaryCta={{ label: "Rewards", href: "/rewards" }}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
