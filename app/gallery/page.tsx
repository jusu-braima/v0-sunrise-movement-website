import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery | Sunrise Movement Sierra Leone",
  description: "View photos and highlights from our climate programs, events, and community initiatives across Sierra Leone.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              <Camera className="h-4 w-4" />
              Our Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Capturing Our Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore moments from our climate programs, community events, and environmental 
              initiatives making a difference across Sierra Leone.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join us in creating more moments of impact and positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
