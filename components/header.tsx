"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { 
  Menu, 
  Home, 
  Info, 
  Layers, 
  BarChart3, 
  Users, 
  Phone,
  Handshake,
  X,
  Camera,
  Newspaper
} from "lucide-react"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Programs", href: "/programs", icon: Layers },
  { label: "Gallery", href: "/gallery", icon: Camera },
  { label: "Impact", href: "/impact", icon: BarChart3 },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Get Involved", href: "/get-involved", icon: Users },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-700 ${
        isScrolled 
          ? "shadow-lg" 
          : ""
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone"
                width={56}
                height={56}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight tracking-tight group-hover:text-white/80 transition-colors whitespace-nowrap">
                Sunrise Movement
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-semibold">
                Sierra Leone
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 text-white/90 hover:text-white"
              >
                <item.icon className="h-3.5 w-3.5 group-hover:scale-110 transition-all duration-300 text-white/70 group-hover:text-white" />
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation - Condensed */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center p-2 transition-all duration-300 rounded-lg hover:bg-white/10 text-white/90 hover:text-white"
                title={item.label}
              >
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-all duration-300 text-white/70 group-hover:text-white" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button 
              size="sm" 
              asChild 
              className="group bg-white text-green-700 hover:bg-white/90 shadow-lg hover:shadow-white/25 transition-all duration-300"
            >
              <Link href="/#partner" className="flex items-center gap-1.5">
                <Handshake className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden xl:inline">Partner With Us</span>
                <span className="xl:hidden">Partner</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 border-l border-green-800 bg-green-700">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo.jpg"
                      alt="Sunrise Movement Sierra Leone"
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white/30"
                    />
                    <div>
                      <p className="font-bold text-white">Sunrise Movement</p>
                      <p className="text-xs text-white/70">Sierra Leone</p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Navigation - Scrollable */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-white/90 hover:text-white"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
                
                {/* Mobile CTA Buttons */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full justify-center gap-2 bg-white text-primary hover:bg-white/90">
                      <Link href="/#partner" onClick={() => setIsOpen(false)}>
                        <Handshake className="h-4 w-4" />
                        Partner With Us
                      </Link>
                    </Button>
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
