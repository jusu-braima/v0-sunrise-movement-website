"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TreePine,
  GraduationCap,
  Zap,
  Wheat,
  Megaphone,
  Waves,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const strategicPillars = [
  {
    icon: TreePine,
    title: "Reforestation & Ecosystem Restoration",
    description:
      "Restoring native forests and watersheds through community-led tree planting initiatives across Sierra Leone.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    stats: "10,000+ trees planted",
  },
  {
    icon: GraduationCap,
    title: "Youth Climate Leadership",
    description:
      "Training the next generation of climate advocates with skills in environmental science, policy, and community organizing.",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    stats: "200+ youth trained",
  },
  {
    icon: Zap,
    title: "Clean Energy Access",
    description:
      "Bringing solar power to schools and communities, reducing reliance on fossil fuels and improving quality of life.",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    stats: "15 schools electrified",
  },
  {
    icon: Wheat,
    title: "Climate-Smart Agriculture",
    description:
      "Empowering farmers with sustainable techniques that increase yields while protecting the environment.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    stats: "800+ farmers trained",
  },
  {
    icon: Megaphone,
    title: "Policy Advocacy & Awareness",
    description:
      "Engaging communities and policymakers to drive meaningful climate action at local and national levels.",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    stats: "20,000+ people reached",
  },
  {
    icon: Waves,
    title: "Marine & Coastal Conservation",
    description:
      "Protecting Sierra Leone's coastline through beach cleanups, mangrove restoration, and sustainable fishing practices.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    stats: "5km coastline cleaned",
  },
]

// Blue Community Project Images
const blueProjectImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.32%20%281%29-J1PdkNnXfMYXvzQ7Nc9LVfqsaJnVfN.jpeg",
    alt: "Eco-Tourism Hub Blue Community Sierra Leone banner and signage",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.34-qxsMPOLuiWQBNWO0tH6NWRf1S0g6Aw.jpeg",
    alt: "Participants gathered at Eco-Tourism Hub Blue Community event",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.30-FLtdpTnQlJWZZlPyPLTEjCv4gQa1oB.jpeg",
    alt: "Community members in Blue Community initiative group photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.33-cz2lZBbKMD7F9MwjZkbAkKF9cYCFQ9.jpeg",
    alt: "Leaders and youth participants at Blue Community Sierra Leone event",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.32%20%282%29-kE9pWBIRiIxZW25EAWiMp1WV75ddHH.jpeg",
    alt: "Eco-Tourism Hub group discussing conservation initiatives",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.31-yHwBwQ7XHVwXDdJDIPTPe0u9FcOnzc.jpeg",
    alt: "Panel of speakers at Blue Community awareness event",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.33%20%281%29-TrSNhNxiL2Lx99SLGHrZgJ1WPDVsRU.jpeg",
    alt: "Large community gathering at Blue Community launch event",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.40.32-aIZ1KqTKXTYB0YyqJOsHZCZfvfHu2t.jpeg",
    alt: "Youth participants at Eco-Tourism Hub conservation meeting",
  },
]

// Climate Conference Images
const climateConferenceImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.48-ZuGMqo2ECHEz6TfALgADcjYi8aSivG.jpeg",
    alt: "Sierra Leone Climate Conference - Panel discussion with Sunrise Movement Sierra Leone banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.47%20%281%29-M6tLiDNJbSc5pG54rVjmwjJCtCXV10.jpeg",
    alt: "Youth delegation at Sierra Leone Climate Conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.49-k5KmfGYE0kXYLqbqU2QNgv7ikw36Sx.jpeg",
    alt: "Sierra Leone Climate Conference award presentation ceremony",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.49%20%281%29-pxoJX4evw1sNlT3oF4FqxYEv4Vk6qp.jpeg",
    alt: "Climate Conference keynote speaker addressing attendees",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.47-2bJnEiJ0xOlJa1cXPXYVLmCwn8gIjy.jpeg",
    alt: "Interactive session at Sierra Leone Climate Conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2010.45.50-SuHcqawTHHPJBQBnrh2DKxLGLlSTqc.jpeg",
    alt: "Community leaders at climate conference workshop",
  },
]

