"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
]

const programs = [
  "Youth Leadership",
  "Climate Policy",
  "Sustainable Agriculture",
  "Clean Energy",
  "Marine Conservation",
  "Education & Skills",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone"
                width={56}
                height={56}
                className="rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
              />
              <div>
                <p className="font-semibold text-background leading-tight">Sunrise Movement</p>
                <p className="text-sm text-background/70">Sierra Leone</p>
              </div>
            </Link>
            <p className="text-background/80 text-sm">
              A youth-led organization advancing climate resilience, environmental justice, 
              and sustainable development across Sierra Leone.
            </p>
            <p className="text-background/60 text-sm italic">
              &ldquo;United for a Greener Tomorrow&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-background/80 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-background/60 mt-0.5 shrink-0" />
                <a 
                  href="mailto:sunrisemovementsierraleone@gmail.com" 
                  className="text-background/80 hover:text-background transition-colors text-sm break-all"
                >
                  sunrisemovementsierraleone@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-background/60 mt-0.5 shrink-0" />
                <div className="text-background/80 text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <a href="tel:+23276709191" className="hover:text-background transition-colors">+232 76 709191</a>
                  <span className="hidden sm:inline mx-2">/</span>
                  <a href="tel:+23288468693" className="hover:text-background transition-colors">+232 88 468693</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/60 mt-0.5 shrink-0" />
                <span className="text-background/80 text-sm">
                  23 New Gerihun, Unumbu Express, Bo, Sierra Leone
                </span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 pt-6 border-t border-background/10">
              <h5 className="text-sm font-semibold text-background mb-4">Follow Us</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61550758236703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sunrise-movement-sierra-leone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/srm.sl?igsh=MXQzYTI2eWNyNWF6Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com/@sunrise.movement63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Sunrise Movement Sierra Leone. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Founded August 25, 2023 | Registered NGO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
