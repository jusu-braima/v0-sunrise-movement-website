"use client"

import { Heart, Users, Megaphone, HandHeart } from "lucide-react"
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
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Your financial support directly funds community programs, youth training, and environmental restoration projects.",
    cta: "Give Today",
    href: "#donate",
  },
  {
    icon: Megaphone,
    title: "Amplify Our Voice",
    description: "Share our mission on social media, attend events, and help spread awareness about climate action in Sierra Leone.",
    cta: "Follow Us",
    href: "#contact",
  },
  {
    icon: HandHeart,
    title: "Corporate Partnership",
    description: "Align your organization with impactful climate work through CSR initiatives, sponsorships, or technical support.",
    cta: "Partner With Us",
    href: "#contact",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, index) => (
            <AnimateOnScroll key={opp.title} animation="fade-scale" delay={index * 100}>
              <Card 
                className="group bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <opp.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {opp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground mb-6 flex-1">
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
