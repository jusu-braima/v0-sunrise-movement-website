"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { 
  Menu, 
  Home, 
  Info, 
  Layers, 
  BarChart3, 
  Users, 
  Phone,
  Handshake,
  Heart
} from "lucide-react"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Programs", href: "/programs", icon: Layers },
  { label: "Impact", href: "/impact", icon: BarChart3 },
  { label: "Get Involved", href: "/#get-involved", icon: Users },
  { label: "Contact", href: "/contact", icon: Phone },
]

// Climate action background images for mobile menu
const climateImages = [
  "/images/projects/reforestation.jpg",
  "/images/projects/solar-energy.jpg",
  "/images/projects/coastal-cleanup.jpg",
  "/images/projects/sustainable-farming.jpg",
  "/images/projects/workshop.jpg",
  "/images/hero-community.jpg",
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Rotate background images
  useEffect(() => {
    if (!isOpen) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % climateImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone"
                width={56}
                height={56}
                className="rounded-full w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary leading-tight tracking-tight group-hover:text-primary/80 transition-colors whitespace-nowrap">
                Sunrise Movement
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground font-semibold">
                Sierra Leone
              </p>
            </div>
          </Link>

          {/* Desktop Navigation with Scroll */}
          <div className="hidden lg:block flex-1 mx-4 xl:mx-8">
            <ScrollArea className="w-full">
              <nav className="flex items-center justify-center gap-1 xl:gap-2 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative flex items-center gap-1.5 px-3 xl:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5 whitespace-nowrap"
                  >
                    <item.icon className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
              </nav>
              <ScrollBar orientation="horizontal" className="h-1.5" />
            </ScrollArea>
          </div>

          {/* Tablet Navigation - Horizontal Scroll */}
          <div className="hidden md:block lg:hidden flex-1 mx-2">
            <ScrollArea className="w-full">
              <nav className="flex items-center gap-1 px-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5 whitespace-nowrap"
                    title={item.label}
                  >
                    <item.icon className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
              </nav>
              <ScrollBar orientation="horizontal" className="h-1" />
            </ScrollArea>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-xs lg:text-sm px-2 lg:px-3"
            >
              <Link href="/#partner" className="flex items-center gap-1 lg:gap-1.5">
                <Handshake className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden lg:inline">Partner</span>
              </Link>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300 text-xs lg:text-sm px-2 lg:px-3"
            >
              <Link href="/#donate" className="flex items-center gap-1 lg:gap-1.5">
                <Heart className="h-3 w-3 lg:h-3.5 lg:w-3.5 group-hover:scale-110 transition-transform duration-300" />
                <span>Donate</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 h-9 w-9 sm:h-10 sm:w-10">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full xs:w-[320px] sm:w-[380px] p-0 border-l border-primary/20 overflow-hidden"
            >
              {/* Background Image with Transition */}
              <div className="absolute inset-0 z-0">
                {climateImages.map((img, index) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Climate Action"
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
              </div>

              {/* Content with Scroll */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/50 backdrop-blur-sm bg-background/30">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo.jpg"
                      alt="Sunrise Movement Sierra Leone"
                      width={48}
                      height={48}
                      className="rounded-full w-10 h-10 sm:w-12 sm:h-12 ring-2 ring-primary/30"
                    />
                    <div>
                      <p className="text-sm sm:text-base font-bold text-primary">Sunrise Movement</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold">Sierra Leone</p>
                    </div>
                  </div>
                </div>
                
                {/* Scrollable Navigation */}
                <ScrollArea className="flex-1 px-3 sm:px-4">
                  <nav className="flex flex-col gap-1.5 sm:gap-2 py-4 sm:py-6">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 backdrop-blur-sm bg-background/40"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
                
                {/* Footer CTA */}
                <div className="p-3 sm:p-4 border-t border-border/50 backdrop-blur-sm bg-background/50">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full justify-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm bg-background/50 text-sm sm:text-base py-2.5 sm:py-3"
                    >
                      <Link href="/#partner" onClick={() => setIsOpen(false)}>
                        <Handshake className="h-4 w-4 text-primary" />
                        Partner With Us
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      className="w-full justify-center gap-2 bg-primary hover:bg-primary/90 shadow-lg text-sm sm:text-base py-2.5 sm:py-3"
                    >
                      <Link href="/#donate" onClick={() => setIsOpen(false)}>
                        <Heart className="h-4 w-4" />
                        Donate Now
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Image indicator dots */}
                  <div className="flex justify-center gap-1.5 mt-3 sm:mt-4">
                    {climateImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? "bg-primary w-4 sm:w-6" 
                            : "bg-primary/30 hover:bg-primary/50"
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
