export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesGrid from "@/components/FeaturesGrid"
import CtaBand from "@/components/CtaBand"
import ScrollReveal from "@/components/ScrollReveal"

export default function CareersPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Careers"
          title="Build your future—one great shift at a time."
          subtitle="Join a team that values craft, kindness, and growth. Explore barista and shift supervisor roles near you."
          primaryCta={{ label: "View Open Roles", href: "#open-roles" }}
          secondaryCta={{ label: "Contact Recruiting", href: "/contact?topic=careers" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577090/site-images/restaurant/11368919.jpg"
        />
      </div>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FeaturesGrid
              badge="Why work here"
              headline="A supportive environment for learning coffee craft and serving your community."
              features={[
                { icon: "Coffee", title: "Barista craft training", description: "Learn espresso basics, milk steaming, and beverage builds with hands-on coaching." },
                { icon: "HeartHandshake", title: "Guest-first culture", description: "We focus on warmth, speed, and consistency—every drink, every visit." },
                { icon: "TrendingUp", title: "Growth pathways", description: "Develop toward trainer, shift lead, and store leadership roles." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="open-roles" className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CtaBand
              headline="Ready to apply or have questions?"
              subheadline="Tell us what role you’re interested in and your preferred location."
              primaryCta={{ label: "Contact Recruiting", href: "/contact?topic=careers" }}
              secondaryCta={{ label: "Rewards", href: "/rewards" }}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
