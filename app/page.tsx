import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { HomeAboutPreview } from "@/components/home/about-preview"
import { HomeProgramsPreview } from "@/components/home/programs-preview"
import { HomeImpactPreview } from "@/components/home/impact-preview"
import { HomeGalleryPreview } from "@/components/home/gallery-preview"
import { HomePartnersPreview } from "@/components/home/partners-preview"
import { HomeCTA } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HomeAboutPreview />
      <HomeProgramsPreview />
      <HomeImpactPreview />
      <HomeGalleryPreview />
      <HomePartnersPreview />
      <HomeCTA />
      <Footer />
    </main>
  )
}
