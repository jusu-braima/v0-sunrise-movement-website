"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, TreePine, GraduationCap, Zap } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const impactStats = [
  {
    icon: Users,
    value: "20,000+",
    label: "People Reached",
    description: "Through education and programs",
  },
  {
    icon: TreePine,
    value: "10,000+",
    label: "Trees Planted",
    description: "In restoration projects",
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Youth Trained",
    description: "As climate leaders",
  },
  {
    icon: Zap,
    value: "15",
    label: "Schools Electrified",
    description: "With solar power",
  },
]

export function HomeImpactPreview() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-foreground/80 font-semibold uppercase tracking-wider text-sm">Our Impact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6 text-balance">
              Making a Real Difference
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Since August 2023, we have been creating measurable environmental and social 
              impact across Sierra Leone.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="fade-scale" delay={index * 100}>
              <Card className="bg-primary-foreground/10 border-2 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">{stat.label}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="text-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/impact">
                See Our Full Impact
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
