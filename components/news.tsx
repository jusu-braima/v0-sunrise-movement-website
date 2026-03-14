"use client"

import { Calendar, ArrowRight, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "SM-SL Launches Youth Climate Ambassador Program in Bombali District",
    excerpt: "50 young leaders selected to receive intensive training in climate advocacy, community organizing, and environmental policy. The program aims to build a network of climate champions across northern Sierra Leone.",
    date: "March 10, 2026",
    category: "Programs",
    featured: true,
  },
  {
    id: 2,
    title: "Community Reforestation Project Reaches 10,000 Trees Milestone",
    excerpt: "Our grassroots reforestation initiative in Bo District has successfully planted and nurtured over 10,000 native trees since its launch.",
    date: "March 5, 2026",
    category: "Environment",
    featured: false,
  },
  {
    id: 3,
    title: "Partnership Announced with National Youth Commission for Climate Education",
    excerpt: "New collaboration will integrate climate literacy into youth development programs nationwide, reaching thousands of young Sierra Leoneans.",
    date: "February 28, 2026",
    category: "Partnerships",
    featured: false,
  },
  {
    id: 4,
    title: "Clean Energy Workshop Trains 30 Solar Technicians",
    excerpt: "Graduates now equipped to install and maintain solar systems in rural communities, creating green jobs while expanding energy access.",
    date: "February 20, 2026",
    category: "Training",
    featured: false,
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
  const featuredNews = newsItems.find(item => item.featured)
  const otherNews = newsItems.filter(item => !item.featured)

  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News + Other News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Article */}
            {featuredNews && (
              <Card className="bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Tag className="h-8 w-8 text-primary" />
                      </div>
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
            )}

            {/* Other News Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {otherNews.slice(0, 3).map((item) => (
                <Card 
                  key={item.id} 
                  className="bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.title} 
                  className="bg-card border border-border hover:border-primary/50 transition-all cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs text-primary font-medium">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {event.date.split(" ")[1].replace(",", "")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <Badge variant="outline" className="mb-2 text-xs">{event.type}</Badge>
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
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Subscribe to receive news about our programs and impact.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50"
                  />
                  <Button variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
