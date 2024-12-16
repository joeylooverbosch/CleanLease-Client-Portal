"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Shirt, Loader2, PhoneCall, AlertCircle, CheckCircle2, MapPin } from 'lucide-react'


// Kan later dynamisch opgehaald worden via API/MySQL
const currentLaundryStatus = {
  status: "In behandeling",
  items: "2 sets bedlinnen, 5 handdoeken, 3 kledingstukken",
  pickupDate: "2024-12-18",
  estimatedDelivery: "2024-12-22",
  location: "Utrecht, Nederland",
}

const upcomingSchedule = [
  { date: "2025-01-03", type: "Ophalen", time: "10:00 - 12:00" },
  { date: "2025-01-10", type: "Afleveren", time: "14:00 - 16:00" },
]

const recentHistory = [
  { id: 1, date: "2024-12-01", status: "Afgeleverd", items: "3 sets bedlinnen, 7 handdoeken" },
  { id: 2, date: "2024-11-24", status: "Afgeleverd", items: "4 kledingstukken, 2 sets bedlinnen" },
  { id: 3, date: "2024-11-17", status: "Afgeleverd", items: "6 handdoeken, 5 kledingstukken" },
]

export default function LaundryServiceTracking() {
  const [isLoading, setIsLoading] = useState(false)

  const handleContactService = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Een medewerker van de wasserij zal spoedig contact met u opnemen.")
    }, 1500)
  }

  return (
    <div className="bg-gray-100">
    <div className="container mx-auto p-4 space-y-6">
      {/* <h1 className="text-3xl font-bold text-gray-800">Wasserij Service Overzicht</h1> */}
      <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Overzicht Was</h1>
          <p className="text-gray-600">Bekijk en beheer uw was.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Huidige Wasstatus</CardTitle>
            <CardDescription>Uw was die momenteel in behandeling is</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
                <span className="font-semibold text-lg">{currentLaundryStatus.status}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shirt className="h-5 w-5 text-gray-500" />
                <span>{currentLaundryStatus.items}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span>Opgehaald op: {currentLaundryStatus.pickupDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span>Verwachte aflevering: {currentLaundryStatus.estimatedDelivery}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>Locatie: {currentLaundryStatus.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Locatie van Uw Was</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="google-map-code">
            <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=De%20Schakel%2030%20Eindhoven+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="600"
                height="450"
                style={{ border: 0 }}
                aria-hidden="false"
            />
        </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Aankomende Afspraken</CardTitle>
            <CardDescription>Geplande ophalingen en afleveringen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSchedule.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                  <div>
                    <p className="font-semibold">{appointment.type}</p>
                    <p className="text-sm text-gray-500">{appointment.date}</p>
                  </div>
                  <Badge variant={appointment.type === "Ophalen" ? "secondary" : "success"}>
                    {appointment.time}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Recente Geschiedenis</CardTitle>
            <CardDescription>Uw laatst afgeleverde was</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentHistory.map((delivery) => (
                <div key={delivery.id} className="flex items-start space-x-4 border-b pb-4 last:border-b-0">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{delivery.status} op {delivery.date}</p>
                    <p className="text-sm text-gray-500">{delivery.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Speciale Instructies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Allergieën en Voorkeuren</p>
                <p className="text-sm text-gray-500">Gebruik hypoallergeen wasmiddel. Geen wasverzachter voor handdoeken.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Contact Klantenservice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Heeft u vragen of opmerkingen? Neem contact op met onze klantenservice.</p>
            <Button onClick={handleContactService} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Even geduld...
                </>
              ) : (
                <>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Contact Opnemen
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}