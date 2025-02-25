import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Universal Banking App",
  description: "A user-friendly mobile banking application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground p-4">
            <h1 className="text-2xl font-bold">Smart Banking</h1>
          </header>
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-secondary text-secondary-foreground p-4 text-center text-sm">
            © 2025 Universal Banking App
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'