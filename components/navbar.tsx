"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/", label: "Home", description: "Overview" },
  { href: "/#techorbit", label: "Ecosystem", description: "Technology stack" },
  { href: "/#services", label: "Services", description: "What we build" },
  { href: "/#projects", label: "Works", description: "Selected projects" },
  { href: "/contact-us", label: "Contact", description: "Start a conversation" },
]

function getNavLinkClassName(isActive: boolean) {
  return `group flex items-center justify-between rounded-[1.5rem] px-4 py-3 text-left transition ${
    isActive
      ? "bg-black text-[#FFFAF0] shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
      : "text-black/72 hover:bg-black/5 hover:text-black"
  }`
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isContactPage = pathname.startsWith("/contact-us")
  const cta = isContactPage
    ? { href: "/", label: "Back To Home" }
    : { href: "/contact-us", label: "Start Your Project" }

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }

    if (href === "/contact-us") {
      return isContactPage
    }

    return false
  }

  const navContent = (
    <>
      <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
        <Image
          src="/logo.png"
          alt="BIAIS Logo"
          width={52}
          height={52}
          priority
          className="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 p-1.5"
        />
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
            Product Studio
          </p>
          <span className="block truncate text-2xl font-bold tracking-tight">
            Colai Manual
          </span>
        </div>
      </Link>

      <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/40 p-3">
        <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
          Navigation
        </p>

        <nav className="mt-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={getNavLinkClassName(isActive)}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                <span className="text-base font-semibold">{link.label}</span>
                <span
                  className={`text-xs uppercase tracking-[0.18em] ${
                    isActive ? "text-[#FFFAF0]/72" : "text-black/35"
                  }`}
                >
                  {link.description}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto rounded-[2rem] bg-black px-5 py-6 text-[#FFFAF0] shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFFAF0]/55">
          Let&apos;s Build
        </p>
        <p className="mt-3 text-sm leading-6 text-[#FFFAF0]/72">
          AI systems, backend platforms, and product delivery from one team.
        </p>
        <Link
          href={cta.href}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#FFFAF0]/25 bg-[#FFFAF0] px-4 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-[#FFFAF0]"
          onClick={closeMobileMenu}
        >
          {cta.label}
        </Link>
      </div>
    </>
  )

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FFFAF0]/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="BIAIS Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-2xl border border-black/10 bg-white/70 p-1"
            />
            <span className="truncate text-xl font-bold tracking-tight">
              Colai Manual
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black/5"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <aside className="hidden border-r border-black/10 bg-[#F6EEDB] lg:flex lg:w-[18rem] lg:shrink-0 xl:w-[19.5rem]">
        <div className="sticky top-0 flex h-screen w-full flex-col px-5 py-7 xl:px-6 xl:py-8">
          {navContent}
        </div>
      </aside>

      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          />

          <div
            id="mobile-navigation"
            className="fixed inset-y-0 left-0 z-50 flex w-[19rem] max-w-[calc(100vw-1.5rem)] flex-col border-r border-black/10 bg-[#F6EEDB] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.18)] lg:hidden"
          >
            {navContent}
          </div>
        </>
      ) : null}
    </>
  )
}
