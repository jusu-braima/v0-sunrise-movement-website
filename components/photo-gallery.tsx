"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type GalleryImage = {
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  // Team Photos
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg",
    alt: "SM-SL team in green t-shirts",
    category: "Team",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25-SUwkThTTEq8sV4OrxN6ayJddJbd0Zs.jpeg",
    alt: "Team with arms crossed showing unity",
    category: "Team",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.24-uLYMyXCbn3uznrFoAtlJyT4HhkdBN3.jpeg",
    alt: "Team with raised fists in solidarity",
    category: "Team",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.11-UtxfXZfO1blkKX8pxO8V6UCBZdqRJN.jpeg",
    alt: "Team holding hands in unity",
    category: "Team",
  },
  // Climate Marches
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-LaypVYtvCav5iLy06NhEI23rIindml.jpeg",
    alt: "COP30 Climate March in Freetown",
    category: "Advocacy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.23-CNgv704jc2FLWfFAHNED9WTxF9IorI.jpeg",
    alt: "Youth holding climate justice signs",
    category: "Advocacy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.24-LJMW2gmHUSgAHtXt3e2vwlP34oq6Kv.jpeg",
    alt: "Climate march with banners",
    category: "Advocacy",
  },
  // School Outreach
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.11-b86eNj3DZmZM2V0mPs6rNPJmsLX5ni.jpeg",
    alt: "Speaking to students at school assembly",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.01-SgcdX2HDcBr7mo6R6lFXFOsIzI3EqT.jpeg",
    alt: "Students engaging in climate education",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.02-qgSEHTNJpP380x32WGk4CTvdjmuC7f.jpeg",
    alt: "Interactive classroom session",
    category: "Education",
  },
  // Conferences
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.06-PD3A9oxZHYsAuLJgKhXyIIWRwMGX2g.jpeg",
    alt: "Youth Adaptation Conference panel",
    category: "Conferences",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.44-3UO3ek9aw8wUme0vlKc9YdGw9VVLZt.jpeg",
    alt: "Kenya Youth Academy on Climate Adaptation",
    category: "Conferences",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.45-hX1nol34PESoNmHzTZMCoukhBHPBCy.jpeg",
    alt: "International delegates group photo",
    category: "Conferences",
  },
  // Beach Cleanup
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
    alt: "Beach cleanup volunteers",
    category: "Environment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.26-6MKL1XIX8VMgXuO4xl2afErHkZTRUS.jpeg",
    alt: "Collecting waste from beach",
    category: "Environment",
  },
  // Solar Project
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-duDECbr4fPcKoObj3ZzcSPbNWns7AY.jpeg",
    alt: "Lalehun Solar Energy Initiative launch",
    category: "Clean Energy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
    alt: "Solar project community gathering",
    category: "Clean Energy",
  },
  // Community
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
    alt: "Community leader speaking at event",
    category: "Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.52%20%281%29-KWQA0piMZhibT4J5KqjpNQm0sV3Ez3.jpeg",
    alt: "Intergenerational community gathering",
    category: "Community",
  },
]

const categories = ["All", "Team", "Advocacy", "Education", "Conferences", "Environment", "Clean Energy", "Community"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Work in Action</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore moments from our climate action initiatives, community outreach, and youth leadership programs across Sierra Leone and beyond.
          </p>
        </AnimateOnScroll>

        {/* Category Filter */}
        <AnimateOnScroll animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </AnimateOnScroll>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <AnimateOnScroll key={index} animation="fade-scale" delay={index * 50}>
              <Card 
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {selectedImage !== null && (
              <div className="relative aspect-video">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-center">{filteredImages[selectedImage].alt}</p>
                  <p className="text-white/60 text-sm text-center mt-1">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
