"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Container from "./layout/container"

export default function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith("/contact-us")) {
    return null
  }

  return (
    <footer className="py-20">
      <Container>
        <div className="pt-20">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="BIAIS Logo"
                width={45}
                height={45}
                priority
              />
              <span className="text-lg font-bold">BIAIS</span>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="transition hover:text-black">AI Systems</li>
                <li className="transition hover:text-black">Backend Platforms</li>
                <li className="transition hover:text-black">Web Applications</li>
                <li className="transition hover:text-black">Mobile Apps</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="transition hover:text-black">About</li>
                <li className="transition hover:text-black">Work</li>
                <li className="transition hover:text-black">Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="transition hover:text-black">LinkedIn</li>
                <li className="transition hover:text-black">GitHub</li>
                <li className="transition hover:text-black">
                  info@nostosenteprises.com
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-between border-t pt-8 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} BIAIS</span>
            <span>Building intelligent digital products</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
