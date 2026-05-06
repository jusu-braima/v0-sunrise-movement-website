import { Header } from "@/components/header"
import { LalehunProject } from "@/components/lalehun-project"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Our Project | Sunrise Movement Sierra Leone",
  description: "Learn about the Lalehun Solar Energy Initiative - providing clean energy access and youth empowerment in rural Sierra Leone.",
}

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <LalehunProject />
      </div>
      <Footer />
    </main>
  )
}
