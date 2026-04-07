export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import FeaturesGrid from "@/components/FeaturesGrid"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Contact"
          title="Contact Starbucks Coffeehouse"
          subtitle="Questions about an order, a store, Rewards, or careers? Send a message and we’ll route it to the right team."
          primaryCta={{ label: "Send a Message", href: "#contact-form" }}
          secondaryCta={{ label: "Find a Store", href: "/locations" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10148453.jpg"
        />
      </div>
      <ScrollReveal>
        <section id="contact-form" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ContactForm
              headline="Send us a message"
              subheadline="We typically respond within 1–2 business days."
              contactInfo={[
                { icon: "Phone", label: "Store Support", value: "(206) 555-0138" },
                { icon: "MapPin", label: "Main Service Area", value: "Seattle, WA" },
                { icon: "Clock", label: "Response Time", value: "1–2 business days" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FeaturesGrid
              headline="Other ways to reach us"
              subheadline="For store-specific questions, the fastest path is calling the store directly."
              features={[
                { icon: "PhoneCall", title: "Store phone", description: "Find your store and call during open hours for quick help." },
                { icon: "Users", title: "Meetup requests", description: "Planning a group visit? Tell us your time window and store preference." },
                { icon: "Briefcase", title: "Careers", description: "Ask about roles, availability, and what to expect in training." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
