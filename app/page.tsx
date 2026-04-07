export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import SectionHeader from "@/components/SectionHeader"
import MenuCategoryTabs from "@/components/MenuCategoryTabs"
import ReservationCtaCard from "@/components/ReservationCtaCard"
import ChefStorySplit from "@/components/ChefStorySplit"
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry"
import TestimonialsMarquee from "@/components/TestimonialsMarquee"
import LocationMap from "@/components/LocationMap"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Starbucks Coffeehouse"
          title="Coffee crafted to your taste—ready when you are."
          subtitle="From bold espresso to cold foam favorites, discover seasonal drinks, warm bakery bites, and easy pickup—plus Rewards that make every visit count."
          primaryCta={{ label: "Order for Pickup", href: "/order" }}
          secondaryCta={{ label: "Explore the Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg"
        />
      </div>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader
              headline="Menu highlights"
              subheadline="Browse popular picks across coffee, tea, cold drinks, and bakery—made fresh and customizable."
              primaryCta={{ label: "View Full Menu", href: "/menu" }}
              secondaryCta={{ label: "Order Now", href: "/order" }}
            />
            <MenuCategoryTabs tabs={[]} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ReservationCtaCard
              headline="Meeting up? Save a table-friendly time."
              subheadline="While most coffeehouses are walk-in, you can plan ahead for group meetups and events—tell us your preferred store and time window."
              primaryCta={{ label: "Request a Meetup Slot", href: "/contact?topic=meetup" }}
              secondaryCta={{ label: "Find a Store", href: "/locations" }}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ChefStorySplit
              headline="Craft, consistency, and care—behind every cup."
              subheadline="Our baristas train for precision and hospitality: dialing in espresso, steaming milk to silky microfoam, and finishing each drink with intention."
              primaryCta={{ label: "Learn About Rewards", href: "/rewards" }}
              secondaryCta={{ label: "Join the Team", href: "/careers" }}
              imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577363/site-images/team-people/12903169.jpg"
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PhotoGalleryMasonry
              headline="A coffeehouse feel—warm, modern, and inviting."
              subheadline="Explore drink close-ups, bakery textures, and cozy seating moments designed for quick stops and long chats."
              images={[
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10918163.jpg", alt: "Latte art" },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577044/site-images/restaurant/1121480.jpg", alt: "Cold foam drink" },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577053/site-images/restaurant/1253122.jpg", alt: "Bakery case" },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577064/site-images/restaurant/11236818.jpg", alt: "Coffeehouse seating" },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577055/site-images/restaurant/12436190.jpg", alt: "Espresso shot" },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10520478.jpg", alt: "Iced matcha" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <TestimonialsMarquee
              headline="Loved by regulars and first-timers."
              subheadline="Real moments from guests who stop in for the coffee—and stay for the vibe."
              testimonials={[
                {
                  quote: "Mobile order is consistently fast, and my cold brew tastes the same every time. Perfect before work.",
                  name: "Jordan P.",
                  designation: "Capitol Hill",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg",
                },
                {
                  quote: "The baristas are genuinely kind and always help me tweak my drink when I want something new.",
                  name: "Alyssa R.",
                  designation: "Downtown",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/1181405.jpg",
                },
                {
                  quote: "Great place to meet a friend—comfortable seating, solid Wi‑Fi, and the bakery items are always tempting.",
                  name: "Sam K.",
                  designation: "South Lake Union",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577358/site-images/team-people/1181401.jpg",
                },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <LocationMap
              headline="Find a Starbucks near you."
              subheadline="Check hours, amenities, and directions. Filter for drive‑thru, pickup, and seating."
              locations={[]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
