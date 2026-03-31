"use client"

import { motion } from "framer-motion"

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      <svg className="absolute h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="gray" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"], y: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-purple-500/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ x: ["20%", "-20%", "20%"], y: ["10%", "-10%", "10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full"
      />
    </div>
  )
}
