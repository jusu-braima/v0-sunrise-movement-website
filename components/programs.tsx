"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TreePine,
  GraduationCap,
  Zap,
  Wheat,
  Megaphone,
  Waves,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const strategicPillars = [
  {
    icon: TreePine,
    title: "Reforestation & Ecosystem Restoration",
    description:
      "Restoring native forests and watersheds through community-led tree planting initiatives across Sierra Leone.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    stats: "10,000+ trees planted",
  },
  {
    icon: GraduationCap,
    title: "Youth Climate Leadership",
    description:
      "Training the next generation of climate advocates with skills in environmental science, policy, and community organizing.",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    stats: "200+ youth trained",
  },
  {
    icon: Zap,
    title: "Clean Energy Access",
    description:
      "Bringing solar power to schools and communities, reducing reliance on fossil fuels and improving quality of life.",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    stats: "15 schools electrified",
  },
  {
    icon: Wheat,
    title: "Climate-Smart Agriculture",
    description:
      "Empowering farmers with sustainable techniques that increase yields while protecting the environment.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    stats: "800+ farmers trained",
  },
  {
    icon: Megaphone,
    title: "Policy Advocacy & Awareness",
    description:
      "Engaging communities and policymakers to drive meaningful climate action at local and national levels.",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    stats: "20,000+ people reached",
  },
  {
    icon: Waves,
    title: "Marine & Coastal Conservation",
    description:
      "Protecting Sierra Leone's coastline through beach cleanups, mangrove restoration, and sustainable fishing practices.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    stats: "5km coastline cleaned",
  },
]

// Climate Policy Workshop Images
const climatePolicyWorkshopImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.53-LWkfnelbDVtQaoLej7xlTisICXzrpW.jpeg",
    alt: "Workshop participants discussing NDC 2.0 climate policy with flipchart presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.39-S4efq2GVy5ePmz9kpjvq0xYRRjCtP4.jpeg",
    alt: "Small group climate policy discussion with documents and laptops",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.36-wvNR7ndFpeou5qdsk6aGmectlZ8Ll2.jpeg",
    alt: "Participants collaborating at workshop tables with laptops",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.14-kVRvIOwXcy6xf0Fmy3PMyi3qfD1Uvw.jpeg",
    alt: "Three participants in focused discussion reviewing climate policy documents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.55-6D4VekLCzOAf1BaxoF1oMdzQRV2kdA.jpeg",
    alt: "Large workshop hall with multiple groups working on climate policy development",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.48-b3ifv4RjSUWMr6duqMCfMLDhvO3lh5.jpeg",
    alt: "Participant signing climate policy commitment document",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.05-c5wVPpIQfYYEBWfMnPwhzmSDHN8zIP.jpeg",
    alt: "Workshop participants engaged in collaborative policy drafting session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.40-wFPkaZnessvkcWZgSInnZjgthBudGU.jpeg",
    alt: "Group discussion session with participants at round tables in workshop hall",
  },
]

// Youth Adaptation & SDGs Leadership Conference Images
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

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Pillars */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Strategic Pillars
          </h2>
          <p className="text-lg text-muted-foreground">
            Six interconnected areas of focus that drive our mission to build climate resilience
            and empower communities across Sierra Leone.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strategicPillars.map((pillar, index) => (
            <AnimateOnScroll key={pillar.title} animation="fade-up" delay={index * 100}>
              <Card className="h-full bg-card border-2 border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 card-hover rounded-3xl overflow-hidden group relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent group-hover:via-primary transition-all duration-500" />
                <CardContent className="p-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 shadow-sm">
                    {pillar.stats}
                  </Badge>
                </CardContent>
                {/* Decorative shape */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Youth Adaptation & SDGs Leadership Conference */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-pink-600 text-white mb-4">Leadership Conference</Badge>
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        {/* Climate Policy Workshop Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-teal-600 text-white mb-4">Policy Development</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Climate Policy Workshop & NDC 2.0 Training
            </h3>
            <p className="text-lg text-muted-foreground">
              Building capacity for climate policy development through collaborative workshops focused on 
              Sierra Leone&apos;s Nationally Determined Contributions (NDC 2.0) and climate action planning.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={climatePolicyWorkshopImages[0].src}
                    alt={climatePolicyWorkshopImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-teal-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {climatePolicyWorkshopImages.slice(1, 4).map((img, index) => (
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
                      In partnership with Trocaire and Irish Aid, our Climate Policy Workshop brings together 
                      stakeholders from government, civil society, and youth organizations to develop and 
                      strengthen Sierra Leone&apos;s climate policies. Participants engage in intensive sessions 
                      focused on the country&apos;s Nationally Determined Contributions (NDC 2.0) framework.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The workshop features collaborative group discussions, policy drafting exercises, and 
                      technical training on climate finance, institutional capacity building, MRV systems, 
                      gender mainstreaming, and public awareness strategies. Participants develop actionable 
                      recommendations to advance Sierra Leone&apos;s climate goals and sustainable development agenda.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        SDG 13: Climate Action
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        SDG 17: Partnerships
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-teal-500/10 border-teal-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <p className="text-sm text-muted-foreground">Stakeholders Trained</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-emerald-500/10 border-emerald-500/20">
                    <CardContent className="p-4 text-center">
                      <Megaphone className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">NDC 2.0</div>
                      <p className="text-sm text-muted-foreground">Policy Focus</p>
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {climatePolicyWorkshopImages.slice(4).map((img, index) => (
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
                Join Our Policy Initiatives
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
