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
            <div className="md:col-span-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-elevated group ring-1 ring-primary/10">
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10 pointer-events-none" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg"
                alt="Sunrise Movement Sierra Leone Team in green SM-SL t-shirts"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Our dedicated team of youth climate activists</p>
                <p className="text-white/80 text-sm">Working together for a sustainable Sierra Leone</p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/40 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/40 rounded-br-xl" />
            </div>
            
            {/* Side Images */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[140px] md:h-[190px] rounded-2xl overflow-hidden shadow-glow group ring-1 ring-primary/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.24-uLYMyXCbn3uznrFoAtlJyT4HhkdBN3.jpeg"
                  alt="Team with raised fists in solidarity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full backdrop-blur-sm">United in Action</p>
              </div>
              <div className="relative h-[140px] md:h-[190px] rounded-2xl overflow-hidden shadow-glow group ring-1 ring-primary/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.11-UtxfXZfO1blkKX8pxO8V6UCBZdqRJN.jpeg"
                  alt="Team holding hands showing unity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full backdrop-blur-sm">Stronger Together</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Blue Community Announcement */}
        <AnimateOnScroll animation="fade-up" className="mb-16">
          <Card className="bg-[#2d7fc1] border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[300px] lg:h-auto lg:min-h-[400px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.50%20%281%29-dccsrYN58YdUh0vya8IoKAVQyr8aqG.jpeg"
                    alt="Alicious Bessiama - Founder and Executive Director of Sunrise Movement Sierra Leone with Blue Community Network announcement"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Sunrise Movement Sierra Leone Joins the Global Blue Community Network
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Sunrise Movement Sierra Leone (SM-SL) is proud to announce its official affiliation with the Blue Community Network, becoming the first recognized Blue Community in Sierra Leone. This milestone marks a significant advancement in the organization&apos;s efforts to promote environmental justice, youth empowerment, and equitable access to safe and sustainable water resources.
                  </p>
                  <p className="text-white/90 leading-relaxed mb-4">
                    The Blue Community Network is a global movement committed to recognizing water as a fundamental human right, opposing its commodification, and strengthening public water services. Through this partnership, Sunrise Movement Sierra Leone will expand its grassroots initiatives, deepen community engagement, and advocate for inclusive, rights-based approaches to water governance.
                  </p>
                  <p className="text-white/90 leading-relaxed mb-4">
                    As part of this collaboration, the organization will implement a range of initiatives aimed at strengthening water access and awareness, including community outreach and education on water rights, school-based WASH (Water, Sanitation, and Hygiene) programmes, and capacity-building for youth and local leaders on water justice.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    This affiliation reinforces the organization&apos;s commitment to advancing sustainable development and aligns with global priorities, including Sustainable Development Goal 6 (Clean Water and Sanitation) and Sustainable Development Goal 13 (Climate Action).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll animation="slide-left" delay={100}>
            <Card className="bg-card border-2 border-primary/10 shadow-elevated hover:shadow-primary-glow/20 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower young people and communities with the knowledge, skills, and opportunities to lead
                  innovative solutions that advance sustainability, resilience, and inclusive development through
                  education, collaboration, and community-driven action.
                </p>
              </CardContent>
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-[80px]" />
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={200}>
            <Card className="bg-card border-2 border-accent/10 shadow-elevated hover:shadow-primary-glow/20 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where young people and communities are empowered to lead sustainable solutions, build
                  resilient societies, and create a future where people and nature thrive together.
                </p>
              </CardContent>
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-tl-[80px]" />
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
                  className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300">
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