// Beach Cleanup Project Images
const beachCleanupImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.56-mOxPRDDNOFl2N0iu8a8WPfuEAb0lS9.jpeg",
    alt: "Volunteers cleaning beach with Sunrise Movement Sierra Leone banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.55%20%282%29-V4jjJBV0kCHZl5dG2cMTGLBVWYBnUN.jpeg",
    alt: "Youth volunteers collecting waste on beach cleanup day",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.55%20%281%29-hTJMxKCRxI6QGdF9zM45YJQv39I3Mw.jpeg",
    alt: "Beach cleanup team posing with collected waste bags",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.54-ABXQBDNKV8Pd5FBBFZ0xz14PLHVX34.jpeg",
    alt: "Volunteers working along the coastline during cleanup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.55-9WkUVKiuWKIVLGtNLGzNrPPK6xVPHe.jpeg",
    alt: "Group of volunteers gathering beach waste",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.53%20%281%29-5hplvNJEDnr0dL0wAYV4kj3j6KqCex.jpeg",
    alt: "Team members sorting collected recyclable materials",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.54%20%281%29-V7O2sCflKYoV6wyeSBJxqwZkr2X2u9.jpeg",
    alt: "Community volunteers participating in coastal cleanup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%2009.43.53-9mZUl4H0CiNPPmSYCCbV0EhNPqkEyF.jpeg",
    alt: "Sunrise Movement beach cleanup participants group photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.00-M7a6K0emZuNarNNZvH26g9mFCgg5Vj.jpeg",
    alt: "Volunteers collecting trash on beach with ocean in background",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.02-oesJ4hBMtTh975T5c1JW6DCqEKBm8n.jpeg",
    alt: "Team filling collection bags with beach debris",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.02-1rxJWxkEyAryVwdy2MOpqIfyb9qLdF.jpeg",
    alt: "Volunteers sorting waste together on the beach",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.57-tBGZJCiKPDa0hEQkp9biZSh8eMJyGg.jpeg",
    alt: "Two volunteers using rakes to collect debris from sand",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.04-2O2V68dlwgqvMVysNUb5iRKrff0zRq.jpeg",
    alt: "Wide shot of cleanup team spread across the beach",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.40-fxrEBbGvfh6aXeb3sLsFsizL6HXhaQ.jpeg",
    alt: "Four volunteers posing with full collection bag by the ocean",
  },
]

// Climate Justice March Images
const climateJusticeMarchImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.57-4pSXdU38MblQKQU1qVSx4sNB3D4S5w.jpeg",
    alt: "Youth marching for climate justice with Sunrise Movement Sierra Leone banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.58-sA5n7FLJdLr6cNzPMlbMtPMdKlrYhL.jpeg",
    alt: "Climate Justice March participants with signs and banners",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.59-blJuBLw60oX1C9gHuZlQn4Fs6O3lV9.jpeg",
    alt: "Large crowd at Climate Justice March event",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.55%20%281%29-qCcMilcVnU9xqwFHrfm5A1oRQExFbg.jpeg",
    alt: "Youth activists holding climate action signs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.56%20%281%29-Rkns8uqb2S7SZMZy4sWCIjIFpNHxkn.jpeg",
    alt: "Community members joining the climate justice march",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.55-dMMjD1a1gOraBR6qZq6yH3lJSuXcZU.jpeg",
    alt: "Young climate advocates at march rally",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.53-TlUcIX3HPvYHnZmz0OvlzBu5ePFFAV.jpeg",
    alt: "Marchers with climate change awareness banners",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.54-lVIH5xWL5sB9t29OPh9QCwNdEXq33p.jpeg",
    alt: "Climate Justice March participants group photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2003.40.56-zHmkHaQPCnEAuDAIVplSs5IaQMGHR9.jpeg",
    alt: "Youth climate activists with advocacy materials",
  },
]

// School Climate Education Images
const schoolEducationImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.55-3OeM4XwuGEDHbUyUcqfAGw7D0CBXOD.jpeg",
    alt: "Students participating in climate education workshop at school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.52-5YMUDYNrRR4kLxSJvIb1SjpHJPHLSW.jpeg",
    alt: "School climate education session with teachers and students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.54%20%281%29-e5FZYlXrTb4k3c7Zmi5kkFqF6cDOO9.jpeg",
    alt: "Interactive climate learning activity in classroom",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.54-vXwAuPHcBMbPbNhnK81EeZNrXQs04w.jpeg",
    alt: "Students engaged in environmental education program",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.53-J0Kg4fUMPrXVEPBwXCXhqiprCHzVn9.jpeg",
    alt: "Climate awareness presentation at local school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.15.51-aLH67IKAQYIFdL8eT8CVFE8CiZZQIv.jpeg",
    alt: "Group photo of students with climate education certificates",
  },
]

