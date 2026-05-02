"use client"

import Image from "next/image"
import { Users, Megaphone, HandHeart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const opportunities = [
  {
    icon: Users,
    title: "Join as a Volunteer",
    description: "Contribute your skills and time to our climate programs. We welcome youth passionate about environmental action.",
    cta: "Apply Now",
    href: "#contact",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg",
  },
  {
    icon: Megaphone,
    title: "Amplify Our Voice",
    description: "Share our mission on social media, attend events, and help spread awareness about climate action in Sierra Leone.",
    cta: "Follow Us",
    href: "#contact",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-LaypVYtvCav5iLy06NhEI23rIindml.jpeg",
  },
  {
    icon: HandHeart,
    title: "Corporate Partnership",
    description: "Align your organization with impactful climate work through CSR initiatives, sponsorships, or technical support.",
    cta: "Partner With Us",
    href: "#contact",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.06-PD3A9oxZHYsAuLJgKhXyIIWRwMGX2g.jpeg",
  },
]

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get Involved</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Be Part of the Movement
          </h2>
          <p className="text-lg text-muted-foreground">
            Every action counts. Whether you volunteer, donate, or spread the word, 
            you can help us build a greener, more resilient Sierra Leone.
          </p>
        </AnimateOnScroll>

        {/* Opportunities Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {opportunities.map((opp, index) => (
            <AnimateOnScroll key={opp.title} animation="fade-scale" delay={index * 100}>
              <Card 
                className="group bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full overflow-hidden"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                    <opp.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {opp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-0">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {opp.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300" asChild>
                    <a href={opp.href}>{opp.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
