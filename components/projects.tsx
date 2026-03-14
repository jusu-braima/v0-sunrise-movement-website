"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { 
  MapPin, 
  Users, 
  Calendar, 
  TreePine, 
  Zap, 
  Waves, 
  Wheat, 
  GraduationCap,
  ArrowRight,
  X
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  category: string
  location: string
  beneficiaries: string
  startDate: string
  status: "Active" | "Completed" | "Upcoming"
  impact: string[]
  icon: typeof TreePine
  color: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bo District Reforestation Initiative",
    description: "Community-led tree planting program restoring degraded lands and creating green corridors.",
    fullDescription: "Working with local communities, schools, and farmers to restore forest cover in Bo District. The initiative focuses on planting indigenous tree species that support local biodiversity while providing economic benefits through fruit and timber production.",
    category: "Ecosystem Restoration",
    location: "Bo District",
    beneficiaries: "5,000+ community members",
    startDate: "September 2023",
    status: "Active",
    impact: ["10,000+ trees planted", "200 hectares restored", "50 youth trained as nursery managers"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "/images/projects/reforestation.jpg",
  },
  {
    id: 2,
    title: "Rural Solar Energy Program",
    description: "Bringing clean, affordable solar power to off-grid communities and schools.",
    fullDescription: "Installing solar systems in rural schools and households that lack access to the electricity grid. The program also trains local youth as solar technicians, creating sustainable employment while expanding energy access.",
    category: "Clean Energy",
    location: "Bombali & Bo Districts",
    beneficiaries: "1,200+ households",
    startDate: "January 2024",
    status: "Active",
    impact: ["15 schools electrified", "30 solar technicians trained", "3,000+ students benefiting"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "/images/projects/solar-energy.jpg",
  },
  {
    id: 3,
    title: "Coastal Clean-Up & Conservation",
    description: "Protecting marine ecosystems through beach clean-ups and community awareness.",
    fullDescription: "Regular coastal clean-up events combined with education programs about marine conservation. We work with fishing communities to promote sustainable practices and reduce plastic pollution in coastal areas.",
    category: "Marine Conservation",
    location: "Western Area",
    beneficiaries: "3,000+ coastal residents",
    startDate: "June 2024",
    status: "Active",
    impact: ["5km of coastline cleaned", "2 tons of waste collected", "10 fishing communities engaged"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "/images/projects/coastal-cleanup.jpg",
  },
  {
    id: 4,
    title: "Climate-Smart Agriculture Training",
    description: "Teaching farmers sustainable techniques that improve yields while protecting the environment.",
    fullDescription: "Comprehensive training program for smallholder farmers covering water conservation, organic farming methods, crop rotation, and climate-resilient crop varieties. Participants receive ongoing support and access to quality seeds.",
    category: "Sustainable Agriculture",
    location: "Bo & Bombali Districts",
    beneficiaries: "800+ farmers",
    startDate: "March 2024",
    status: "Active",
    impact: ["800 farmers trained", "40% average yield increase", "30% reduction in chemical inputs"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "/images/projects/sustainable-farming.jpg",
  },
  {
    id: 5,
    title: "Youth Climate Leadership Academy",
    description: "Intensive program developing the next generation of environmental leaders.",
    fullDescription: "A 6-month leadership development program that equips young Sierra Leoneans with skills in climate advocacy, community organizing, public speaking, and project management. Graduates lead local environmental initiatives.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "200+ youth leaders",
    startDate: "August 2023",
    status: "Active",
    impact: ["200 youth certified", "50 community projects launched", "15 districts represented"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "/images/projects/workshop.jpg",
  },
  {
    id: 6,
    title: "School Environmental Clubs Network",
    description: "Building a network of youth-led environmental clubs in schools across Sierra Leone.",
    fullDescription: "Supporting the establishment of environmental clubs in primary and secondary schools. Clubs engage students in hands-on environmental activities, awareness campaigns, and inter-school competitions.",
    category: "Education",
    location: "Bo & Bombali Districts",
    beneficiaries: "5,000+ students",
    startDate: "October 2023",
    status: "Active",
    impact: ["25 school clubs established", "5,000 students engaged", "100 teachers trained"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "/images/hero-community.jpg",
  },
]

const categories = ["All", "Ecosystem Restoration", "Clean Energy", "Marine Conservation", "Sustainable Agriculture", "Youth Development", "Education"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Projects & Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our active initiatives creating measurable environmental and social 
            impact across Sierra Leone.
          </p>
        </AnimateOnScroll>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-lg ${project.color} flex items-center justify-center`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <Badge 
                      variant={project.status === "Active" ? "default" : "outline"} 
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {project.beneficiaries.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${selectedProject.color} flex items-center justify-center shrink-0`}>
                      <selectedProject.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <DialogTitle className="text-xl font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{selectedProject.category}</Badge>
                        <Badge variant={selectedProject.status === "Active" ? "default" : "outline"}>
                          {selectedProject.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.fullDescription}
                </DialogDescription>

                {/* Project Details */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Beneficiaries</p>
                      <p className="text-sm font-medium text-foreground">{selectedProject.beneficiaries}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Started</p>
                      <p className="text-sm font-medium text-foreground">{selectedProject.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Impact</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.impact.map((item) => (
                      <div 
                        key={item} 
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1" asChild>
                    <a href="#donate">Support This Project</a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="#contact">Learn More</a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
