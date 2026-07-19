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
  Sun,
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
    stats: "50+ people reached",
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

// Beach Cleanup Images
const beachCleanupImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.02-eUrD2oWgXb2yUqPnTMl727sVc0dlOK.jpeg",
    alt: "Volunteers collecting trash on beach with bags",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.02-mwF4lc3qSOuWBZzJ61qaanmjWNM9Ox.jpeg",
    alt: "Group of volunteers filling sacks with beach debris",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.40-q3Itkk0qdRvPkphr2yS2BuWCMclI4u.jpeg",
    alt: "Four volunteers posing with collected trash on beach",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.00-21NzKlW4MZfm79xObtKrG8jQq3DvFL.jpeg",
    alt: "Multiple volunteers spread across beach collecting waste",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.04-HAiTadzkPyfsYMzIpVmS9RKVRwMFHT.jpeg",
    alt: "Group of volunteers working together picking up trash",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.57-CwS4MEo8rlvCxcqWKzADbCEFEBgEDz.jpeg",
    alt: "Two volunteers using rakes to collect debris from sand",
  },
]

// Lalehun Solar Energy Initiative Images - Only verified working images
const lalehunSolarImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-lFiQ7DLhUWs2S19aMKgZfUaG7IuL3L.jpeg",
    alt: "Team kneeling with children and project banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39-TO1BE6CkPV7lJCiKfjfT0pxpBMjpIR.jpeg",
    alt: "Community group photo with solar energy initiative banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.05-Tbdgu9Us4EHrtc8OPeaJQcOvyYgJ4S.jpeg",
    alt: "Sunrise Movement team posing with Lalehun Solar Energy Initiative banner",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53%20%281%29-xpRFxU1uuPTwlHphQWHTQ5XnKgX45I.jpeg",
    alt: "Large crowd of students and community members at launch",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.08-ilZfuNl0PatXNxE40I4cJJsWmf4oE5.jpeg",
    alt: "Students seated in assembly listening to presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.01.25%20%281%29-Og8sdOXEQG6Z7UqEtAttk1ivg3R4V3.jpeg",
    alt: "Sunrise Movement team portrait in green shirts",
  },
]

// School Climate Education Outreach Images
const schoolClimateOutreachImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.17-lX8zHIsSMQcuiQrCZWtNCzZKkxdfmU.jpeg",
    alt: "Presenter in orange vest addressing large group of students in green uniforms at school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.11-lAXOzkoJ16iQLa8mZOVp9G7hkvItlD.jpeg",
    alt: "Climate educator speaking to students in green uniforms in school courtyard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.08-dWEi4JRDraryymkdDke6FMllpmSOyO.jpeg",
    alt: "Volunteer in orange vest engaging with students during climate awareness session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.15-dtKrTUpY1iwb5NEHrVAElndg9cpqtf.jpeg",
    alt: "Students in green uniforms gathered for climate education presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.49-nqY83ZqjPSB0DL1bgrPeAuTHsaFZgS.jpeg",
    alt: "Large assembly of students listening to climate awareness talk",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.31-VShduFb14x2K21rSdYbMPmGLaBGMRN.jpeg",
    alt: "Presenter speaking to students in white hijabs at Muslim school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.35-2Fw5RUIBZeRuyD0Qrw6KOrc4PNpH0y.jpeg",
    alt: "Students in blue and white uniforms gathered under trees for climate talk",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.31%20%281%29-YtSt3XvcG9zxwq0Zq8V2EZsh4VOBZf.jpeg",
    alt: "Climate educator addressing students in blue uniforms at secondary school",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-mKt6Dazrz9V6B4LaGSnEaHQR5vaVab.jpeg",
    alt: "Team of five volunteers in orange vests posing in front of educational mural",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.18-uzFWyYE7gKD1MJ8oHE6r0Z65yicIFS.jpeg",
    alt: "Group photo of volunteers with students in front of educational mural",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.33-l1gLVsoTcBQQBI1ocQpUxP0Fol0XHh.jpeg",
    alt: "Volunteers in orange vests with students in blue uniforms outside school offices",
  },
]

