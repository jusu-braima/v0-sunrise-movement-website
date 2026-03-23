"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "23276709191"

export function WhatsAppFloat() {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in joining and learning more about Sunrise Movement Sierra Leone.`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-sm hidden sm:inline">Join the Movement</span>
      
      {/* Ping animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  )
}
