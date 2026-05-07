"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Active Initiatives Across Sierra Leone
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our ongoing projects making real impact in communities throughout the country.
          </p>
        </AnimateOnScroll>

        {/* Content will be added here */}
      </div>
    </section>
  )
}
