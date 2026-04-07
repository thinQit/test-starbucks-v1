"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Beef, Coffee, Fish, Leaf, Pizza, Soup, Star, Utensils, Wine, UserPlus, Gift, TrendingUp, Users, Briefcase, CheckCircle, Smile } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

export default function FeaturesGrid({
  badge = 'Seasonal Menu',
  headline = 'A Curated Dining Experience',
  subheadline = 'Discover signature dishes crafted with premium ingredients, refined technique, and a passion for unforgettable flavor.',
  features = [
    { icon: 'Fish', title: 'Seared Ocean Bass', description: 'Delicate fillet, citrus beurre blanc, and herb-finished vegetables.' },
    { icon: 'Beef', title: 'Braised Short Rib', description: 'Slow-cooked for 14 hours, served with truffle mash and jus.' },
    { icon: 'Leaf', title: 'Garden Tasting Plate', description: 'Chef-selected seasonal produce with house-made vinaigrettes.' },
    { icon: 'Soup', title: 'Roasted Tomato Bisque', description: 'Velvety, aromatic, and topped with basil oil and crème fraîche.' },
    { icon: 'Pizza', title: 'Wood-Fired Flatbread', description: 'Crisp artisan base with aged cheeses and regional charcuterie.' },
    { icon: 'Wine', title: 'Sommelier Pairings', description: 'Handpicked international and local labels matched to each course.' },
  ],
}: Partial<FeaturesGridProps>) {
  const iconMap: Record<string, React.ElementType> = { UserPlus, Gift, TrendingUp, Users, Briefcase, CheckCircle, Smile, 
    Fish,
    Beef,
    Leaf,
    Soup,
    Pizza,
    Wine,
    Coffee,
    Utensils,
    Star,
  };

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map(function (feature, index) {
              const Icon = iconMap[feature.icon] || Utensils;
              return (
                <Card key={index} className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
