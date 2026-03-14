import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TreePine, Users, Zap, Wheat, GraduationCap, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Impact | Sunrise Movement Sierra Leone",
  description: "See the measurable impact of our climate programs across Sierra Leone - 20,000+ community members reached and counting.",
}

const impactMetrics = [
  {
    icon: TreePine,
    value: "10,000+",
    label: "Trees Planted",
    description: "Native species restored in deforested areas",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Users,
    value: "20,000+",
    label: "People Reached",
    description: "Through education, advocacy, and programs",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Youth Trained",
    description: "Climate leaders and green technicians",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Zap,
    value: "15",
    label: "Schools Electrified",
    description: "With clean solar energy systems",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Wheat,
    value: "800+",
    label: "Farmers Trained",
    description: "In climate-smart agriculture",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Waves,
    value: "5km",
    label: "Coastline Cleaned",
    description: "Marine conservation efforts",
    color: "bg-blue-500/10 text-blue-600",
  },
]

const sdgProgress = [
  { number: 4, name: "Quality Education", progress: 75 },
  { number: 7, name: "Clean Energy", progress: 60 },
  { number: 8, name: "Decent Work", progress: 55 },
  { number: 12, name: "Responsible Consumption", progress: 65 },
  { number: 13, name: "Climate Action", progress: 80 },
  { number: 14, name: "Life Below Water", progress: 45 },
  { number: 15, name: "Life on Land", progress: 70 },
  { number: 16, name: "Peace & Justice", progress: 60 },
]

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Impact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Measurable Change Across Sierra Leone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Since our founding in August 2023, we have reached over 20,000 community members 
              through climate education, advocacy, and environmental restoration programs.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric) => (
              <Card key={metric.label} className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${metric.color} flex items-center justify-center mb-4`}>
                    <metric.icon className="h-7 w-7" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-lg font-semibold text-foreground mt-1">{metric.label}</p>
                  <p className="text-sm text-muted-foreground mt-2">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Impact Section */}
      <Impact />

      {/* SDG Progress */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">SDG Contributions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Progress Towards Global Goals
            </h2>
            <p className="text-lg text-muted-foreground">
              Our programs contribute to 8 Sustainable Development Goals, 
              translating global commitments into local action.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {sdgProgress.map((sdg) => (
              <div key={sdg.number} className="p-4 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {sdg.number}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{sdg.name}</p>
                    <p className="text-sm text-muted-foreground">SDG {sdg.number}</p>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${sdg.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{sdg.progress}% progress towards targets</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Grow Our Impact</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your support enables us to reach more communities and create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/#contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
