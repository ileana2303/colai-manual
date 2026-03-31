import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "BIAIS",
  description: "Backend, AI, and product engineering company",
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
        <div className="min-h-screen lg:flex">
          <Navbar />
          <div className="flex min-h-screen min-w-0 flex-1 flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
