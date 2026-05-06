import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LalehunProject } from "@/components/lalehun-project"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Project | Sunrise Movement Sierra Leone",
  description: "Learn about the Lalehun Solar Energy Initiative - our flagship project bringing clean energy and education to rural Sierra Leone.",
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
              Our Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Lalehun Solar Energy Initiative brings clean energy and quality education 
              to rural communities while empowering youth through skills training.
            </p>
          </div>
        </div>
      </section>

      {/* Lalehun Project */}
      <LalehunProject />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Project</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your contribution directly funds this life-changing initiative in Lalehun, Sierra Leone.
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
