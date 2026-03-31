"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Container from "./layout/container"

export default function Footer() {
  const pathname = usePathname()

  if (pathname === "/" || pathname.startsWith("/contact-us")) {
    return null
  }

  return (
    <footer className="py-20">
      <Container>

        <div className="mt-16 flex justify-between border-t pt-8 text-sm text-gray-400">
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
      </Container>
    </footer>
  )
}
