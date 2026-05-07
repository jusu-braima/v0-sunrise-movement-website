"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.36-Qk8xOjuCGMy6fATPYOt57sKSH2uu5P.jpeg",
    alt: "Community engagement",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-LaypVYtvCav5iLy06NhEI23rIindml.jpeg",
    alt: "Climate action",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.58.25-9e2cTNX2OeLH56J8nKPZnXG9y6VIrC.jpeg",
    alt: "Youth training",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.06-sCCOvbpOGIY18ItGfEKcQAk2cGwGwK.jpeg",
    alt: "Environmental education",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.59.37-0BPBZ78vTNxNVS5pywKFLwVD5B6V6c.jpeg",
    alt: "Team activities",
    span: "col-span-1 row-span-1",
  },
]

export function HomeGalleryPreview() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              <Camera className="h-4 w-4" />
              Our Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Moments of Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Glimpses of our work across communities in Sierra Leone - from tree planting 
              to youth training and coastal conservation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 group`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="text-center">
            <Button size="lg" asChild className="group">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
