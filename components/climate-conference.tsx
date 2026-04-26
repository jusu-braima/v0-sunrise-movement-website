"use client"

import Image from "next/image"
import { Calendar, Users, Globe, Mic2, Target, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const speakers = [
  {
    name: "Mrs. Amahle Tuswa",
    country: "South Africa",
    topic: "Youth Engagement Against Climate Change",
    description: "Emphasized the need to actively include young people in decision-making processes, recognizing their innovation, energy, and leadership potential.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.19-XXV89xf4OTmVVuY6ZOtUQka8GPY463.jpeg",
  },
  {
    name: "Mr. Emmanuel D. George",
    country: "Nigeria",
    topic: "Climate Justice and Equity",
    description: "Highlighted the disproportionate impact of climate change on marginalized communities and the importance of equitable policies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.08-zBC4XpH9SwzqxoRWW5dGNVyw0GQQxZ.jpeg",
  },
  {
    name: "Mr. Abdul Ija Ismail",
    country: "Mozambique",
    topic: "Climate Change and Poverty",
    description: "Examined how environmental shocks threaten livelihoods and food security, calling for integrated, people-centered development strategies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.20-W9S8S4II1dahYbz4i7GF9PqpuGzZLX.jpeg",
  },
  {
    name: "Mr. William Zaidan Sonjor",
    country: "Sierra Leone",
    topic: "Resilience and Adaptation",
    description: "Focused on strengthening resilience through investment in adaptive infrastructure, local knowledge systems, and innovative solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.11-tJsJXkDIOAA3bY5abAhO61E56As1BT.jpeg",
  },
  {
    name: "Mr. Joshua Aruna",
    country: "The Gambia",
    topic: "Climate Change and Economic Growth",
    description: "Advocated for clean energy, sustainable agriculture, and green job creation as pathways to economic growth and environmental sustainability.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.09-BMnJC6Z0AwKnBkQOXF61sNWF5OTOKS.jpeg",
  },
  {
    name: "Mr. John Mwiti",
    country: "Kenya",
    topic: "Policy and Governance",
    description: "Called for strong institutional frameworks, forward-looking policies, and international collaboration to drive effective climate action.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.15-FYknVbUFIQ1ujPiMvHD4VAutISubFt.jpeg",
  },
]

const outcomes = [
  {
    icon: Users,
    stat: "2,500+",
    label: "Youth Trained & Empowered",
  },
  {
    icon: Globe,
    stat: "Pan-African",
    label: "Network Strengthened",
  },
  {
    icon: Target,
    stat: "Actionable",
    label: "Strategies Developed",
  },
  {
    icon: Handshake,
    stat: "Multi-Sector",
    label: "Collaboration Fostered",
  },
]

export function ClimateConference() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Calendar className="w-3 h-3 mr-1" />
            September 15-16, 2023
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Climate Conference 2023
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building a Sustainable and Greener Future: Inspiring Action and Collaboration for Climate Change
          </p>
        </AnimateOnScroll>

        {/* Conference Stats */}
        <AnimateOnScroll animation="fade-up" delay={100} className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <outcome.icon className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{outcome.stat}</p>
                    <p className="text-sm text-muted-foreground">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        {/* Speakers Section */}
        <AnimateOnScroll animation="fade-up" delay={200} className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Mic2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Distinguished Speakers</h3>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {speakers.map((speaker, index) => (
            <AnimateOnScroll key={speaker.name} animation="fade-up" delay={300 + index * 100}>
              <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Speaker Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-foreground text-xs">
                        {speaker.country}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Speaker Info */}
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">{speaker.name}</h4>
                    <p className="text-sm font-medium text-primary mb-2">{speaker.topic}</p>
                    <p className="text-xs text-muted-foreground line-clamp-3">{speaker.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Conference Description */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <Card className="bg-card border border-border">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="text-base leading-relaxed">
                  This landmark online conference brought together <strong className="text-foreground">over 2,500 participants from across Africa</strong>, 
                  uniting youth leaders, policymakers, civil society organizations, and climate experts to share knowledge, 
                  foster collaboration, and drive actionable solutions toward climate resilience and sustainable development.
                </p>
                <p className="text-base leading-relaxed mt-4">
                  The discussions highlighted <strong className="text-foreground">youth engagement, climate justice, resilience, adaptation, 
                  economic growth, and policy leadership</strong> in climate action. The conference successfully strengthened pan-African 
                  networks of youth climate leaders and provided actionable strategies for resilience, adaptation, and sustainable development.
                </p>
                <p className="text-base leading-relaxed mt-4 text-primary font-medium">
                  This conference underscores Sunrise Movement Sierra Leone&apos;s commitment to advancing youth-led climate action, 
                  influencing policy conversations, and fostering partnerships that drive a sustainable and greener future.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
