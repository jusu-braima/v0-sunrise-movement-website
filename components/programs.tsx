"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  Zap, 
  Target, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  MapPin
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const projectImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-duDECbr4fPcKoObj3ZzcSPbNWns7AY.jpeg",
    alt: "Lalehun Solar Energy Initiative team with students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.40%20%281%29-X2DbWr4hL35WIvSsCIM5KH3AGhVoCf.jpeg",
    alt: "Volunteers with solar project banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
    alt: "Solar project with students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.55-aNlKKVTLCuISzWW159CKIW4fb7OUWE.jpeg",
    alt: "Students gathered at project launch",
  },
]

const beachCleanupImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.02-9FMYLcCrsIH22LMZwwKVn45jskCIFV.jpeg",
    alt: "Youth volunteers collecting trash on beach",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.40-njfSddqjaNTtDc0bK1dTBmjPYcDh2h.jpeg",
    alt: "Team working together during beach cleanup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.57-jHNpigduBDKK6mBYQOh9h1J9Mo79bC.jpeg",
    alt: "Volunteers using rakes to collect debris",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.02-U8LTf28dKXtKuS1QBNAdYP0byywnQw.jpeg",
    alt: "Group of volunteers on beach cleanup day",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.04-Ts1cUzRwsiWV3kjH4VZNfMVVEf1Fzx.jpeg",
    alt: "Youth team collecting plastic waste",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.00-1zhDQ09ezgEWwlwwJIvT0sUPWy5BX0.jpeg",
    alt: "Volunteers with cleanup equipment on beach",
  },
]

const plannedOutputs = [
  "Solar energy systems installed in primary and secondary schools in Lalehun",
  "60 local youth trained in solar installation, maintenance, and troubleshooting",
  "Strong focus on young women in technical training programs",
]

const expectedOutcomes = [
  "Improved access to quality education through reliable energy",
  "Strengthened local skills for employment opportunities",
  "Increased youth participation in climate action and sustainable development",
]

const partners = [
  { name: "European Union", role: "Funding Partner" },
  { name: "Global Youth Mobilisation", role: "Program Partner" },
  { name: "Youth Empowerment Fund", role: "Grant Provider" },
]

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Lalehun Solar Energy Initiative */}
        <div className="mb-16">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Lalehun Solar Energy Initiative
            </h3>
            <p className="text-lg text-muted-foreground">
              Bringing clean energy, quality education, and youth empowerment to rural Sierra Leone
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={projectImages[0].src}
                    alt={projectImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Lalehun, Penguia Chiefdom
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {projectImages.slice(1).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Sunrise Movement Sierra Leone has launched the Lalehun Solar Energy Initiative 
                      in Lalehun, Penguia Chiefdom, to enhance access to clean energy, strengthen 
                      education systems, and advance youth empowerment in rural Sierra Leone.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 7: Affordable and Clean Energy
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        SDG 4: Quality Education
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-yellow-500/10 border-yellow-500/20">
                    <CardContent className="p-4 text-center">
                      <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">2</div>
                      <p className="text-sm text-muted-foreground">Schools Electrified</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">60</div>
                      <p className="text-sm text-muted-foreground">Youth Trained</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Supported By</p>
                    <div className="flex flex-wrap gap-2">
                      {partners.map((partner) => (
                        <Badge key={partner.name} variant="secondary" className="text-xs">
                          {partner.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Planned Outputs, Outcomes, Impact */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Planned Outputs */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <Card className="bg-card border-none shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Planned Outputs</h3>
                  </div>
                  <ul className="space-y-3">
                    {plannedOutputs.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Expected Outcomes */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <Card className="bg-card border-none shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Expected Outcomes</h3>
                  </div>
                  <ul className="space-y-3">
                    {expectedOutcomes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Anticipated Impact */}
            <AnimateOnScroll animation="fade-up" delay={300}>
              <Card className="bg-primary text-primary-foreground h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">Anticipated Impact</h3>
                  </div>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                    By integrating renewable energy with capacity building, the initiative aims to contribute to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                      <span className="text-sm text-primary-foreground/80">Resilient community systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                      <span className="text-sm text-primary-foreground/80">Inclusive economic opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                      <span className="text-sm text-primary-foreground/80">Scalable models for rural clean energy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={400} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Support This Initiative
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Coastal Beach Cleanup Initiative */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Coastal Beach Cleanup Initiative
            </h3>
            <p className="text-lg text-muted-foreground">
              Mobilizing youth volunteers to protect Sierra Leone&apos;s coastline and marine ecosystems
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={beachCleanupImages[0].src}
                    alt={beachCleanupImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown Beaches, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {beachCleanupImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Coastal Beach Cleanup Initiative is a youth-led environmental action program 
                      dedicated to protecting Sierra Leone&apos;s beautiful coastline from plastic pollution 
                      and marine debris. Through regular cleanup activities, we engage young volunteers 
                      in hands-on conservation efforts while raising awareness about ocean health and 
                      sustainable waste management.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our volunteers come together equipped with gloves, rakes, and collection bags to 
                      remove plastic waste, fishing nets, and other debris from local beaches. This 
                      initiative not only restores coastal beauty but also protects marine life and 
                      supports the livelihoods of fishing communities who depend on healthy ocean ecosystems.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        SDG 14: Life Below Water
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-blue-500/10 border-blue-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <p className="text-sm text-muted-foreground">Youth Volunteers</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-cyan-500/10 border-cyan-500/20">
                    <CardContent className="p-4 text-center">
                      <Target className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">Monthly</div>
                      <p className="text-sm text-muted-foreground">Cleanup Events</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Activities */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Key Activities</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Regular beach cleanup events along Freetown&apos;s coastline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Community awareness campaigns on ocean conservation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Youth training in waste management and recycling</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {beachCleanupImages.slice(3).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Our Next Cleanup
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
