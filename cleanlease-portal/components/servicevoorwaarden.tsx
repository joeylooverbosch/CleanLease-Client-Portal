'use client'

import { Info } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiceVoorwaarden() {
  return (
    <div className="container mx-auto py-6">
      <div className="grid gap-6">
        <div>
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center text-xl">
                <Info className="mr-2 h-5 w-5 text-blue-500" />
                Servicevoorwaarden
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Algemene Voorwaarden</h3>
                  <p className="text-gray-600">
                    Bij het gebruik van onze diensten gaat u akkoord met de onderstaande voorwaarden. Neem de tijd om deze zorgvuldig door te lezen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Belangrijke Regels</h3>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Onze diensten zijn uitsluitend bedoeld voor persoonlijk en zakelijk gebruik.</li>
                    <li>Het is verboden om onze diensten te gebruiken voor illegale activiteiten.</li>
                    <li>Eventuele schadeclaims dienen binnen 30 dagen te worden ingediend.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Privacy en Gegevensbescherming</h3>
                  <p className="text-gray-600">
                    Uw persoonlijke gegevens worden strikt vertrouwelijk behandeld. Raadpleeg ons privacybeleid voor meer informatie over hoe we uw gegevens gebruiken.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Annuleringen en Restituties</h3>
                  <p className="text-gray-600">
                    Diensten kunnen tot 48 uur van tevoren worden geannuleerd voor een volledige restitutie. Na deze periode wordt een administratiekosten in rekening gebracht.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Wijzigingen aan Voorwaarden</h3>
                  <p className="text-gray-600">
                    Wij behouden ons het recht voor om deze voorwaarden op elk moment aan te passen. Controleer deze pagina regelmatig voor updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
