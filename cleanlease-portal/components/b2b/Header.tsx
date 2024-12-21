"use client"

import React, { useState } from 'react'
import { Bell, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'

interface PageHeaderProps {
  searchPlaceholder: string;
}

export default function PageHeader({ searchPlaceholder }: PageHeaderProps) {
  const [hasNotification, setHasNotification] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleNotificationClick = () => {
    setHasNotification(false)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={searchPlaceholder}
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={handleNotificationClick}
                >
                  <Bell className="h-5 w-5 text-gray-500" />
                  {hasNotification && (
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4" align="end">
                <div className="space-y-4">
                  <Link href="/b2b-rapportages" className="flex items-start gap-4 group">
                    <div className="rounded-full bg-blue-100 p-2 group-hover:bg-blue-200 transition-colors">
                      <Bell className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Uw jaarrapportage voor 2024 staat klaar</p>
                      <p className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">Klik hier om de rapportage te bekijken</p>
                    </div>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}

