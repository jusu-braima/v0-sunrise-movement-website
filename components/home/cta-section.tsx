"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Mail, Phone, MapPin } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const quickLinks = [
  {
    icon: Heart,
    title: "Get Involved",
    description: "Volunteer or donate to support our mission",
    href: "/get-involved",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Reach out for partnerships or inquiries",
    href: "/contact",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+232 76 709 191",
    href: "tel:+23276709191",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Bo City, Sierra Leone",
    href: "/contact",
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function HomeCTA() {
  return (
    <section id="get-involved" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Take Action</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of community members working towards a climate-resilient Sierra Leone. 
              Every action counts.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <AnimateOnScroll key={link.title} animation="fade-up" delay={index * 100}>
              <Link href={link.href}>
                <Card className="h-full bg-card border-2 border-border hover:border-primary/50 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 mx-auto rounded-2xl ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden shadow-elevated">
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Movement Today</h3>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Whether you want to volunteer, partner, or support our programs, 
                there is a place for you in the Sunrise Movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/get-involved">
                    Get Involved
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-black hover:bg-black hover:text-white" 
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
