"use client"

import { Apple, Play } from "lucide-react"
import { usePathname } from "next/navigation"
import Container from "./layout/container"

export default function Footer() {
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-5 py-6 text-sm text-black/55 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              © {new Date().getFullYear()}{" "}
              Colai. All rights reserved.
            </span>
            <span>
              {" "}Developed by{" "}
              <a href="https://biaisys.com/" className="transition hover:text-black">
                BIAIS
              </a>
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              Download Colai
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://apps.apple.com/es/app/colai/id6764851329?l=en-GB"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold text-black transition hover:border-black hover:bg-black hover:text-[#FFFAF0]"
              >
                <Apple aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=pro.colai.mobile"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border border-[#27BDAE]/55 px-3 py-1.5 text-xs font-semibold text-[#1C8F85] transition hover:border-[#27BDAE] hover:bg-[#27BDAE] hover:text-white"
              >
                <Play aria-hidden="true" className="h-3.5 w-3.5 shrink-0 fill-current" />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
