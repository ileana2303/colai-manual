"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Section from "./layout/section"
import Container from "./layout/container"

const appDownloadButtons = [
  {
    href: "https://apps.apple.com/us/app/colai/id6764851329",
    src: "/download-badges/apple-store.png",
    alt: "Download on the App Store",
    width: 120,
    height: 40,
  },
  {
    href: "https://play.google.com/store/apps/details?id=pro.colai.mobile",
    src: "/download-badges/google-play-dark.png",
    alt: "Get it on Google Play",
    width: 120,
    height: 40,
  },
]

export default function Hero() {
  return (
    <Section className="relative flex min-h-full items-center !pt-12 !pb-8 md:h-full md:!pt-20">
      <Container className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          Colai - Manual <br />
          Get started

        </motion.h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="/menu"
            className="px-8 py-4 rounded-full border-2 border-[#27BDAE] 
text-white flex items-center justify-center gap-2 text-center

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
text-black flex items-center justify-center gap-2 text-center

bg-[linear-gradient(to_top,#FFFAF0_50%,#27BDAE_50%)]
bg-[length:100%_220%] bg-[position:0_100%]

transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-white"
          >
            Δημιουργία Νέας Παραγγελίας
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-sm text-gray-500 sm:text-base">
          Οδηγός χρήσης για την πλατφόρμα Colai, με οδηγίες βήμα προς βήμα για την εγκατάσταση, ρύθμιση και χρήση των βασικών λειτουργιών της πλατφόρμας. Είτε είστε νέος χρήστης είτε έμπειρος, αυτός ο οδηγός θα σας βοηθήσει να αξιοποιήσετε στο έπακρο τις δυνατότητες του Colai.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 sm:text-xl">
          Κατεβάστε την εφαρμογή στο κινητό σας:
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {appDownloadButtons.map((button) => (
            <a
              key={button.href}
              href={button.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#27BDAE]/35"
            >
              <Image
                src={button.src}
                alt={button.alt}
                width={button.width}
                height={button.height}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </a>
          ))}
        </div>



      </Container>

    </Section>
  )
}
