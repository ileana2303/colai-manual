import Image from "next/image"

type DetailBlock = {
  title?: string
  items?: string[]
  note?: string
}

type IntroStep = {
  step: string
  title: string
  description?: string
  items?: string[]
}

type OrderStep = {
  id: string
  step: string
  title: string
  description?: string
  blocks: DetailBlock[]
}

const introSteps: IntroStep[] = [
  {
    step: "Βήμα 1",
    title: "Είσοδος",
    description: "Από την αρχική σελίδα επιλέξτε:",
    items: ["Δημιουργία Νέας Παραγγελίας"],
  },
  {
    step: "Βήμα 2",
    title: "Επιλογή Κατηγορίας Προϊόντων",
    description: "Επιλέξτε την κατηγορία που ανήκουν τα προϊόντα:",
    items: ["WC", "IC", "OC", "CC", "ABBOTT", "ATOS", "AMOENA", "MEDTRONIC"],
  },
  {
    step: "Βήμα 3",
    title: "Επιλογή Ασφαλιστικού Φορέα",
    description: "Επιλέξτε μία από τις παρακάτω επιλογές:",
    items: [
      "ΕΟΠΥΥ -> για παραγγελίες με γνωμάτευση",
      "Εκτός ΕΟΠΥΥ -> για λιανική ή δείγματα",
    ],
  },
]

