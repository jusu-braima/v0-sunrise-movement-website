"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Eye, Leaf } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function HomeAboutPreview() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimateOnScroll animation="slide-left">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Who We Are</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  Youth-Led Climate Action in Sierra Leone
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Sunrise Movement Sierra Leone is a youth-led organization founded in August 2023, 
                  working at the intersection of community action, policy reform, and youth leadership.
                </p>
                <p className="text-muted-foreground">
                  We empower young people and communities across Sierra Leone to address climate change, 
                  expand clean energy access, and promote sustainable development through innovation 
                  and grassroots leadership.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card className="bg-card border-2 border-primary/10 shadow-soft hover:shadow-glow transition-all duration-300 rounded-2xl group">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Empower communities to address climate change through education and action.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-2 border-accent/10 shadow-soft hover:shadow-glow transition-all duration-300 rounded-2xl group">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      A climate-resilient Sierra Leone with equitable development for all.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" asChild className="mt-6 group">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Image Grid */}
          <AnimateOnScroll animation="slide-right" delay={100}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-glow group">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg"
                      alt="Sunrise Movement Team"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-soft group">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.24-uLYMyXCbn3uznrFoAtlJyT4HhkdBN3.jpeg"
                      alt="Team Unity"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-soft group">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.11-UtxfXZfO1blkKX8pxO8V6UCBZdqRJN.jpeg"
                      alt="Community Action"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-glow bg-primary/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
                      <p className="text-2xl font-bold text-primary">8</p>
                      <p className="text-sm text-muted-foreground">SDGs Addressed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
