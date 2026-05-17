"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TreePine, Globe, Zap } from "lucide-react"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return
    
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(end * easeOutQuart))
      
      if (progress >= 1) {
        clearInterval(timer)
        setHasAnimated(true)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, hasAnimated])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Community Members Reached" },
  { icon: TreePine, value: 8, suffix: "", label: "Strategic Pillars" },
  { icon: Globe, value: 8, suffix: "", label: "SDGs Addressed" },
  { icon: Zap, value: 2023, suffix: "", label: "Year Founded" },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2004.24.27-LaypVYtvCav5iLy06NhEI23rIindml.jpeg"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Youth-Led Climate Action Since 2023
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up-delay-1">
                Empowering Youth.{" "}
                <span className="text-primary">Restoring Ecosystems.</span>{" "}
                Transforming Sierra Leone.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up-delay-2">
                Building climate resilience, environmental justice, and sustainable futures through youth leadership and community action.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Button 
                size="lg" 
                asChild
                className="relative overflow-hidden group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Link href="/get-involved">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center">
                    Join the Movement
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="relative overflow-hidden group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Link href="/about">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                    Learn More
                  </span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border animate-fade-up-delay-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image / Logo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              <div className="absolute inset-8 rounded-full border border-dashed border-primary/15" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
              <div className="absolute inset-12 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone - United for a Greener Tomorrow"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
