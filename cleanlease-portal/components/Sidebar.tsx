import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Home, Package, BarChart2, Folder, Settings, User, ChevronDown } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/b2b' },
  { icon: Package, label: 'Bestellingen', href: '/b2b-bestellingen' },
  { icon: BarChart2, label: 'Rapportages', href: '/b2b-rapportages' },
  { icon: Folder, label: 'Documentbeheer', href: '/b2b-documenten' },
  { icon: Settings, label: 'Instellingen', href: '/b2b-instellingen' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 bg-white border-r border-gray-200 md:flex flex-col">
      <div className="p-6">
        <Link href="/b2b" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hOrLcbLZSnsAmevObVstEN6lxXlMcI.png"
            alt="CleanLease Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
              pathname === item.href
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <User className="h-8 w-8 rounded-full bg-gray-200 p-1" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Ziekenhuis Amsterdam</p>
          </div>
          <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
        </div>
      </div>
    </aside>
  )
}