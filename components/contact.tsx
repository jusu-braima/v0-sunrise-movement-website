"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

// WhatsApp number for Sunrise Movement Sierra Leone
const WHATSAPP_NUMBER = "23276709191" // Without the + sign

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sunrisemovementsierraleone@gmail.com",
    href: "mailto:sunrisemovementsierraleone@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+232 76 709191 / +232 88 468693",
    href: "tel:+23276709191",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "23 New Gerihun, Unumbu Express, Bo, Sierra Leone",
    href: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Send message via WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const message = `*New Contact Form Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  // Quick WhatsApp contact
  const handleQuickWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in learning more about Sunrise Movement Sierra Leone.`
    window.open(whatsappUrl, "_blank")
  }

  // Google Maps embed URL for Bo, Sierra Leone
  const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.88750567721!2d-11.7476!3d7.9647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0b5e4d8f4a6f9d%3A0x1c3c8a6f8e4d8a0b!2sBo%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/Bo,+Sierra+Leone"

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions, want to partner, or ready to join the movement? 
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
              <p className="text-muted-foreground">
                Reach out to us through any of the following channels or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.label === "Address" ? GOOGLE_MAPS_LINK : info.href}
                  target={info.label === "Address" ? "_blank" : undefined}
                  rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                    {info.label === "Address" && (
                      <p className="text-xs text-primary mt-1">Click to view on Google Maps</p>
                    )}
                  </div>
                </a>
              ))}

              {/* WhatsApp Quick Contact */}
              <button
                onClick={handleQuickWhatsApp}
                className="w-full flex items-start gap-4 p-4 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group border border-[#25D366]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium">Chat with us instantly</p>
                </div>
              </button>
            </div>

            {/* Contact Person */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <p className="text-sm text-muted-foreground mb-1">Contact Person</p>
              <p className="text-xl font-semibold text-foreground">Alicious Bessiama</p>
              <p className="text-muted-foreground">Founder, Sunrise Movement Sierra Leone</p>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <div className="relative">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunrise Movement Sierra Leone Location"
                  className="w-full"
                />
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium text-primary hover:bg-background transition-colors flex items-center gap-2 shadow-md"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Send via WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Your message will open in WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="subject">Subject</FieldLabel>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                </FieldGroup>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Clicking send will open WhatsApp with your pre-filled message
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
