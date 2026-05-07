"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  variant?: "default" | "particles" | "gradient" | "waves"
  className?: string
}

export function AnimatedBackground({ variant = "default", className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const colors = [
      "rgba(13, 148, 136, 0.3)", // teal
      "rgba(34, 197, 94, 0.25)", // green
      "rgba(16, 185, 129, 0.2)", // emerald
      "rgba(6, 182, 212, 0.2)", // cyan
    ]

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw floating gradient orbs
      particles.forEach((particle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 10
        )
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size * 10, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50
      })

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(13, 148, 136, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() * 0.001

      // Draw multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height * 0.7 +
            Math.sin(x * 0.005 + time + layer) * 30 +
            Math.sin(x * 0.01 + time * 1.5 + layer) * 20 +
            layer * 40

          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height)
        gradient.addColorStop(0, `rgba(13, 148, 136, ${0.1 - layer * 0.02})`)
        gradient.addColorStop(1, `rgba(16, 185, 129, ${0.05 - layer * 0.01})`)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(drawWaves)
    }

    const drawGradient = () => {
      const time = Date.now() * 0.0005

      // Animated gradient background
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + Math.sin(time) * 0.3),
        0,
        canvas.width * (0.5 + Math.cos(time) * 0.3),
        canvas.height
      )
      
      gradient.addColorStop(0, "rgba(13, 148, 136, 0.1)")
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.08)")
      gradient.addColorStop(1, "rgba(6, 182, 212, 0.1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add floating circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + 0.6 * ((i / 5 + time * 0.1) % 1))
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.2)
        const size = 100 + Math.sin(time * 2 + i) * 30

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, size)
        circleGradient.addColorStop(0, "rgba(13, 148, 136, 0.15)")
        circleGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.fillStyle = circleGradient
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(drawGradient)
    }

    resize()
    window.addEventListener("resize", resize)

    if (variant === "particles") {
      initParticles()
      drawParticles()
    } else if (variant === "waves") {
      drawWaves()
    } else if (variant === "gradient") {
      drawGradient()
    } else {
      initParticles()
      drawParticles()
    }

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
