"use client"

import { useState, useEffect } from "react"

const texts = [
  "Sell for Free, Pay Only When You Earn",
  "Instant Payouts, Full Control, No Limits",
  "Buy Once, Download Anytime, Keep Forever",
  "Discover, Buy, and Sell Digital Products",
]

export function TypewriterText() {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 6000)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setTextIndex((textIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [charIndex, textIndex, isDeleting])

  return (
    <h1 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-[#1E1E1E] mb-6 md:min-h-28 min-h-18">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  )
}