// Youth Capacity Building & Classroom Education Images
const youthCapacityBuildingImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.21%281%29-bUI3N3HAzq9aXuOPVyXpHI1o6CFDmn.jpeg",
    alt: "Students raising hands enthusiastically during interactive classroom session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.21-HYSCkGlwZFbSPfDgu0f3QIkGv1FUCp.jpeg",
    alt: "Engaged students in classroom during climate education session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.13-tyqYvF7FGljBbT9sQ1X5FAq5La4opj.jpeg",
    alt: "Large school assembly with speaker using megaphone, Education is Power mural visible",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.25.32-1g6y7h7IqEAn8ExvTVvNMVfRTBO6tR.jpeg",
    alt: "Students seated at desks in classroom during learning session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.27.05-vDfPKRxrKbFvj1v5mDBR3MqzNwCiq8.jpeg",
    alt: "Youth participants working on laptops at capacity building workshop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.14-b4Qll53x7VXG5a1pUj1azQTKbBVvLG.jpeg",
    alt: "Facilitators from Trocaire and Irish Aid leading workshop discussion",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.44-JTIkda29zXwH9CBFBXuk3hYK2Jnqwk.jpeg",
    alt: "Youth group engaged in interactive discussion at conference hall",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.26.02%281%29-VhAvL1XZygTJMCQmAnVxCwcsbG9rV4.jpeg",
    alt: "Female student speaking and presenting to classmates in classroom",
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

// COP30 Climate March Images
const cop30ClimateMarchImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.34-jXDpoClwUUVY6UTOXgDbPjleYvT8Vs.jpeg",
    alt: "Protesters holding Climate Justice = Social Justice signs during COP30 march",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.23-R6Km1lPxAR6G6WuLrOYzGmwNzfswm9.jpeg",
    alt: "Youth marchers with signs including Once the Earth heats UP it will take many years to cool down",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.12-lxZfCQlgnA4Y13lVfq2Dk4Jc96Wtjv.jpeg",
    alt: "March with YASDev banner - Climate Promises Must Be Kept COP30 Must Deliver",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.10-uFgMI07eaqrunbGTvYY6FKdb21tMRi.jpeg",
    alt: "Protesters with signs We are tired with empty promises We need Action NOW",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.45-ItV7n3oEBtjiJDiOIpZuMYNMNxOz5m.jpeg",
    alt: "Group of marchers holding Climate Justice = Social Justice signs under trees",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.42-ObyOlWHON6p9LAkY5lEPfTX91kELte.jpeg",
    alt: "Two women smiling and holding Make Earth Cool Again sign",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.11-lNb5aspsu3WRCc5nw2quvLf9AAbuPD.jpeg",
    alt: "Man holding There is no Planet B sign during climate march",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.02-eOJZ72xBRvJ33EwCSBStCfTuxm6GWZ.jpeg",
    alt: "Large march with YASDev banner demanding climate action and accountability",
  },
]

// Climate Change Webinar Images
const climateChangeWebinarImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.15-aejTQRwPX47RcDgH24oui1qZ1nQURd.jpeg",
    alt: "Climate Change and Its Impact on National Development event poster with all speakers",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.08-9TesX96t93HDx1tEjQmtGlWr43NVz2.jpeg",
    alt: "Dictionary Debonair - Moderator from Sierra Leone",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.12-W9Tuo4YJkVGeMO33srwKZTb6ILFsbD.jpeg",
    alt: "Mr. Emmanuel D. George - Speaker from Nigeria on Climate Justice and Equity",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.11-I8sAggG1S8EWnfwCyUoNhDhdyPD9dI.jpeg",
    alt: "Joshua Aruna - Speaker from Gambia on Climate Change and Economic Growth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.59-bBHQUKo59YzRszhBvlKEOjTcTTADsh.jpeg",
    alt: "Mrs. Amahle Tuswa - Speaker from South Africa on Youth Engagement",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.26-RpiCFUc0JwKfXdwA2eIaAt8Uv5uXdX.jpeg",
    alt: "John Mwiti - Speaker from Kenya on Government and Policy-Making",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.19-yvvAQ0M21fmoPVaB8iLHeoFH9RQjdm.jpeg",
    alt: "Abdul Ija Ismail - Speaker from Mozambique on Climate Change and Poverty",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.12%281%29-UbQjiR8nTzWY6DEYU3EK5xkcS7h6Ge.jpeg",
    alt: "African Youth Adaptation Network - Announcing In-Country Focal Points",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.14-h8Oz42pc268P5BSXXYsLFHGUKLBxdH.jpeg",
    alt: "African Youth Adaptation Network member organizations from across Africa",
  },
]

