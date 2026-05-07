"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TreePine, Zap, Wheat, GraduationCap, Waves, Scale } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const programs = [
  {
    icon: TreePine,
    title: "Reforestation & Conservation",
    description: "Restoring degraded lands and protecting biodiversity through community-led initiatives.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Zap,
    title: "Clean Energy Access",
    description: "Expanding solar power to schools and communities for sustainable development.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Wheat,
    title: "Climate-Smart Agriculture",
    description: "Training farmers in sustainable practices to ensure food security.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: GraduationCap,
    title: "Youth Education",
    description: "Building the next generation of climate leaders through training programs.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Waves,
    title: "Marine Conservation",
    description: "Protecting coastal ecosystems and promoting sustainable fishing practices.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Scale,
    title: "Policy Advocacy",
    description: "Influencing climate policies at local and national levels.",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export function HomeProgramsPreview() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Our Strategic Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              We address climate change through interconnected programs that empower 
              communities and create lasting environmental impact.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <AnimateOnScroll key={program.title} animation="fade-up" delay={index * 100}>
              <Card className="h-full bg-card border-2 border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden group relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-500" />
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="text-center">
            <Button size="lg" asChild className="group">
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
