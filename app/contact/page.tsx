import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Us | Sunrise Movement Sierra Leone",
  description: "Get in touch with Sunrise Movement Sierra Leone. Partner with us, volunteer, or learn more about our climate programs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contact Us</span>
          
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, want to partner, or ready to join the movement? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </main>
  )
}
