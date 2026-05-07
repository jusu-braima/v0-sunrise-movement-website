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
    bio: "Globally recognised youth climate leader with 8 years of experience, driving Sunrise Movement Sierra Leone's strategic vision and scaling youth-led climate, renewable energy, and sustainable development initiatives across the country.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alicious%20Bessiama-WDHNISyvc7YYxt6iWaTaaRhIoHUhY7.jpeg",
  },
  {
    name: "Sarah Pessima",
    role: "Finance Coordinator",
    bio: "Finance professional bringing 5 years of experience to Sunrise Movement Sierra Leone, strengthening financial management, accountability, and resource stewardship. She oversees budgeting, financial reporting, and compliance processes, ensuring effective utilisation of funds to support program delivery, build donor confidence, and sustain the organisation's growth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serah%20Pessima-mf0OERXoaTSUhP9NxzZ8SQ7tB6ILrV.jpeg",
  },
  {
    name: "Hassan Abu",
    role: "Volunteers & Outreach Coordinator",
    bio: "Dedicated climate advocate and emerging leader with 5 years of experience, supporting Sunrise Movement Sierra Leone's volunteer mobilisation and community outreach.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hassan%20Abu-dWEFV1zTWfm95sHCzWOyKB4YYRWeog.jpeg",
  },
  {
    name: "Abu Bakar Ansumana",
    role: "Monitoring and Evaluation Coordinator",
    bio: "Public health and social development professional with 7 years of experience leading Sunrise Movement Sierra Leone's monitoring, evaluation, and learning systems to strengthen program impact and accountability. He designs frameworks that track results across initiatives that advance inclusive, community-driven climate solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABU%20BAKAR%20ANSUMANA%20%282%29-sFpRTuYFFNwmU5JrkcqRWMcjE74hw1.jpeg",
  },
  {
    name: "Jambai Morie",
    role: "Youth Engagement Coordinator",
    bio: "Passionate climate advocate and youth leader with 5 years of experience advancing Sunrise Movement Sierra Leone's grassroots engagement and youth mobilisation efforts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JAMBAI%20MORIE-jVUv1s5icz417ZKj3jtWvzd4yMYgpV.jpeg",
  },
  {
    name: "George Christopher Lamin",
    role: "Media and Communication Director",
    bio: "Communications and media specialist leading Sunrise Movement Sierra Leone's storytelling, advocacy, and public engagement strategies. He oversees content creation, digital media campaigns, and knowledge dissemination, enhancing the organisation's visibility, stakeholder engagement, and impact in youth-led climate action and sustainable development initiatives.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GEORGE%20CHRISTOPHER%20LAMIN-YLbcsjqGSOjzlihFNEDUYKe9FoHYUA.jpeg",
  },
  {
    name: "Benjamin Bockarie",
    role: "Director of Programs, Grant, and Technical Lead",
    bio: "A dedicated coastal and marine management professional with First-Class academic foundations and over three years of applied experience in blue economy programming across Sierra Leone, Benjamin brings his expertise to advance Sunrise Movement Sierra Leone's climate adaptation and sustainable development initiatives. Currently completing an MSc in Applied Coastal and Marine Management at University College Cork as an Ireland Africa and Ocean Leaders Fellow, he integrates GIS, remote sensing, habitat mapping, and stakeholder-driven research into organisational programming. Previously as Programme Coordinator at GOAL Global, he led coastal resilience projects that combined sustainable practices with community livelihoods, strengthening project design, grant management, and policy engagement. Benjamin's technical, strategic, and programmatic expertise ensures Sunrise Movement Sierra Leone delivers measurable impact through nature-based solutions, youth engagement, and sustainable community development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BENJAMIN%20BOCKARIE-WF0wTF4QEmMOQKsTdODVU8nNroYgZV.jpg",
  },
  {
    name: "Vandi Fabba",
    role: "Grants and Partnership Coordinator",
    bio: "Vandi Fabba is a skilled Grants and Partnership Coordinator at Sunrise Movement. With over five years of experience in NGO program management and environmental stewardship. He has demonstrated strong expertise in community engagement, partnership coordination and project implementation. Vandi is deeply passionate about sustainable development, food security and improving livelihoods.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VANDI%20FABBA-LyXoaxp5HyKxn2D0zXX8yp8fQ8owZy.jpeg",
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="bg-card border-2 border-border shadow-elevated hover:shadow-glow transition-all duration-500 overflow-hidden rounded-3xl group hover:-translate-y-2 relative flex flex-col">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <CardContent className="p-6 text-center flex flex-col flex-1">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden mx-auto mb-5 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-glow">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mt-1 mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{member.bio}</p>
                </CardContent>
                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
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
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-white hover:bg-primary-foreground/10" asChild>
              <Link href="/#partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
