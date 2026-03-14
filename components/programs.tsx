"use client"

import { 
  Users, 
  Scale, 
  Wheat, 
  Zap, 
  Waves, 
  GraduationCap, 
  Home, 
  Handshake,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const pillars = [
  {
    icon: Users,
    title: "Youth Leadership & Environmental Governance",
    description: "Building the next generation of environmental leaders through training, mentorship, and active participation in climate governance.",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Scale,
    title: "Climate Policy & Environmental Justice",
    description: "Advocating for equitable climate policies that protect vulnerable communities and ensure environmental rights for all.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Wheat,
    title: "Sustainable & Regenerative Agriculture",
    description: "Promoting climate-smart farming practices that enhance food security while protecting our natural ecosystems.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Zap,
    title: "Clean Energy Access",
    description: "Expanding renewable energy solutions to underserved communities, powering sustainable development.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Waves,
    title: "Marine Pollution & Ecosystem Protection",
    description: "Protecting coastal ecosystems and marine biodiversity through conservation and pollution reduction initiatives.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Development",
    description: "Equipping youth with green skills and climate literacy for employment in the sustainable economy.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Home,
    title: "Community-Based Climate Solutions",
    description: "Implementing grassroots adaptation and mitigation projects that build local resilience.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Handshake,
    title: "Cross-Sector Partnerships",
    description: "Strengthening systems through collaboration with government, civil society, and international partners.",
    color: "bg-pink-500/10 text-pink-600",
  },
]

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

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <AnimateOnScroll 
              key={pillar.title} 
              animation="fade-scale" 
              delay={index * 100}
            >
              <Card 
                className="group bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 h-full"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="#impact">
              See Our Impact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
