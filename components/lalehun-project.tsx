"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Sun, 
  GraduationCap, 
  Users, 
  Zap, 
  Target, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const projectImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.51-8FRFGOC6Y5pUJKTvlEcRx1WO6SixZU.jpeg",
    alt: "SM-SL team at project launch holding banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53%20%281%29-FNHfSnFgXoloINsBfRNEy3Uk3l0bFa.jpeg",
    alt: "Community gathering with students in blue uniforms at launch",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.41-zM6p9zTt7BoEyycIltqNDq4TWmUxZ2.jpeg",
    alt: "Community members with project banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.05-3Lk3dQS1XewD4kEsxgeMJKyXiGCznB.jpeg",
    alt: "Team members holding banner on steps",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25-zIzfu6NRicllS2LVTDlFld4CUYuBGV.jpeg",
    alt: "SM-SL team in green shirts",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-QgIHtZYoPP6yxLEQrmuFSNS9Ek4bs9.jpeg",
    alt: "Students and community with SM-SL team",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.52%20%281%29-JvV97fY3yZHZ9qXIVehSxXR7JijjiN.jpeg",
    alt: "Community members seated in meeting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-MooX8wqFe86zoLoBFY97O7wUFioDho.jpeg",
    alt: "Full team portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.40%20%281%29-mgXtfi0wZkcF6CfrA0VpB1wo5qGLqE.jpeg",
    alt: "Team holding banner at school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.11-dNrTagtOO1z1llWJ36MCuYcspdjse3.jpeg",
    alt: "Team members holding hands in unity",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.40-GWCNaLTGjhoe2PeMnXML5aMFowX2yp.jpeg",
    alt: "Community meeting gathering",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.51%20%281%29-iDRAUvXW8WDxr080ffqtcq2RTEaavC.jpeg",
    alt: "Community meeting with students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.52-Rm2FYquFSGTJZul5XqtRWCGevBZWX2.jpeg",
    alt: "Wide shot of community meeting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.55-PqgP2vekjfucYTSvVgZ1ZTEW42QsUh.jpeg",
    alt: "Students group photo at school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39-TDCPgh7WIl5LD0YoXsITqf5LgJAG62.jpeg",
    alt: "Large community group with banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-T9kkDSeeOXPRr9PV5RffTqjGeQQXQ9.jpeg",
    alt: "Group of students at school with banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.08-ZVOKRTzCD73iBftXqISs03u2sUG4sN.jpeg",
    alt: "Children students at gathering",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.24-4zBnaW3J2jZvxXVN2X9yxa6INhsLvK.jpeg",
    alt: "Team showing Sunrise Movement vests from behind",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.54-yDw5lrfR9RhxqE7EGbTk3c2bH5y6Hj.jpeg",
    alt: "Community members in meeting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-U4LcOEDfLreHsQMCQPp9c5SxLZxubi.jpeg",
    alt: "Local leader speaking at event",
  },
]

const plannedOutputs = [
  "Solar energy systems installed in the only primary and secondary schools in Lalehun",
  "60 local youth trained in solar installation, maintenance, and troubleshooting",
  "Strong focus on young women in technical training programs",
  "Building technical capacity within the community",
]

const expectedOutcomes = [
  "Improved access to quality education through reliable energy",
  "Strengthened local skills for employment opportunities",
  "Increased youth participation in climate action and sustainable development",
]

const partners = [
  { name: "European Union", role: "Funding Partner" },
  { name: "Global Youth Mobilisation", role: "Program Partner" },
  { name: "Youth Empowerment Fund", role: "Grant Provider" },
]

export function LalehunProject() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % projectImages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <section id="project" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
            <Sun className="w-3 h-3 mr-1" />
            Our Project
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Lalehun Solar Energy Initiative Project Launch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sunrise Movement Sierra Leone has launched the Lalehun Solar Energy Initiative in Lalehun, 
            Penguia Chiefdom, to enhance access to clean energy, strengthen education systems, and 
            advance youth empowerment in rural Sierra Leone.
          </p>
        </AnimateOnScroll>

        {/* Hero Image Carousel */}
        <AnimateOnScroll animation="fade-up" delay={100} className="mb-16">
          <div 
            className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Images */}
            {projectImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Location Badge */}
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-primary text-primary-foreground shadow-lg">
                <MapPin className="w-3 h-3 mr-1" />
                Lalehun, Penguia Chiefdom
              </Badge>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-1.5">
              {projectImages.slice(0, 8).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentSlide(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide % 8
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              {projectImages.length > 8 && (
                <span className="text-white/75 text-xs ml-2">+{projectImages.length - 8}</span>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* SDG Badges and Description */}
        <AnimateOnScroll animation="fade-up" delay={150} className="mb-16">
          <Card className="bg-card border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-6">
                The initiative contributes to SDG 7 (Affordable and Clean Energy) and SDG 4 (Quality Education), 
                while supporting inclusive climate adaptation and community resilience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  SDG 7: Affordable and Clean Energy
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 text-sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  SDG 4: Quality Education
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        {/* Stats Grid */}
        <AnimateOnScroll animation="fade-up" delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-yellow-500/10 border-yellow-500/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">2</div>
                <p className="text-sm text-muted-foreground">Schools Electrified</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">60</div>
                <p className="text-sm text-muted-foreground">Youth Trained</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-500/10 border-emerald-500/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">1</div>
                <p className="text-sm text-muted-foreground">Primary School</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10 border-blue-500/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">1</div>
                <p className="text-sm text-muted-foreground">Secondary School</p>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>

        {/* Thumbnail Gallery */}
        <AnimateOnScroll animation="fade-up" delay={250} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Project Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {projectImages.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${
                  index === currentSlide ? "ring-4 ring-primary" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {index === currentSlide && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Badge className="bg-primary text-primary-foreground">Viewing</Badge>
                  </div>
                )}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Planned Outputs, Outcomes, Impact */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Planned Outputs */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <Card className="bg-card border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Planned Outputs</h3>
                </div>
                <ul className="space-y-3">
                  {plannedOutputs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Expected Outcomes */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Card className="bg-card border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Expected Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  {expectedOutcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Anticipated Impact */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <Card className="bg-primary text-primary-foreground h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Anticipated Impact</h3>
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                  By integrating renewable energy with capacity building, the initiative aims to contribute to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                    <span className="text-sm text-primary-foreground/80">Resilient community systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                    <span className="text-sm text-primary-foreground/80">Inclusive economic opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                    <span className="text-sm text-primary-foreground/80">Scalable models for rural clean energy solutions in Sierra Leone</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>

        {/* Partners */}
        <AnimateOnScroll animation="fade-up" delay={350} className="mb-12">
          <Card className="bg-card border border-border shadow-lg">
            <CardContent className="p-8">
              <p className="text-center text-muted-foreground mb-6">
                This initiative is implemented with the support of the European Union and Global Youth Mobilisation 
                through the Youth Empowerment Fund, contributing to long-term, sustainable development outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {partners.map((partner) => (
                  <Badge key={partner.name} variant="secondary" className="px-4 py-2 text-sm">
                    {partner.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400} className="text-center">
          <Button size="lg" asChild>
            <a href="#get-involved">
              Support This Initiative
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
