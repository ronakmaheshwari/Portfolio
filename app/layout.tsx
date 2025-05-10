import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RonakM",
  description: "A terminal-style portfolio website",
    generator: 'reactJs',
    icons:{
      icon : 'https://xntcmbrnuyvzjeupfbyt.supabase.co/storage/v1/object/public/uploads//portfolio.jpeg'
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Analytics />
        {children}
        </body>
    </html>
  )
}



import './globals.css'
import Navbar from "@/components/ui/Navbar"
