import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Colai - Manual",
  description: "Οδηγός χρήσης ERP εφαρμογής με απλές οδηγίες για παραγγελίες και βασικές λειτουργίες.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#FFFAF0] text-black">
        <div className="flex min-h-dvh flex-col md:flex-row">
          <Navbar />
          <div className="flex min-h-0 min-w-0 flex-1 flex-col md:min-h-dvh">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
