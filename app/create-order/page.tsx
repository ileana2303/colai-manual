"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { PhoneFrameImage } from "@/components/phone-frame"

type DetailBlock = {
  title?: string
  description?: string
  items?: string[]
  note?: string
}

type StepImage = {
  src: string
  alt: string
}

type StepMedia = StepImage & {
  type: "image"
}

type StepItem = {
  id: string
  title: string
  description?: string
  media?: StepMedia | StepMedia[]
  blocks: DetailBlock[]
}

type IntroStep = {
  step: string
  title: string
  description?: string
  items?: string[]
  image: StepImage | StepImage[]
}

type OrderStep = {
  id: string
  step: string
  title: string
  description?: string
  items: StepItem[]
}

const introSteps: IntroStep[] = [
  {
    step: "Βήμα 1",
    title: "Είσοδος",
    description: "👉Από Αρχική 🏠 ή Παραγγελίες 📋",
    items: ["→ πατήστε το ➕ για να ξεκινήσετε"],
    image: [
      {
        src: "/order/step1.png",
        alt: "Οθόνη εισόδου στη δημιουργία νέας παραγγελίας",
      },
      {
        src: "/order/step1-1.png",
        alt: "Οθόνη εισόδου στη δημιουργία νέας παραγγελίας",
      },
    ],
  },
  {
    step: "Βήμα 2",
    title: "Επιλογή Κατηγορίας Προϊόντων",
    description: "Επιλέξτε την κατηγορία που ανήκουν τα προϊόντα:",
    items: ["WC", "IC", "OC", "CC", "ABBOTT", "ATOS", "AMOENA", "MEDTRONIC"],
    image: {
      src: "/order/step1-2.png",
      alt: "Οθόνη επιλογής κατηγορίας προϊόντων",
    },
  },
  {
    step: "Βήμα 3",
    title: "Επιλογή Ασφαλιστικού Φορέα",
    description: "Επιλέξτε μία από τις παρακάτω επιλογές:",
    items: [
      "ΕΟΠΥΥ -> για παραγγελίες με γνωμάτευση",
      "Εκτός ΕΟΠΥΥ -> για λιανική ή δείγματα",
    ],
    image: {
      src: "/order/step1-3.png",
      alt: "Οθόνη επιλογής ασφαλιστικού φορέα",
    },
  },
]

