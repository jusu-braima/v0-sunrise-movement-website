import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GetInvolved } from "@/components/get-involved"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Involved | Sunrise Movement Sierra Leone",
  description: "Join the movement! Volunteer, donate, or partner with Sunrise Movement Sierra Leone to create environmental impact.",
}

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              <Heart className="h-4 w-4" />
              Join the Movement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              There are many ways to support our mission. Whether you want to volunteer, 
              donate, or partner with us, your contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Options */}
      <GetInvolved />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today to learn more about how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10" asChild>
              <Link href="/partners">Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
