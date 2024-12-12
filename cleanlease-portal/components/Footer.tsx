'use client'

import { Facebook, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#003876] to-[#0086C9] text-white pt-12 pb-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Addresses */}
          <div className="space-y-8">
            {/* Logo */}
            <Image
            src="/images/cleanlease-logo-white.svg"
            alt="CleanLease Logo"
            width={200}
            height={60}
            className="w-60"
          />

            <div>
              <h3 className="font-bold mb-2">Hoofdkantoor Nederland</h3>
              <p>Hoogewaard 191</p>
              <p>2396 AR Koudekerk aan den Rijn</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Hoofdkantoor België</h3>
              <p>Vullaertstraat 73</p>
              <p>8730 Oedelem (Beernem)</p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-bold mb-4">Neem contact met ons op</h3>
            <p className="mb-2">
              <Link href="tel:+31884002700" className="hover:underline">
                +31 (0)88 400 2700
              </Link>
            </p>
            <p>
              <Link href="mailto:info@cleanlease.com" className="hover:underline">
                info@cleanlease.com
              </Link>
            </p>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Link href="/care" className="block hover:underline mb-2">Care</Link>
              <Link href="/cure" className="block hover:underline mb-2">Cure</Link>
              <Link href="/leisure" className="block hover:underline mb-2">Leisure</Link>
              <Link href="https://mijnwas.nl/" target="_blank" className="block hover:underline mb-2">Mijn Waslijn</Link>
            </div>
            <div>
              <Link href="/over-cleanlease" className="block hover:underline mb-2">Over Cleanlease</Link>
              <Link href="/duurzaamheid" className="block hover:underline mb-2">Duurzaamheid</Link>
              <Link href="/innovatie" className="block hover:underline mb-2">Innovatie</Link>
              <Link href="/certificeringen" className="block hover:underline mb-2">Certificeringen</Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <h3 className="font-bold mb-4">Schrijf je in voor onze nieuwsbrief</h3>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mb-4">
            <Input
              type="email"
              placeholder="Inschrijven nieuwsbrief"
              className="bg-white text-black"
            />
            <Button className="bg-[#E88B3C] hover:bg-[#c97733] text-white">
              Aanmelden
            </Button>
          </div>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <Checkbox id="care" />
              <span>Care</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox id="cure" />
              <span>Cure</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox id="leisure" />
              <span>Leisure</span>
            </label>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Certification Images */}
          <div className="flex flex-wrap gap-6 items-center">
            <Image
              src="https://cleanlease.com/wp-content/uploads/2023/09/5-sterren-logo-MVO-Register_NL-300x169.png"
              alt="MVO Register Certification"
              width={100}
              height={56}
              className="h-12 w-auto"
            />
            <Image
              src="https://cleanlease.com/wp-content/uploads/2023/12/ISO-26000.svg"
              alt="ISO 26000 Certification"
              width={80}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <Image
              src="https://cleanlease.com/wp-content/uploads/2023/12/PSO-30.svg"
              alt="PSO Certification"
              width={80}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <Image
              src="https://cleanlease.com/wp-content/uploads/2023/12/SGS13485.svg"
              alt="SGS Certification"
              width={80}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <Image
              src="https://www.cleanlease.com/wp-content/uploads/2024/01/certex.png"
              alt="Certex Certification"
              width={80}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <Image
              src="https://cleanlease.com/wp-content/uploads/2023/12/TUV14001.svg"
              alt="TUV Certification"
              width={80}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" className="text-white hover:opacity-80">
              <Facebook size={24} />
            </Link>
            <Link href="https://linkedin.com" className="text-white hover:opacity-80">
              <Linkedin size={24} />
            </Link>
            <Link href="https://tiktok.com" className="text-white hover:opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 0 1-3.585-1.476A5.124 5.124 0 0 1 14.26.5h-3.32v13.922c0 1.576-1.28 2.856-2.856 2.856s-2.856-1.28-2.856-2.856 1.28-2.856 2.856-2.856c.314 0 .615.051.898.144V8.297a6.144 6.144 0 0 0-.898-.066c-3.222 0-5.835 2.613-5.835 5.835s2.613 5.835 5.835 5.835 5.835-2.613 5.835-5.835V8.704a8.454 8.454 0 0 0 5.402 1.936V7.322c-.506 0-.996-.081-1.454-.231.458.15.948.231 1.454.231V5.562z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm">© 2023 - 2024 CleanLease</p>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy- & cookiestatement
          </Link>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0">
        <div className="relative w-64 h-64">
          <div className="absolute bottom-0 right-0 w-full h-full bg-white transform rotate-45 translate-x-1/2 translate-y-1/2" />
          <div className="absolute bottom-4 right-4 w-24">
            <Image
              src="https://www.cleanlease.com/wp-content/uploads/2023/07/logo.png"
              alt="Because you care"
              width={120}
              height={40}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

