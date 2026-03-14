"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/#get-involved" },
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
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Sunrise Movement Sierra Leone"
                width={56}
                height={56}
                className="rounded-full"
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
                <div className="text-background/80 text-sm">
                  <a href="tel:+23276709191" className="hover:text-background transition-colors">+232 76 709191</a>
                  <span className="mx-2">/</span>
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
