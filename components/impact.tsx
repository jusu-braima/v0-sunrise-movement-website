"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Users, Sun, Leaf, MapPin, Calendar } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const impactStats = [
  {
    icon: Users,
    value: 20000,
    suffix: "+",
    label: "Community Members Reached",
    description: "Through climate education, advocacy, and empowerment programs",
  },
  {
    icon: MapPin,
    value: 16,
    suffix: "",
    label: "Districts Reached",
    description: "Active across Sierra Leone with international conferences",
  },
  {
    icon: Sun,
    value: 60,
    suffix: "+",
    label: "Youth Trained in Solar",
    description: "Through the Lalehun Solar Energy Initiative",
  },
  {
    icon: TreePine,
    value: 10000,
    suffix: "+",
    label: "Trees Planted",
    description: "Restoring ecosystems across multiple districts",
  },
]

const goals = [
  {
    icon: Sun,
    title: "Climate Adaptation & Mitigation",
    items: [
      "Climate resilience programs in vulnerable communities",
      "Disaster risk reduction initiatives",
      "Carbon footprint reduction campaigns",
    ],
  },
  {
    icon: Users,
    title: "Youth Leadership",
    items: [
      "Environmental governance training",
      "Youth climate advocacy networks",
      "Leadership development programs",
    ],
  },
  {
    icon: Leaf,
    title: "Green Livelihoods",
    items: [
      "Renewable energy job creation",
      "Sustainable agriculture training",
      "Green enterprise development",
    ],
  },
  {
    icon: TreePine,
    title: "Ecosystem Protection",
    items: [
      "Reforestation initiatives",
      "Marine conservation programs",
      "Biodiversity monitoring systems",
    ],
  },
]

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(value * easeOutQuart))
      
      if (progress >= 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-foreground/80 font-semibold uppercase tracking-wider text-sm">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Measurable Change Across Sierra Leone
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Since our founding, we have directly and indirectly reached thousands of community 
            members through climate education, advocacy, and environmental restoration programs.
          </p>
        </AnimateOnScroll>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="fade-scale" delay={index * 100}>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary-foreground/90" />
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-lg font-semibold text-primary-foreground mt-2">{stat.label}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {goals.map((goal) => (
            <div key={goal.title} className="space-y-4 p-4 sm:p-0 bg-primary-foreground/5 sm:bg-transparent rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <goal.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground">{goal.title}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {goal.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
