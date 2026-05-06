import { Header } from "@/components/header"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Gallery | Sunrise Movement Sierra Leone",
  description: "View our photo gallery showcasing our climate action initiatives, community programs, and youth empowerment activities across Sierra Leone.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PhotoGallery />
      </div>
      <Footer />
    </main>
  )
}
