"use client"

import { useState, useEffect } from "react"

interface SlidingTextProps {
  texts: string[]
  className?: string
}

export function SlidingText({ texts, className = "" }: SlidingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 400)
    }, 2500)

    return () => clearInterval(interval)
  }, [texts.length])

  const currentText = texts[currentIndex]
  const valveType = currentText.replace(" Valve", "")

  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
      } ${className}`}
    >
      <div className="flex flex-col items-center relative bg-slate-900/70 backdrop-blur-sm rounded-xl p-4">
        <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white drop-shadow-2xl">
          {valveType}
        </div>
        <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-300 mt-1 tracking-wider drop-shadow-lg">
          VALVE
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>
      </div>
    </div>
  )
}
