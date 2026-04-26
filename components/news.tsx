"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, ArrowRight, Tag, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const newsItems = [
  {
    id: 1,
    title: "Lalehun Solar Energy Initiative Launched in Penguia Chiefdom",
    excerpt: "Sunrise Movement Sierra Leone has launched the Lalehun Solar Energy Initiative to enhance clean energy access, strengthen education systems, and advance youth empowerment. The project will train 60 local youth in solar installation with a focus on young women.",
    date: "April 20, 2026",
    category: "Clean Energy",
    featured: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-duDECbr4fPcKoObj3ZzcSPbNWns7AY.jpeg",
  },
  {
    id: 2,
    title: "SM-SL Wins SDG 13 World Gold Award at Global Sustainability Awards",
    excerpt: "Sunrise Movement Sierra Leone has been recognized with the prestigious SDG 13 Climate Action World Gold Award at the Global Sustainability Awards 2025, honoring our impact on climate action.",
    date: "March 15, 2026",
    category: "Awards",
    featured: false,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.26-GQOF8ZAJMW5ZPzTAb6qlaSV1235pRK.jpeg",
  },
  {
    id: 3,
    title: "Youth Climate March to COP30 Held in Freetown",
    excerpt: "Hundreds of youth activists joined the COP30 Foot Walk in Freetown, demanding climate accountability with the message: Climate Promises Must Be Kept - Our Future Cannot Wait.",
    date: "March 8, 2026",
    category: "Advocacy",
    featured: false,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-LaypVYtvCav5iLy06NhEI23rIindml.jpeg",
  },
  {
    id: 4,
    title: "SM-SL Representatives Attend Youth Academy on Climate Adaptation in Kenya",
    excerpt: "Our team participated in the Youth Academy on Climate Adaptation and Leadership in Kenya, building capacity for climate resilience across Africa.",
    date: "February 25, 2026",
    category: "Conferences",
    featured: false,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.44-3UO3ek9aw8wUme0vlKc9YdGw9VVLZt.jpeg",
  },
]

const upcomingEvents = [
  {
    title: "World Environment Day Celebration",
    date: "June 5, 2026",
    location: "Bo, Sierra Leone",
    type: "Event",
  },
  {
    title: "Youth Climate Summit 2026",
    date: "July 15-17, 2026",
    location: "Freetown",
    type: "Conference",
  },
  {
    title: "Community Tree Planting Day",
    date: "April 22, 2026",
    location: "Multiple Locations",
    type: "Action",
  },
]

export function News() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  
  const featuredNews = newsItems.find(item => item.featured)
  const otherNews = newsItems.filter(item => !item.featured)
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              News & Events
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="#news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News + Other News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Article */}
            {featuredNews && (
              <AnimateOnScroll animation="fade-up" delay={100}>
                <Card className="bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{featuredNews.category}</Badge>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {featuredNews.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {featuredNews.title}
                      </h3>
                      <p className="text-muted-foreground">{featuredNews.excerpt}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            )}

            {/* Other News Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {otherNews.slice(0, 3).map((item, index) => (
                <AnimateOnScroll key={item.id} animation="fade-up" delay={200 + index * 100}>
                  <Card 
                    className="bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 h-full overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <AnimateOnScroll animation="slide-right" delay={300}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.title} 
                  className="bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-x-1"
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] sm:text-xs text-primary font-medium">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-primary">
                          {event.date.split(" ")[1].replace(",", "")}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <Badge variant="outline" className="mb-1 sm:mb-2 text-xs">{event.type}</Badge>
                        <h4 className="font-semibold text-foreground text-sm leading-tight mb-1 line-clamp-2">
                          {event.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                {subscribed ? (
                  <div className="text-center py-2">
                    <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-primary-foreground" />
                    <h3 className="text-lg font-bold mb-2">You&apos;re Subscribed!</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Thank you for joining our community.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Subscribe to receive news about our programs and impact.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50"
                      />
                      <Button type="submit" variant="secondary" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
