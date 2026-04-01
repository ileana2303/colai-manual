"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type ContentBlock = {
  title?: string
  items?: string[]
  note?: string
}

type MenuSection = {
  id: string
  title: string
  description: string
  blocks: ContentBlock[]
  media?: {
    type: "image" | "video"
    src: string
    alt?: string
    poster?: string
  }
}

const menuSections: MenuSection[] = [
  {
    id: "arxiki-othoni",
    title: "Αρχική Οθόνη",
    description: "Η αρχική οθόνη παρέχει συνοπτική εικόνα της δραστηριότητάς σας.",
    media: {
      type: "image",
      src: "/menu-demos/arxiki-othoni.jpg",
      alt: "Demo αρχικής οθόνης",
    },
    blocks: [
      {
        items: [
          "Παραγγελίες μήνα: σύνολο παραγγελιών και μεταβολή",
          "Συνταγές επόμενων 10 ημερών: επερχόμενες εκτελέσεις",
          "Ανάλυση παραγγελιών: νέες και επαναλαμβανόμενες",
          "Παραγγελίες και εκκρεμότητες: σύγκριση και εκκρεμείς",
          "Πρόσφατες παραγγελίες: εμφανίζονται οι παραγγελίες των τελευταίων 14 ημερών",
        ],
        note: "Πατήστε το (+) για δημιουργία νέας παραγγελίας.",
      },
    ],
  },
  {
    id: "paraggelies",
    title: "Παραγγελίες",
    description: "Στην οθόνη Παραγγελίες εμφανίζεται η λίστα όλων των καταχωρημένων παραγγελιών.",
    media: {
      type: "video",
      src: "/menu-demos/paraggelies.mp4",
    },
    blocks: [
      {
        title: "Αναζήτηση",
        items: ["ID", "αριθμό συνταγής", "όνομα πελάτη", "ΑΜΚΑ"],
      },
      {
        title: "Πληροφορίες Παραγγελίας",
        items: [
          "Κωδικός παραγγελίας (#)",
          "Τύπος (π.χ. Λιανική, ΕΟΠΥΥ)",
          "Κατηγορία (π.χ. WC)",
          "Όνομα πελάτη και παραλήπτη",
          "Συνολικό ποσό",
          "Αριθμός υλικών",
        ],
      },
      {
        title: "Κατάσταση (Status)",
        items: [
          "Η ένδειξη «Συγχ. με ERP» δείχνει ότι η παραγγελία έχει συγχρονιστεί",
          "Μετά τον συγχρονισμό, η κατάσταση εμφανίζεται με πράσινο χρώμα",
        ],
      },
      {
        title: "Νέα Παραγγελία",
        note: "Πατήστε το (+) για δημιουργία νέας παραγγελίας.",
      },
    ],
  },
  {
    id: "imerologio-wc",
    title: "Ημερολόγιο WC",
    description: "Στην ενότητα WC εμφανίζονται συγκεντρωτικά οι παραγγελίες ανά μήνα.",
    media: {
      type: "video",
      src: "/menu-demos/imerologio-wc.mp4",
      alt: "Demo ημερολογίου WC",
    },
    blocks: [
      {
        title: "Προβολή ανά μήνα",
        items: ["συνολικό ποσό", "αριθμό εγγραφών"],
        note: "Πατήστε σε έναν μήνα για να δείτε αναλυτικά τις εγγραφές.",
      },
      {
        title: "Ανάλυση ανά ημέρα",
        items: [
          "οι ημερομηνίες καταχώρησης",
          "το σύνολο ποσού ανά ημέρα",
          "οι επιμέρους παραγγελίες",
        ],
      },
      {
        title: "Αναζήτηση",
        note: "Μπορείτε να αναζητήσετε εγγραφές μέσω του πεδίου αναζήτησης.",
      },
      {
        title: "Επόμενες 10 ημέρες",
        note: "Επιλέγοντας «Επόμενες 10 ημέρες» προβάλλονται οι σχετικές εγγραφές για το επόμενο χρονικό διάστημα.",
      },
    ],
  },
  {
    id: "aitimata-ekptosis",
    title: "Αιτήματα Έκπτωσης",
    description: "Στην ενότητα Αιτήματα εμφανίζονται τα αιτήματα έκπτωσης που έχουν καταχωρηθεί για παραγγελίες.",
    media: {
      type: "image",
      src: "/menu-demos/aitimata-ekptosis.jpg",
      alt: "Demo αιτημάτων έκπτωσης",
    },
    blocks: [
      {
        title: "Πληροφορίες Αιτήματος",
        items: [
          "Κωδικός παραγγελίας (#)",
          "Τύπος (π.χ. Λιανική, ΕΟΠΥΥ)",
          "Κατηγορία (π.χ. WC)",
          "Όνομα πελάτη",
          "Ποσό παραγγελίας",
        ],
      },
      {
        title: "Κατάσταση Αιτήματος",
        items: [
          "Εγκρίθηκε: το αίτημα έχει εγκριθεί",
          "Αναμονή",
          "Απορρίφθηκε",
        ],
      },
      {
        title: "Αναζήτηση",
        note: "Μπορείτε να αναζητήσετε αίτημα μέσω του πεδίου αναζήτησης.",
      },
      {
        note: "Επιλέγοντας ένα αίτημα, μπορείτε να δείτε περισσότερες λεπτομέρειες.",
      },
    ],
  },
  {
    id: "settings",
    title: "Ρυθμίσεις",
    description: "Στην ενότητα Ρυθμίσεις μπορείτε να διαχειριστείτε βασικές επιλογές της εφαρμογής.",
    media: {
      type: "video",
      src: "/menu-demos/settings.mp4",
      alt: "Demo ρυθμίσεων",
    },
    blocks: [
      {
        title: "Theme",
        items: ["Light", "Dark"],
      },
      {
        title: "Install",
        items: [
          "Android / Chrome: menu -> Install app",
          "iPhone / Safari: Share -> Add to Home Screen",
        ],
      },
      {
        title: "About",
        note: "Εμφανίζεται η έκδοση της εφαρμογής.",
      },
    ],
  },
]

