import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { LalehunProject } from "@/components/lalehun-project"
import { ClimateConference } from "@/components/climate-conference"
import { Projects } from "@/components/projects"
import { PhotoGallery } from "@/components/photo-gallery"
import { Impact } from "@/components/impact"
import { SierraLeoneMap } from "@/components/sierra-leone-map"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { GetInvolved } from "@/components/get-involved"
import { Donate } from "@/components/donate"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <LalehunProject />
      <ClimateConference />
      <Projects />
      <PhotoGallery />
      <Impact />
      <SierraLeoneMap />
      <Testimonials />
      <News />
      <Partners />
      <GetInvolved />
      <Donate />
      <Contact />
      <Footer />
    </main>
  )
}