const eopyySteps: OrderStep[] = [
  {
    id: "gnomatefseis",
    step: "Βήμα 1",
    title: "Γνωματεύσεις",
    description: "Ανεβάστε τη γνωμάτευση:",
    blocks: [
      {
        items: [
          "είτε ως αρχείο (PDF / εικόνα)",
          "είτε με χρήση κάμερας",
        ],
      },
    ],
  },
  {
    id: "aftomati-symplirosi-asthenis",
    step: "Βήμα 2",
    title: "Αυτόματη Συμπλήρωση - Ασθενής",
    description: "Πατήστε το κουμπί Run AI. Όταν το σύστημα ολοκληρώσει τη διαδικασία ανάγνωσης των εγγράφων, μεταφέρεστε στο Βήμα 2 με αυτόματα συμπληρωμένα στοιχεία.",
    blocks: [
      {
        items: [
          "στοιχεία ασθενή",
          "OTP",
          "στοιχεία γιατρού",
          "διάγνωση",
          "υλικά",
          "ποσοστό συμμετοχής",
        ],
        note: "Ελέγξτε ότι τα στοιχεία είναι σωστά.",
      },
      {
        title: "Βήμα 2.1: Έλεγχος και Διόρθωση",
        items: ["Όνομα ασθενή", "OTP", "ΑΜΚΑ", "Διεύθυνση", "Υλικά"],
        note: "Αν εντοπίσετε αναντιστοιχία στα αυτόματα συμπληρωμένα στοιχεία, διορθώστε το αντίστοιχο πεδίο.",
      },
      {
        title: "Βήμα 2.2: Στοιχεία Πελάτη",
        items: [
          "Αν είναι ΝΕΟΣ πελάτης: συμπληρώστε Επωνυμία / Όνομα, Κινητό, Τρόπο αποστολής, OTP, Κωδικούς υλικών (αν χρειάζεται)",
          "Αν είναι ΥΦΙΣΤΑΜΕΝΟΣ πελάτης: τα στοιχεία συμπληρώνονται αυτόματα και συμπληρώνετε μόνο OTP",
        ],
      },
      {
        title: "Βήμα 2.3: Θα παραλάβει άλλος",
        items: [
          "Αν η παραλαβή δεν πραγματοποιείται από τον ίδιο τον ασθενή, επιλέξτε «Θα παραλάβει άλλος» και καταχωρήστε τα απαιτούμενα στοιχεία παραλήπτη",
          "Πατήστε το κουμπί αναζήτησης",
          "Πληκτρολογήστε το ονοματεπώνυμο ή μέρος του ονόματος (σε ελληνικά ή greeklish) ή τον ΑΜΚΑ",
          "Από τα αποτελέσματα, επιλέξτε το επιθυμητό πρόσωπο",
        ],
        note: "Μετά την επιλογή του παραλήπτη, προχωρήστε στην επιλογή της αιτίας για την οποία η παραλαβή πραγματοποιείται από τρίτο άτομο.",
      },
    ],
  },
  {
    id: "stoixeia-iatrou",
    step: "Βήμα 3",
    title: "Στοιχεία Ιατρού",
    description: "Σε αυτό το βήμα εμφανίζονται τα στοιχεία του ιατρού που έχουν ανακτηθεί αυτόματα από τη γνωμάτευση.",
    blocks: [
      {
        items: [
          "ΑΜΚΑ ιατρού",
          "ΑΦΜ ιατρού",
          "Υγειονομική δομή",
          "Τύπο ιατρού",
        ],
        note: "Ελέγξτε την ορθότητα των στοιχείων και, εάν χρειάζεται, προχωρήστε σε διορθώσεις.",
      },
      {
        title: "Επιλογή Συστήνοντος Ιατρού",
        items: [
          "Χωρίς συστήνοντα ιατρό",
          "Ο ίδιος",
          "Άλλος συστήνων ιατρός",
        ],
        note: "Σε περίπτωση ύπαρξης συστήνοντος ιατρού, ενεργοποιήστε την επιλογή «Άλλος συστήνων ιατρός», εφόσον δεν έχει ήδη συμπληρωθεί αυτόματα από το σύστημα.",
      },
      {
        title: "Αναζήτηση Ιατρού",
        items: [
          "Πατήστε το κουμπί αναζήτησης",
          "Πληκτρολογήστε το ονοματεπώνυμο ή μέρος του ονόματος (σε ελληνικά ή greeklish) ή τον ΑΜΚΑ",
          "Από τα αποτελέσματα, επιλέξτε τον επιθυμητό ιατρό",
        ],
        note: "Μετά την επιλογή, προχωρήστε στο επόμενο βήμα.",
      },
    ],
  },
  {
    id: "stoixeia-syntagis",
    step: "Βήμα 4",
    title: "Στοιχεία Συνταγής",
    description: "Σε αυτό το βήμα εμφανίζονται τα στοιχεία της συνταγής / γνωμάτευσης, τα οποία έχουν συμπληρωθεί αυτόματα από το σύστημα βάσει των δεδομένων που έχουν αναγνωριστεί.",
    blocks: [
      {
        items: [
          "Barcode συνταγής",
          "Ημερομηνία συνταγής",
          "Περίοδο ισχύος (από - έως)",
          "Κατηγορία παροχής",
          "Είδος",
          "Κωδικούς και περιγραφές διάγνωσης (ICD)",
        ],
        note: "Ελέγξτε την ορθότητα των στοιχείων και προχωρήστε σε διορθώσεις όπου απαιτείται.",
      },
    ],
  },
  {
    id: "ylika",
    step: "Βήμα 5",
    title: "Υλικά",
    description: "Σε αυτό το βήμα εμφανίζονται τα υλικά της παραγγελίας, τα οποία έχουν προστεθεί αυτόματα από το σύστημα βάσει της γνωμάτευσης.",
    blocks: [
      {
        title: "Για κάθε υλικό εμφανίζονται",
        items: ["Κωδικός υλικού", "Περιγραφή", "Ποσότητα"],
        note: "Ελέγξτε ότι τα υλικά και οι ποσότητες είναι σωστά.",
      },
      {
        title: "Προσθήκη Υλικών",
        items: [
          "Πατήστε το κουμπί (+)",
          "Πληκτρολογήστε κωδικό ή περιγραφή στο πεδίο αναζήτησης",
          "Επιλέξτε το επιθυμητό υλικό",
        ],
      },
      {
        title: "Τροποποίηση Υλικών",
        items: [
          "Μπορείτε να αλλάξετε την ποσότητα κάθε υλικού",
          "Μπορείτε να προσθέσετε ή να αφαιρέσετε υλικά, εφόσον απαιτείται",
        ],
        note: "Βεβαιωθείτε ότι τα υλικά συμφωνούν με τη γνωμάτευση πριν προχωρήσετε στο επόμενο βήμα.",
      },
    ],
  },
  {
    id: "plafon",
    step: "Βήμα 6",
    title: "Πλαφόν",
    description: "Σε περίπτωση υπέρβασης πλαφόν, εμφανίζεται ενδιάμεση οθόνη ειδοποίησης.",
    blocks: [
      {
        items: [
          "Μπορείτε να επιστρέψετε για διόρθωση της ποσότητας",
          "Ή να συνεχίσετε, εφόσον ο πελάτης αποδέχεται την επιπλέον χρέωση",
        ],
      },
    ],
  },
  {
    id: "symmetoxi",
    step: "Βήμα 7",
    title: "Συμμετοχή",
    description: "Το σύστημα υπολογίζει το ποσό συμμετοχής.",
    blocks: [
      {
        items: [
          "Είσπραξη πλήρους ποσού",
          "Ή συμπληρώστε το ποσό που εισπράχθηκε",
        ],
      },
      {
        note: "Αν το ποσό έκπτωσης είναι μεγαλύτερο από 25% της συμμετοχής, απαιτείται έγκριση.",
      },
    ],
  },
  {
    id: "synaineis",
    step: "Βήμα 8",
    title: "Συναίνεση",
    description: "Οι γνωματεύσεις προστίθενται αυτόματα.",
    blocks: [
      {
        items: ["Για νέους πελάτες: ανεβάστε Έντυπο Συναίνεσης"],
      },
    ],
  },
  {
    id: "touchdown",
    step: "Βήμα 9",
    title: "Touchdown",
    description: "Σε αυτό το βήμα μπορείτε να καταχωρήσετε τυχόν σχόλια και να επιλέξετε τον τρόπο αποθήκευσης της παραγγελίας.",
    blocks: [
      {
        title: "Σχόλια Παραγγελίας",
        items: [
          "επιπλέον πληροφορίες",
          "οδηγίες αποστολής",
          "παρατηρήσεις για την παραγγελία",
        ],
        note: "Το πεδίο είναι προαιρετικό.",
      },
      {
        title: "Προσωρινή Αποθήκευση",
        items: [
          "η παραγγελία αποθηκεύεται χωρίς έλεγχο πληρότητας",
          "μπορείτε να την ολοκληρώσετε σε μεταγενέστερο χρόνο",
          "αν δεν έχετε χρόνο να ολοκληρώσετε την καταχώρηση, προχωρήστε στο Touchdown και επιλέξτε Προσωρινή αποθήκευση",
          "στη συνέχεια, μπορείτε να εντοπίσετε την παραγγελία στη λίστα ως εκκρεμή και να την επεξεργαστείτε για να την ολοκληρώσετε",
        ],
      },
      {
        title: "Οριστική Καταχώρηση",
        items: [
          "αν δεν επιλεγεί προσωρινή αποθήκευση, το σύστημα ελέγχει τα στοιχεία της παραγγελίας",
          "τυχόν λάθη εμφανίζονται και πρέπει να διορθωθούν",
        ],
        note: "Μετά την επιτυχή καταχώρηση, η παραγγελία είναι έτοιμη για αποστολή. Στη λίστα παραγγελιών εμφανίζονται όλες οι καταχωρήσεις μαζί με την τρέχουσα κατάστασή τους. Μετά τον συγχρονισμό με το ERP, η ένδειξη αλλάζει σε πράσινο.",
      },
    ],
  },
]

