"use client"


export const dynamic = 'force-dynamic';
import HeroAurora from "@/components/HeroAurora"
import EcommerceProductCustomizer from "@/components/EcommerceProductCustomizer"
import CartDrawer from "@/components/CartDrawer"
import CheckoutForm from "@/components/CheckoutForm"
import ScrollReveal from "@/components/ScrollReveal"

export default function OrderPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroAurora
          badge="Order Ahead"
          title="Order ahead for pickup."
          subtitle="Build your drink, choose a store, and pick up when it’s ready. Simple, fast, and customizable."
          primaryCta={{ label: "Start Order", href: "#order-flow" }}
          secondaryCta={{ label: "Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10135116.jpg"
        />
      </div>
      <ScrollReveal>
        <section id="order-flow" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-8">
            <EcommerceProductCustomizer />
            <CartDrawer />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="checkout" className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CheckoutForm />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
