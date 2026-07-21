import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { News } from "@/components/news"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Events | Sunrise Movement Sierra Leone",
  description: "Stay updated with the latest news, events, and stories from Sunrise Movement Sierra Leone.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              <Newspaper className="h-4 w-4" />
              News & Events
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Latest Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest activities, upcoming events, and stories 
              of impact from communities across Sierra Leone.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <News />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Follow us on social media and subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
