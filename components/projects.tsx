"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { 
  MapPin, 
  Users, 
  Calendar, 
  TreePine, 
  Zap, 
  Waves, 
  Wheat, 
  GraduationCap,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  category: string
  location: string
  beneficiaries: string
  startDate: string
  status: "Active" | "Completed" | "Upcoming"
  impact: string[]
  icon: typeof TreePine
  color: string
  image: string
}

const projects: Project[] = [
  // ECOSYSTEM RESTORATION (15 projects)
  {
    id: 1,
    title: "Bo District Reforestation Initiative",
    description: "Community-led tree planting program restoring degraded lands and creating green corridors.",
    fullDescription: "Working with local communities, schools, and farmers to restore forest cover in Bo District. The initiative focuses on planting indigenous tree species that support local biodiversity while providing economic benefits through fruit and timber production.",
    category: "Ecosystem Restoration",
    location: "Bo District",
    beneficiaries: "5,000+ community members",
    startDate: "September 2023",
    status: "Active",
    impact: ["10,000+ trees planted", "200 hectares restored", "50 youth trained"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 2,
    title: "Kenema Forest Regeneration Project",
    description: "Restoring native forest ecosystems in Kenema through community-based conservation.",
    fullDescription: "A comprehensive forest regeneration project working with local communities to restore degraded forest areas using indigenous tree species and sustainable land management practices.",
    category: "Ecosystem Restoration",
    location: "Kenema District",
    beneficiaries: "3,500+ farmers",
    startDate: "January 2024",
    status: "Active",
    impact: ["8,000 trees planted", "150 hectares under restoration", "40 forest guardians trained"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 3,
    title: "Moyamba Mangrove Restoration",
    description: "Protecting and restoring vital mangrove ecosystems along the coast.",
    fullDescription: "Restoring degraded mangrove forests that serve as critical nursery habitats for fish and protect coastal communities from erosion and storm surges.",
    category: "Ecosystem Restoration",
    location: "Moyamba District",
    beneficiaries: "2,000+ fishing families",
    startDate: "March 2024",
    status: "Active",
    impact: ["5,000 mangroves planted", "3km coastline protected", "20 communities engaged"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 4,
    title: "Kono Watershed Protection",
    description: "Protecting critical watershed areas through tree planting and soil conservation.",
    fullDescription: "Implementing watershed protection measures including riparian buffer zones, erosion control, and community-managed water resources.",
    category: "Ecosystem Restoration",
    location: "Kono District",
    beneficiaries: "4,000+ community members",
    startDate: "May 2024",
    status: "Active",
    impact: ["6,000 trees planted", "5 watersheds protected", "Clean water for 4,000 people"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 5,
    title: "Port Loko Agroforestry Expansion",
    description: "Combining tree planting with agricultural production for sustainable livelihoods.",
    fullDescription: "Introducing agroforestry systems that integrate trees with crop and livestock production, improving soil fertility while providing additional income sources.",
    category: "Ecosystem Restoration",
    location: "Port Loko District",
    beneficiaries: "1,500+ farmers",
    startDate: "July 2024",
    status: "Active",
    impact: ["4,000 fruit trees planted", "100 hectares converted", "35% income increase"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 6,
    title: "Tonkolili Sacred Grove Protection",
    description: "Preserving traditional sacred forests and their biodiversity.",
    fullDescription: "Working with traditional leaders to protect and restore sacred groves that hold cultural significance and harbor rare species.",
    category: "Ecosystem Restoration",
    location: "Tonkolili District",
    beneficiaries: "3,000+ community members",
    startDate: "August 2024",
    status: "Active",
    impact: ["12 sacred groves protected", "300 hectares conserved", "15 species documented"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 7,
    title: "Bombali Bamboo Corridor Project",
    description: "Creating bamboo corridors for erosion control and sustainable resources.",
    fullDescription: "Establishing bamboo plantations along riverbanks and degraded areas to prevent erosion while providing sustainable building materials and income.",
    category: "Ecosystem Restoration",
    location: "Bombali District",
    beneficiaries: "2,500+ households",
    startDate: "October 2024",
    status: "Upcoming",
    impact: ["15,000 bamboo planted", "10km corridors established", "30 artisans trained"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 8,
    title: "Kailahun Forest Reserve Restoration",
    description: "Rehabilitating degraded sections of the Kailahun Forest Reserve.",
    fullDescription: "Collaborative effort with forestry authorities to restore degraded areas within the forest reserve using native species and community engagement.",
    category: "Ecosystem Restoration",
    location: "Kailahun District",
    beneficiaries: "6,000+ nearby residents",
    startDate: "November 2024",
    status: "Upcoming",
    impact: ["20,000 seedlings ready", "500 hectares targeted", "100 forest monitors trained"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 9,
    title: "Pujehun Wetland Conservation",
    description: "Protecting and restoring critical wetland ecosystems.",
    fullDescription: "Conservation program focused on protecting wetlands that provide essential ecosystem services including flood control, water filtration, and wildlife habitat.",
    category: "Ecosystem Restoration",
    location: "Pujehun District",
    beneficiaries: "4,500+ community members",
    startDate: "December 2024",
    status: "Upcoming",
    impact: ["200 hectares wetland protected", "25 species documented", "5 communities engaged"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 10,
    title: "Kambia Riverine Forest Project",
    description: "Restoring forests along the Great Scarcies River.",
    fullDescription: "Planting trees along riverbanks to prevent erosion, improve water quality, and create wildlife corridors connecting fragmented forest patches.",
    category: "Ecosystem Restoration",
    location: "Kambia District",
    beneficiaries: "3,000+ riverside communities",
    startDate: "January 2025",
    status: "Upcoming",
    impact: ["12,000 trees planned", "8km riverbank restoration", "Fish stocks improvement"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 11,
    title: "Bonthe Island Ecosystem Restoration",
    description: "Restoring coastal ecosystems on Bonthe Island.",
    fullDescription: "Comprehensive ecosystem restoration including mangroves, coastal forests, and coral reef protection on Bonthe Island.",
    category: "Ecosystem Restoration",
    location: "Bonthe District",
    beneficiaries: "2,000+ island residents",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["3,000 mangroves planned", "50 hectares coastal forest", "Marine protected area"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 12,
    title: "Freetown Peninsula Forest Protection",
    description: "Protecting the remaining forests of the Freetown Peninsula.",
    fullDescription: "Working with communities and authorities to protect the vital forests that supply water to Freetown and provide critical ecosystem services.",
    category: "Ecosystem Restoration",
    location: "Western Area Rural",
    beneficiaries: "1 million+ Freetown residents",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["1,000 hectares protected", "Water security improved", "50 rangers trained"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 13,
    title: "Makeni Urban Greening Initiative",
    description: "Planting trees throughout Makeni city for urban climate resilience.",
    fullDescription: "Urban tree planting program to reduce heat island effects, improve air quality, and create green spaces in Sierra Leone's northern capital.",
    category: "Ecosystem Restoration",
    location: "Makeni City",
    beneficiaries: "150,000+ urban residents",
    startDate: "April 2025",
    status: "Upcoming",
    impact: ["5,000 street trees", "20 parks enhanced", "Air quality improved"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 14,
    title: "Koinadugu Highland Forest Project",
    description: "Protecting montane forests in Sierra Leone's highlands.",
    fullDescription: "Conservation program for the unique montane forests of Koinadugu, home to endemic species found nowhere else.",
    category: "Ecosystem Restoration",
    location: "Koinadugu District",
    beneficiaries: "5,000+ highland communities",
    startDate: "May 2025",
    status: "Upcoming",
    impact: ["800 hectares protected", "Endemic species preserved", "Ecotourism potential"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 15,
    title: "Falaba Community Forest Initiative",
    description: "Establishing community-managed forest reserves.",
    fullDescription: "Supporting communities to establish and manage their own forest reserves, combining conservation with sustainable resource use.",
    category: "Ecosystem Restoration",
    location: "Falaba District",
    beneficiaries: "8,000+ community members",
    startDate: "June 2025",
    status: "Upcoming",
    impact: ["5 community forests", "1,500 hectares managed", "Sustainable harvesting plans"],
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },

  // CLEAN ENERGY (15 projects)
  {
    id: 16,
    title: "Rural Solar Energy Program",
    description: "Bringing clean, affordable solar power to off-grid communities and schools.",
    fullDescription: "Installing solar systems in rural schools and households that lack access to the electricity grid. The program also trains local youth as solar technicians.",
    category: "Clean Energy",
    location: "Bombali & Bo Districts",
    beneficiaries: "1,200+ households",
    startDate: "January 2024",
    status: "Active",
    impact: ["15 schools electrified", "30 solar technicians trained", "3,000+ students benefiting"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.56-duDECbr4fPcKoObj3ZzcSPbNWns7AY.jpeg",
  },
  {
    id: 17,
    title: "Solar-Powered Health Centers",
    description: "Providing reliable electricity to rural health facilities.",
    fullDescription: "Installing solar systems at health centers to power medical equipment, refrigerate vaccines, and provide lighting for night-time emergencies.",
    category: "Clean Energy",
    location: "Kono District",
    beneficiaries: "25,000+ patients annually",
    startDate: "February 2024",
    status: "Active",
    impact: ["12 health centers powered", "Vaccine cold chain secured", "24/7 emergency care"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 18,
    title: "Clean Cookstove Distribution",
    description: "Providing fuel-efficient cookstoves to reduce deforestation and health impacts.",
    fullDescription: "Distributing improved cookstoves that use 60% less fuel than traditional three-stone fires, reducing deforestation pressure and indoor air pollution.",
    category: "Clean Energy",
    location: "Kenema District",
    beneficiaries: "3,000+ households",
    startDate: "March 2024",
    status: "Active",
    impact: ["3,000 stoves distributed", "60% fuel reduction", "Health improvements"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 19,
    title: "Solar Water Pumping Systems",
    description: "Installing solar-powered pumps for community water supply.",
    fullDescription: "Replacing diesel and hand pumps with solar-powered systems to provide reliable, clean water access while reducing operating costs.",
    category: "Clean Energy",
    location: "Port Loko District",
    beneficiaries: "8,000+ community members",
    startDate: "April 2024",
    status: "Active",
    impact: ["20 solar pumps installed", "Clean water access", "Zero fuel costs"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 20,
    title: "Community Solar Mini-Grids",
    description: "Building shared solar systems for village-wide electricity access.",
    fullDescription: "Developing mini-grid systems that can power multiple households and businesses, enabling economic activities and improving quality of life.",
    category: "Clean Energy",
    location: "Moyamba District",
    beneficiaries: "500+ households",
    startDate: "May 2024",
    status: "Active",
    impact: ["3 mini-grids operational", "New businesses enabled", "Evening study hours"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 21,
    title: "Solar Technician Training Academy",
    description: "Training youth as certified solar installation technicians.",
    fullDescription: "Comprehensive training program creating a skilled workforce for the growing solar energy sector in Sierra Leone.",
    category: "Clean Energy",
    location: "Freetown",
    beneficiaries: "200+ youth trainees",
    startDate: "June 2024",
    status: "Active",
    impact: ["200 technicians certified", "80% employment rate", "Local capacity built"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 22,
    title: "Biogas Digester Program",
    description: "Converting agricultural waste into clean cooking fuel.",
    fullDescription: "Installing biogas digesters that convert animal and agricultural waste into methane for cooking, reducing firewood use and providing organic fertilizer.",
    category: "Clean Energy",
    location: "Tonkolili District",
    beneficiaries: "500+ farming families",
    startDate: "July 2024",
    status: "Active",
    impact: ["100 digesters installed", "Free cooking fuel", "Organic fertilizer produced"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 23,
    title: "Solar Street Lighting Project",
    description: "Installing solar street lights in rural communities.",
    fullDescription: "Providing solar-powered street lighting to improve safety, enable evening economic activities, and reduce kerosene use.",
    category: "Clean Energy",
    location: "Kailahun District",
    beneficiaries: "15,000+ community members",
    startDate: "August 2024",
    status: "Active",
    impact: ["150 street lights", "Improved safety", "Extended business hours"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 24,
    title: "Solar-Powered Cold Storage",
    description: "Providing cold storage for farmers to reduce post-harvest losses.",
    fullDescription: "Installing solar-powered cold rooms that allow farmers to store produce and access better market prices.",
    category: "Clean Energy",
    location: "Bo District",
    beneficiaries: "1,000+ farmers",
    startDate: "September 2024",
    status: "Upcoming",
    impact: ["5 cold storage units", "30% less food waste", "Higher farmer incomes"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 25,
    title: "Micro-Hydro Power Development",
    description: "Harnessing small rivers for clean electricity generation.",
    fullDescription: "Developing small-scale hydropower systems on suitable rivers to provide reliable, renewable electricity to nearby communities.",
    category: "Clean Energy",
    location: "Koinadugu District",
    beneficiaries: "2,000+ households",
    startDate: "October 2024",
    status: "Upcoming",
    impact: ["3 micro-hydro sites", "24/7 power supply", "Industrial potential"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 26,
    title: "Solar Home Systems Distribution",
    description: "Providing affordable solar kits for individual households.",
    fullDescription: "Distributing solar home systems on a pay-as-you-go basis, making clean energy accessible to low-income families.",
    category: "Clean Energy",
    location: "Pujehun District",
    beneficiaries: "2,500+ households",
    startDate: "November 2024",
    status: "Upcoming",
    impact: ["2,500 systems deployed", "Affordable payments", "Phone charging included"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 27,
    title: "Briquette Production Enterprise",
    description: "Creating fuel briquettes from agricultural waste.",
    fullDescription: "Training youth groups to produce charcoal briquettes from rice husks and other agricultural waste as an alternative to wood charcoal.",
    category: "Clean Energy",
    location: "Bombali District",
    beneficiaries: "50+ youth entrepreneurs",
    startDate: "December 2024",
    status: "Upcoming",
    impact: ["5 production units", "500 tons briquettes/year", "Forest pressure reduced"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 28,
    title: "Solar Irrigation Systems",
    description: "Powering agricultural irrigation with solar energy.",
    fullDescription: "Installing solar-powered irrigation systems to enable year-round farming and improve agricultural productivity.",
    category: "Clean Energy",
    location: "Kambia District",
    beneficiaries: "800+ farmers",
    startDate: "January 2025",
    status: "Upcoming",
    impact: ["30 irrigation systems", "Year-round farming", "Double crop yields"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 29,
    title: "Clean Energy for Schools Initiative",
    description: "Comprehensive solar solutions for educational institutions.",
    fullDescription: "Providing solar systems, computer labs, and internet connectivity to schools, enabling digital learning in rural areas.",
    category: "Clean Energy",
    location: "Nationwide",
    beneficiaries: "50,000+ students",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["100 schools targeted", "Computer labs enabled", "Digital literacy"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },
  {
    id: 30,
    title: "Renewable Energy Policy Advocacy",
    description: "Advocating for supportive renewable energy policies.",
    fullDescription: "Working with government to develop policies that promote renewable energy adoption, including tax incentives and rural electrification strategies.",
    category: "Clean Energy",
    location: "Freetown",
    beneficiaries: "National impact",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["Policy recommendations", "Stakeholder engagement", "Regulatory framework"],
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.39%20%281%29-L0L4AOwXrREfF1ADBgkGXWGZuoV8Zk.jpeg",
  },

  // MARINE CONSERVATION (15 projects)
  {
    id: 31,
    title: "Coastal Clean-Up & Conservation",
    description: "Protecting marine ecosystems through beach clean-ups and community awareness.",
    fullDescription: "Regular coastal clean-up events combined with education programs about marine conservation. Working with fishing communities to promote sustainable practices.",
    category: "Marine Conservation",
    location: "Western Area",
    beneficiaries: "3,000+ coastal residents",
    startDate: "June 2024",
    status: "Active",
    impact: ["5km coastline cleaned", "2 tons waste collected", "10 communities engaged"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 32,
    title: "Sustainable Fishing Practices Program",
    description: "Training fishers in sustainable fishing methods to protect marine life.",
    fullDescription: "Working with fishing communities to adopt sustainable practices that protect fish stocks while maintaining livelihoods.",
    category: "Marine Conservation",
    location: "Bonthe District",
    beneficiaries: "500+ fishers",
    startDate: "July 2024",
    status: "Active",
    impact: ["500 fishers trained", "Mesh size compliance", "Fish stocks recovering"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 33,
    title: "Marine Protected Area Advocacy",
    description: "Advocating for the establishment of marine protected areas.",
    fullDescription: "Working with communities and government to establish marine protected areas that safeguard critical ecosystems and fish breeding grounds.",
    category: "Marine Conservation",
    location: "Sherbro Island",
    beneficiaries: "5,000+ coastal communities",
    startDate: "August 2024",
    status: "Active",
    impact: ["2 MPAs proposed", "Community support built", "Baseline surveys completed"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 34,
    title: "Plastic-Free Coastline Campaign",
    description: "Eliminating single-use plastics from coastal communities.",
    fullDescription: "Comprehensive campaign to reduce plastic pollution through awareness, alternative products, and community recycling initiatives.",
    category: "Marine Conservation",
    location: "Freetown Peninsula",
    beneficiaries: "50,000+ residents",
    startDate: "September 2024",
    status: "Active",
    impact: ["50% plastic reduction target", "Alternatives distributed", "Recycling centers"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 35,
    title: "Turtle Conservation Project",
    description: "Protecting sea turtle nesting sites along the coast.",
    fullDescription: "Monitoring and protecting sea turtle nesting beaches, engaging communities in conservation, and reducing threats from fishing gear.",
    category: "Marine Conservation",
    location: "Turtle Islands",
    beneficiaries: "Endangered turtle populations",
    startDate: "October 2024",
    status: "Active",
    impact: ["4 nesting beaches protected", "200+ nests monitored", "Community rangers trained"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 36,
    title: "Coral Reef Monitoring Program",
    description: "Monitoring and protecting Sierra Leone's coral reef ecosystems.",
    fullDescription: "Scientific monitoring of coral reef health combined with community-based conservation efforts to protect these vital ecosystems.",
    category: "Marine Conservation",
    location: "Banana Islands",
    beneficiaries: "Marine ecosystems",
    startDate: "November 2024",
    status: "Upcoming",
    impact: ["Reef health baseline", "Dive tourism potential", "Conservation zones"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 37,
    title: "Fishing Community Climate Adaptation",
    description: "Helping fishing communities adapt to changing ocean conditions.",
    fullDescription: "Supporting fishing communities to adapt to climate change impacts including shifting fish populations, sea level rise, and extreme weather.",
    category: "Marine Conservation",
    location: "Moyamba Coast",
    beneficiaries: "2,000+ fishers",
    startDate: "December 2024",
    status: "Upcoming",
    impact: ["Climate-resilient boats", "Early warning systems", "Diversified livelihoods"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 38,
    title: "Seagrass Restoration Initiative",
    description: "Restoring seagrass meadows that support marine biodiversity.",
    fullDescription: "Restoring degraded seagrass beds that serve as critical habitat for fish, sea turtles, and manatees while sequestering carbon.",
    category: "Marine Conservation",
    location: "Sierra Leone River Estuary",
    beneficiaries: "Marine ecosystems",
    startDate: "January 2025",
    status: "Upcoming",
    impact: ["10 hectares restoration", "Fish nursery habitat", "Carbon sequestration"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 39,
    title: "Ocean Literacy Education Program",
    description: "Teaching coastal youth about marine science and conservation.",
    fullDescription: "Educational program bringing marine science into schools and communities to build understanding and stewardship of ocean resources.",
    category: "Marine Conservation",
    location: "Coastal Districts",
    beneficiaries: "10,000+ students",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["50 schools reached", "Marine science clubs", "Youth ambassadors"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 40,
    title: "Illegal Fishing Monitoring Network",
    description: "Community-based monitoring to combat illegal fishing.",
    fullDescription: "Training and equipping fishing communities to monitor and report illegal fishing activities that deplete fish stocks.",
    category: "Marine Conservation",
    location: "National Waters",
    beneficiaries: "Fishing communities nationwide",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["Community monitors", "Reporting system", "Enforcement support"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 41,
    title: "Mangrove-Fisheries Integration Project",
    description: "Linking mangrove restoration to improved fisheries.",
    fullDescription: "Demonstrating the connection between healthy mangroves and productive fisheries to build community support for conservation.",
    category: "Marine Conservation",
    location: "Scarcies River",
    beneficiaries: "1,500+ fishing families",
    startDate: "April 2025",
    status: "Upcoming",
    impact: ["Mangrove nurseries", "Fish catch monitoring", "Community ownership"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 42,
    title: "Women in Fisheries Empowerment",
    description: "Supporting women fish processors and traders.",
    fullDescription: "Empowering women in the fishing sector through training, improved processing facilities, and market access.",
    category: "Marine Conservation",
    location: "Tombo Fishing Community",
    beneficiaries: "300+ women",
    startDate: "May 2025",
    status: "Upcoming",
    impact: ["Processing facilities", "Hygiene standards", "Market linkages"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 43,
    title: "Coastal Erosion Prevention",
    description: "Nature-based solutions to combat coastal erosion.",
    fullDescription: "Implementing living shoreline approaches using mangroves and other vegetation to protect coastal communities from erosion.",
    category: "Marine Conservation",
    location: "Lungi Peninsula",
    beneficiaries: "8,000+ residents",
    startDate: "June 2025",
    status: "Upcoming",
    impact: ["2km shoreline protected", "Living breakwaters", "Community relocation avoided"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 44,
    title: "Marine Wildlife Rescue Network",
    description: "Establishing a network for marine wildlife rescue and rehabilitation.",
    fullDescription: "Training community members to respond to stranded or injured marine animals and establishing rehabilitation protocols.",
    category: "Marine Conservation",
    location: "Coastal Sierra Leone",
    beneficiaries: "Marine wildlife",
    startDate: "July 2025",
    status: "Upcoming",
    impact: ["Rescue protocols", "Community responders", "Data collection"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },
  {
    id: 45,
    title: "Blue Carbon Assessment Project",
    description: "Assessing carbon storage in coastal ecosystems.",
    fullDescription: "Scientific assessment of carbon stored in mangroves, seagrasses, and other coastal ecosystems to support climate finance.",
    category: "Marine Conservation",
    location: "National Coastline",
    beneficiaries: "Climate action",
    startDate: "August 2025",
    status: "Upcoming",
    impact: ["Carbon inventory", "Climate finance potential", "Conservation prioritization"],
    icon: Waves,
    color: "bg-blue-500/10 text-blue-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.22.28-NJLSlteNVMXWN1S21PCg5uUOchHt5E.jpeg",
  },

  // SUSTAINABLE AGRICULTURE (15 projects)
  {
    id: 46,
    title: "Climate-Smart Agriculture Training",
    description: "Teaching farmers sustainable techniques that improve yields while protecting the environment.",
    fullDescription: "Comprehensive training program covering water conservation, organic farming methods, crop rotation, and climate-resilient varieties.",
    category: "Sustainable Agriculture",
    location: "Bo & Bombali Districts",
    beneficiaries: "800+ farmers",
    startDate: "March 2024",
    status: "Active",
    impact: ["800 farmers trained", "40% yield increase", "30% less chemicals"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.36-Bq5BacYev1XxshwO3GxpaYgN1rM5po.jpeg",
  },
  {
    id: 47,
    title: "Seed Bank & Exchange Network",
    description: "Preserving and sharing climate-resilient seed varieties.",
    fullDescription: "Establishing community seed banks to preserve traditional varieties and distribute improved, climate-resilient seeds.",
    category: "Sustainable Agriculture",
    location: "Kenema District",
    beneficiaries: "2,000+ farmers",
    startDate: "April 2024",
    status: "Active",
    impact: ["5 seed banks", "50 varieties preserved", "Seed security improved"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 48,
    title: "Organic Farming Certification Program",
    description: "Supporting farmers to achieve organic certification.",
    fullDescription: "Training and supporting farmers through the organic certification process to access premium markets.",
    category: "Sustainable Agriculture",
    location: "Kono District",
    beneficiaries: "300+ farmers",
    startDate: "May 2024",
    status: "Active",
    impact: ["50 farms certified", "Premium prices", "Export potential"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 49,
    title: "Women Farmers Cooperative",
    description: "Empowering women farmers through collective action.",
    fullDescription: "Supporting women farmers to organize cooperatives for collective purchasing, processing, and marketing.",
    category: "Sustainable Agriculture",
    location: "Port Loko District",
    beneficiaries: "500+ women farmers",
    startDate: "June 2024",
    status: "Active",
    impact: ["10 cooperatives formed", "Collective bargaining", "Processing centers"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 50,
    title: "Soil Health Restoration Initiative",
    description: "Restoring degraded agricultural soils through natural methods.",
    fullDescription: "Training farmers in composting, cover cropping, and other techniques to restore soil health and fertility.",
    category: "Sustainable Agriculture",
    location: "Tonkolili District",
    beneficiaries: "1,000+ farmers",
    startDate: "July 2024",
    status: "Active",
    impact: ["Soil organic matter increased", "Chemical inputs reduced", "Water retention improved"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 51,
    title: "Integrated Pest Management Training",
    description: "Teaching natural pest control methods to reduce chemical use.",
    fullDescription: "Training farmers in integrated pest management techniques that reduce reliance on chemical pesticides.",
    category: "Sustainable Agriculture",
    location: "Moyamba District",
    beneficiaries: "600+ farmers",
    startDate: "August 2024",
    status: "Active",
    impact: ["600 farmers trained", "70% pesticide reduction", "Beneficial insects protected"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 52,
    title: "Rice Intensification Program",
    description: "Promoting water-saving rice cultivation techniques.",
    fullDescription: "Training farmers in System of Rice Intensification (SRI) methods that increase yields while using less water and seed.",
    category: "Sustainable Agriculture",
    location: "Bombali District",
    beneficiaries: "1,500+ rice farmers",
    startDate: "September 2024",
    status: "Active",
    impact: ["1,500 farmers trained", "50% more yield", "40% less water"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 53,
    title: "Farmer Field Schools Network",
    description: "Peer-to-peer agricultural learning in the field.",
    fullDescription: "Establishing farmer field schools where farmers learn together through hands-on experimentation and observation.",
    category: "Sustainable Agriculture",
    location: "Kailahun District",
    beneficiaries: "2,000+ farmers",
    startDate: "October 2024",
    status: "Upcoming",
    impact: ["40 field schools", "Farmer-led learning", "Knowledge sharing"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 54,
    title: "Vegetable Gardening for Nutrition",
    description: "Promoting home gardens for improved family nutrition.",
    fullDescription: "Supporting families to establish vegetable gardens that improve nutrition and reduce food expenses.",
    category: "Sustainable Agriculture",
    location: "Pujehun District",
    beneficiaries: "1,000+ households",
    startDate: "November 2024",
    status: "Upcoming",
    impact: ["1,000 gardens established", "Nutrition improved", "Food security"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 55,
    title: "Beekeeping for Pollination & Income",
    description: "Integrating beekeeping with agriculture for multiple benefits.",
    fullDescription: "Training farmers in beekeeping to improve crop pollination while generating additional income from honey.",
    category: "Sustainable Agriculture",
    location: "Kambia District",
    beneficiaries: "200+ beekeepers",
    startDate: "December 2024",
    status: "Upcoming",
    impact: ["200 hives distributed", "Pollination improved", "Honey income"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 56,
    title: "Climate Information for Farmers",
    description: "Providing weather and climate information for farm decisions.",
    fullDescription: "Developing and distributing climate information products that help farmers make informed decisions about planting and harvesting.",
    category: "Sustainable Agriculture",
    location: "Nationwide",
    beneficiaries: "10,000+ farmers",
    startDate: "January 2025",
    status: "Upcoming",
    impact: ["SMS weather alerts", "Seasonal forecasts", "Risk reduction"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 57,
    title: "Youth in Agriculture Program",
    description: "Engaging young people in modern, sustainable farming.",
    fullDescription: "Making agriculture attractive to youth through training in modern techniques, access to land, and market linkages.",
    category: "Sustainable Agriculture",
    location: "Bo District",
    beneficiaries: "500+ youth",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["500 youth engaged", "Modern techniques", "Agribusiness skills"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 58,
    title: "Post-Harvest Loss Reduction",
    description: "Reducing crop losses through improved storage and handling.",
    fullDescription: "Training farmers and providing improved storage solutions to reduce the 30-40% of crops typically lost after harvest.",
    category: "Sustainable Agriculture",
    location: "Kenema District",
    beneficiaries: "1,500+ farmers",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["Losses halved", "Hermetic storage", "Better prices"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 59,
    title: "Livestock Integration Project",
    description: "Integrating livestock with crop farming for sustainable systems.",
    fullDescription: "Training farmers to integrate small livestock with crop production for manure, income diversification, and improved nutrition.",
    category: "Sustainable Agriculture",
    location: "Koinadugu District",
    beneficiaries: "800+ farmers",
    startDate: "April 2025",
    status: "Upcoming",
    impact: ["Manure for soil", "Protein source", "Income diversity"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },
  {
    id: 60,
    title: "Market Access & Value Addition",
    description: "Connecting farmers to markets and adding value to products.",
    fullDescription: "Developing market linkages and processing facilities that allow farmers to capture more value from their crops.",
    category: "Sustainable Agriculture",
    location: "Multiple Districts",
    beneficiaries: "3,000+ farmers",
    startDate: "May 2025",
    status: "Upcoming",
    impact: ["Market linkages", "Processing facilities", "Higher incomes"],
    icon: Wheat,
    color: "bg-green-500/10 text-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.37-yAQRchlrMbzyBMIu0xyyAx43yeMki4.jpeg",
  },

  // YOUTH DEVELOPMENT (15 projects)
  {
    id: 61,
    title: "Youth Climate Leadership Academy",
    description: "Intensive program developing the next generation of environmental leaders.",
    fullDescription: "A 6-month leadership development program equipping young Sierra Leoneans with skills in climate advocacy, community organizing, and project management.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "200+ youth leaders",
    startDate: "August 2023",
    status: "Active",
    impact: ["200 youth certified", "50 projects launched", "15 districts represented"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 62,
    title: "Green Entrepreneurship Bootcamp",
    description: "Training youth to start environmentally-focused businesses.",
    fullDescription: "Intensive training program helping young people develop and launch businesses that address environmental challenges.",
    category: "Youth Development",
    location: "Freetown",
    beneficiaries: "150+ entrepreneurs",
    startDate: "September 2024",
    status: "Active",
    impact: ["150 trained", "30 businesses launched", "50 jobs created"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 63,
    title: "Youth Climate Journalism Fellowship",
    description: "Training young journalists to report on environmental issues.",
    fullDescription: "Fellowship program training young journalists in environmental reporting to increase media coverage of climate issues.",
    category: "Youth Development",
    location: "Freetown",
    beneficiaries: "30+ journalists",
    startDate: "October 2024",
    status: "Active",
    impact: ["30 fellows trained", "100+ stories published", "Public awareness"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 64,
    title: "Climate Innovation Challenge",
    description: "Competition for youth-led climate solutions.",
    fullDescription: "Annual competition inviting young people to develop innovative solutions to local climate challenges, with seed funding for winners.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "500+ participants",
    startDate: "November 2024",
    status: "Active",
    impact: ["500 applications", "20 finalists", "5 funded projects"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 65,
    title: "Youth Environmental Ambassadors",
    description: "Training youth as community environmental ambassadors.",
    fullDescription: "Selecting and training outstanding young people to serve as environmental ambassadors in their communities.",
    category: "Youth Development",
    location: "All Districts",
    beneficiaries: "100+ ambassadors",
    startDate: "December 2024",
    status: "Active",
    impact: ["100 ambassadors", "Community outreach", "Behavior change"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 66,
    title: "Climate Debate Championship",
    description: "Inter-school debate competition on environmental topics.",
    fullDescription: "Annual debate championship engaging students in critical thinking about environmental issues and policy solutions.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "2,000+ students",
    startDate: "January 2025",
    status: "Upcoming",
    impact: ["100 schools", "Regional rounds", "National finals"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 67,
    title: "Digital Climate Activism Training",
    description: "Teaching youth to use digital tools for environmental advocacy.",
    fullDescription: "Training young activists in social media, video production, and online campaigning for environmental causes.",
    category: "Youth Development",
    location: "Freetown & Bo",
    beneficiaries: "200+ youth",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["Digital skills", "Online campaigns", "Wider reach"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 68,
    title: "Youth Climate Policy Internships",
    description: "Placing youth in government environmental agencies.",
    fullDescription: "Internship program placing young people in government ministries and agencies working on environmental policy.",
    category: "Youth Development",
    location: "Freetown",
    beneficiaries: "50+ interns",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["Government experience", "Policy insights", "Career pathways"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 69,
    title: "Environmental Arts & Culture Program",
    description: "Using arts to communicate environmental messages.",
    fullDescription: "Supporting young artists to create music, drama, and visual art that communicates environmental messages.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "100+ artists",
    startDate: "April 2025",
    status: "Upcoming",
    impact: ["Creative expression", "Cultural engagement", "Wider audiences"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 70,
    title: "Youth Climate Research Program",
    description: "Engaging university students in climate research.",
    fullDescription: "Partnering with universities to engage students in research on local climate impacts and solutions.",
    category: "Youth Development",
    location: "University towns",
    beneficiaries: "75+ students",
    startDate: "May 2025",
    status: "Upcoming",
    impact: ["Research skills", "Local data", "Publication opportunities"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 71,
    title: "Climate Leadership Exchange Program",
    description: "International exchange for young climate leaders.",
    fullDescription: "Facilitating exchanges between Sierra Leonean youth and climate activists in other African countries.",
    category: "Youth Development",
    location: "Regional",
    beneficiaries: "30+ exchange participants",
    startDate: "June 2025",
    status: "Upcoming",
    impact: ["Cross-border learning", "Network building", "Best practices"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 72,
    title: "Youth-Led Climate Adaptation Planning",
    description: "Engaging youth in local climate adaptation planning.",
    fullDescription: "Training young people to participate meaningfully in local climate adaptation planning processes.",
    category: "Youth Development",
    location: "District Councils",
    beneficiaries: "200+ youth",
    startDate: "July 2025",
    status: "Upcoming",
    impact: ["Planning participation", "Youth voices heard", "Better plans"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 73,
    title: "Young Farmers Climate Network",
    description: "Connecting young farmers working on climate-smart agriculture.",
    fullDescription: "Building a network of young farmers practicing and promoting climate-smart agriculture techniques.",
    category: "Youth Development",
    location: "Rural areas",
    beneficiaries: "300+ young farmers",
    startDate: "August 2025",
    status: "Upcoming",
    impact: ["Peer network", "Knowledge sharing", "Advocacy power"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 74,
    title: "Climate Volunteer Corps",
    description: "Mobilizing youth volunteers for environmental action.",
    fullDescription: "Organizing a corps of trained volunteers ready to respond to environmental emergencies and support ongoing projects.",
    category: "Youth Development",
    location: "Nationwide",
    beneficiaries: "500+ volunteers",
    startDate: "September 2025",
    status: "Upcoming",
    impact: ["Rapid response capacity", "Project support", "Youth engagement"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },
  {
    id: 75,
    title: "Youth Climate Summit",
    description: "Annual gathering of young climate activists.",
    fullDescription: "Organizing an annual summit bringing together young climate activists from across Sierra Leone for learning and networking.",
    category: "Youth Development",
    location: "Rotating location",
    beneficiaries: "1,000+ participants",
    startDate: "October 2025",
    status: "Upcoming",
    impact: ["Movement building", "Strategy alignment", "Inspiration"],
    icon: GraduationCap,
    color: "bg-indigo-500/10 text-indigo-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.23.34-lAO2vzLtpwMhppLjU7zUYa0mMcDkjr.jpeg",
  },

  // EDUCATION (15 projects)
  {
    id: 76,
    title: "School Environmental Clubs Network",
    description: "Building a network of youth-led environmental clubs in schools.",
    fullDescription: "Supporting environmental clubs in schools with resources, training, and inter-school activities.",
    category: "Education",
    location: "Bo & Bombali Districts",
    beneficiaries: "5,000+ students",
    startDate: "October 2023",
    status: "Active",
    impact: ["25 school clubs", "5,000 students engaged", "100 teachers trained"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 77,
    title: "Climate Curriculum Development",
    description: "Developing climate education materials for schools.",
    fullDescription: "Creating age-appropriate climate education materials aligned with the national curriculum.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "All students",
    startDate: "November 2024",
    status: "Active",
    impact: ["Curriculum materials", "Teacher guides", "Student workbooks"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 78,
    title: "Teacher Climate Training Program",
    description: "Training teachers to teach climate and environmental topics.",
    fullDescription: "Professional development program helping teachers integrate environmental education across subjects.",
    category: "Education",
    location: "All Districts",
    beneficiaries: "500+ teachers",
    startDate: "December 2024",
    status: "Active",
    impact: ["500 teachers trained", "Classroom integration", "Student engagement"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 79,
    title: "School Tree Nurseries Project",
    description: "Establishing tree nurseries in schools as learning tools.",
    fullDescription: "Creating tree nurseries in schools that serve as outdoor classrooms while producing seedlings for community planting.",
    category: "Education",
    location: "Kenema District",
    beneficiaries: "3,000+ students",
    startDate: "January 2025",
    status: "Active",
    impact: ["30 school nurseries", "Hands-on learning", "Trees for communities"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 80,
    title: "Environmental Quiz Competition",
    description: "Annual environmental knowledge competition for students.",
    fullDescription: "Inter-school competition testing and building environmental knowledge among students.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "10,000+ students",
    startDate: "February 2025",
    status: "Upcoming",
    impact: ["100 schools participating", "Knowledge building", "Prizes and recognition"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 81,
    title: "Mobile Environmental Education",
    description: "Bringing environmental education to remote schools.",
    fullDescription: "Mobile education unit visiting remote schools with environmental education materials and activities.",
    category: "Education",
    location: "Remote areas",
    beneficiaries: "5,000+ students",
    startDate: "March 2025",
    status: "Upcoming",
    impact: ["50 remote schools", "Equal access", "Hands-on activities"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 82,
    title: "School Garden Initiative",
    description: "Establishing food gardens in schools for learning and nutrition.",
    fullDescription: "Creating school gardens that teach sustainable agriculture while improving school meals.",
    category: "Education",
    location: "Port Loko District",
    beneficiaries: "4,000+ students",
    startDate: "April 2025",
    status: "Upcoming",
    impact: ["40 school gardens", "Practical learning", "Nutrition improvement"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 83,
    title: "Climate Science Lab Equipment",
    description: "Providing schools with equipment for climate experiments.",
    fullDescription: "Equipping schools with weather stations and science equipment to conduct climate-related experiments.",
    category: "Education",
    location: "Secondary Schools",
    beneficiaries: "8,000+ students",
    startDate: "May 2025",
    status: "Upcoming",
    impact: ["50 schools equipped", "Data collection", "Scientific thinking"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 84,
    title: "Environmental Book Distribution",
    description: "Providing environmental books to school libraries.",
    fullDescription: "Donating age-appropriate environmental books to school libraries to encourage reading about nature.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "20,000+ students",
    startDate: "June 2025",
    status: "Upcoming",
    impact: ["5,000 books distributed", "Library enrichment", "Reading promotion"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 85,
    title: "Eco-School Certification Program",
    description: "Certifying schools that meet environmental standards.",
    fullDescription: "Developing and implementing an eco-school certification program recognizing schools with excellent environmental practices.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "All schools",
    startDate: "July 2025",
    status: "Upcoming",
    impact: ["Standards developed", "Schools certified", "Best practices shared"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 86,
    title: "Community Environmental Learning Centers",
    description: "Establishing learning centers for community education.",
    fullDescription: "Creating community centers where adults and out-of-school youth can learn about environmental issues.",
    category: "Education",
    location: "District Headquarters",
    beneficiaries: "Community members",
    startDate: "August 2025",
    status: "Upcoming",
    impact: ["10 centers established", "Adult education", "Resource libraries"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 87,
    title: "Nature Field Trips Program",
    description: "Organizing field trips to natural areas for students.",
    fullDescription: "Arranging educational field trips to forests, wetlands, and other natural areas for hands-on learning.",
    category: "Education",
    location: "Near protected areas",
    beneficiaries: "3,000+ students",
    startDate: "September 2025",
    status: "Upcoming",
    impact: ["100 field trips", "Nature connection", "Conservation appreciation"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 88,
    title: "Environmental Video Library",
    description: "Creating and distributing environmental educational videos.",
    fullDescription: "Producing educational videos on environmental topics in local languages for use in schools and communities.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "Wide audience",
    startDate: "October 2025",
    status: "Upcoming",
    impact: ["50 videos produced", "Local languages", "Free distribution"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 89,
    title: "Parent Climate Awareness Program",
    description: "Engaging parents in environmental education.",
    fullDescription: "Working through schools to educate parents about environmental issues and household sustainability.",
    category: "Education",
    location: "School communities",
    beneficiaries: "10,000+ parents",
    startDate: "November 2025",
    status: "Upcoming",
    impact: ["Parent meetings", "Household practices", "Family engagement"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
  {
    id: 90,
    title: "Environmental Education Research",
    description: "Researching effective environmental education approaches.",
    fullDescription: "Conducting research to understand what environmental education approaches work best in Sierra Leone.",
    category: "Education",
    location: "Nationwide",
    beneficiaries: "Education sector",
    startDate: "December 2025",
    status: "Upcoming",
    impact: ["Evidence base", "Best practices", "Improved programs"],
    icon: Users,
    color: "bg-teal-500/10 text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2005.00.53-ZLF4blEVYSzBs7yBiImSa9Zf8XA9in.jpeg",
  },
]

const categories = ["All", "Ecosystem Restoration", "Clean Energy", "Marine Conservation", "Sustainable Agriculture", "Youth Development", "Education"]

const PROJECTS_PER_PAGE = 6

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Projects & Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our {projects.length}+ active initiatives creating measurable environmental and social 
            impact across Sierra Leone.
          </p>
        </AnimateOnScroll>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className="rounded-full"
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-sm text-muted-foreground mb-8">
          Showing {startIndex + 1}-{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-lg ${project.color} flex items-center justify-center`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <Badge 
                      variant={project.status === "Active" ? "default" : project.status === "Completed" ? "secondary" : "outline"} 
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {project.beneficiaries.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 sm:mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="h-9"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline ml-1">Previous</span>
            </Button>
            <div className="flex gap-1 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className="w-8 sm:w-10 h-9"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="h-9"
            >
              <span className="hidden sm:inline mr-1">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl ${selectedProject.color} flex items-center justify-center shrink-0`}>
                      <selectedProject.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <DialogTitle className="text-lg sm:text-xl font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">{selectedProject.category}</Badge>
                        <Badge variant={selectedProject.status === "Active" ? "default" : "outline"} className="text-xs">
                          {selectedProject.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.fullDescription}
                </DialogDescription>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground truncate">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Beneficiaries</p>
                      <p className="text-sm font-medium text-foreground truncate">{selectedProject.beneficiaries}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Started</p>
                      <p className="text-sm font-medium text-foreground">{selectedProject.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Impact</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.impact.map((item) => (
                      <div 
                        key={item} 
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                  <Button className="flex-1" size="sm" asChild>
                    <a href="#donate">Support This Project</a>
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm" asChild>
                    <a href="#contact">Learn More</a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
