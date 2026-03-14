"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, TreePine, Zap } from "lucide-react"

type Location = {
  id: string
  name: string
  type: "headquarters" | "active" | "project"
  coordinates: { x: number; y: number }
  description: string
  stats: { label: string; value: string }[]
}

const locations: Location[] = [
  {
    id: "bo",
    name: "Bo District",
    type: "headquarters",
    coordinates: { x: 42, y: 72 },
    description: "Our headquarters and primary operations center. Home to reforestation, agriculture, and youth leadership programs.",
    stats: [
      { label: "People Reached", value: "12,000+" },
      { label: "Trees Planted", value: "8,000+" },
      { label: "Youth Trained", value: "150+" },
    ],
  },
  {
    id: "bombali",
    name: "Bombali District",
    type: "active",
    coordinates: { x: 48, y: 32 },
    description: "Northern operations hub with focus on clean energy access and sustainable agriculture training.",
    stats: [
      { label: "People Reached", value: "5,000+" },
      { label: "Schools Electrified", value: "10" },
      { label: "Farmers Trained", value: "400+" },
    ],
  },
  {
    id: "freetown",
    name: "Western Area (Freetown)",
    type: "project",
    coordinates: { x: 22, y: 48 },
    description: "Coastal conservation programs and youth advocacy initiatives in the capital region.",
    stats: [
      { label: "People Reached", value: "3,000+" },
      { label: "Coastline Cleaned", value: "5km" },
      { label: "Youth Volunteers", value: "50+" },
    ],
  },
]

export function SierraLeoneMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Where We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Reach Across Sierra Leone
          </h2>
          <p className="text-lg text-muted-foreground">
            From our headquarters in Bo to communities across the country, 
            we are building a nationwide movement for climate action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Sierra Leone Outline - Simplified SVG */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))" }}
              >
                {/* Background shape representing Sierra Leone */}
                <path
                  d="M15,30 Q10,40 12,55 Q15,70 25,82 Q35,90 50,88 Q65,85 72,75 Q78,65 75,50 Q73,35 65,25 Q55,15 40,18 Q25,22 15,30 Z"
                  fill="hsl(var(--primary) / 0.1)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                />
                
                {/* District regions (simplified) */}
                <path
                  d="M35,20 Q45,25 55,22 Q60,30 55,40 Q45,45 35,40 Q30,30 35,20 Z"
                  fill="hsl(var(--primary) / 0.15)"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="0.3"
                  className="transition-all hover:fill-primary/30"
                />
                <path
                  d="M30,55 Q40,50 50,55 Q55,65 50,75 Q40,80 30,75 Q25,65 30,55 Z"
                  fill="hsl(var(--primary) / 0.2)"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="0.3"
                  className="transition-all hover:fill-primary/30"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    selectedLocation?.id === location.id ? "scale-125 z-20" : "hover:scale-110 z-10"
                  }`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                  }}
                  aria-label={`View ${location.name}`}
                >
                  <div className={`relative ${
                    location.type === "headquarters" 
                      ? "w-8 h-8" 
                      : "w-6 h-6"
                  }`}>
                    {/* Pulse effect for headquarters */}
                    {location.type === "headquarters" && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    )}
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${
                      location.type === "headquarters"
                        ? "bg-primary text-primary-foreground"
                        : location.type === "active"
                        ? "bg-accent text-accent-foreground"
                        : "bg-card border-2 border-primary text-primary"
                    }`}>
                      <MapPin className={location.type === "headquarters" ? "h-4 w-4" : "h-3 w-3"} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Active Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-card border-2 border-primary" />
                <span className="text-sm text-muted-foreground">Project Site</span>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            {selectedLocation ? (
              <Card className="bg-card border-none shadow-xl animate-fade-up">
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
                  
                  <div className="grid grid-cols-3 gap-4">
                    {selectedLocation.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 bg-secondary/50 rounded-lg">
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
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
                    Click on a marker to learn about our work in each region.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">20,000+</p>
                <p className="text-xs text-muted-foreground">Total Reached</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <TreePine className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">10,000+</p>
                <p className="text-xs text-muted-foreground">Trees Planted</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">15</p>
                <p className="text-xs text-muted-foreground">Schools Powered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
