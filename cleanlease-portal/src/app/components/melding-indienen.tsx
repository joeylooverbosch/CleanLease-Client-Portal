import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, ArrowLeft, Bell, CheckCircle, Clock, FileText, Globe, HelpCircle, MessageSquare, Paperclip, Send, User } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MeldingIndienen() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hOrLcbLZSnsAmevObVstEN6lxXlMcI.png"
              alt="CleanLease Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/facturen" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Facturen
            </Link>
            <Link href="/help" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Help
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
                <DropdownMenuItem>Profiel</DropdownMenuItem>
                <DropdownMenuItem>Instellingen</DropdownMenuItem>
                <DropdownMenuItem>Uitloggen</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar overzicht
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-yellow-500" />
                  Melding #M001 - Vermissing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Beschrijving</h3>
                    <p className="text-gray-700">Blauwe handdoek, maat L, vermist na laatste wasbeurt op 15/11/2024.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Details</h3>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Datum ingediend</TableCell>
                          <TableCell>19/11/2024</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Type artikel</TableCell>
                          <TableCell>Handdoek</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Kleur</TableCell>
                          <TableCell>Blauw</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Maat</TableCell>
                          <TableCell>L</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Laatst gezien</TableCell>
                          <TableCell>15/11/2024 (laatste wasbeurt)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Status Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">Melding ontvangen</p>
                          <p className="text-sm text-gray-500">19/11/2024 14:30</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">In behandeling</p>
                          <p className="text-sm text-gray-500">20/11/2024 09:15</p>
                        </div>
                      </div>
                      <div className="flex items-center opacity-50">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold">Opgelost</p>
                          <p className="text-sm text-gray-500">Nog niet voltooid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Updates en Opmerkingen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" alt="CleanLease Medewerker" />
                      <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">CleanLease Medewerker</h4>
                        <span className="text-sm text-gray-500">20/11/2024 10:30</span>
                      </div>
                      <p className="text-gray-700 mt-1">
                        We hebben uw melding ontvangen en zijn begonnen met het onderzoeken van de vermissing. We zullen contact opnemen met onze wasserij om te controleren of het item daar is aangetroffen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar-2.jpg" alt="Jan Jansen" />
                      <AvatarFallback>JJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Jan Jansen</h4>
                        <span className="text-sm text-gray-500">20/11/2024 14:45</span>
                      </div>
                      <p className="text-gray-700 mt-1">
                        Bedankt voor de update. Ik heb nog een vraag: is het mogelijk om te controleren of de handdoek misschien per ongeluk bij een andere klant terecht is gekomen?
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Textarea placeholder="Schrijf een reactie..." className="w-full" />
                    <div className="flex justify-between items-center mt-2">
                      <Button variant="outline" size="sm">
                        <Paperclip className="h-4 w-4 mr-2" />
                        Bijlage toevoegen
                      </Button>
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-2" />
                        Versturen
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Acties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact opnemen
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Rapport downloaden
                  </Button>
                  <Button variant="outline" className="w-full">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Veelgestelde vragen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Gerelateerde meldingen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      #K002 - Klacht (Opgelost)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      #S003 - Schade (In behandeling)
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

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
    </div>
  )
}