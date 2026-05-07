import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { ClimateConference } from "@/components/climate-conference"
import { BlueCommunity } from "@/components/blue-community"
import { PhotoGallery } from "@/components/photo-gallery"
import { Impact } from "@/components/impact"
import { SierraLeoneMap } from "@/components/sierra-leone-map"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { GetInvolved } from "@/components/get-involved"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground variant="gradient" />
      <Header />
      <Hero />
      <About />
      <Programs />
      <ClimateConference />
      <BlueCommunity />
      <PhotoGallery />
      <Impact />
      <SierraLeoneMap />
      <Testimonials />
      <News />
      <Partners />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  )
}
