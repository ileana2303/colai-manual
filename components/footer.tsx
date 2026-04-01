"use client"

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
        <div className="flex flex-col gap-3 border-t border-black/10 py-6 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
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
