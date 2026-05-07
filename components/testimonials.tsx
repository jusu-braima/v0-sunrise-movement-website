"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const testimonials = [
  {
    quote: "Sunrise Movement Sierra Leone taught me that my voice matters in the fight against climate change. Now I lead environmental workshops in my community.",
    name: "Aminata Kamara",
    role: "Youth Climate Ambassador, Bo District",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.50-caSc6rLI35J6T3sevw6hSl5WdxaFmb.jpeg",
  },
  {
    quote: "The sustainable agriculture training transformed how our village farms. We now grow more food while protecting our soil and water sources.",
    name: "Mohamed Sesay",
    role: "Community Farmer, Bombali District",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    quote: "Through clean energy programs, my family received solar lighting. My children can now study at night, and we no longer rely on kerosene.",
    name: "Fatmata Bangura",
    role: "Community Member, Lalehun",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.52%20%281%29-KWQA0piMZhibT4J5KqjpNQm0sV3Ez3.jpeg",
  },
  {
    quote: "Being part of SM-SL's marine conservation initiative opened my eyes to protecting our coastlines. We've cleaned over 2km of beach together.",
    name: "Ibrahim Conteh",
    role: "Youth Volunteer, Freetown",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
]

const stories = [
  {
    title: "From Student to Climate Leader",
    excerpt: "How Mariatu discovered her passion for environmental justice and now trains other youth across Sierra Leone.",
    category: "Youth Leadership",
    date: "February 2026",
  },
  {
    title: "Reforesting Bombali District",
    excerpt: "A community-led initiative that has planted over 5,000 trees in deforested areas, restoring local ecosystems.",
    category: "Ecosystem Restoration",
    date: "January 2026",
  },
  {
    title: "Clean Energy for Rural Schools",
    excerpt: "Solar panels installed in 3 rural schools now power classrooms and charge devices for students.",
    category: "Clean Energy",
    date: "December 2025",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="stories" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Community Voices</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Stories of Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the youth, farmers, and community members whose lives have been 
            transformed through climate action.
          </p>
        </AnimateOnScroll>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <Card className="bg-card border-2 border-border shadow-elevated overflow-hidden rounded-3xl relative group">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/30 rounded-br-3xl" />
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32" />
              <CardContent className="p-6 sm:p-8 md:p-12 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6 sm:mb-8">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 ring-4 ring-primary/20 shadow-glow">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{testimonials[currentIndex].name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-primary w-8" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card 
              key={story.title} 
              className="group bg-card border-2 border-border hover:border-primary/50 shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer hover:-translate-y-2 rounded-2xl overflow-hidden relative"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full shadow-sm border border-primary/20">
                    {story.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{story.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground">{story.excerpt}</p>
              </CardContent>
              {/* Decorative shape */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
