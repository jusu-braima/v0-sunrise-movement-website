import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Programs } from "@/components/programs"
import { Projects } from "@/components/projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Programs & Projects | Sunrise Movement Sierra Leone",
  description: "Explore our strategic pillars and active projects creating environmental and social impact across Sierra Leone.",
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Programs & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach addresses climate change through interconnected programs 
              that empower communities and create lasting environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <Programs />

      {/* Active Projects */}
      <Projects />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Programs</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your contribution directly funds these life-changing initiatives across Sierra Leone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/#contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
