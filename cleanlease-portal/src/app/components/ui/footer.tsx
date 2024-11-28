import React from 'react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 CleanLease. Alle rechten voorbehouden.
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-2 md:mb-0">Privacybeleid</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-2 md:mb-0">Gebruiksvoorwaarden</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-2 md:mb-0">Contact</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-2 md:mb-0">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}