"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone"
                width={56}
                height={56}
                className="rounded-full w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-base sm:text-lg md:text-xl font-bold text-primary leading-tight tracking-tight group-hover:text-primary/80 transition-colors">
                Sunrise Movement
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-semibold">
                Sierra Leone
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5"
              >
                <item.icon className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="default" 
              asChild 
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="/#partner" className="flex items-center gap-2">
                <Handshake className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>Partner With Us</span>
              </Link>
            </Button>
            <Button 
              size="default" 
              asChild 
              className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Link href="/#donate" className="flex items-center gap-2">
                <Heart className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Donate</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l border-primary/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo.jpg"
                      alt="Sunrise Movement Sierra Leone"
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="text-base font-bold text-primary">Sunrise Movement</p>
                      <p className="text-xs text-muted-foreground font-semibold">Sierra Leone</p>
                    </div>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-1 py-6 flex-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-3 pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    asChild 
                    className="w-full justify-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                  >
                    <Link href="/#partner" onClick={() => setIsOpen(false)}>
                      <Handshake className="h-4 w-4 text-primary" />
                      Partner With Us
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full justify-center gap-2 bg-primary hover:bg-primary/90 shadow-lg"
                  >
                    <Link href="/#donate" onClick={() => setIsOpen(false)}>
                      <Heart className="h-4 w-4" />
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
