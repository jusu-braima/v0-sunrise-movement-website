"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Programs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Eight Strategic Pillars for Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive approach addresses climate change through interconnected programs 
            that empower communities and create lasting environmental impact.
          </p>
        </AnimateOnScroll>

        {/* Content will be added here */}
      </div>
    </section>
  )
}
