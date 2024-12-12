import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Globe, User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/b2c" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hOrLcbLZSnsAmevObVstEN6lxXlMcI.png"
            alt="CleanLease Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/b2c" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/was-overzicht" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Mijn Was
          </Link>
          <Link href="/meldingen" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Meldingen
          </Link>
          <Link href="/facturen" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Documenten
          </Link>
          <Link href="/facturen" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Facturen
          </Link>
          <Link href="/help" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="w-[100px]">
                <Globe className="mr-2 h-4 w-4" />
                NLD
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <span className="mr-2">🇳🇱</span> NLD
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇬🇧</span> ENG
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇫🇷</span> FRA
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/account-overzicht" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              <DropdownMenuItem>Profiel</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Instellingen</DropdownMenuItem>
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              <DropdownMenuItem>Uitloggen</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
