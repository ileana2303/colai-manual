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
      <body className="min-h-screen bg-[#FFFAF0] text-black">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Navbar />
          <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:min-h-screen">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
