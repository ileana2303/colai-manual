"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
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
              Download Colai APP :
            </span>
            <div className="flex flex-wrap items-center gap-2">
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
                    className="h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
