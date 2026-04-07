export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import SectionHeader from "@/components/SectionHeader"
import MenuCategoryTabs from "@/components/MenuCategoryTabs"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Menu"
          title="Find your next favorite drink."
          subtitle="Browse coffee, tea, cold drinks, and food. Filter by caffeine, dairy-free options, and seasonal picks."
          primaryCta={{ label: "Order for Pickup", href: "/order" }}
          secondaryCta={{ label: "View Locations", href: "/locations" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577053/site-images/restaurant/12387879.jpg"
        />
      </div>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader headline="Full menu" subheadline="Clear categories, quick scanning, and customization notes for each item." />
            <MenuCategoryTabs tabs={[]} />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CTASparkles
              title="Customize it. Save it. Reorder it."
              subtitle="Create your go-to drink and reorder in seconds for pickup."
              ctaLabel="Order Now"
              ctaHref="/order"
              secondaryCtaLabel="Join Rewards"
              secondaryCtaHref="/rewards"
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