const nonEopyyBlocks: DetailBlock[] = [
  {
    title: "Υφιστάμενος Πελάτης",
    items: [
      "Συμπληρώστε: Όνομα ή ΑΜΚΑ",
      "Τρόπο πληρωμής",
      "Είδη και ποσότητες",
    ],
    note: "Τα υπόλοιπα στοιχεία συμπληρώνονται αυτόματα.",
  },
  {
    title: "Νέος Πελάτης",
    items: [
      "Ονοματεπώνυμο",
      "Διεύθυνση",
      "Τρόπο αποστολής",
      "Τρόπο πληρωμής",
      "Είδη / ποσότητες",
    ],
  },
  {
    title: "Επισυναπτόμενα",
    items: ["Ανεβάστε Έντυπο Συναίνεσης"],
  },
]

const storageBlocks: DetailBlock[] = [
  {
    title: "Προσωρινή Αποθήκευση",
    items: [
      "Μπορείτε να αποθηκεύσετε χωρίς να ολοκληρώσετε την παραγγελία",
      "Δεν γίνεται έλεγχος λαθών",
    ],
  },
  {
    title: "Οριστική Αποθήκευση",
    items: [
      "Το σύστημα ελέγχει τα στοιχεία",
      "Τα λάθη εμφανίζονται με κόκκινο",
    ],
    note: "Διορθώστε τα πριν συνεχίσετε.",
  },
  {
    title: "Αποστολή Παραγγελίας",
    items: [
      "έχει γίνει οριστική αποθήκευση",
      "δεν εκκρεμεί έγκριση",
    ],
    note: "Η παραγγελία αποστέλλεται όταν ισχύουν και οι δύο παραπάνω συνθήκες.",
  },
]

const usefulTips = [
  "Ελέγχετε πάντα τα στοιχεία πριν την αποθήκευση",
  "Χρησιμοποιείτε προσωρινή αποθήκευση αν δεν έχετε όλα τα στοιχεία",
  "Για νέους πελάτες, μην ξεχνάτε το έντυπο συναίνεσης",
  "Αν κάτι δεν αποθηκεύεται, ελέγξτε τα κόκκινα πεδία",
]

function BlueDotHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-3.5 w-3.5 rounded-full bg-[#2C7BE5] shadow-[0_0_0_6px_rgba(44,123,229,0.12)]" />
      <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

function DetailCard({ block }: { block: DetailBlock }) {
  return (
    <article className="rounded-[1.5rem] border border-[rgba(0,0,0,0.08)] bg-[#fffaf4] p-5">
      {block.title ? (
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60">
          {block.title}
        </h3>
      ) : null}

      {block.items?.length ? (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-black/[0.72] sm:text-[15px]">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2C7BE5]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {block.note ? (
        <p className="mt-4 text-sm font-medium leading-6 text-[#1F5FAF] sm:text-[15px]">
          {block.note}
        </p>
      ) : null}
    </article>
  )
}

export default function CreateOrderPage() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,rgba(44,123,229,0.08),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#eef4fb_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <section className="grid gap-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:p-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1F5FAF]">
              1. Δημιουργία Νέας Παραγγελίας
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Οδηγός δημιουργίας παραγγελίας βήμα προς βήμα
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/[0.68] sm:text-lg">
              Η σελίδα αυτή συγκεντρώνει τη ροή για δημιουργία νέας παραγγελίας,
              τόσο για παραγγελίες ΕΟΠΥΥ όσο και για παραγγελίες εκτός ΕΟΠΥΥ,
              μαζί με τους κανόνες αποθήκευσης και βασικές συμβουλές ελέγχου.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {eopyySteps.map((step) => (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className="rounded-full border border-[#2C7BE5]/20 bg-[rgba(44,123,229,0.08)] px-4 py-2 text-sm font-medium text-[#1F5FAF] transition hover:border-[#2C7BE5]/40 hover:bg-[rgba(44,123,229,0.14)]"
                >
                  {step.title}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-[rgba(44,123,229,0.18)] bg-[linear-gradient(160deg,rgba(44,123,229,0.18),rgba(255,255,255,0.88)_58%,rgba(238,244,251,0.96)_100%)] p-8">
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/70" />
            <div className="relative flex w-full max-w-xs flex-col items-center rounded-[1.75rem] border border-black/10 bg-white/[0.85] px-6 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <Image
                src="/logo.png"
                alt="Create Order Manual"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#1F5FAF]">
                Order Flow
              </p>
              <p className="mt-3 text-sm leading-6 text-black/[0.65]">
                Επιλογή κατηγορίας, φορέα, συμπλήρωση στοιχείων, υλικά, αποθήκευση και τελική αποστολή.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10">
          <BlueDotHeading title="1. Δημιουργία Νέας Παραγγελίας" />
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70">
            Η αρχική διαδικασία ξεκινά από το dashboard και οδηγεί στην επιλογή κατηγορίας προϊόντων και ασφαλιστικού φορέα.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {introSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-[rgba(0,0,0,0.08)] bg-[#fffaf4] p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1F5FAF]">
                  {step.step}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-black">
                  {step.title}
                </h3>
                {step.description ? (
                  <p className="mt-3 text-sm leading-6 text-black/[0.7]">
                    {step.description}
                  </p>
                ) : null}
                {step.items?.length ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-black/[0.72]">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2C7BE5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10">
          <BlueDotHeading title="2. Παραγγελία ΕΟΠΥΥ" />
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70">
            Η παραγγελία ΕΟΠΥΥ ακολουθεί εννέα βασικά βήματα, με αυτόματη ανάγνωση της γνωμάτευσης και έλεγχο των στοιχείων πριν την οριστική καταχώρηση.
          </p>

          <div className="mt-8 grid gap-6">
            {eopyySteps.map((step) => (
              <section
                key={step.id}
                id={step.id}
                className="scroll-mt-24 rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,252,255,0.82))] p-6 sm:p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1F5FAF]">
                  {step.step}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">
                  {step.title}
                </h3>
                {step.description ? (
                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/[0.7]">
                    {step.description}
                  </p>
                ) : null}

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {step.blocks.map((block, index) => (
                    <DetailCard key={`${step.id}-${index}`} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section
          id="ektos-eopyy"
          className="scroll-mt-24 rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10"
        >
          <BlueDotHeading title="3. Παραγγελία Εκτός ΕΟΠΥΥ" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {nonEopyyBlocks.map((block, index) => (
              <DetailCard key={`non-eopyy-${index}`} block={block} />
            ))}
          </div>
        </section>

        <section
          id="apothikefsi-paraggelias"
          className="scroll-mt-24 rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10"
        >
          <BlueDotHeading title="4. Αποθήκευση Παραγγελίας" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {storageBlocks.map((block, index) => (
              <DetailCard key={`storage-${index}`} block={block} />
            ))}
          </div>
        </section>

        <section
          id="xrisimes-symvoules"
          className="scroll-mt-24 rounded-[2rem] border border-black/10 bg-black px-8 py-9 text-[#FFFAF0] shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:px-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Χρήσιμες Συμβουλές
          </h2>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-[rgba(255,250,240,0.88)] sm:grid-cols-2 sm:text-[15px]">
            {usefulTips.map((tip) => (
              <li
                key={tip}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-3"
              >
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
