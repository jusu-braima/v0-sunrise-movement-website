"use client"

import { useState } from "react"
import { Heart, TreePine, GraduationCap, Zap, CheckCircle2, CreditCard, ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import dynamic from "next/dynamic"

// Dynamic import for Stripe checkout to avoid SSR issues
const Checkout = dynamic(() => import("@/components/checkout"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <span className="ml-3 text-muted-foreground">Loading payment...</span>
    </div>
  )
})

const impactAreas = [
  {
    icon: TreePine,
    amount: 25,
    impact: "Plants 10 trees in community reforestation projects",
    productId: "donate-25",
  },
  {
    icon: GraduationCap,
    amount: 50,
    impact: "Trains 1 youth in climate leadership skills",
    productId: "donate-50",
  },
  {
    icon: Zap,
    amount: 100,
    impact: "Provides clean energy access to 1 household",
    productId: "donate-100",
  },
  {
    icon: Heart,
    amount: 250,
    impact: "Supports a full community climate workshop",
    productId: "donate-250",
  },
]

const donationAmounts = [
  { amount: 25, productId: "donate-25" },
  { amount: 50, productId: "donate-50" },
  { amount: 100, productId: "donate-100" },
  { amount: 250, productId: "donate-250" },
  { amount: 500, productId: "donate-500" },
]

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50)
  const [selectedProductId, setSelectedProductId] = useState<string>("donate-50")
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [showCheckout, setShowCheckout] = useState(false)

  const handleAmountClick = (amount: number, productId: string) => {
    setSelectedAmount(amount)
    setSelectedProductId(productId)
  }

  const handleProceedToCheckout = () => {
    if (selectedAmount > 0 && selectedProductId) {
      setShowCheckout(true)
    }
  }

  return (
    <section id="donate" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <AnimateOnScroll animation="slide-left" className="space-y-8">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Support Our Mission</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                Your Donation Powers Change
              </h2>
              <p className="text-lg text-muted-foreground">
                Every contribution directly supports youth empowerment, environmental restoration,
                and climate resilience programs across Sierra Leone. Together, we can build a greener tomorrow.
              </p>
            </div>

            {/* Impact Areas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Your Impact</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {impactAreas.map((area) => (
                  <div
                    key={area.amount}
                    onClick={() => handleAmountClick(area.amount, area.productId)}
                    className={`flex items-start gap-3 p-4 bg-card rounded-xl border cursor-pointer transition-all duration-300 ${selectedAmount === area.amount
                        ? "border-primary shadow-md bg-primary/5"
                        : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${selectedAmount === area.amount ? "bg-primary text-primary-foreground" : "bg-primary/10"
                      }`}>
                      <area.icon className={`h-5 w-5 ${selectedAmount === area.amount ? "" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">${area.amount}</p>
                      <p className="text-sm text-muted-foreground">{area.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Donation Form / Stripe Checkout */}
          <AnimateOnScroll animation="slide-right" delay={200}>
            <Card className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                {showCheckout ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowCheckout(false)}
                        className="hover:bg-primary/10"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Complete Your Donation</h3>
                        <p className="text-sm text-muted-foreground">${selectedAmount} {donationType} donation</p>
                      </div>
                    </div>

                    {/* Stripe Embedded Checkout */}
                    <div className="min-h-[400px]">
                      <Checkout productId={selectedProductId} />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Make a Donation</h3>

                    {/* Amount Selection */}
                    <div className="space-y-4 mb-8">
                      <label className="text-sm font-medium text-foreground">Select Amount (USD)</label>
                      <div className="grid grid-cols-3 gap-3">
                        {donationAmounts.map((item) => (
                          <button
                            key={item.amount}
                            onClick={() => handleAmountClick(item.amount, item.productId)}
                            className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${selectedAmount === item.amount
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50 text-foreground"
                              }`}
                          >
                            ${item.amount}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Donation Type */}
                    <div className="space-y-4 mb-8">
                      <label className="text-sm font-medium text-foreground">Donation Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setDonationType("one-time")}
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${donationType === "one-time"
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50 text-foreground"
                            }`}
                        >
                          One-Time
                        </button>
                        <button
                          onClick={() => setDonationType("monthly")}
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${donationType === "monthly"
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50 text-foreground"
                            }`}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Proceed to Checkout */}
                    <Button
                      size="lg"
                      className="w-full text-lg py-6 group"
                      onClick={handleProceedToCheckout}
                    >
                      <CreditCard className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Donate ${selectedAmount} with Stripe
                    </Button>

                    <div className="flex items-center justify-center gap-2 mt-4">
                      <svg className="h-5 w-auto" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 20.5L15 16L13.5 11.5H18.5L17 16L18.5 20.5H13.5Z" fill="currentColor" className="text-muted-foreground" />
                      </svg>
                      <p className="text-xs text-muted-foreground">
                      </p>
                    </div>

                    {/* QR Code Section */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm font-medium text-foreground text-center mb-4">Or scan to donate</p>
                      <div className="flex justify-center">
                        <a
                          href="https://donate.stripe.com/test_bIYdU22iD8bMfLOdQR"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block transition-transform hover:scale-105"
                        >
                          <img
                            src="/images/donation-qr.png"
                            alt="Scan QR code to donate via Stripe"
                            className="w-48 h-48 rounded-xl shadow-lg"
                          />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
