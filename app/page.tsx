import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClimateConference } from "@/components/climate-conference"
import { BlueCommunity } from "@/components/blue-community"
import { SierraLeoneMap } from "@/components/sierra-leone-map"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { GetInvolved } from "@/components/get-involved"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ClimateConference />
      <BlueCommunity />
      <SierraLeoneMap />
      <Testimonials />
      <News />
      <Partners />
      <GetInvolved />
      <Footer />
    </main>
  )
}