const bottomNavigation = [
  "Αρχική: επιστροφή στο dashboard",
  "Παραγγελίες: λίστα παραγγελιών",
  "WC: διαχείριση σχετικών ενεργειών",
  "Αιτήματα: προβολή αιτημάτων",
  "Ρυθμίσεις: ρυθμίσεις εφαρμογής",
]

function GreenDotHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-3.5 w-3.5 rounded-full bg-[#2FA84F] shadow-[0_0_0_6px_rgba(47,168,79,0.12)]" />
      <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

function SectionMedia({
  media,
  title,
  description,
}: {
  media?: MenuSection["media"]
  title: string
  description: string
}) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [media?.src, media?.type])

  if (!media || hasError) {
    return null
  }

  if (media.type === "video") {
    return (
      <VideoMedia
        src={media.src}
        poster={media.poster}
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <img
      key={media.src}
      src={media.src}
      alt={media.alt ?? title}
      className="h-full w-full object-cover"
      onError={() => setHasError(true)}
    />
  )
}

function VideoMedia({
  src,
  poster,
  onError,
}: {
  src: string
  poster?: string
  onError: () => void
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)

  const playFromStart = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.currentTime = 0
    setHasStarted(true)
    setHasEnded(false)
    void video.play()
  }

  return (
    <div className="relative h-full w-full bg-black">
      <video
        key={src}
        ref={videoRef}
        muted
        playsInline
        poster={poster}
        className="menu-preview-video h-full w-full bg-black object-cover"
        onEnded={() => setHasEnded(true)}
        onPlay={() => {
          setHasStarted(true)
          setHasEnded(false)
        }}
        onError={onError}
      >
        <source src={src} />
      </video>

      {!hasStarted || hasEnded ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/38">
          <button
            type="button"
            aria-label="Play video"
            onClick={playFromStart}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/28 text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:bg-white/36"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="ml-1 h-8 w-8 fill-current"
            >
              <path d="M8 6.5v11l9-5.5-9-5.5Z" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  )
}

