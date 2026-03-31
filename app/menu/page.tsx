import Image from "next/image"

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
}

const menuSections: MenuSection[] = [
  {
    id: "arxiki-othoni",
    title: "Αρχική Οθόνη",
    description: "Η αρχική οθόνη παρέχει συνοπτική εικόνα της δραστηριότητάς σας.",
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
    id: "rithmiseis",
    title: "Ρυθμίσεις",
    description: "Στην ενότητα Ρυθμίσεις μπορείτε να διαχειριστείτε βασικές επιλογές της εφαρμογής.",
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

export default function MenuPage() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,rgba(47,168,79,0.08),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#f8f2e3_100%)]">
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

            <div className="mt-8 flex flex-wrap gap-3">
              {menuSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-[#2FA84F]/20 bg-[rgba(47,168,79,0.08)] px-4 py-2 text-sm font-medium text-[#225E34] transition hover:border-[#2FA84F]/40 hover:bg-[rgba(47,168,79,0.14)]"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-[rgba(47,168,79,0.18)] bg-[linear-gradient(160deg,rgba(47,168,79,0.18),rgba(255,255,255,0.88)_58%,rgba(248,242,227,0.96)_100%)] p-8">
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
                Quick Access
              </p>
              <p className="mt-3 text-sm leading-6 text-black/[0.65]">
                Αναφορά για dashboard, παραγγελίες, ημερολόγιο WC, αιτήματα και ρυθμίσεις.
              </p>
            </div>
          </div>
        </section>

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

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
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
            </section>
          ))}
        </div>

        <section className="rounded-[2rem] border border-black/10 bg-black px-8 py-9 text-[#FFFAF0] shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Κάτω Μενού Πλοήγησης
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[rgba(255,250,240,0.72)] sm:text-base">
            Από το κάτω μενού μπορείτε να μεταβείτε γρήγορα στις βασικές οθόνες της εφαρμογής.
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-[rgba(255,250,240,0.88)] sm:grid-cols-2 sm:text-[15px]">
            {bottomNavigation.map((item) => (
              <li
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
