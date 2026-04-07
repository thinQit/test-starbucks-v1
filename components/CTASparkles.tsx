"use client";
import { SparklesCore } from "@/components/ui/backgrounds/sparkles";
import { Button } from "@/components/ui/button";

interface CTASparklesProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
}

export default function CTASparkles({
  headline = "Book Your Evening With Us",
  description = "Reserve now and enjoy a refined culinary journey with curated pairings and impeccable hospitality.",
  ctaLabel = "Reserve Now",
  ctaHref = "#contact",
  secondaryCtaLabel = "View Tasting Menu",
  secondaryCtaHref = "#menu",
  sparkleColor = "#1E3932",
}: Partial<CTASparklesProps>) {
  return (
    <section className="relative h-[30rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="cta-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          particleColor={sparkleColor}
        />
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h2 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-foreground">
          {headline}
        </h2>
        {description && (
          <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto mt-4">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-foreground hover:bg-muted transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