function PhoneFrame({
  title,
  description,
  media,
  large = false,
}: {
  title: string
  description: string
  media?: MenuSection["media"]
  large?: boolean
}) {
  return (
    <div className={`mx-auto w-full ${large ? "max-w-[26rem]" : "max-w-none"}`}>
      <div className="rounded-[3rem] bg-[#151515] p-[0.45rem] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
        <div className="relative overflow-hidden rounded-[2.55rem] border border-white/10 bg-[#111111]">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/85" />
          <div className="pointer-events-none absolute inset-[0.35rem] rounded-[2.2rem] border border-white/10" />
          <div className="aspect-[390/844] overflow-hidden">
            <SectionMedia media={media} title={title} description={description} />
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoPlaceholder({
  title,
  description,
  media,
  onOpen,
}: {
  title: string
  description: string
  media?: MenuSection["media"]
  onOpen: () => void
}) {
  return (
    <aside className="lg:sticky lg:top-24">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full rounded-[1.75rem] p-0 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2FA84F]/30"
      >
        <PhoneFrame title={title} description={description} media={media} />
      </button>
    </aside>
  )
}

export default function MenuPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  const [activeNavSectionId, setActiveNavSectionId] = useState(menuSections[0]?.id ?? "")

  const activeSection =
    menuSections.find((section) => section.id === activeSectionId) ?? null

  useEffect(() => {
    const sectionElements = menuSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null)

    if (!sectionElements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveNavSectionId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!activeSection) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSectionId(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection])

  return (
    <>
      <main className="flex-1 bg-[radial-gradient(circle_at_top,rgba(47,168,79,0.08),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#FFFAF0_100%)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <section className="grid gap-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:p-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2F6F3E]">
                Ανάλυση Menu
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Περιήγηση στις βασικές ενότητες της εφαρμογής
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/[0.68] sm:text-lg">
                Η σελίδα αυτή συγκεντρώνει τις βασικές πληροφορίες του menu, ώστε να
                εντοπίζετε γρήγορα τις κύριες οθόνες, τα φίλτρα αναζήτησης και τις
                διαθέσιμες ενέργειες.
              </p>

            </div>

            <a
              href="https://mobileapp.amsaworks.gr/"
              className="relative flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-[rgba(47,168,79,0.18)] bg-[linear-gradient(160deg,rgba(47,168,79,0.18),rgba(255,255,255,0.88)_58%,rgba(248,242,227,0.96)_100%)] p-8 transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2FA84F]/30"
            >
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/70" />
              <div className="relative flex w-full max-w-xs flex-col items-center rounded-[1.75rem] border border-black/10 bg-white/[0.85] px-6 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src="/logo.png"
                  alt="Colai Manual"
                  width={112}
                  height={112}
                  priority
                  className="h-24 w-24 rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
                />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#2F6F3E]">
                  Quick Access :: Colai APP
                </p>
                <p className="mt-3 text-sm leading-6 text-black/[0.65]">
                  Μετάβαση στην εφαρμογή. Θα χρειαστεί να συνδεθείτε στο λογαριασμό σας.
                </p>
              </div>
            </a>
          </section>

          <nav className="sticky top-4 z-30 rounded-full border border-black/10 bg-white px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6">
            <div className="flex items-center gap-4 pb-1">
              <span className="shrink-0 rounded-full bg-[#244131] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFAF0]">
                Menu Nav
              </span>
              <div className="flex flex-1 items-center justify-center gap-3 overflow-x-auto">
                {menuSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={activeNavSectionId === section.id ? "true" : undefined}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium text-[#225E34] transition ${activeNavSectionId === section.id
                      ? "border-[#2FA84F]/40 bg-[rgba(47,168,79,0.14)]"
                      : "border-[#2FA84F]/20 bg-[rgba(47,168,79,0.08)] hover:border-[#2FA84F]/40 hover:bg-[rgba(47,168,79,0.14)]"
                      }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="grid gap-6">
            {menuSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10"
              >
                <GreenDotHeading title={section.title} />
                <p className="mt-5 max-w-3xl text-base leading-7 text-black/70">
                  {section.description}
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-start">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.blocks.map((block, index) => (
                      <article
                        key={`${section.id}-${index}`}
                        className="rounded-[1.5rem] border border-[rgba(0,0,0,0.08)] bg-[#fffaf4] p-5"
                      >
                        {block.title ? (
                          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60">
                            {block.title}
                          </h3>
                        ) : null}

                        {block.items?.length ? (
                          <ul className="mt-4 space-y-2 text-sm leading-6 text-black/[0.72] sm:text-[15px]">
                            {block.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2FA84F]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {block.note ? (
                          <p className="mt-4 text-sm font-medium leading-6 text-[#225E34] sm:text-[15px]">
                            {block.note}
                          </p>
                        ) : null}
                      </article>
                    ))}
                  </div>

                  <DemoPlaceholder
                    title={section.title}
                    description={section.description}
                    media={section.media}
                    onOpen={() => setActiveSectionId(section.id)}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {activeSection ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
          onClick={() => setActiveSectionId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#fffdf8_0%,#f7efdf_100%)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.28)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveSectionId(null)}
              className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/60 transition hover:bg-white"
            >
              Close
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2F6F3E]">
              Demo Modal
            </p>
            <h2
              id="demo-modal-title"
              className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {activeSection.title}
            </h2>

            <div className="mt-8">
              <PhoneFrame
                title={activeSection.title}
                description={activeSection.description}
                media={activeSection.media}
                large
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
