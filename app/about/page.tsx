export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesGrid from "@/components/FeaturesGrid"
import CtaBand from "@/components/CtaBand"
import ScrollReveal from "@/components/ScrollReveal"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="About"
          title="A coffeehouse built around community."
          subtitle="We’re here for morning momentum, afternoon resets, and the conversations in between—served with care and consistency."
          primaryCta={{ label: "Explore Menu", href: "/menu" }}
          secondaryCta={{ label: "Find a Store", href: "/locations" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577048/site-images/restaurant/12638920.jpg"
        />
      </div>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FeaturesGrid
              badge="Our approach"
              headline="Quality is a system: sourcing, training, and hospitality."
              features={[
                { icon: "CheckCircle", title: "Consistency you can taste", description: "From espresso calibration to beverage builds, we focus on repeatable quality." },
                { icon: "Smile", title: "Warm hospitality", description: "Friendly service, clear communication, and thoughtful customization." },
                { icon: "Sofa", title: "A place to pause", description: "Comfortable seating and a welcoming atmosphere for quick stops or longer stays." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CtaBand
              headline="Come in for a classic—or try a seasonal favorite."
              subheadline="Order ahead or stop by your nearest store today."
              primaryCta={{ label: "Order", href: "/order" }}
              secondaryCta={{ label: "Locations", href: "/locations" }}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
