'use client'

import { ArrowLeft, CheckCircle2, Clock, Download, MessageCircle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from 'lucide-react'


export default function MeldingDetail() {
  return (
    
    <div className="container mx-auto py-6">


      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                Melding #M001 - Vermissing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Beschrijving</h3>
                  <p className="text-gray-600">
                    Blauwe handdoek, maat L, vermist na laatste wasbeurt op 15/11/2024.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4 border-b py-2">
                      <div className="text-sm text-gray-600">Datum ingediend</div>
                      <div className="text-sm">19/11/2024</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-b py-2">
                      <div className="text-sm text-gray-600">Type artikel</div>
                      <div className="text-sm">Handdoek</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-b py-2">
                      <div className="text-sm text-gray-600">Kleur</div>
                      <div className="text-sm">Blauw</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-b py-2">
                      <div className="text-sm text-gray-600">Maat</div>
                      <div className="text-sm">L</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-b py-2">
                      <div className="text-sm text-gray-600">Laatst gezien</div>
                      <div className="text-sm">15/11/2024 (laatste wasbeurt)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Status Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">Melding ontvangen</p>
                        <p className="text-sm text-gray-600">19/11/2024 14:30</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <Clock className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">In behandeling</p>
                        <p className="text-sm text-gray-600">20/11/2024 09:15</p>
                      </div>
                    </div>
                    <div className="flex items-start opacity-50">
                      <div className="flex-shrink-0 mr-4">
                        <CheckCircle2 className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium">Opgelost</p>
                        <p className="text-sm text-gray-600">Nog niet voltooid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="default">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact opnemen
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Rapport downloaden
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gerelateerde meldingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link 
                  href="#" 
                  className="block text-sm text-blue-600 hover:underline"
                >
                  #K002 - Klacht (Opgelost)
                </Link>
                <Link 
                  href="#" 
                  className="block text-sm text-blue-600 hover:underline"
                >
                  #S003 - Schade (In behandeling)
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}