// Capacity Building Workshop Images
const capacityBuildingImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.55-mvmEeHfuKG9xx5DWduucWe3bE9PH5s.jpeg",
    alt: "Participants working collaboratively with laptops and tablets at workshop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.58%20%281%29-KV2bLxUKbQPgIOYc6NguiOIYPkBfse.jpeg",
    alt: "Full workshop room with participants engaged in training session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.57%20%281%29-ZA3eiPEbCq3s2ckNwgPi8xqMO7nSIb.jpeg",
    alt: "Participants in discussion during training session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.58-rqG8IHRibGHvqYrAYLfYFYH1mXQUvO.jpeg",
    alt: "Group brainstorming session at capacity building workshop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.01-8dTRJrZYu0SjcwuoNwqRUVX6OOVRrR.jpeg",
    alt: "Workshop participants taking notes during presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.57-hXHSp2mHK2fG7n0FxagS5P93NxKdIK.jpeg",
    alt: "Training facilitator leading session with participants",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.00%20%281%29-VBPwV3SpYrb2LNQrxQZvlmG35sLOAm.jpeg",
    alt: "Participants engaged in hands-on learning activities",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.59-mX3rlTw9T8DlPnylGmRsILBCF6JuXi.jpeg",
    alt: "Workshop attendees during interactive session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.56-rhdODPIjFU5fNj1V1SuDj2t2pFLGUK.jpeg",
    alt: "Group of participants collaborating on project work",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.00-lR67uR1r9UNMCCxmcMepKs3KbPq2qP.jpeg",
    alt: "Participants reviewing training materials together",
  },
]

// Climate Policy Workshop Images
const climatePolicyWorkshopImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.53-LWkfnelbDVtQaoLej7xlTisICXzrpW.jpeg",
    alt: "Workshop participants discussing NDC 2.0 climate policy with flipchart presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.39-S4efq2GVy5ePmz9kpjvq0xYRRjCtP4.jpeg",
    alt: "Small group climate policy discussion with documents and laptops",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.36-wvNR7ndFpeou5qdsk6aGmectlZ8Ll2.jpeg",
    alt: "Participants collaborating at workshop tables with laptops",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.14-kVRvIOwXcy6xf0Fmy3PMyi3qfD1Uvw.jpeg",
    alt: "Three participants in focused discussion reviewing climate policy documents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.55-6D4VekLCzOAf1BaxoF1oMdzQRV2kdA.jpeg",
    alt: "Large workshop hall with multiple groups working on climate policy development",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.48-b3ifv4RjSUWMr6duqMCfMLDhvO3lh5.jpeg",
    alt: "Participant signing climate policy commitment document",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.05-c5wVPpIQfYYEBWfMnPwhzmSDHN8zIP.jpeg",
    alt: "Workshop participants engaged in collaborative policy drafting session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.40-wFPkaZnessvkcWZgSInnZjgthBudGU.jpeg",
    alt: "Group discussion session with participants at round tables in workshop hall",
  },
]

