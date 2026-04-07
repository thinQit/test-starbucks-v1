export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function RewardsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Rewards"
          title="Earn Stars. Redeem faster. Enjoy more."
          subtitle="Join Starbucks Rewards to earn Stars on every order and redeem for drinks, food, and extras."
          primaryCta={{ label: "Join Rewards", href: "/contact?topic=rewards" }}
          secondaryCta={{ label: "See How It Works", href: "#how-it-works" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577056/site-images/restaurant/110813.jpg"
        />
      </div>
      <ScrollReveal>
        <section id="how-it-works" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FeaturesGrid
              badge="How Rewards Works"
              headline="Simple steps from signup to your next free favorite."
              features={[
                { icon: "UserPlus", title: "Join", description: "Sign up with your email and choose your preferred store." },
                { icon: "Star", title: "Earn", description: "Pay in-store or order ahead to collect Stars automatically." },
                { icon: "Gift", title: "Redeem", description: "Use Stars for drinks, bakery, and select food items." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CTASparkles
              title="Make every coffee run count."
              subtitle="Order ahead, earn Stars, and redeem when you’re ready."
              ctaLabel="Order Now"
              ctaHref="/order"
              secondaryCtaLabel="Menu"
              secondaryCtaHref="/menu"
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
