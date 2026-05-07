"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  Target,
  ArrowLeft,
  CheckCircle2,
  MapPin
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { AnimatedBackground } from "@/components/animated-background"
import type { ProjectData } from "@/lib/projects-data"

interface ProjectDetailProps {
  project: ProjectData
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="h-8 w-8" />
      case "graduation":
        return <GraduationCap className="h-8 w-8" />
      case "target":
        return <Target className="h-8 w-8" />
      default:
        return <Users className="h-8 w-8" />
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { badge: string; stat: string; icon: string }> = {
      yellow: {
        badge: "bg-yellow-600 text-white",
        stat: "bg-yellow-500/10 border-yellow-500/20",
        icon: "text-yellow-600",
      },
      blue: {
        badge: "bg-blue-600 text-white",
        stat: "bg-blue-500/10 border-blue-500/20",
        icon: "text-blue-600",
      },
      emerald: {
        badge: "bg-emerald-600 text-white",
        stat: "bg-emerald-500/10 border-emerald-500/20",
        icon: "text-emerald-600",
      },
      orange: {
        badge: "bg-orange-600 text-white",
        stat: "bg-orange-500/10 border-orange-500/20",
        icon: "text-orange-600",
      },
      purple: {
        badge: "bg-purple-600 text-white",
        stat: "bg-purple-500/10 border-purple-500/20",
        icon: "text-purple-600",
      },
      pink: {
        badge: "bg-pink-600 text-white",
        stat: "bg-pink-500/10 border-pink-500/20",
        icon: "text-pink-600",
      },
    }
    return colors[color] || colors.emerald
  }

  const colorClasses = getColorClasses(project.color)

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground variant="particles" />
      
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild className="bg-background/80 backdrop-blur-sm">
          <Link href="/programs">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className={`${colorClasses.badge} mb-4`}>
              <MapPin className="w-3 h-3 mr-1" />
              {project.location}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.subtitle}
            </p>
          </AnimateOnScroll>

          {/* Main Image */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimateOnScroll animation="slide-left">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
                    <div className="prose prose-lg text-muted-foreground">
                      {project.longDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.sdgs.map((sdg, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className={project.sdgColors[index]}
                        >
                          {sdg}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              {/* Outputs & Outcomes */}
              <div className="grid md:grid-cols-2 gap-6">
                <AnimateOnScroll animation="slide-left" delay={100}>
                  <Card className="bg-card border-none shadow-lg h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Planned Outputs</h3>
                      <ul className="space-y-3">
                        {project.outputs.map((output, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${colorClasses.icon}`} />
                            <span className="text-sm text-muted-foreground">{output}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-right" delay={100}>
                  <Card className="bg-card border-none shadow-lg h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Expected Outcomes</h3>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Target className={`h-5 w-5 mt-0.5 flex-shrink-0 ${colorClasses.icon}`} />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>

              {/* Image Gallery */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.slice(1).map((img, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <AnimateOnScroll animation="slide-right">
                <div className="space-y-4">
                  {project.stats.map((stat, index) => (
                    <Card key={index} className={colorClasses.stat}>
                      <CardContent className="p-4 text-center">
                        <div className={colorClasses.icon}>
                          {getIcon(stat.icon)}
                        </div>
                        <div className="text-2xl font-bold text-foreground mt-2">{stat.value}</div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Partners */}
              {project.partners.length > 0 && (
                <AnimateOnScroll animation="slide-right" delay={100}>
                  <Card className="bg-card border border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Partners</h3>
                      <div className="space-y-3">
                        {project.partners.map((partner, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="font-medium text-foreground">{partner.name}</span>
                            <Badge variant="secondary" className="text-xs">{partner.role}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )}

              {/* CTA */}
              <AnimateOnScroll animation="slide-right" delay={200}>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Want to Support?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Join us in making a difference through this initiative.
                    </p>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/contact">Get Involved</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground mb-8">
              Discover other initiatives driving change across Sierra Leone.
            </p>
            <Button size="lg" asChild>
              <Link href="/programs">View All Programs</Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
