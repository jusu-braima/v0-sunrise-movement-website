"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { AnimatedBackground } from "@/components/animated-background"
import { projectsList } from "@/lib/projects-data"

const colorClasses: Record<string, { badge: string; button: string; overlay: string }> = {
  yellow: {
    badge: "bg-yellow-600 text-white",
    button: "bg-yellow-600 hover:bg-yellow-700 text-white",
    overlay: "from-yellow-900/80",
  },
  blue: {
    badge: "bg-blue-600 text-white",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    overlay: "from-blue-900/80",
  },
  emerald: {
    badge: "bg-emerald-600 text-white",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
    overlay: "from-emerald-900/80",
  },
  orange: {
    badge: "bg-orange-600 text-white",
    button: "bg-orange-600 hover:bg-orange-700 text-white",
    overlay: "from-orange-900/80",
  },
  purple: {
    badge: "bg-purple-600 text-white",
    button: "bg-purple-600 hover:bg-purple-700 text-white",
    overlay: "from-purple-900/80",
  },
  pink: {
    badge: "bg-pink-600 text-white",
    button: "bg-pink-600 hover:bg-pink-700 text-white",
    overlay: "from-pink-900/80",
  },
}

export function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-32 overflow-hidden">
      <AnimatedBackground variant="particles" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Driving Change Across Sierra Leone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our impactful programs and initiatives that are transforming communities, 
            empowering youth, and building a sustainable future.
          </p>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => {
            const colors = colorClasses[project.color] || colorClasses.emerald
            return (
              <AnimateOnScroll 
                key={project.slug} 
                animation="fade-up" 
                delay={index * 100}
              >
                <Link href={`/programs/${project.slug}`} className="block group">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-card group-hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                      
                      {/* Location Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={colors.badge}>
                          <MapPin className="w-3 h-3 mr-1" />
                          {project.location}
                        </Badge>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`${colors.button} px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      
                      {/* SDG Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.sdgs.slice(0, 2).map((sdg, sdgIndex) => (
                          <Badge 
                            key={sdgIndex} 
                            variant="outline" 
                            className="text-xs bg-muted/50"
                          >
                            {sdg.split(":")[0]}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll animation="fade-up" delay={600} className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our movement and help us create lasting change across Sierra Leone. 
              Whether through volunteering, donating, or spreading awareness, every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
