"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Droplets, 
  Users, 
  School, 
  Shield, 
  Globe,
  CheckCircle2,
  Waves,
  HandshakeIcon
} from "lucide-react"

const initiatives = [
  {
    icon: Users,
    title: "Community Outreach",
    description: "Education on water rights and sustainable practices"
  },
  {
    icon: School,
    title: "School WASH Programs",
    description: "Water, Sanitation, and Hygiene education in schools"
  },
  {
    icon: HandshakeIcon,
    title: "Youth Capacity Building",
    description: "Training youth and local leaders on water justice"
  },
  {
    icon: Shield,
    title: "Advocacy & Policy",
    description: "Promoting public investment in water infrastructure"
  }
]

const sdgGoals = [
  { number: 6, title: "Clean Water and Sanitation", color: "bg-cyan-500" },
  { number: 13, title: "Climate Action", color: "bg-green-600" }
]

export function BlueCommunity() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 border-cyan-200 dark:border-cyan-800">
            <Waves className="w-3 h-3 mr-1" />
            Historic Partnership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sierra Leone&apos;s First{" "}
            <span className="text-cyan-600 dark:text-cyan-400">Blue Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sunrise Movement Sierra Leone has officially joined the Global Blue Community Network, 
            becoming the first recognized Blue Community in Sierra Leone - a milestone in promoting 
            water as a fundamental human right.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Content */}
          <AnimateOnScroll animation="fade-right">
            <Card className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.26-6MKL1XIX8VMgXuO4xl2afErHkZTRUS.jpeg"
                  alt="Beach cleanup and coastal conservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-card/90 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 -mt-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Blue Community Network</h3>
                    <p className="text-sm text-muted-foreground">Global Water Justice Movement</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Blue Community Network is a global movement committed to recognizing water 
                    as a fundamental human right, opposing its commodification, and strengthening 
                    public water services.
                  </p>
                  <p>
                    Through this partnership, SM-SL will expand grassroots initiatives, deepen 
                    community engagement, and advocate for inclusive, rights-based approaches to 
                    water governance across Sierra Leone.
                  </p>
                </div>

                {/* SDG Alignment */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">Aligned with UN SDGs:</p>
                  <div className="flex flex-wrap gap-3">
                    {sdgGoals.map((goal) => (
                      <div 
                        key={goal.number}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted"
                      >
                        <div className={`w-6 h-6 rounded ${goal.color} flex items-center justify-center`}>
                          <span className="text-xs font-bold text-white">{goal.number}</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{goal.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Initiatives Grid */}
          <AnimateOnScroll animation="fade-left">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-600" />
                Key Initiatives
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {initiatives.map((initiative, index) => (
                  <Card 
                    key={initiative.title}
                    className="bg-white/60 dark:bg-card/60 backdrop-blur-sm border-cyan-100 dark:border-cyan-900 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0">
                          <initiative.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{initiative.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{initiative.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Impact Statement */}
              <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 border-0 mt-6">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">
                        This partnership reinforces our commitment to ensuring water remains a 
                        public good accessible to all, driving community-centered solutions for 
                        a more just and sustainable future.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Founder's Statement - Full Width */}
        <AnimateOnScroll animation="fade-up" className="mt-12">
          <Card className="overflow-hidden border-2 border-cyan-200 dark:border-cyan-800 shadow-elevated rounded-3xl">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue%20Ocean-vLbui6BGrgwdYalY2UPyZUf5aUXFCF.jpeg"
                alt="Alicious Bessiama - Founder and Executive Director of Sunrise Movement Sierra Leone speaking about water rights and the Blue Community initiative"
                fill
                className="object-cover object-center"
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-white/40 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-white/40 rounded-br-2xl" />
            </div>
            <CardContent className="p-6 bg-gradient-to-r from-cyan-600 to-blue-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Commitment to Water Justice</p>
                  <p className="text-white/80 text-sm">Strengthening public institutions for equitable water services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
