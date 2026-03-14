import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Award, 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  History,
  ArrowRight 
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Sunrise Movement Sierra Leone",
  description: "Learn about Sunrise Movement Sierra Leone, a youth-led organization advancing climate resilience, environmental justice, and sustainable development.",
}

const timeline = [
  {
    date: "August 25, 2023",
    title: "Organization Founded",
    description: "Sunrise Movement Sierra Leone officially established with a vision for youth-led climate action.",
  },
  {
    date: "September 2023",
    title: "First Reforestation Project",
    description: "Launched community-led tree planting initiative in Bo District.",
  },
  {
    date: "January 2024",
    title: "National Youth Commission Registration",
    description: "Achieved official registration with Sierra Leone's National Youth Commission.",
  },
  {
    date: "March 2024",
    title: "10,000 Community Members Reached",
    description: "Milestone of reaching 10,000 people through our programs and advocacy.",
  },
  {
    date: "June 2024",
    title: "Clean Energy Program Launch",
    description: "Started solar installation program in rural schools and communities.",
  },
  {
    date: "December 2024",
    title: "20,000+ Impacted",
    description: "Expanded reach to over 20,000 community members across multiple districts.",
  },
]

const team = [
  {
    name: "Alicious Bessiama",
    role: "Founder & Executive Director",
    bio: "A passionate youth climate advocate committed to environmental justice and sustainable development in Sierra Leone.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              United for a Greener Tomorrow
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sunrise Movement Sierra Leone is a youth-led organization working at the intersection 
              of community action, policy reform, and youth leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Aug 2023</p>
                  <p className="text-sm text-muted-foreground">Founded</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">20,000+</p>
                  <p className="text-sm text-muted-foreground">People Reached</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">Districts Active</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-sm text-muted-foreground">SDGs Addressed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Content */}
      <About />

      {/* Our Story Timeline */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Milestones & Growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.date} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-primary font-medium">{item.date}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Meet Our Team
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="bg-card border-none shadow-lg overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground mt-4">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Be part of the movement creating lasting environmental change in Sierra Leone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/#donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
