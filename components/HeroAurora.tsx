"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
}

export default function HeroAurora({
  badge = "Fine Dining • Seasonal Ingredients",
  headline = "Sophisticated Flavors, Thoughtfully Served",
  subheadline = "Experience elevated cuisine in an intimate setting where every dish is crafted to delight the senses.",
  primaryCta = { label: "Reserve a Table", href: "#contact" },
  secondaryCta = { label: "Explore Menu", href: "#menu" },
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg",
}: Partial<HeroAuroraProps>) {
  return (
    <AuroraBackground
      className="relative bg-background text-foreground"
      auroraColors={['#f59e0b', '#ef4444', '#f97316', '#fcd34d', '#fb923c']}
    >
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img src={imageSrc} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-36 animate-fade-in-up"
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground">
            {badge}
          </span>
        )}
        <TextGenerateEffect
          words={headline}
          className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        />
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-foreground transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