// Eco Champion Project: Trash 2 Cash Images
const ecoChampionImages: { src: string; alt: string }[] = [
  {
    src: "/eco-champion/group-baskets.jpg",
    alt: "Students gathered with color-coded Trash 2 Cash collection baskets outside their school",
  },
  {
    src: "/eco-champion/waste-sorting-bins.jpg",
    alt: "SM-SL facilitator demonstrating waste sorting with labeled Paper, Organic and Plastic bins",
  },
  {
    src: "/eco-champion/team-gate.jpg",
    alt: "Sunrise Movement Sierra Leone team members in safety vests at a participating school gate",
  },
  {
    src: "/eco-champion/student-speaking-1.jpg",
    alt: "A student leader speaking at the Eco Champion Project event",
  },
  {
    src: "/eco-champion/student-speaking-2.jpg",
    alt: "A student sharing ideas during the Eco Champion Project leadership session",
  },
  {
    src: "/eco-champion/team-banner.jpg",
    alt: "SM-SL team in front of the Eco Champion Project partner banner",
  },
  {
    src: "/eco-champion/group-redemption.jpg",
    alt: "Students and facilitators gathered for the Trash 2 Cash launch at a Makeni school",
  },
  {
    src: "/eco-champion/student-presenting.jpg",
    alt: "A student presenting alongside SM-SL youth volunteers in green vests",
  },
  {
    src: "/eco-champion/volunteer-banner.jpg",
    alt: "A youth volunteer in front of the Eco Champion Project Trash 2 Cash banner",
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

        {/* Eco Champion Project: Trash 2 Cash */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-emerald-600 text-white mb-4">Waste Management</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Eco Champion Project: Turning Waste into Opportunity in Sierra Leone
            </h3>
            <p className="text-lg text-muted-foreground">
              Tackling plastic waste in schools and communities while empowering young people to become leaders of
              environmental change
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sunrise Movement Sierra Leone (SM-SL) launched the Eco Champion Project: Trash 2 Cash to tackle the
                    growing challenge of plastic waste in schools and communities while empowering young people to
                    become leaders of environmental change.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Across Sierra Leone, poor waste management continues to contribute to environmental pollution,
                    blocked drainage systems, flooding, and public health risks. At the same time, many young people
                    lack meaningful opportunities to participate in addressing these challenges. The Eco Champion
                    Project was designed to bridge this gap by transforming schools into centers of environmental
                    stewardship, innovation, and youth leadership.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The initiative commenced in Makeni with a Teacher and Student Leadership Training Workshop, bringing
                    together educators, student leaders from five participating schools, youth representatives, local
                    authorities, and university students. The training strengthened participants&apos; knowledge of
                    sustainable waste management, environmental leadership, climate responsibility, and practical
                    approaches for driving change within their schools and communities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">Through the project, SM-SL is supporting the establishment of:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                    <li>Student Green Clubs to promote peer-led environmental action and leadership.</li>
                    <li>
                      Waste Sorting Stations to improve waste segregation and responsible disposal practices within
                      schools.
                    </li>
                    <li>
                      Practical recycling and reuse initiatives, including eco-brick production, plant nurseries, school
                      beautification activities, and other environmentally sustainable solutions.
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The project is directly engaging 110 teachers and student leaders, equipping them with the
                    knowledge, skills, and tools needed to champion sustainability within their schools and inspire
                    positive environmental action across their communities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond improving sanitation and environmental awareness, the Eco Champion Project promotes a
                    circular economy approach to waste management by demonstrating how plastic waste can be transformed
                    into valuable resources. The initiative also encourages creativity, innovation, and entrepreneurship
                    among young people, helping them view environmental challenges as opportunities for sustainable
                    development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Eco Champion Project reflects Sunrise Movement Sierra Leone&apos;s broader commitment to youth
                    empowerment, climate action, environmental sustainability, and community resilience. By combining
                    environmental education with practical action, the initiative provides a scalable model for building
                    cleaner schools, greener communities, and a more sustainable future for Sierra Leone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As the project grows, Sunrise Movement Sierra Leone welcomes partnerships with schools, local
                    authorities, development partners, private sector actors, and global stakeholders committed to
                    advancing youth-led environmental solutions and sustainable development.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed italic">
                    Turning waste into opportunity. Empowering young people to lead change. Building a cleaner and more
                    resilient Sierra Leone.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      SDG 11: Sustainable Cities & Communities
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      SDG 12: Responsible Consumption
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      SDG 13: Climate Action
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Stats and Focus Areas Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-emerald-500/10 border-emerald-500/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">110</div>
                    <p className="text-sm text-muted-foreground">Teachers & Student Leaders</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/10 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">5 Schools</div>
                    <p className="text-sm text-muted-foreground">Participating in Makeni</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Green Clubs</Badge>
                      <Badge variant="secondary" className="text-xs">Waste Sorting</Badge>
                      <Badge variant="secondary" className="text-xs">Eco-Bricks</Badge>
                      <Badge variant="secondary" className="text-xs">Recycling</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          {ecoChampionImages.length > 0 && (
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ecoChampionImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
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
          )}

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Partner With the Eco Champion Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Lalehun Solar Energy Initiative */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-yellow-600 text-white mb-4">Clean Energy</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Lalehun Solar Energy Initiative Project Launch
            </h3>
            <p className="text-lg text-muted-foreground">
              Enhancing access to clean energy, strengthening education systems, and advancing youth empowerment in rural Sierra Leone
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sunrise Movement Sierra Leone has launched the Lalehun Solar Energy Initiative in Lalehun, 
                    Penguia Chiefdom, to enhance access to clean energy, strengthen education systems, and 
                    advance youth empowerment in rural Sierra Leone. The initiative contributes to SDG 7 
                    (Affordable and Clean Energy) and SDG 4 (Quality Education), while supporting inclusive 
                    climate adaptation and community resilience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Planned Outputs:</strong> Solar energy systems will be installed in 
                    the only primary and secondary schools in Lalehun, aiming to provide reliable electricity 
                    and improve learning conditions. In parallel, 60 local youth, with a strong focus on young 
                    women, will be trained in solar installation, maintenance, and troubleshooting, building 
                    technical capacity within the community.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Expected Outcomes:</strong> The initiative is expected to improve access 
                    to quality education through reliable energy, strengthen local skills for employment, and 
                    increase youth participation in climate action and sustainable development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Anticipated Impact:</strong> By integrating renewable energy with capacity 
                    building, the initiative aims to contribute to resilient community systems, inclusive economic 
                    opportunities, and scalable models for rural clean energy solutions in Sierra Leone.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      SDG 7: Affordable & Clean Energy
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      SDG 4: Quality Education
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Stats and Partners Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-yellow-500/10 border-yellow-500/20">
                  <CardContent className="p-4 text-center">
                    <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">2 Schools</div>
                    <p className="text-sm text-muted-foreground">Solar Installation</p>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-500/10 border-emerald-500/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">60 Youth</div>
                    <p className="text-sm text-muted-foreground">Training Program</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Supporting Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">European Union</Badge>
                      <Badge variant="secondary" className="text-xs">Global Youth Mobilisation</Badge>
                      <Badge variant="secondary" className="text-xs">Youth Empowerment Fund</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {lalehunSolarImages.slice(0, 3).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {lalehunSolarImages.slice(3).map((img, index) => (
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
          <AnimateOnScroll animation="fade-up" delay={400} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Support Clean Energy Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* School Climate Education Outreach */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-orange-600 text-white mb-4">Climate Education</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              School Climate Education Outreach Program
            </h3>
            <p className="text-lg text-muted-foreground">
              Bringing climate awareness directly to schools across Sierra Leone, empowering the next generation of environmental stewards
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The School Climate Education Outreach Program brings climate awareness directly to students 
                    across Sierra Leone. Our trained volunteers visit schools to deliver engaging presentations 
                    on climate change, environmental conservation, and sustainable practices. The program reaches 
                    diverse communities including primary schools, secondary schools, and Islamic schools.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Program Activities:</strong> Interactive climate awareness sessions, 
                    environmental education workshops, discussions on local climate impacts, and practical guidance 
                    on how students can contribute to environmental protection in their communities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Expected Outcomes:</strong> Increased climate literacy among young 
                    people, development of environmental stewardship values, creation of school-based environmental 
                    clubs, and cultivation of the next generation of climate advocates.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Long-term Impact:</strong> By reaching students at formative ages, 
                    the program aims to create lasting behavioral change and inspire future leaders who will 
                    champion climate action and sustainable development in Sierra Leone.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      SDG 4: Quality Education
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      SDG 13: Climate Action
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Stats and Focus Areas Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-orange-500/10 border-orange-500/20">
                  <CardContent className="p-4 text-center">
                    <GraduationCap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">10+ Schools</div>
                    <p className="text-sm text-muted-foreground">Visited</p>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-500/10 border-emerald-500/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">1,000+</div>
                    <p className="text-sm text-muted-foreground">Students Reached</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Climate Change Basics</Badge>
                      <Badge variant="secondary" className="text-xs">Environmental Conservation</Badge>
                      <Badge variant="secondary" className="text-xs">Sustainable Practices</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {schoolClimateOutreachImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {schoolClimateOutreachImages.slice(4, 8).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {schoolClimateOutreachImages.slice(8).map((img, index) => (
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
          <AnimateOnScroll animation="fade-up" delay={350} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Support Climate Education
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Youth Capacity Building & Classroom Education */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-blue-600 text-white mb-4">Youth Development</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Youth Capacity Building & Classroom Education
            </h3>
            <p className="text-lg text-muted-foreground">
              Empowering young people through interactive learning sessions and skills development workshops
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Youth Capacity Building & Classroom Education program combines interactive classroom 
                    sessions with comprehensive skills development workshops. We engage students directly in 
                    schools through participatory learning experiences, while also providing intensive training 
                    for youth leaders through structured workshop programs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Classroom Engagement:</strong> Our educators facilitate 
                    dynamic classroom sessions where students actively participate through discussions, 
                    presentations, and hands-on activities. Students learn about climate change impacts, 
                    environmental conservation, and sustainable development goals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Capacity Building Workshops:</strong> In partnership with 
                    organizations like Trocaire and Irish Aid, we conduct intensive workshops that equip young 
                    people with leadership skills, project management capabilities, and technical knowledge in 
                    climate action and sustainable development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Youth Leadership:</strong> The program empowers students 
                    to become peer educators and climate advocates within their communities, creating a 
                    multiplier effect for environmental awareness and action.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      SDG 4: Quality Education
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      SDG 17: Partnerships
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Stats and Partners Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-500/10 border-blue-500/20">
                  <CardContent className="p-4 text-center">
                    <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <p className="text-sm text-muted-foreground">Students Trained</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-500/10 border-purple-500/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <p className="text-sm text-muted-foreground">Workshops Held</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Trocaire</Badge>
                      <Badge variant="secondary" className="text-xs">Irish Aid</Badge>
                      <Badge variant="secondary" className="text-xs">Local Schools</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {youthCapacityBuildingImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {youthCapacityBuildingImages.slice(4).map((img, index) => (
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
                Support Youth Development
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

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
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

              {/* Stats and Partners Row */}
              <div className="grid md:grid-cols-3 gap-4">
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
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Organizing Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Plan International</Badge>
                      <Badge variant="secondary" className="text-xs">GYC Sierra Leone</Badge>
                      <Badge variant="secondary" className="text-xs">Rural Women Organization</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {youthAdaptationImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
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

          <AnimateOnScroll animation="fade-up" delay={300}>
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
          <AnimateOnScroll animation="fade-up" delay={350} className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#get-involved">
                Join Future Conferences
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Coastal Beach Cleanup Initiative */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-blue-600 text-white mb-4">Marine Conservation</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Coastal Beach Cleanup Initiative
            </h3>
            <p className="text-lg text-muted-foreground">
              Protecting Sierra Leone&apos;s coastline through community-led beach cleanup campaigns
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our Coastal Beach Cleanup Initiative mobilizes volunteers to protect Sierra Leone&apos;s beautiful 
                    coastline from plastic pollution and marine debris. Through regular cleanup campaigns, we remove 
                    tons of waste from beaches while raising awareness about ocean conservation and the impact of 
                    plastic pollution on marine ecosystems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The initiative combines direct action with education, engaging local communities, schools, and 
                    businesses in understanding the importance of coastal conservation and adopting sustainable 
                    practices to reduce waste entering our oceans.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      SDG 14: Life Below Water
                    </Badge>
                    <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                      SDG 12: Responsible Consumption
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-500/10 border-blue-500/20">
                  <CardContent className="p-4 text-center">
                    <Waves className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">5+ Beaches</div>
                    <p className="text-sm text-muted-foreground">Cleaned</p>
                  </CardContent>
                </Card>
                <Card className="bg-cyan-500/10 border-cyan-500/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">200+</div>
                    <p className="text-sm text-muted-foreground">Volunteers</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Plastic Removal</Badge>
                      <Badge variant="secondary" className="text-xs">Ocean Conservation</Badge>
                      <Badge variant="secondary" className="text-xs">Community Engagement</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {beachCleanupImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
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

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg mb-6">
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

              {/* Stats and Partners Row */}
              <div className="grid md:grid-cols-3 gap-4">
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
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Supporting Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Trocaire</Badge>
                      <Badge variant="secondary" className="text-xs">Irish Aid</Badge>
                      <Badge variant="secondary" className="text-xs">CICN</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {climatePolicyWorkshopImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
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

        {/* COP30 Climate March */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-rose-600 text-white mb-4">Climate Advocacy</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              COP30 Civil Society & Community Foot Walk
            </h3>
            <p className="text-lg text-muted-foreground">
              Voices from the Frontlines: Bridging Broken Climate Promises through Action and Accountability
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    In partnership with Youth Alliance for Sustainable Development (YASDev), Network Movement for 
                    Youth and Children&apos;s Welfare (NMYCW), and with support from ActionAid Sierra Leone, Sunrise 
                    Movement Sierra Leone joined the Civil Society and Community COP30 Foot Walk in Freetown. Under 
                    the theme &quot;Climate Promises Must Be Kept: Our Future Cannot Wait - COP30 Must Deliver!&quot;, 
                    participants marched through the streets demanding climate accountability and urgent action. 
                    Youth activists carried powerful messages including &quot;Climate Justice = Social Justice&quot;, 
                    &quot;There is No Planet B&quot;, &quot;Make Earth Cool Again&quot;, and &quot;We Are Tired of Empty 
                    Promises - We Need Action NOW&quot;. The march amplified the voices of those most affected by 
                    climate change, calling on world leaders to honor their commitments and deliver meaningful 
                    climate action at COP30.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {cop30ClimateMarchImages.slice(0, 4).map((img, index) => (
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

          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cop30ClimateMarchImages.slice(4).map((img, index) => (
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
                Join Our Climate Advocacy
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Climate Change Webinar */}
        <div className="mb-16 pt-16 border-t border-border">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-blue-600 text-white mb-4">Virtual Conference</Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Climate Change and Its Impact on National Development
            </h3>
            <p className="text-lg text-muted-foreground">
              Pan-African Virtual Dialogue | September 15-16, 2023
            </p>
          </AnimateOnScroll>

          {/* Project Description - Text at Top */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Sunrise Movement Sierra Leone hosted a groundbreaking two-day virtual conference bringing together 
                    young climate leaders from across Africa to discuss &quot;Climate Change and Its Impact on National 
                    Development.&quot; The event featured speakers from six African nations including Nigeria, Kenya, 
                    South Africa, Gambia, Mozambique, and Sierra Leone, each addressing critical topics such as climate 
                    justice and equity, the link between climate change and economic growth, youth engagement in climate 
                    action, government policy-making, and climate change&apos;s relationship with poverty. The conference, 
                    moderated by Dictionary Debonair from Sierra Leone, was held via WhatsApp and connected with the 
                    African Youth Adaptation Network - a continent-wide coalition of youth organizations from over 15 
                    countries working together on climate adaptation strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>

          {/* Images Below */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {climateChangeWebinarImages.slice(0, 6).map((img, index) => (
                <div key={index} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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

          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {climateChangeWebinarImages.slice(6).map((img, index) => (
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
                Join Our Webinars
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
