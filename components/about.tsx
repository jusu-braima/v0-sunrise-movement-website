"use client"

import Image from "next/image"
import { Target, Eye, Award, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const alignments = [
  "Sierra Leone's Nationally Determined Contributions (NDCs)",
  "National Adaptation Plans (NAPs)",
  "The Paris Agreement",
  "UN Framework Convention on Climate Change",
  "2030 Agenda for Sustainable Development",
]

const sdgs = [
  { number: 4, name: "Quality Education" },
  { number: 7, name: "Affordable and Clean Energy" },
  { number: 8, name: "Decent Work and Economic Growth" },
  { number: 12, name: "Responsible Consumption" },
  { number: 13, name: "Climate Action" },
  { number: 14, name: "Life Below Water" },
  { number: 15, name: "Life on Land" },
  { number: 16, name: "Peace, Justice and Strong Institutions" },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            United for a Greener Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded on 25 August 2023, Sunrise Movement Sierra Leone is a youth-led organization 
            working at the intersection of community action, policy reform, and youth leadership.
          </p>
        </AnimateOnScroll>

        {/* Team Images */}
        <AnimateOnScroll animation="fade-scale" className="mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Main Team Photo */}
            <div className="md:col-span-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg"
                alt="Sunrise Movement Sierra Leone Team in green SM-SL t-shirts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Our dedicated team of youth climate activists</p>
                <p className="text-white/80 text-sm">Working together for a sustainable Sierra Leone</p>
              </div>
            </div>
            
            {/* Side Images */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[140px] md:h-[190px] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.24-uLYMyXCbn3uznrFoAtlJyT4HhkdBN3.jpeg"
                  alt="Team with raised fists in solidarity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">United in Action</p>
              </div>
              <div className="relative h-[140px] md:h-[190px] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.11-UtxfXZfO1blkKX8pxO8V6UCBZdqRJN.jpeg"
                  alt="Team holding hands showing unity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Stronger Together</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll animation="slide-left" delay={100}>
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Empower young people and communities across Sierra Leone to address climate change, 
                  expand clean energy access, promote sustainable agriculture, and strengthen environmental 
                  justice through innovation, skills development, and accountable grassroots leadership.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={200}>
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A climate-resilient Sierra Leone where youth leadership drives environmental stewardship, 
                  sustainable livelihoods, equitable development, and inclusive access to energy and education.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>

        {/* Policy Alignment */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Policy Alignment</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Our work aligns with major global and national frameworks, translating global climate 
              commitments into measurable local impact.
            </p>
            <ul className="space-y-3">
              {alignments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">SDG Contributions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.number}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base shrink-0">
                    {sdg.number}
                  </div>
                  <span className="text-sm font-medium text-foreground">{sdg.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
