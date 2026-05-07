import { notFound } from "next/navigation"
import { projectsData, type ProjectSlug } from "@/lib/projects-data"
import { ProjectDetail } from "@/components/project-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projectsData[slug as ProjectSlug]

  if (!project) {
    return {
      title: "Project Not Found | Sunrise Movement Sierra Leone",
    }
  }

  return {
    title: `${project.title} | Sunrise Movement Sierra Leone`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectsData[slug as ProjectSlug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  )
}
