"use client"

import { useState } from "react"
import { Heart, TreePine, GraduationCap, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const impactAreas = [
  {
    icon: TreePine,
    amount: 25,
    impact: "Plants 10 trees in community reforestation projects",
  },
  {
    icon: GraduationCap,
    amount: 50,
    impact: "Trains 1 youth in climate leadership skills",
  },
  {
    icon: Zap,
    amount: 100,
    impact: "Provides clean energy access to 1 household",
  },
  {
    icon: Heart,
    amount: 250,
    impact: "Supports a full community climate workshop",
  },
]

const donationAmounts = [25, 50, 100, 250, 500]

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(value)
    if (value) {
      setSelectedAmount(0)
    }
  }

  const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount

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
                {impactAreas.map((area, index) => (
                  <div key={area.amount} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <area.icon className="h-5 w-5 text-primary" />
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

          {/* Donation Form */}
          <AnimateOnScroll animation="slide-right" delay={200}>
          <Card className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Make a Donation</h3>
              
              {/* Amount Selection */}
              <div className="space-y-4 mb-8">
                <label className="text-sm font-medium text-foreground">Select Amount (USD)</label>
                <div className="grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountClick(amount)}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount && !customAmount
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                  <div className="col-span-3">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                      <input
                        type="text"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full py-3 pl-8 pr-4 rounded-lg border-2 border-border focus:border-primary focus:outline-none bg-background text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Type */}
              <div className="space-y-4 mb-8">
                <label className="text-sm font-medium text-foreground">Donation Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 rounded-lg border-2 border-primary bg-primary text-primary-foreground font-semibold">
                    One-Time
                  </button>
                  <button className="py-3 px-4 rounded-lg border-2 border-border hover:border-primary/50 text-foreground font-semibold transition-colors">
                    Monthly
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button size="lg" className="w-full text-lg py-6">
                <Heart className="mr-2 h-5 w-5" />
                Donate {finalAmount > 0 ? `$${finalAmount}` : ""}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure payment processing. Your donation may be tax-deductible.
              </p>
            </CardContent>
          </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
