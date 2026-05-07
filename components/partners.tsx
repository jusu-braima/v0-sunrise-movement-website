"use client"

import Image from "next/image"
import { CheckCircle2, Shield, BarChart3, Globe, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const valueProps = [
  {
    icon: Heart,
    title: "Youth-Led Grassroots Legitimacy",
    description: "Authentic community connections and local trust built through youth leadership.",
  },
  {
    icon: Globe,
    title: "Scalable Climate Solutions",
    description: "Proven models that can be replicated across Sierra Leone and West Africa.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Programming",
    description: "Data-driven approaches with robust monitoring and evaluation systems.",
  },
  {
    icon: Shield,
    title: "Transparent Governance",
    description: "Accountable leadership and clear reporting to all stakeholders.",
  },
]

const registrations = [
  "National Youth Commission",
  "Bo District Council",
  "Bombali District Council",
]

export function Partners() {
  return (
    <section id="partner" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Partner With Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                Invest in Youth-Led Climate Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us in building a climate-resilient Sierra Leone. Your partnership enables 
                scalable, evidence-based programs that create measurable environmental and social impact.
              </p>
            </div>

            {/* Award Highlight */}
            <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border-2 border-yellow-300 dark:border-yellow-700 rounded-2xl shadow-glow overflow-hidden relative">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent animate-pulse" />
              <CardContent className="p-5 flex items-center gap-4 relative">
                <div className="relative w-18 h-18 shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl opacity-30" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.26-GQOF8ZAJMW5ZPzTAb6qlaSV1235pRK.jpeg"
                    alt="SDG 13 World Gold Award"
                    width={64}
                    height={64}
                    className="object-cover rounded-xl relative shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white mb-1 shadow-sm">
                    <Award className="w-3 h-3 mr-1" />
                    Award Winner
                  </Badge>
                  <p className="text-sm font-semibold text-foreground">SDG 13 Climate Action World Gold Award</p>
                  <p className="text-xs text-muted-foreground">Global Sustainability Awards 2025</p>
                </div>
              </CardContent>
            </Card>

            {/* Registrations */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Officially Registered With</h3>
              <div className="flex flex-wrap gap-3">
                {registrations.map((reg) => (
                  <div
                    key={reg}
                    className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{reg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Become a Partner</Link>
              </Button>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid sm:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="bg-card border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-glow transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1 relative">
                {/* Subtle top border gradient */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <prop.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground">{prop.description}</p>
                </CardContent>
                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
