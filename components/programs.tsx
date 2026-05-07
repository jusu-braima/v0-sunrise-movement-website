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

const climateMarchImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.12-oW4fTan9lrOysUwpl93FUnyQxfmlmE.jpeg",
    alt: "Youth Alliance for Sustainable Development COP30 march with banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.23-nsEN8ZPfniskr51KLqaM1aRqYjomkW.jpeg",
    alt: "Youth marching with Climate Justice signs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.11-qtxu65CHTIKHSNJXcCJHsdzsfEAKsZ.jpeg",
    alt: "Protesters with There is No Planet B sign",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.10-nskEf3RBx743WvumEbe0LM21LJw82d.jpeg",
    alt: "Marchers demanding climate accountability now",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.42-0JYV8X4vo1UotCkHw8dgYZWQrXdDWx.jpeg",
    alt: "Young women with Make Earth Cool Again sign",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.45-TytX2TQ9S4PdJAcArSDUxjJsNP65O4.jpeg",
    alt: "Group marching with climate justice placards",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.34-Nr2BUufDbObYNql92zLLmweIpEW3sv.jpeg",
    alt: "Protesters with Climate Justice equals Social Justice signs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.02-oFor4ONOUNOgZHRHmkGPoE7JDZ97SB.jpeg",
    alt: "COP30 foot walk march in Freetown",
  },
]

const schoolOutreachImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.08-5xFJWvEnNmOCiHo6JsJLSr5PsF5k26.jpeg",
    alt: "Volunteer addressing large assembly of students in green uniforms",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.49-YSh6ikmQm9R9OB9irwQehWQTJx2iMi.jpeg",
    alt: "Hundreds of students gathered for climate education session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.31-hFxT94xkVNWCuPJA5G1xEfsUD3lXC1.jpeg",
    alt: "Volunteer speaking to students in white hijabs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.18-wBXo6sAcUBqwbMh6SkBbpqp0iZlpBR.jpeg",
    alt: "Volunteer team with students in front of school mural",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.33-ZZWVAQTieBQe4dxV5c4ZCYcRolf6Bc.jpeg",
    alt: "Volunteer team with students outside school offices",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-d0rvetdXMpAv7loxmQpJnNsfAdkOH3.jpeg",
    alt: "Five volunteers in orange vests posing together",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.15-99iYkZ7hFxpYNK9AUZk3w2edi4BTWK.jpeg",
    alt: "Large crowd of students in green uniforms at school assembly",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.35-yFLgWuLcZFN8pcGJWpzxvxV0vGGxYV.jpeg",
    alt: "Students in blue and white uniforms gathered under trees",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.17-NddBlbFFeRSpJVnoIrk5Nq3wLxBMMY.jpeg",
    alt: "Volunteer addressing students from behind",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.11-YehBBHhjkfwHaPyUgczmTNgNJa393E.jpeg",
    alt: "Volunteer speaking to large group of students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.31%20%281%29-aGtjQDnpYZ76MOyhUK31SZFKTR6y5y.jpeg",
    alt: "Volunteer engaging with students in blue uniforms",
  },
]

const youthAdaptationImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.01-WeZc24cYbrTGqcsjl1fXP83QhQbgAH.jpeg",
    alt: "Large group photo at Youth Adaptation & SDGs Leadership Conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.52-ZkhFb6dPT1G7F6e2EU7DusxpEMnzdl.jpeg",
    alt: "Panel of speakers at conference with GYC and Rural Women Organization branding",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.39-OB2k75IFZK8CW6GCUTXLxdRIEbfnmA.jpeg",
    alt: "Participants in matching pink shirts holding certificates",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.06-pnsUxjkPoLHymJPkbcNwn60BiibMCr.jpeg",
    alt: "Woman speaker presenting with microphone at conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.09-SIGCU6wVLIKIur9JTIbTXXkVoHDhKU.jpeg",
    alt: "Certificate presentation ceremony at conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.46-GhhYY9XFfqwfowNMzLc26TKaqMqIfQ.jpeg",
    alt: "Young participants seated at conference tables",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.04-ATFvqloiDxCepagSuKlm1LZs6TGSHE.jpeg",
    alt: "Group of six organizers posing at conference venue",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-lbnuNsIewCB90t5ouy01yKDFAzf47x.jpeg",
    alt: "Workshop session with participants in group discussions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.25-YEyJmzIj9VZykgdi4xywJis31TvfGi.jpeg",
    alt: "Participant standing in front of GYC Sierra Leone banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.49-b1tGAyZKLE6PohxNep9Uawu7cf8AI0.jpeg",
    alt: "Participants attentively listening at conference session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.48-SRo1xVznnwYNxpUBySr9ENzB6s72Eq.jpeg",
    alt: "Group photo of conference participants",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.56-jgF2gD27glWp1IhwEiMTGmFLDTMZ32.jpeg",
    alt: "Conference attendees group photo with Youth Adaptation banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.24-vCXcp5EhvwMRG2QGmt20F4dACH7pGE.jpeg",
    alt: "Panel discussion on International Womens Day 2026",
  },
]

const capacityBuildingImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.55-mvmEeHfuKG9xx5DWduucWe3bE9PH5s.jpeg",
    alt: "Participants working collaboratively with laptops and tablets at workshop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.36-2WdeFygRefZaGcO55U8Lrsb9H9qBTt.jpeg",
    alt: "Workshop group discussion with laptops and documents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.53-OD5L0BkSN2cYH6rYWKh26jtnxzsWMT.jpeg",
    alt: "Participant presenting flip chart notes to group",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.14-9SUFbZtSOqcPEues5e06c63cMYNQTe.jpeg",
    alt: "Three participants in discussion with Trocaire and Irish Aid branding",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.48-W1vg86sxlzAtAVmOwrDMF2qpvge2DP.jpeg",
    alt: "Participant signing registration documents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.05-LbT5Zi4Y9VO6n38rwDMdPIq3o2o7MZ.jpeg",
    alt: "Wide view of workshop with multiple working groups",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.39-NY2Vn88sES0U0G1FeDDSqQHgqibDok.jpeg",
    alt: "Small group discussion reviewing documents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.40-3MJfR7xBdrynp51oqMrE1OdP0PZEpu.jpeg",
    alt: "Conference hall with multiple working groups at WDWF Hall",
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

        {/* Climate Justice March - COP30 Advocacy */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Climate Justice March - COP30 Advocacy
            </h3>
            <p className="text-lg text-muted-foreground">
              Amplifying youth voices and demanding climate accountability through peaceful civic action
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={climateMarchImages[0].src}
                    alt={climateMarchImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-orange-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {climateMarchImages.slice(1, 4).map((img, index) => (
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
                      In partnership with the Youth Alliance for Sustainable Development (YASDev), Network 
                      Movement for Youth and Children&apos;s Welfare (NMYCW), and ActionAid Sierra Leone, 
                      Sunrise Movement Sierra Leone organized the Civil Society and Community COP30 Foot Walk 
                      in Freetown under the theme: &quot;Climate Promises Must Be Kept: Our Future Cannot Wait - 
                      COP30 Must Deliver!&quot;
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This peaceful march brought together youth, civil society organizations, and community 
                      members to demand climate accountability and urgent action from world leaders. Participants 
                      carried powerful messages including &quot;Climate Justice = Social Justice&quot;, &quot;There is No 
                      Planet B&quot;, &quot;Make Earth Cool Again&quot;, and &quot;We Are Tired of Empty Promises - We Need Action Now&quot;.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                        SDG 16: Peace, Justice & Strong Institutions
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100+</div>
                      <p className="text-sm text-muted-foreground">Participants</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-emerald-500/10 border-emerald-500/20">
                    <CardContent className="p-4 text-center">
                      <Target className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">COP30</div>
                      <p className="text-sm text-muted-foreground">Advocacy Focus</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Partners & Supporters</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">ActionAid Sierra Leone</Badge>
                      <Badge variant="secondary" className="text-xs">YASDev</Badge>
                      <Badge variant="secondary" className="text-xs">NMYCW</Badge>
                      <Badge variant="secondary" className="text-xs">Global Greengrants Fund</Badge>
                      <Badge variant="secondary" className="text-xs">PACJA</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {climateMarchImages.slice(4).map((img, index) => (
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
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* School Climate Education Outreach */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              School Climate Education Outreach
            </h3>
            <p className="text-lg text-muted-foreground">
              Empowering the next generation through climate education in schools across Sierra Leone
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={schoolOutreachImages[0].src}
                    alt={schoolOutreachImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Schools Across Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {schoolOutreachImages.slice(1, 4).map((img, index) => (
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
                      The School Climate Education Outreach program brings environmental awareness directly 
                      to students across Sierra Leone. Our trained volunteers, easily identified by their 
                      orange safety vests, visit primary and secondary schools to deliver engaging 
                      presentations on climate change, environmental conservation, and sustainable practices.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By reaching hundreds of students at each school visit, we are cultivating a generation 
                      of environmentally conscious young people who understand their role in protecting our 
                      planet. The program covers topics including waste management, tree planting, water 
                      conservation, and the impacts of climate change on local communities.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        SDG 4: Quality Education
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-green-500/10 border-green-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">1000+</div>
                      <p className="text-sm text-muted-foreground">Students Reached</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-teal-500/10 border-teal-500/20">
                    <CardContent className="p-4 text-center">
                      <Target className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10+</div>
                      <p className="text-sm text-muted-foreground">Schools Visited</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Activities */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Key Activities</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Interactive climate education presentations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Student engagement on environmental conservation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">Formation of school environmental clubs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {schoolOutreachImages.slice(4, 8).map((img, index) => (
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

          {/* More Images Row */}
          <AnimateOnScroll animation="fade-up" delay={250} className="mt-4">
            <div className="grid grid-cols-3 gap-4">
              {schoolOutreachImages.slice(8).map((img, index) => (
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
                Support Our Education Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Capacity Building & Training Workshops */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Capacity Building & Training Workshops
            </h3>
            <p className="text-lg text-muted-foreground">
              Strengthening skills and knowledge through collaborative learning and professional development
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={capacityBuildingImages[0].src}
                    alt={capacityBuildingImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      WDWF Hall, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {capacityBuildingImages.slice(1, 4).map((img, index) => (
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
                      Our Capacity Building and Training Workshops bring together civil society organizations, 
                      youth leaders, and community stakeholders to strengthen their skills in climate advocacy, 
                      project management, and sustainable development. These intensive training sessions, 
                      supported by partners including Trocaire and Irish Aid, equip participants with the 
                      tools and knowledge needed to drive meaningful change in their communities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through collaborative group work, interactive presentations, and hands-on exercises, 
                      participants develop practical skills in areas such as climate finance, policy advocacy, 
                      monitoring and evaluation, and community engagement. The workshops foster networking 
                      and knowledge sharing among organizations working on environmental and social issues.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        SDG 17: Partnerships for Goals
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-purple-500/10 border-purple-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <p className="text-sm text-muted-foreground">Participants Trained</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-indigo-500/10 border-indigo-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">Multiple</div>
                      <p className="text-sm text-muted-foreground">Training Sessions</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Supporting Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Trocaire</Badge>
                      <Badge variant="secondary" className="text-xs">Irish Aid</Badge>
                      <Badge variant="secondary" className="text-xs">CICN</Badge>
                      <Badge variant="secondary" className="text-xs">CAF</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {capacityBuildingImages.slice(4).map((img, index) => (
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
                Join Our Training Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Youth Adaptation & SDGs Leadership Conference */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Youth Adaptation & SDGs Leadership Conference
            </h3>
            <p className="text-lg text-muted-foreground">
              Accelerating action through young women leading climate adaptation for sustainable development
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={youthAdaptationImages[0].src}
                    alt={youthAdaptationImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-pink-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {youthAdaptationImages.slice(1, 4).map((img, index) => (
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
                      The Youth Adaptation & SDGs Leadership Conference, organized in partnership with Global 
                      Youth Counterpart for Sustainable Development (GYC), Plan International, and Rural Women 
                      Organization, brought together young leaders under the theme: &quot;Accelerate Action: Young 
                      Women Leading Climate Adaptation for Sustainable Development.&quot; This flagship event was 
                      held in celebration of International Women&apos;s Day 2026.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The conference featured panel discussions, workshop sessions, and networking opportunities 
                      focused on empowering young women to take leadership roles in climate adaptation efforts. 
                      Participants received certificates recognizing their commitment to sustainable development 
                      and were equipped with practical tools for driving change in their communities.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                        SDG 5: Gender Equality
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-pink-500/10 border-pink-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100+</div>
                      <p className="text-sm text-muted-foreground">Young Leaders</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-rose-500/10 border-rose-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">Certified</div>
                      <p className="text-sm text-muted-foreground">All Participants</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Organizing Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Plan International</Badge>
                      <Badge variant="secondary" className="text-xs">GYC Sierra Leone</Badge>
                      <Badge variant="secondary" className="text-xs">Rural Women Organization</Badge>
                      <Badge variant="secondary" className="text-xs">Eco-Tourism Hub</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {youthAdaptationImages.slice(4, 8).map((img, index) => (
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

          {/* More Images */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {youthAdaptationImages.slice(8).map((img, index) => (
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
                Join Future Conferences
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