// Youth Adaptation & SDGs Leadership Conference Images
const youthAdaptationImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.01-WeZc24cYbrTGqcsjl1fXP83QhQbgAH.jpeg",
    alt: "Large group photo at Youth Adaptation & SDGs Leadership Conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.52-ZkhFb6dPT1G7F6e2EU7DusxpEMnzdl.jpeg",
    alt: "Panel of speakers at conference with GYC and Rural Women Organization branding",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.39-OB2k75IFZK8CW6GCUTXLxdRIEbfnmA.jpeg",
    alt: "Participants in matching pink shirts holding certificates",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.06-pnsUxjkPoLHymJPkbcNwn60BiibMCr.jpeg",
    alt: "Woman speaker presenting with microphone at conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.09-SIGCU6wVLIKIur9JTIbTXXkVoHDhKU.jpeg",
    alt: "Certificate presentation ceremony at conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.46-GhhYY9XFfqwfowNMzLc26TKaqMqIfQ.jpeg",
    alt: "Young participants seated at conference tables",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.04-ATFvqloiDxCepagSuKlm1LZs6TGSHE.jpeg",
    alt: "Group of six organizers posing at conference venue",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-lbnuNsIewCB90t5ouy01yKDFAzf47x.jpeg",
    alt: "Workshop session with participants in group discussions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.25-YEyJmzIj9VZykgdi4xywJis31TvfGi.jpeg",
    alt: "Participant standing in front of GYC Sierra Leone banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.49-b1tGAyZKLE6PohxNep9Uawu7cf8AI0.jpeg",
    alt: "Participants attentively listening at conference session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.48-SRo1xVznnwYNxpUBySr9ENzB6s72Eq.jpeg",
    alt: "Group photo of conference participants",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.56-jgF2gD27glWp1IhwEiMTGmFLDTMZ32.jpeg",
    alt: "Conference attendees group photo with Youth Adaptation banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.24-vCXcp5EhvwMRG2QGmt20F4dACH7pGE.jpeg",
    alt: "Panel discussion on International Womens Day 2026",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Pillars */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Strategic Pillars
          </h2>
          <p className="text-lg text-muted-foreground">
            Six interconnected areas of focus that drive our mission to build climate resilience
            and empower communities across Sierra Leone.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strategicPillars.map((pillar, index) => (
            <AnimateOnScroll key={pillar.title} animation="fade-up" delay={index * 100}>
              <Card className="h-full bg-card border-2 border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 card-hover rounded-3xl overflow-hidden group relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent group-hover:via-primary transition-all duration-500" />
                <CardContent className="p-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 shadow-sm">
                    {pillar.stats}
                  </Badge>
                </CardContent>
                {/* Decorative shape */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Blue Community Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-blue-600 text-white mb-4">Featured Project</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Blue Community Project
            </h3>
            <p className="text-lg text-muted-foreground">
              In partnership with Eco-Tourism Hub Sierra Leone, we are promoting water conservation,
              plastic reduction, and coastal ecosystem protection.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={blueProjectImages[0].src}
                    alt={blueProjectImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown Peninsula
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {blueProjectImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Blue Community initiative recognizes communities that take action to protect 
                      water as a public trust, promote publicly financed and operated water services, 
                      and ban or phase out the sale of bottled water in public facilities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Working alongside the Eco-Tourism Hub Sierra Leone, we engage local communities 
                      in water conservation education, plastic waste reduction campaigns, and coastal 
                      cleanup activities to protect our precious marine ecosystems.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        SDG 6: Clean Water
                      </Badge>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        SDG 14: Life Below Water
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-blue-500/10 border-blue-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <p className="text-sm text-muted-foreground">Community Members</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-teal-500/10 border-teal-500/20">
                    <CardContent className="p-4 text-center">
                      <Waves className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">3km</div>
                      <p className="text-sm text-muted-foreground">Coastline Protected</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {blueProjectImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Support Blue Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Climate Conference Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-emerald-600 text-white mb-4">Major Event</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Sierra Leone Climate Conference
            </h3>
            <p className="text-lg text-muted-foreground">
              Our flagship annual event bringing together youth leaders, policymakers, and environmental 
              advocates to drive climate action across Sierra Leone.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={climateConferenceImages[0].src}
                    alt={climateConferenceImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-emerald-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {climateConferenceImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Sierra Leone Climate Conference is an annual gathering that convenes youth leaders, 
                      government officials, environmental experts, and community representatives to discuss 
                      pressing climate challenges and develop actionable solutions for Sierra Leone.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through panel discussions, workshops, and networking sessions, participants share 
                      knowledge, build partnerships, and strengthen their commitment to climate action. 
                      The conference also serves as a platform to recognize outstanding environmental 
                      advocates through awards and certifications.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        SDG 17: Partnerships
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-emerald-500/10 border-emerald-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">200+</div>
                      <p className="text-sm text-muted-foreground">Attendees</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-teal-500/10 border-teal-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">15+</div>
                      <p className="text-sm text-muted-foreground">Expert Speakers</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {climateConferenceImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Our Next Conference
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Coastal Beach Cleanup Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-cyan-600 text-white mb-4">Environmental Action</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Coastal Beach Cleanup Initiative
            </h3>
            <p className="text-lg text-muted-foreground">
              Youth-led beach cleanup campaigns protecting Sierra Leone&apos;s beautiful coastline 
              and marine ecosystems from plastic pollution.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={beachCleanupImages[0].src}
                    alt={beachCleanupImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-cyan-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown Beaches
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {beachCleanupImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Coastal Beach Cleanup Initiative mobilizes youth volunteers to remove plastic 
                      waste and debris from Sierra Leone&apos;s beaches. Through regular cleanup events, 
                      we protect marine life, preserve coastal beauty, and raise awareness about the 
                      devastating impact of plastic pollution on our oceans.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Each cleanup event includes education sessions on waste management, recycling, 
                      and the importance of reducing single-use plastics. We work with local communities 
                      to establish sustainable waste collection systems and promote beach stewardship.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                        SDG 14: Life Below Water
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        SDG 12: Responsible Consumption
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-cyan-500/10 border-cyan-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100+</div>
                      <p className="text-sm text-muted-foreground">Youth Volunteers</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-500/10 border-blue-500/20">
                    <CardContent className="p-4 text-center">
                      <Waves className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">5km</div>
                      <p className="text-sm text-muted-foreground">Coastline Cleaned</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {beachCleanupImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Our Cleanup Crew
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Climate Justice March Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-rose-600 text-white mb-4">Climate Advocacy</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Climate Justice March & Campaign
            </h3>
            <p className="text-lg text-muted-foreground">
              Mobilizing youth voices for climate action through peaceful marches, advocacy campaigns, 
              and community engagement across Sierra Leone.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={climateJusticeMarchImages[0].src}
                    alt={climateJusticeMarchImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-rose-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {climateJusticeMarchImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Climate Justice March brings together youth activists, community leaders, 
                      and environmental advocates in a powerful display of solidarity for climate action. 
                      Our marches raise awareness about the disproportionate impact of climate change 
                      on vulnerable communities in Sierra Leone.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through peaceful demonstrations, we call on government and corporate leaders 
                      to take bold action on climate change. Our campaigns demand climate justice, 
                      equitable policies, and meaningful investment in renewable energy and 
                      climate adaptation for frontline communities.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
                        SDG 13: Climate Action
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        SDG 16: Peace & Justice
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-rose-500/10 border-rose-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <p className="text-sm text-muted-foreground">Marchers</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <Megaphone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10,000+</div>
                      <p className="text-sm text-muted-foreground">People Reached</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {climateJusticeMarchImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* School Climate Education Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-indigo-600 text-white mb-4">Education</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              School Climate Education Program
            </h3>
            <p className="text-lg text-muted-foreground">
              Bringing climate education directly to schools, empowering students with knowledge 
              about environmental challenges and sustainable solutions.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={schoolEducationImages[0].src}
                    alt={schoolEducationImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-indigo-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Schools Across Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {schoolEducationImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our School Climate Education Program brings interactive environmental education 
                      directly into classrooms across Sierra Leone. We work with teachers and students 
                      to integrate climate literacy into school curricula, empowering young people 
                      with knowledge about environmental challenges and sustainable solutions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through workshops, demonstrations, and hands-on activities, students learn about 
                      climate change science, renewable energy, waste management, and how they can 
                      become environmental stewards in their communities. Participating students 
                      receive certificates recognizing their commitment to climate action.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        SDG 4: Quality Education
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-indigo-500/10 border-indigo-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <p className="text-sm text-muted-foreground">Students Educated</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-500/10 border-purple-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">15+</div>
                      <p className="text-sm text-muted-foreground">Schools Reached</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {schoolEducationImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Bring Climate Education to Your School
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Capacity Building & Training Workshops */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-orange-600 text-white mb-4">Skills Development</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Capacity Building & Training Workshops
            </h3>
            <p className="text-lg text-muted-foreground">
              Equipping youth with practical skills in environmental management, leadership, 
              and sustainable development through hands-on training programs.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={capacityBuildingImages[0].src}
                    alt={capacityBuildingImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-orange-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {capacityBuildingImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Capacity Building & Training Workshops provide intensive, hands-on training 
                      for young environmental leaders. Participants gain practical skills in project 
                      management, environmental monitoring, community organizing, and sustainable 
                      development practices.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      These workshops feature interactive sessions, group activities, and collaborative 
                      learning experiences. Participants work with laptops and modern tools to develop 
                      their technical skills while building networks with fellow climate advocates. 
                      Each workshop culminates in actionable project plans that participants can 
                      implement in their communities.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                        SDG 4: Quality Education
                      </Badge>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        SDG 8: Decent Work
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">200+</div>
                      <p className="text-sm text-muted-foreground">Youth Trained</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-amber-500/10 border-amber-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">20+</div>
                      <p className="text-sm text-muted-foreground">Workshops Held</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {capacityBuildingImages.slice(4, 7).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* More Images */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {capacityBuildingImages.slice(7).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Our Training Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Youth Adaptation & SDGs Leadership Conference */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-pink-600 text-white mb-4">Leadership Conference</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Youth Adaptation & SDGs Leadership Conference
            </h3>
            <p className="text-lg text-muted-foreground">
              Accelerating action through young women leading climate adaptation for sustainable development
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={youthAdaptationImages[0].src}
                    alt={youthAdaptationImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-pink-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {youthAdaptationImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Youth Adaptation & SDGs Leadership Conference, organized in partnership with Global 
                      Youth Counterpart for Sustainable Development (GYC), Plan International, and Rural Women 
                      Organization, brought together young leaders under the theme: &quot;Accelerate Action: Young 
                      Women Leading Climate Adaptation for Sustainable Development.&quot; This flagship event was 
                      held in celebration of International Women&apos;s Day 2026.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The conference featured panel discussions, workshop sessions, and networking opportunities 
                      focused on empowering young women to take leadership roles in climate adaptation efforts. 
                      Participants received certificates recognizing their commitment to sustainable development 
                      and were equipped with practical tools for driving change in their communities.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                        SDG 5: Gender Equality
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        SDG 13: Climate Action
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-pink-500/10 border-pink-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100+</div>
                      <p className="text-sm text-muted-foreground">Young Leaders</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-rose-500/10 border-rose-500/20">
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">Certified</div>
                      <p className="text-sm text-muted-foreground">All Participants</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Organizing Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Plan International</Badge>
                      <Badge variant="secondary" className="text-xs">GYC Sierra Leone</Badge>
                      <Badge variant="secondary" className="text-xs">Rural Women Organization</Badge>
                      <Badge variant="secondary" className="text-xs">Eco-Tourism Hub</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {youthAdaptationImages.slice(4, 8).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* More Images */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {youthAdaptationImages.slice(8).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Future Conferences
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Climate Policy Workshop Project */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-teal-600 text-white mb-4">Policy Development</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Climate Policy Workshop & NDC 2.0 Training
            </h3>
            <p className="text-lg text-muted-foreground">
              Building capacity for climate policy development through collaborative workshops focused on 
              Sierra Leone&apos;s Nationally Determined Contributions (NDC 2.0) and climate action planning.
            </p>
          </AnimateOnScroll>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Gallery */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={climatePolicyWorkshopImages[0].src}
                    alt={climatePolicyWorkshopImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-teal-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Freetown, Sierra Leone
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {climatePolicyWorkshopImages.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project Description */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="space-y-6">
                <Card className="bg-card border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In partnership with Trocaire and Irish Aid, our Climate Policy Workshop brings together 
                      stakeholders from government, civil society, and youth organizations to develop and 
                      strengthen Sierra Leone&apos;s climate policies. Participants engage in intensive sessions 
                      focused on the country&apos;s Nationally Determined Contributions (NDC 2.0) framework.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The workshop features collaborative group discussions, policy drafting exercises, and 
                      technical training on climate finance, institutional capacity building, MRV systems, 
                      gender mainstreaming, and public awareness strategies. Participants develop actionable 
                      recommendations to advance Sierra Leone&apos;s climate goals and sustainable development agenda.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        SDG 13: Climate Action
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        SDG 17: Partnerships
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-teal-500/10 border-teal-500/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <p className="text-sm text-muted-foreground">Stakeholders Trained</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-emerald-500/10 border-emerald-500/20">
                    <CardContent className="p-4 text-center">
                      <Megaphone className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">NDC 2.0</div>
                      <p className="text-sm text-muted-foreground">Policy Focus</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Partners */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Supporting Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Trocaire</Badge>
                      <Badge variant="secondary" className="text-xs">Irish Aid</Badge>
                      <Badge variant="secondary" className="text-xs">CICN</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional Images Grid */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {climatePolicyWorkshopImages.slice(4).map((img, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Our Policy Initiatives
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
