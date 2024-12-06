import '@/app/globals.css'
import type { Metadata } from 'next'
import { ToastProvider } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'CleanLease Klantenportaal',
  description: 'Uw persoonlijke serviceportaal voor het beheren van uw was, facturen en ondersteuning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  )
}