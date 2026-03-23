"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, TreePine, Zap, ExternalLink } from "lucide-react"

type Location = {
  id: string
  name: string
  type: "headquarters" | "active" | "project"
  description: string
  stats: { label: string; value: string }[]
  googleMapsUrl: string
  embedUrl: string
}

const locations: Location[] = [
  {
    id: "bo",
    name: "Bo District",
    type: "headquarters",
    description: "Our headquarters and primary operations center. Home to reforestation, agriculture, and youth leadership programs.",
    stats: [
      { label: "People Reached", value: "12,000+" },
      { label: "Trees Planted", value: "8,000+" },
      { label: "Youth Trained", value: "150+" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Bo,+Sierra+Leone",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126551.55002270883!2d-11.81574565!3d7.96472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0bcc87c5e4a651%3A0x4ea5b2b2f3c3a4e1!2sBo%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  },
  {
    id: "bombali",
    name: "Bombali District",
    type: "active",
    description: "Northern operations hub with focus on clean energy access and sustainable agriculture training.",
    stats: [
      { label: "People Reached", value: "5,000+" },
      { label: "Schools Electrified", value: "10" },
      { label: "Farmers Trained", value: "400+" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Bombali+District,+Sierra+Leone",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506206.2000907137!2d-12.3!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a8e1f7c5a7b1d%3A0x2b3c4d5e6f7a8b9c!2sBombali%20District%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1710000000001!5m2!1sen!2sus",
  },
  {
    id: "freetown",
    name: "Western Area (Freetown)",
    type: "project",
    description: "Coastal conservation programs and youth advocacy initiatives in the capital region.",
    stats: [
      { label: "People Reached", value: "3,000+" },
      { label: "Coastline Cleaned", value: "5km" },
      { label: "Youth Volunteers", value: "50+" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Freetown,+Sierra+Leone",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126551.55002270883!2d-13.2871!3d8.4657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c2d9e3d4c5b7%3A0x1a2b3c4d5e6f7890!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1710000000002!5m2!1sen!2sus",
  },
]

// Default map showing all of Sierra Leone
const SIERRA_LEONE_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024816.1576458!2d-12.5!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183a89dd47%3A0x8f5e5c5c5c5c5c5c!2sSierra%20Leone!5e0!3m2!1sen!2sus!4v1710000000003!5m2!1sen!2sus"
const SIERRA_LEONE_MAPS_URL = "https://www.google.com/maps/place/Sierra+Leone"

export function SierraLeoneMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Where We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Explore Our Locations
          </h2>
          <p className="text-lg text-muted-foreground">
            From our headquarters in Bo to communities across the country, 
            we are building a nationwide movement for climate action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Google Maps Embed */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                src={selectedLocation?.embedUrl || SIERRA_LEONE_MAP_EMBED}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={selectedLocation ? `${selectedLocation.name} on Google Maps` : "Sierra Leone Map"}
                className="w-full md:h-[450px]"
              />
              <a
                href={selectedLocation?.googleMapsUrl || SIERRA_LEONE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-background transition-colors flex items-center gap-2 shadow-lg border border-border"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Location Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <Button
                variant={selectedLocation === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLocation(null)}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9"
              >
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">All</span> Locations
              </Button>
              {locations.map((location) => (
                <Button
                  key={location.id}
                  variant={selectedLocation?.id === location.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation(location)}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9"
                >
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    location.type === "headquarters" 
                      ? "bg-primary" 
                      : location.type === "active" 
                      ? "bg-accent" 
                      : "bg-muted-foreground"
                  }`} />
                  <span className="truncate max-w-[100px] sm:max-w-none">{location.name}</span>
                </Button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
                <span className="text-xs sm:text-sm text-muted-foreground">Headquarters</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent" />
                <span className="text-xs sm:text-sm text-muted-foreground">Active Operations</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">Project Site</span>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {selectedLocation ? (
              <Card className="bg-card border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge 
                        variant={selectedLocation.type === "headquarters" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {selectedLocation.type === "headquarters" 
                          ? "Headquarters" 
                          : selectedLocation.type === "active" 
                          ? "Active Operations" 
                          : "Project Site"}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground">{selectedLocation.name}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{selectedLocation.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                    {selectedLocation.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-2 sm:p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a href={selectedLocation.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Explore Our Locations</h3>
                  <p className="text-muted-foreground">
                    Click on a location button to learn about our work in each region and view it on the map.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-base sm:text-xl font-bold text-foreground">20,000+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Total Reached</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <TreePine className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-base sm:text-xl font-bold text-foreground">10,000+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Trees Planted</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-base sm:text-xl font-bold text-foreground">15</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Schools Powered</p>
              </div>
            </div>

            {/* All Locations List */}
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">All Operation Areas</h4>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        selectedLocation?.id === location.id
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/50 hover:bg-secondary border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          location.type === "headquarters" 
                            ? "bg-primary" 
                            : location.type === "active" 
                            ? "bg-accent" 
                            : "bg-muted-foreground"
                        }`} />
                        <span className="font-medium text-foreground">{location.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {location.type === "headquarters" 
                          ? "HQ" 
                          : location.type === "active" 
                          ? "Active" 
                          : "Project"}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