const eopyySteps: OrderStep[] = [
  {
    id: "gnomatefseis",
    step: "Βήμα 1",
    title: "Γνωματεύσεις",
    items: [
      {
        id: "gnomatefseis-step-1-1",
        title: "Βήμα 1.1",
        media: {
          type: "image",
          src: "/order/step1-4.png",
          alt: "Οθόνη γνωματεύσεων step1-4",
        },
        blocks: [
          {
            title: "Βήμα 1.1",
            note: "➕ Πατήστε το κουμπί για να ανεβάσετε τη γνωμάτευση 📄 και την 2η σελίδα του εντύπου. ",
          },
        ],
      },
      {
        id: "gnomatefseis-step-1-2",
        title: "Βήμα 1.2",
        media: {
          type: "image",
          src: "/order/step1-5.png",
          alt: "Οθόνη γνωματεύσεων step1-5",
        },
        blocks: [
          {
            title: "Βήμα 1.2",
            note: "Μπορείτε να ανεβάσετε: αρχείο PDF ή εικόνα ή να χρησιμοποιήσετε την κάμερα της συσκευής.",
          },
        ],
      },
      {
        id: "gnomatefseis-step-1-3",
        title: "Βήμα 1.3",
        media: {
          type: "image",
          src: "/order/step1-6.png",
          alt: "Οθόνη γνωματεύσεων step1-6",
        },
        blocks: [
          {
            title: "Βήμα 1.3",
            note: "👉 Στην ενότητα Συμπληρωματικά αρχεία ➕ Πατήστε το κουμπί για να προσθέσετε επιπλέον αρχεία",
          },
          {
            note: "📎 Χρησιμοποιείται όταν απαιτούνται επιπλέον δικαιολογητικά (π.χ. κάρτα ιατρού, φωτογραφία τραύματος ή οποιοδήποτε επιπλέον έγγραφο που αφορά τον ασθενή).",
          },
        ],
      },
      {
        id: "gnomatefseis-step-1-4",
        title: "Βήμα 1.4",
        media: {
          type: "image",
          src: "/order/step1-7.png",
          alt: "Οθόνη γνωματεύσεων step1-7",
        },
        blocks: [
          {
            title: "Βήμα 1.4",
            note: "👉 Όταν ολοκληρωθεί το ανέβασμα, εμφανίζεται επιβεβαίωση:",
          },
          {
            note: "✔ Τα αρχεία ανέβηκαν επιτυχώς",
          },
        ],
      },
      {
        id: "gnomatefseis-step-1-5",
        title: "Βήμα 1.5",
        media: {
          type: "image",
          src: "/order/step1-8.png",
          alt: "Οθόνη γνωματεύσεων step1-8",
        },
        blocks: [
          {
            title: "Βήμα 1.5",
            note: "👉 Επιλέξτε Run AI (Claude) ή Run AI (Gemini) για αυτόματη αναγνώριση και συμπλήρωση των στοιχείων της γνωμάτευσης.",
          },
        ],
      },
      {
        id: "gnomatefseis-step-1-6",
        title: "Βήμα 1.6",
        media: {
          type: "image",
          src: "/order/step1-9.png",
          alt: "Οθόνη γνωματεύσεων step1-9",
        },
        blocks: [
          {
            title: "Βήμα 1.6",
            note: "👉 Το σύστημα επεξεργάζεται τα αρχεία (AI running). Μόλις ολοκληρωθεί, τα στοιχεία του ασθενούς και των υλικών θα συμπληρωθούν αυτόματα.",
          },
        ],
      },
    ],
  },
  {
    id: "aftomati-symplirosi-asthenis",
    step: "Βήμα 2",
    title: "Ασθενής - Αυτόματη Συμπλήρωση",
    description: "Με την ολοκλήρωση της αναγνώρισης από το AI, μεταφέρεστε στο Βήμα 2, όπου εμφανίζονται αυτόματα συμπληρωμένα τα στοιχεία της γνωμάτευσης.",
    items: [
      {
        id: "aftomati-symplirosi-stoixeia",
        title: "Βήμα 2.1: Έλεγχος και Διόρθωση",
        media: {
          type: "image",
          src: "/order/step2.png",
          alt: "Οθόνη αυτόματης συμπλήρωσης στοιχείων ασθενή",
        },
        blocks: [
          {
            items: ["στοιχεία ασθενή (ονοματεπώνυμο, διεύθυνση, ημ.γέννησης...)", "OTP ( ⚠️ Η συμπλήρωση του OTP είναι υποχρεωτική για τη συνέχεια της διαδικασίας)", "στοιχεία γιατρού", "διάγνωση", "υλικά", "ποσοστό συμμετοχής"],
            note: "Ελέγξτε ότι τα στοιχεία είναι σωστά. Αν εντοπίσετε αναντιστοιχία στα αυτόματα συμπληρωμένα στοιχεία, διορθώστε το αντίστοιχο πεδίο.",
          },
        ],
      },
      {
        id: "aftomati-symplirosi-elegxos",
        title: "Βήμα 2.2: Αναζήτηση Υφιστάμενου Ασθενή",
        media: [
          { type: "image", src: "/order/step2-1.png", alt: "Αναζήτηση στοιχείων ασθενούς" },
          { type: "image", src: "/order/step2-2.png", alt: "Αναζήτηση" },
          { type: "image", src: "/order/step2-3.png", alt: "Λίστα Πελατών" },
        ],
        blocks: [
          {
            items: ["Αναζήτηση ασθενή"],
            note: "👉 Αν τα στοιχεία του ασθενούς, δεν έχουν συμπληρωθεί αυτόματα, πραγματοποιήστε αναζήτηση ασθενή με ΑΜΚΑ ή ονοματεπώνυμο και επιλέξτε τον από τη λίστα υφιστάμενων πελατών.",
          },
        ],
      },
      {
        id: "aftomati-symplirosi-pelatis",
        title: "Βήμα 2.3: Παραλαβή από Νέο Πρόσωπο",
        media: [
          { type: "image", src: "/order/step2-4.png", alt: "Αναζήτηση στοιχείων ασθενούς" },
          { type: "image", src: "/order/step2-5.png", alt: "Αναζήτηση" },
          { type: "image", src: "/order/step2-6.png", alt: "Λίστα Πελατών" },
        ],
        blocks: [
          {
            items: [
              "👤 Επιλογή υπάρχοντος παραλήπτη: Επιλέξτε από την αποθηκευμένη λίστα και πατήστε «Επιλογή παραλήπτη»",
              "➕ Προσθήκη νέου παραλήπτη: Πατήστε «Προσθήκη νέου παραλήπτη» και συμπληρώστε τα στοιχεία του",
            ],
            note: "Αφού επιλέξετε τον παραλήπτη, συνεχίστε με την επιλογή της αιτίας παραλαβής από τρίτο άτομο.",
          }
        ]
      }
    ]
  },
  {
    id: "stoixeia-iatrou",
    step: "Βήμα 3",
    title: "Στοιχεία Ιατρού",
    description: "Σε αυτό το βήμα εμφανίζονται τα στοιχεία του ιατρού που έχουν ανακτηθεί αυτόματα από τη γνωμάτευση.",
    items: [
      {
        id: "iatros-stoixeia",
        title: "Βήμα 3.1: Στοιχεία ιατρού",
        blocks: [
          {
            items: ["Ονοματεπώνυμο", "ΑΜΚΑ ιατρού", "ΑΦΜ ιατρού", "Υγειονομική δομή", "Τύπος ιατρείου"],
            note: "Ελέγξτε την ορθότητα των στοιχείων και, εάν χρειάζεται, προχωρήστε σε διορθώσεις.",
          },
        ],
        media: {
          type: "image",
          src: "/order/step3.png",
          alt: "Οθόνη αυτόματης συμπλήρωσης στοιχείων ιατρού",
        },
      },
      {
        id: "iatros-anazitisi",
        title: "Βήμα 3.2: Αναζήτηση Ιατρού",
        blocks: [
          {
            items: [
              "Πατήστε το κουμπί αναζήτησης",
              "Πληκτρολογήστε το ονοματεπώνυμο ή μέρος του ονόματος (σε ελληνικά ή greeklish) ή τον ΑΜΚΑ",
              "Από τα αποτελέσματα, επιλέξτε τον επιθυμητό ιατρό",
            ],
            note: "👉 Αν τα στοιχεία του ιατρού δεν έχουν συμπληρωθεί αυτόματα από το ΑΙ, πραγματοποιήστε αναζήτηση ιατρού με ΑΜΚΑ ή ονοματεπώνυμο και επιλέξτε τον από τη λίστα των ιατρών.Μετά την επιλογή, προχωρήστε στο επόμενο βήμα.",
          },
        ],
         media: [
          { type: "image", src: "/order/step3-1.png", alt: "Αναζήτηση στοιχείων ιατρού" },
          { type: "image", src: "/order/step3-2.png", alt: "Αναζήτηση" },
          { type: "image", src: "/order/step3-3.png", alt: "Λίστα Ιατρών" },
        ],
      },

      {
        id: "iatros-systinon",
        title: "Βήμα 3.3: Επιλογή Συστήνοντος Ιατρού",
        blocks: [
          {
            title: "Ενεργοποιήστε μία από τις επιλογές:",
            items: ["Χωρίς συστήνων ιατρό", "Ο ίδιος", "Άλλος συστήνων ιατρός"],
            note: "👉 Σε περίπτωση ύπαρξης συστήνοντος ιατρού, ενεργοποιήστε την επιλογή «Άλλος συστήνων ιατρός», εφόσον δεν έχει ήδη συμπληρωθεί αυτόματα από το σύστημα.",
          },
        ],
        media: 
          { type: "image", src: "/order/step3-4.png", alt: "Επιλογές Συστήνον ιατρος" }
      },
    ],
  },
  {
    id: "stoixeia-syntagis",
    step: "Βήμα 4",
    title: "Στοιχεία Συνταγής",
    description: "Σε αυτό το βήμα εμφανίζονται τα στοιχεία της συνταγής / γνωμάτευσης, τα οποία έχουν συμπληρωθεί αυτόματα από το σύστημα βάσει των δεδομένων που έχουν αναγνωριστεί.",
    items: [
      {
        id: "syntagi-stoixeia",
        title: "Βήμα 4: Στοιχεία συνταγής",
        blocks: [
          {
            items: ["Barcode συνταγής", "Ημερομηνία συνταγής", "Περίοδο ισχύος (από - έως)", "Κατηγορία παροχής", "Είδος", "Κωδικούς και περιγραφές διάγνωσης (ICD)"],
            note: "Ελέγξτε την ορθότητα των στοιχείων και προχωρήστε σε διορθώσεις όπου απαιτείται. Αν δεν έχει περαστεί αυτόματα το Barcode της συνταγής: 👉 Στο πεδίο Barcode, πατήστε το εικονίδιο 📷 για σάρωση της συνταγής. 👉 Στρέψτε την κάμερα προς το barcode και κρατήστε τη σταθερή για αυτόματη αναγνώριση.",
          },
        ],
         media: [
          { type: "image", src: "/order/step4.png", alt: "Στοιχεία συνταγής" },
          { type: "image", src: "/order/step4-1.png", alt: "Barcode" },
          { type: "image", src: "/order/step4-2.png", alt: "Scan" },
          { type: "image", src: "/order/step4-3.png", alt: "Type" },
        ],
      },
    ],
  },
  {
    id: "ylika",
    step: "Βήμα 5",
    title: "Υλικά",
    description: "Σε αυτό το βήμα εμφανίζονται τα υλικά της παραγγελίας, τα οποία έχουν προστεθεί αυτόματα από το σύστημα βάσει της γνωμάτευσης.",
    items: [
      {
        id: "ylika-emfanizontai",
        title: "Για κάθε υλικό εμφανίζονται",
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
        media: [
          { type: "image", src: "/order/step5.png", alt: "Υλικά" },
          { type: "image", src: "/order/step5-1.png", alt: "Προσθήκη Υλικών" },
          { type: "image", src: "/order/step5-2.png", alt: "Αναζήτηση Υλικών" },
        ],
      },
    ],
  },
  {
    id: "plafon",
    step: "Βήμα 6",
    title: "Πλαφόν",
    description: "Σε περίπτωση υπέρβασης πλαφόν, εμφανίζεται ενδιάμεση οθόνη ειδοποίησης.",
    items: [
      {
        id: "plafon-elegxos",
        title: "Πλαφόν",
        blocks: [
          {
            items: ["Μπορείτε να επιστρέψετε για διόρθωση της ποσότητας", "Ή να συνεχίσετε, εφόσον ο πελάτης αποδέχεται την επιπλέον χρέωση"],
          },
        ],
      },
    ],
  },
  {
    id: "symmetoxi",
    step: "Βήμα 7",
    title: "Συμμετοχή",
    description: "Το σύστημα υπολογίζει το ποσό συμμετοχής.",
    items: [
      {
        id: "symmetoxi-elegxos",
        title: "Συμμετοχή",
        blocks: [
          {
            items: ["Είσπραξη πλήρους ποσού", "Ή συμπληρώστε το ποσό που εισπράχθηκε"],
          },
          {
            note: "Αν το ποσό έκπτωσης είναι μεγαλύτερο από 25% της συμμετοχής, απαιτείται έγκριση.",
          },
        ],
      },
    ],
  },
  {
    id: "synaineis",
    step: "Βήμα 8",
    title: "Συναίνεση",
    description: "Οι γνωματεύσεις προστίθενται αυτόματα.",
    items: [
      {
        id: "synainesi-entypo",
        title: "Συναίνεση",
        blocks: [
          {
            items: ["Για νέους πελάτες: ανεβάστε Έντυπο Συναίνεσης"],
          },
        ],
      },
    ],
  },
  {
    id: "touchdown",
    step: "Βήμα 9",
    title: "Touchdown",
    description: "Σε αυτό το βήμα μπορείτε να καταχωρήσετε τυχόν σχόλια και να επιλέξετε τον τρόπο αποθήκευσης της παραγγελίας.",
    items: [
      {
        id: "touchdown-sxolia",
        title: "Σχόλια Παραγγελίας",
        blocks: [
          {
            title: "Σχόλια Παραγγελίας",
            items: ["επιπλέον πληροφορίες", "οδηγίες αποστολής", "παρατηρήσεις για την παραγγελία"],
            note: "Το πεδίο είναι προαιρετικό.",
          },
        ],
      },
      {
        id: "touchdown-prosorini",
        title: "Προσωρινή Αποθήκευση",
        blocks: [
          {
            title: "Προσωρινή Αποθήκευση",
            items: [
              "η παραγγελία αποθηκεύεται χωρίς έλεγχο πληρότητας",
              "μπορείτε να την ολοκληρώσετε σε μεταγενέστερο χρόνο",
              "αν δεν έχετε χρόνο να ολοκληρώσετε την καταχώρηση, προχωρήστε στο Touchdown και επιλέξτε Προσωρινή αποθήκευση",
              "στη συνέχεια, μπορείτε να εντοπίσετε την παραγγελία στη λίστα ως εκκρεμή και να την επεξεργαστείτε για να την ολοκληρώσετε",
            ],
          },
        ],
      },
      {
        id: "touchdown-oristiki",
        title: "Οριστική Καταχώρηση",
        blocks: [
          {
            title: "Οριστική Καταχώρηση",
            items: ["αν δεν επιλεγεί προσωρινή αποθήκευση, το σύστημα ελέγχει τα στοιχεία της παραγγελίας", "τυχόν λάθη εμφανίζονται και πρέπει να διορθωθούν"],
            note: "Μετά την επιτυχή καταχώρηση, η παραγγελία είναι έτοιμη για αποστολή. Στη λίστα παραγγελιών εμφανίζονται όλες οι καταχωρήσεις μαζί με την τρέχουσα κατάστασή τους. Μετά τον συγχρονισμό με το ERP, η ένδειξη αλλάζει σε πράσινο.",
          },
        ],
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

const createOrderNavSections = [
  ...eopyySteps.map((step) => ({
    id: step.id,
    title: step.title,
  })),
  {
    id: "ektos-eopyy",
    title: "Εκτός ΕΟΠΥΥ",
  },
  {
    id: "apothikefsi-paraggelias",
    title: "Αποθήκευση",
  },
  {
    id: "xrisimes-symvoules",
    title: "Συμβουλές",
  },
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

function DetailBlockContent({
  block,
  hideTitle = false,
}: {
  block: DetailBlock
  hideTitle?: boolean
}) {
  return (
    <>
      {block.title && !hideTitle ? (
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60">
          {block.title}
        </h3>
      ) : null}

      {block.description ? (
        <p className="mt-3 text-sm leading-6 text-black/[0.72] sm:text-[15px]">
          {block.description}
        </p>
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
    </>
  )
}

function DetailCard({ block }: { block: DetailBlock }) {
  return (
    <article className="rounded-[1.5rem] border border-[rgba(0,0,0,0.08)] bg-[#fffaf4] p-5">
      <DetailBlockContent block={block} />
    </article>
  )
}

function getStepMediaItems(media: StepItem["media"]) {
  if (!media) {
    return []
  }

  return Array.isArray(media) ? media : [media]
}

function getIntroStepImages(image: IntroStep["image"]) {
  return Array.isArray(image) ? image : [image]
}

function StepMediaCarousel({
  mediaItems,
  itemId,
}: {
  mediaItems: StepImage[]
  itemId: string
}) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const activeMedia = mediaItems[activeMediaIndex] ?? mediaItems[0]
  const hasMultipleMedia = mediaItems.length > 1

  useEffect(() => {
    setActiveMediaIndex(0)
  }, [itemId, mediaItems.length])

  if (!activeMedia) {
    return null
  }

  if (!hasMultipleMedia) {
    return <PhoneFrameImage src={activeMedia.src} alt={activeMedia.alt} />
  }

  const showPreviousMedia = () => {
    setActiveMediaIndex((currentIndex) =>
      currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1
    )
  }

  const showNextMedia = () => {
    setActiveMediaIndex((currentIndex) =>
      currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1
    )
  }

  const carouselButtonClass =
    "h-11 w-11 items-center justify-center rounded-full border border-[#2C7BE5]/25 bg-white text-[#1F5FAF] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition hover:border-[#2C7BE5]/45 hover:bg-[rgba(44,123,229,0.08)] focus:outline-none focus:ring-2 focus:ring-[#2C7BE5]/25"

  const mediaDots = mediaItems.map((mediaItem, index) => (
    <button
      key={mediaItem.src}
      type="button"
      aria-label={`Show screenshot ${index + 1}`}
      aria-current={activeMediaIndex === index ? "true" : undefined}
      onClick={() => setActiveMediaIndex(index)}
      className={`h-2.5 w-2.5 rounded-full border transition ${activeMediaIndex === index
        ? "border-[#1F5FAF] bg-[#1F5FAF]"
        : "border-[#2C7BE5]/35 bg-white hover:border-[#2C7BE5]/60"
        }`}
    />
  ))

  return (
    <div className="mx-auto w-full max-w-[340px] lg:grid lg:max-w-[460px] lg:grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] lg:items-center lg:gap-2">
      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={showPreviousMedia}
        className={`hidden lg:flex ${carouselButtonClass}`}
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>

      <div className="min-w-0">
        <PhoneFrameImage src={activeMedia.src} alt={activeMedia.alt} />

        <div className="mt-4 hidden items-center justify-center gap-2 lg:flex">
          {mediaDots}
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={showPreviousMedia}
            className={`flex ${carouselButtonClass}`}
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="flex min-w-12 items-center justify-center gap-2">
            {mediaDots}
          </div>

          <button
            type="button"
            aria-label="Next screenshot"
            onClick={showNextMedia}
            className={`flex ${carouselButtonClass}`}
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={showNextMedia}
        className={`hidden lg:flex ${carouselButtonClass}`}
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  )
}

function StepItemSection({ item }: { item: StepItem }) {
  const mediaItems = getStepMediaItems(item.media)
  const hasMedia = mediaItems.length > 0

  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,252,255,0.82))] p-6 sm:p-7">
      <div className={hasMedia ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-start" : ""}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1F5FAF]">
            {item.title}
          </p>
          {item.description ? (
            <p className="mt-3 text-sm leading-6 text-black/[0.72] sm:text-[15px]">
              {item.description}
            </p>
          ) : null}

          <div className="mt-5 grid gap-5">
            {item.blocks.map((block, index) => (
              <div
                key={`${item.id}-${index}`}
                className={index > 0 ? "border-t border-black/10 pt-5" : undefined}
              >
                <DetailBlockContent
                  block={block}
                  hideTitle={block.title === item.title}
                />
              </div>
            ))}
          </div>
        </div>

        {hasMedia ? (
          <StepMediaCarousel mediaItems={mediaItems} itemId={item.id} />
        ) : null}
      </div>
    </article>
  )
}

export default function CreateOrderPage() {
  const [activeNavSectionId, setActiveNavSectionId] = useState(createOrderNavSections[0]?.id ?? "")

  useEffect(() => {
    const sectionElements = createOrderNavSections
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

  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,rgba(44,123,229,0.08),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#FFFAF0_100%)]">
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

          </div>

          <div className="relative flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-[rgba(44,123,229,0.18)] bg-[linear-gradient(160deg,rgba(44,123,229,0.18),rgba(255,255,255,0.88)_58%,rgba(238,244,251,0.96)_100%)] p-8">
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/70" />
            <div className="relative flex w-full max-w-xs flex-col items-center rounded-[1.75rem] border border-black/10 bg-white/[0.85] px-6 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <Image
                src="/logo.png"
                alt="colai-app"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#1F5FAF]">
                New Order Flow
              </p>
              <p className="mt-3 text-sm leading-6 text-black/[0.65]">
                Επιλογή κατηγορίας, φορέα, συμπλήρωση στοιχείων, υλικά, προσωρινή αποθήκευση και τελική καταχώρηση.
              </p>
            </div>
          </div>
        </section>

        <nav className="sticky top-4 z-30 rounded-full border border-black/10 bg-white px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6">
          <div className="flex items-center gap-4 pb-1">
            <span className="shrink-0 rounded-full bg-[#173E73] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFAF0]">
              Order Nav
            </span>
            <div className="subtle-scrollbar flex flex-1 items-center justify-start gap-3 overflow-x-auto">
              {createOrderNavSections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={activeNavSectionId === section.id ? "true" : undefined}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium text-[#1F5FAF] transition ${activeNavSectionId === section.id
                    ? "border-[#2C7BE5]/40 bg-[rgba(44,123,229,0.14)]"
                    : "border-[#2C7BE5]/20 bg-[rgba(44,123,229,0.08)] hover:border-[#2C7BE5]/40 hover:bg-[rgba(44,123,229,0.14)]"
                    }`}
                >
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-[#2C7BE5]/35 bg-white/75 px-1.5 text-xs font-semibold tabular-nums text-[#173E73]">
                    {index + 1}
                  </span>
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10">
          <BlueDotHeading title="1. Δημιουργία Νέας Παραγγελίας" />
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 md:max-w-5xl lg:max-w-none">
            👉 Ξεκινήστε από την Αρχική 🏠 ή μεταβείτε στις Παραγγελίες 📋  </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 md:max-w-5xl lg:max-w-none">
            Πατήστε το κουμπί ➕ δημιουργίας νέας παραγγελίας. </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 md:max-w-5xl lg:max-w-none">
            ➡️ Στη συνέχεια, ακολουθήστε τα βήματα για:

            επιλογή κατηγορίας προϊόντων επιλογή ασφαλιστικού φορέα
          </p>


          <div className="mt-8 grid gap-6">
            {introSteps.map((step) => {
              const imageItems = getIntroStepImages(step.image)

              return (
                <article
                  key={step.title}
                  className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-start"
                >
                  <div className="rounded-[1.75rem] border border-[rgba(0,0,0,0.08)] bg-[#fffaf4] p-6 sm:p-7">
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
                  </div>

                  <StepMediaCarousel mediaItems={imageItems} itemId={step.title} />
                </article>
              )
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/[0.82] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-10">
          <BlueDotHeading title="2. Παραγγελία ΕΟΠΥΥ" />
          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70">
            Η παραγγελία ΕΟΠΥΥ ακολουθεί οχτώ βασικά βήματα, με αυτόματη ανάγνωση και συμπήρωση των στοιχείων της γνωμάτευσης μέσω ΑΙ και έλεγχο των στοιχείων πριν την οριστική καταχώρηση.
          </p>

          <div className="mt-8 grid gap-6">
            {eopyySteps.map((step) => (
              <section
                key={step.id}
                id={step.id}
                className="scroll-mt-24"
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

                <div className="mt-6 grid gap-8">
                  {step.items.map((item) => (
                    <StepItemSection key={item.id} item={item} />
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
