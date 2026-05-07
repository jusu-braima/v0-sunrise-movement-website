"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Handshake } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const partnerLogos = [
  {
    name: "National Youth Commission",
    description: "Official registration body",
  },
  {
    name: "UNDP Sierra Leone",
    description: "Development partner",
  },
  {
    name: "EPA Sierra Leone",
    description: "Environmental agency",
  },
  {
    name: "Ministry of Environment",
    description: "Government partner",
  },
]

export function HomePartnersPreview() {
  return (
    <section id="partner" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimateOnScroll animation="slide-left">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Handshake className="h-4 w-4" />
                  Partner With Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  Join Our Network of Partners
                </h2>
                <p className="text-lg text-muted-foreground">
                  We collaborate with government agencies, NGOs, and businesses to amplify 
                  our impact and create sustainable change across Sierra Leone.
                </p>
              </div>

              {/* Award Highlight */}
              <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border-2 border-yellow-300 dark:border-yellow-700 rounded-2xl shadow-glow overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent" />
                <CardContent className="p-5 flex items-center gap-4 relative">
                  <div className="relative w-16 h-16 shrink-0">
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

              {/* Partner Logos */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {partnerLogos.map((partner) => (
                  <div
                    key={partner.name}
                    className="p-4 bg-card rounded-2xl border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-glow transition-all duration-300 text-center"
                  >
                    <p className="font-medium text-foreground text-sm">{partner.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="mt-6 group">
                <Link href="/partners">
                  View All Partners
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Image/Stats */}
          <AnimateOnScroll animation="slide-right" delay={100}>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-elevated">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-XAI6Jzsv0e0DuY29yy2vSD82nU6Ptz.jpeg"
                  alt="Sunrise Movement Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Working Together for Change</p>
                  <p className="text-white/80 text-sm">Our partners help us reach more communities</p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/40 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/40 rounded-br-xl" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
