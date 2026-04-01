"use client"

import { motion } from "framer-motion"
import Section from "./layout/section"
import Container from "./layout/container"

export default function Hero() {
  return (
    <Section className="relative flex h-full min-h-full items-center !pt-16 !pb-6 md:!pt-20 md:!pb-8">
      <Container className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Colai - Manual <br />
          Get started

        </motion.h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
          Οδηγός χρήσης για την πλατφόρμα Colai, με οδηγίες βήμα προς βήμα για την εγκατάσταση, ρύθμιση και χρήση των βασικών λειτουργιών της πλατφόρμας. Είτε είστε νέος χρήστης είτε έμπειρος, αυτός ο οδηγός θα σας βοηθήσει να αξιοποιήσετε στο έπακρο τις δυνατότητες του Colai.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/menu"
            className="px-8 py-4 rounded-full border-2 border-[#27BDAE] 
text-white flex items-center gap-2

bg-[linear-gradient(to_top,#27BDAE_50%,#FFFAF0_50%)]
bg-[length:100%_220%] bg-[position:0_100%]

transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-black"
          >
            Ανάλυση Menu
          </a>

          <a
            href="/create-order"
            className="px-8 py-4 rounded-full border-2 border-[#27BDAE] 
text-black flex items-center gap-2

bg-[linear-gradient(to_top,#FFFAF0_50%,#27BDAE_50%)]
bg-[length:100%_220%] bg-[position:0_100%]

transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-white"
          >
            Δημιουργία Νέας Παραγγελίας
          </a>
        </div>

      </Container>

    </Section>
  )
}
