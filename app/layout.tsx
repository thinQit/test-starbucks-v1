import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
})

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Starbucks Coffeehouse"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Locations", href: "/locations" },
            { label: "Rewards", href: "/rewards" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Order"
          ctaHref="/order"
        />
        {children}
        <Footer
          brand="Starbucks Coffeehouse"
          description="Your daily ritual—crafted coffee, warm food, and rewards that add up."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Locations", href: "/locations" },
                { label: "Rewards", href: "/rewards" },
                { label: "Order", href: "/order" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Visit",
              links: [
                { label: "Store Hours", href: "/locations" },
                { label: "Amenities", href: "/locations#filters" },
                { label: "Accessibility", href: "/contact?topic=accessibility" },
              ],
            },
          ]}
          copyright="© 2026 Starbucks Coffeehouse. This is a demo website blueprint for a coffee shop experience."
        />
      </body>
    </html>
  )
}
