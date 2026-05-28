"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { BookOpenText } from "lucide-react"

type NavSubItem = {
  href: string
  label: string
}

type NavSubItemSection = {
  label?: string
  numbered?: boolean
  tone?: "blue" | "teal"
  items: NavSubItem[]
}

type NavLink = {
  href: string
  label: string
  description: string
  subItems?: NavSubItem[]
  subItemSections?: NavSubItemSection[]
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
    label: "New Order",
    description: "Workflow",
    subItemSections: [
      {
        label: "Παραγγελίες ΕΟΠΥΥ",
        numbered: true,
        items: [
          { href: "/create-order#gnomatefseis", label: "Γνωματεύσεις" },
          { href: "/create-order#aftomati-symplirosi-asthenis", label: "Στοιχεία Ασθενή" },
          { href: "/create-order#stoixeia-iatrou", label: "Στοιχεία Ιατρού" },
          { href: "/create-order#stoixeia-syntagis", label: "Στοιχεία Συνταγής" },
          { href: "/create-order#ylika", label: "Υλικά" },
          { href: "/create-order#symmetoxi", label: "Συμμετοχή" },
          { href: "/create-order#synaineis", label: "Συναίνεση" },
          { href: "/create-order#touchdown", label: "Touchdown" },
        ],
      },
      {
        label: "Εκτός ΕΟΠΥΥ",
        tone: "teal",
        items: [
          { href: "/create-order#ektos-eopyy", label: "Παραγγελία Εκτός ΕΟΠΥΥ" },
          { href: "/create-order#apothikefsi-paraggelias", label: "Αποθήκευση Παραγγελίας" },
          { href: "/create-order#xrisimes-symvoules", label: "Χρήσιμες Συμβουλές" },
        ],
      },
    ],
  },
]

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

function getNavLinkClassName(isActive: boolean) {
  return `group flex items-center justify-between rounded-[1.5rem] px-4 py-3 text-left transition ${isActive
    ? "bg-black text-[#FFFAF0] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
    : "text-black/72 hover:bg-black/5 hover:text-black"
    }`
}

function getNavSubItemSections(link: NavLink) {
  if (link.subItemSections?.length) {
    return link.subItemSections
  }

  if (link.subItems?.length) {
    return [{ items: link.subItems }]
  }

  return []
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const navContent = (
    <div className="flex h-full min-h-0 flex-col">
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

      <div className="mt-8 flex min-h-0 flex-1 flex-col rounded-[2rem] p-2 sm:p-3">
        <nav className="subtle-scrollbar mt-3 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href)
            const subItemSections = getNavSubItemSections(link)

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

                {subItemSections.length ? (
                  <div className="ml-4 flex flex-col gap-3 border-l border-black/10 pl-4">
                    {subItemSections.map((section, sectionIndex) => {
                      const sectionClassName = section.label
                        ? section.tone === "teal"
                          ? "border-[#27BDAE]/30 bg-[#27BDAE]/[0.08]"
                          : "border-[#2C7BE5]/15 bg-white/45"
                        : "border-transparent"
                      const sectionHeadingClassName = section.tone === "teal"
                        ? "text-[#087F73]"
                        : "text-[#1F5FAF]"

                      return (
                        <div
                          key={section.label ?? `${link.href}-section-${sectionIndex}`}
                          className={`rounded-[1.25rem] border p-1.5 ${sectionClassName}`}
                        >
                          {section.label ? (
                            <p className={`px-2 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${sectionHeadingClassName}`}>
                              {section.label}
                            </p>
                          ) : null}

                          <div className="flex flex-col gap-1">
                            {section.items.map((subItem, subItemIndex) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="inline-flex items-start gap-2 rounded-2xl px-3 py-2 text-sm text-black/60 transition hover:bg-black/5 hover:text-black"
                                onClick={closeMobileMenu}
                              >
                                {section.numbered ? (
                                  <span className="mt-0.5 inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white/70 px-1.5 text-[11px] font-semibold tabular-nums text-black/55">
                                    {subItemIndex + 1}
                                  </span>
                                ) : null}
                                <span>{subItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>

        <a
          href="https://docs.google.com/document/d/1lsCNwR1qWo6IUosid1MpQjKDl-WX-O-3MtNq1dEDko0/edit?tab=t.0#heading=h.llaqkqnew5ai"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#27BDAE] bg-transparent px-4 py-3 text-sm font-semibold text-black transition hover:border-[#27BDAE] hover:bg-[#27BDAE] hover:text-white"
          onClick={closeMobileMenu}
        >
          <BookOpenText aria-hidden="true" className="h-4 w-4" />
          Open Docs
        </a>

        <div className="mt-3 flex w-full items-center justify-center gap-1.5 lg:gap-2">
          {appDownloadButtons.map((button) => (
            <a
              key={button.href}
              href={button.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-0 flex-1 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#27BDAE]/35"
              onClick={closeMobileMenu}
            >
              <Image
                src={button.src}
                alt={button.alt}
                width={button.width}
                height={button.height}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FFFAF0] md:hidden">
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

      <aside className="hidden border-r border-black/10 bg-[#FFFAF0] md:flex md:min-h-dvh md:w-[15.5rem] md:shrink-0 lg:w-[18rem] xl:w-[19.5rem]">
        <div className="sticky top-0 flex h-dvh w-full flex-col px-4 py-6 md:px-4 lg:px-5 lg:py-7 xl:px-6 xl:py-8">
          {navContent}
        </div>
      </aside>

      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          />

          <div
            id="mobile-navigation"
            className="fixed inset-y-0 left-0 z-50 flex h-dvh w-full max-w-[22rem] flex-col border-r border-black/10 bg-[#FFFAF0] p-4 shadow-[0_24px_64px_rgba(0,0,0,0.18)] sm:max-w-[24rem] sm:p-5 md:hidden"
          >
            {navContent}
          </div>
        </>
      ) : null}
    </>
  )
}
