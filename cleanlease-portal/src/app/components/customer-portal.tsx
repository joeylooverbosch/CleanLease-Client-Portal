import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Settings, User, Search, FileText, HelpCircle, AlertTriangle, Bell, Phone, Truck, Download, Globe } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CustomerPortal() {
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

      <main>
        <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0">
            <svg
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1440 560"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  fill="rgba(59, 130, 246, 0.1)"
                  d="M1440 560H0V0C240 53.3 480 106.7 720 106.7C960 106.7 1200 53.3 1440 0V560Z"
                />
                <path
                  fill="rgba(59, 130, 246, 0.05)"
                  d="M1440 560H0V140C240 193.3 480 246.7 720 246.7C960 246.7 1200 193.3 1440 140V560Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="1440" height="560" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Welkom op het CleanLease Klantenportaal
              </h1>
              <p className="mb-8 text-xl text-gray-700">
                Uw persoonlijke serviceportaal voor het beheren van uw was, facturen en ondersteuning.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Meld een probleem
                </Button>
                <Button size="lg" variant="outline" className="bg-white">
                  <Truck className="mr-2 h-4 w-4" />
                  Volg uw bestelling
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 w-full"
                  type="search"
                  placeholder="Zoek in facturen, veelgestelde vragen of meld een probleem..."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  Melding indienen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="complaint" className="w-full">
                  <TabsList>
                    <TabsTrigger value="complaint">Klacht</TabsTrigger>
                    <TabsTrigger value="missing">Vermissing</TabsTrigger>
                    <TabsTrigger value="damage">Beschadiging</TabsTrigger>
                  </TabsList>
                  <TabsContent value="complaint">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                          Categorie
                        </label>
                        <select
                          id="category"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option>Kies een categorie</option>
                          <option>Transportklacht</option>
                          <option>Kwaliteitsklacht</option>
                          <option>Serviceklacht</option>
                          <option>Overig</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Onderwerp
                        </label>
                        <Input id="subject" className="mt-1" placeholder="Kort omschrijf uw klacht" />
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Beschrijving
                        </label>
                        <textarea
                          id="description"
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                          placeholder="Geef meer details over uw klacht"
                        />
                      </div>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Indienen
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="missing">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="item-description" className="block text-sm font-medium text-gray-700">
                          Beschrijving van het vermiste artikel
                        </label>
                        <Input id="item-description" className="mt-1" placeholder="Bijv. blauwe handdoek, maat L" />
                      </div>
                      <div>
                        <label htmlFor="item-type" className="block text-sm font-medium text-gray-700">
                          Type artikel
                        </label>
                        <select
                          id="item-type"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option>Gemerkt (geregistreerd)</option>
                          <option>Ongemerkt (niet geregistreerd)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="missing-photo" className="block text-sm font-medium text-gray-700">
                          Foto van het vermiste artikel (optioneel)
                        </label>
                        <input
                          type="file"
                          id="missing-photo"
                          accept="image/*"
                          className="mt-1 block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                        />
                      </div>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Vermissing melden
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="damage">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="damage-description" className="block text-sm font-medium text-gray-700">
                          Beschrijving van de schade
                        </label>
                        <textarea
                          id="damage-description"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                          placeholder="Geef een gedetailleerde beschrijving van de schade"
                        />
                      </div>
                      <div>
                        <label htmlFor="damage-photo" className="block text-sm font-medium text-gray-700">
                          Foto van de schade
                        </label>
                        <input
                          type="file"
                          id="damage-photo"
                          accept="image/*"
                          className="mt-1 block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="receipt" className="block text-sm font-medium text-gray-700">
                          Aankoopbon (optioneel)
                        </label>
                        <input
                          type="file"
                          id="receipt"
                          accept="image/*,.pdf"
                          className="mt-1 block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                        />
                      </div>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Schade melden
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                  Veel gestelde vragen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Hoe kan ik mijn factuur betalen?</AccordionTrigger>
                    <AccordionContent>
                      U kunt uw factuur betalen via bankoverschrijving of automatische incasso. Ga naar de factuurpagina voor meer details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Wanneer wordt mijn was opgehaald?</AccordionTrigger>
                    <AccordionContent>
                      Uw was wordt opgehaald volgens het schema dat u kunt vinden in uw accountinstellingen. Meestal is dit wekelijks op een vaste dag.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Hoe meld ik een verloren item?</AccordionTrigger>
                    <AccordionContent>
                      Gebruik het formulier &apos;Melding indienen&apos; en selecteer de optie &apos;Vermissing&apos;. Geef zoveel mogelijk details over het artikel, zoals maat en kleur. U kunt ook een foto toevoegen als u die heeft.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button variant="outline" className="mt-4 w-full">
                  Alle vragen bekijken
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  Uw recente meldingen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {[
                      { id: "#M001", date: "19/11/24", type: "Vermissing", status: "In behandeling" },
                      { id: "#K002", date: "15/11/24", type: "Klacht", status: "Opgelost" },
                      { id: "#S003", date: "10/11/24", type: "Schade", status: "In behandeling" },
                      { id: "#K004", date: "05/11/24", type: "Klacht", status: "Opgelost" },
                    ].map((melding) => (
                      <TableRow key={melding.id}>
                        <TableCell className="py-3">
                          <div className="text-sm font-medium text-gray-900">{melding.id}</div>
                          <div className="text-sm text-gray-600">
                            {melding.date} • {melding.type}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            melding.status === "In behandeling" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                          }`}>
                            {melding.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Details bekijken</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="outline" className="mt-4 w-full">
                  Alle meldingen bekijken
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-green-500" />
                  Uw recente facturen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {[
                      { id: "#992038", date: "19/11/24", items: "14", status: "Afwachting" },
                      { id: "#923058", date: "11/11/24", items: "11", status: "Betaald" },
                      { id: "#923338", date: "07/11/24", items: "21", status: "Betaald" },
                    ].map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="py-3">
                          <div className="text-sm font-medium text-gray-900">{invoice.id}</div>
                          <div className="text-sm text-gray-600">
                            {invoice.date} • {invoice.items} Artikelen
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            invoice.status === "Afwachting" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                          }`}>
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download invoice</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="outline" className="mt-4 w-full">
                  Alle facturen bekijken
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-blue-500" />
                  Uw laatste waslevering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-semibold">Bestelling #WL12345</h3>
                  <p className="text-sm text-gray-600">Verwachte levering: binnen 3-5 dagen</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <div className="w-1/4 text-right pr-4 text-sm text-gray-600">Ontvangen</div>
                      <div className="w-3/4">
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1/4 text-right pr-4 text-sm text-gray-600">In verwerking</div>
                      <div className="w-3/4">
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1/4 text-right pr-4 text-sm text-gray-600">Klaar voor verzending</div>
                      <div className="w-3/4">
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1/4 text-right pr-4 text-sm text-gray-600">Geleverd</div>
                      <div className="w-3/4">
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">Status: In verwerking bij Ergon</p>
                </div>
                <Button variant="outline" className="w-full">
                  Alle bestellingen bekijken
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <User className="mr-2 h-5 w-5 text-blue-500" />
                  Uw Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Link href="#" className="text-blue-600 hover:underline">Gegevens bijwerken</Link>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <Link href="#" className="text-blue-600 hover:underline">Notificaties beheren</Link>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <Link href="#" className="text-blue-600 hover:underline">Servicevoorwaarden bekijken</Link>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <Link href="#" className="text-blue-600 hover:underline">Dienst afmelden</Link>
                </div>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Klantenservice
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
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