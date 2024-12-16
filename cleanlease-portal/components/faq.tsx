import Link from "next/link"
import { Phone, Search, FileText, HelpCircle, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Veelgestelde vragen</h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Zoek in veelgestelde vragen..." />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Mijn Waslijn</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Hoe kan ik contact opnemen met de klantenservice?</AccordionTrigger>
                    <AccordionContent>
                      U kunt contact opnemen met onze klantenservice via:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Telefoon: 0800-1234567 (ma-vr 8:00-17:00)</li>
                        <li>E-mail: service@cleanlease.nl</li>
                        <li>Het contactformulier op onze website</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Hoe moet ik mijn was aanbieden?</AccordionTrigger>
                    <AccordionContent>
                      Sorteer uw was volgens de instructies en plaats deze in de daarvoor bestemde waszakken. Zorg ervoor dat alle zakken goed zijn afgesloten en voorzien zijn van uw naamlabel.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Op welke dag wordt mijn was opgehaald?</AccordionTrigger>
                    <AccordionContent>
                      De ophaaldag is afhankelijk van uw locatie en wordt bij aanvang van de service met u afgesproken. U kunt uw vaste ophaaldag terugvinden in uw account onder &apos;Ophaalschema&apos;.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Hoe vaak wordt mijn was opgehaald en weer teruggebracht?</AccordionTrigger>
                    <AccordionContent>
                      Standaard wordt uw was wekelijks opgehaald en teruggebracht. Andere frequenties zijn mogelijk in overleg met onze klantenservice.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Factuurinhoud en bedragen</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="billing-1">
                    <AccordionTrigger>Mijn factuur is hoger dan het plafondbedrag. Hoe kan dit?</AccordionTrigger>
                    <AccordionContent>
                      Dit kan verschillende oorzaken hebben, zoals extra services of meer wasgoed dan gebruikelijk. Neem contact op met onze klantenservice voor een gedetailleerde uitleg van uw factuur.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="billing-2">
                    <AccordionTrigger>Het bedrag/aantal stuks op de factuur klopt niet.</AccordionTrigger>
                    <AccordionContent>
                      Controleer eerst uw waslijst en leveringsbon. Als u een verschil ontdekt, neem dan contact op met onze klantenservice. Zij kunnen de factuur voor u nakijken en indien nodig corrigeren.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Opzegging en wijzigingen</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="changes-1">
                    <AccordionTrigger>Waarom hanteren jullie een opzeggingstermijn?</AccordionTrigger>
                    <AccordionContent>
                      De opzegtermijn is nodig om onze dienstverlening en planning goed te kunnen organiseren. Dit helpt ons om de service voor alle klanten op hoog niveau te houden.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="changes-2">
                    <AccordionTrigger>
                      Ik wil na overlijden kleding schenken aan andere bewoners. Waar moet ik rekening mee houden?
                    </AccordionTrigger>
                    <AccordionContent>
                      Het schenken van kleding is mogelijk. Neem contact op met onze klantenservice voor de juiste procedure en voorwaarden.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="changes-3">
                    <AccordionTrigger>Waarom loopt de machtiging zo lang na opzegging door?</AccordionTrigger>
                    <AccordionContent>
                      De machtiging loopt door tot alle openstaande facturen zijn voldaan en de laatste services zijn afgerond. Dit voorkomt onduidelijkheden in de administratie.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Hulp nodig?
                </CardTitle>
                <CardDescription>
                  Onze klantenservice staat voor u klaar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Klantenservice
                </Button>
                <p className="text-sm text-gray-500">
                  Bereikbaar op werkdagen van 8:00 tot 17:00
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Downloads
                </CardTitle>
                <CardDescription>
                  Handige informatie en documenten
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="#"
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">CleanLease Vergoedingsprocedure 2024</p>
                    <p className="text-sm text-gray-500">PDF, 172 KB</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}