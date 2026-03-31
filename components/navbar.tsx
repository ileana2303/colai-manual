"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type NavSubItem = {
  href: string
  label: string
}

type NavLink = {
  href: string
  label: string
  description: string
  subItems?: NavSubItem[]
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", description: "App Guide" },
  {
    href: "/menu",
    label: "Menu",
    description: "Ανάλυση",
    subItems: [
      { href: "/menu#arxiki-othoni", label: "Αρχική Οθόνη" },
      { href: "/menu#paraggelies", label: "Παραγγελίες" },
      { href: "/menu#imerologio-wc", label: "Ημερολόγιο WC" },
      { href: "/menu#aitimata-ekptosis", label: "Αιτήματα Έκπτωσης" },
      { href: "/menu#rithmiseis", label: "Ρυθμίσεις" },
    ],
  },
  {
    href: "/create-order",
    label: "Δημιουργία Νέας Παραγγελίας",
    description: "Workflow",
    subItems: [
      { href: "/create-order#gnomatefseis", label: "Γνωματεύσεις" },
      { href: "/create-order#aftomati-symplirosi-asthenis", label: "Αυτόματη Συμπλήρωση - Ασθενής" },
      { href: "/create-order#stoixeia-iatrou", label: "Στοιχεία Ιατρού" },
      { href: "/create-order#stoixeia-syntagis", label: "Στοιχεία Συνταγής" },
      { href: "/create-order#ylika", label: "Υλικά" },
      { href: "/create-order#plafon", label: "Πλαφόν" },
      { href: "/create-order#symmetoxi", label: "Συμμετοχή" },
      { href: "/create-order#synaineis", label: "Συναίνεση" },
      { href: "/create-order#touchdown", label: "Touchdown" },
      { href: "/create-order#ektos-eopyy", label: "Παραγγελία Εκτός ΕΟΠΥΥ" },
      { href: "/create-order#apothikefsi-paraggelias", label: "Αποθήκευση Παραγγελίας" },
      { href: "/create-order#xrisimes-symvoules", label: "Χρήσιμες Συμβουλές" },
    ],
  },
]

function getNavLinkClassName(isActive: boolean) {
  return `group flex items-center justify-between rounded-[1.5rem] px-4 py-3 text-left transition ${isActive
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

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const navContent = (
    <>
      <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
        <Image
          src="/logo.png"
          alt="Colai Logo"
          width={52}
          height={52}
          priority
          className="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 p-1.5"
        />
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
            Manual
          </p>
          <span className="block truncate text-2xl font-bold tracking-tight">
            Colai App
          </span>
        </div>
      </Link>

      <div className="mt-10 rounded-[2rem] p-3">
    
        <nav className="mt-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href)

            return (
              <div key={link.href} className="space-y-2">
                <Link
                  href={link.href}
                  className={getNavLinkClassName(isActive)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  <span className="text-base font-semibold">{link.label}</span>
                  <span
                    className={`text-xs uppercase tracking-[0.18em] ${isActive ? "text-[#FFFAF0]/72" : "text-black/35"
                      }`}
                  >
                    {link.description}
                  </span>
                </Link>

                {link.subItems?.length ? (
                  <div className="ml-4 flex flex-col gap-1 border-l border-black/10 pl-4">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="rounded-2xl px-3 py-2 text-sm text-black/60 transition hover:bg-black/5 hover:text-black"
                        onClick={closeMobileMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>
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
              alt="Colai Logo"
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
                className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
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
