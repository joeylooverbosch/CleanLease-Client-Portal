'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Truck, FileText, AlertTriangle, Calendar, Phone, Mail, Home, Info, Settings, Eye, XCircle } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AccountOverview() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Account Overzicht</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overzicht</TabsTrigger>
          <TabsTrigger value="notifications">Notificaties</TabsTrigger>
          <TabsTrigger value="laundry">Wasservice</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Persoonlijke Gegevens
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Voornaam</Label>
                        <Input id="firstName" defaultValue="Jan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Achternaam</Label>
                        <Input id="lastName" defaultValue="de Vries" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres</Label>
                      <Input id="email" type="email" defaultValue="jan.devries@email.nl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input id="phone" type="tel" defaultValue="06-12345678" />
                    </div>
                    <Button type="submit" onClick={() => setIsEditing(false)}>Opslaan</Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <p className="flex items-center"><User className="mr-2 h-4 w-4" /> Jan de Vries</p>
                    <p className="flex items-center"><Mail className="mr-2 h-4 w-4" /> jan.devries@email.nl</p>
                    <p className="flex items-center"><Phone className="mr-2 h-4 w-4" /> 06-12345678</p>
                    <p className="flex items-center"><Home className="mr-2 h-4 w-4" /> Zorginstelling De Boog, Kamer 23-A</p>
                    <Button onClick={() => setIsEditing(true)}>Contactgegevens Bijwerken</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  Account Informatie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Klant sinds: 1 januari 2023</p>
                <p className="flex items-center"><FileText className="mr-2 h-4 w-4" /> Klantnummer: CL-12345</p>
                <p className="flex items-center"><Settings className="mr-2 h-4 w-4" /> Servicepakket: Volledig Verzorgd</p>
                <Button variant="outline">Servicepakket Details Bekijken</Button>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-10 md:col-span-2">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Truck className="mr-2 h-5 w-5" />
                    Volgende Geplande Wasservice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-lg font-semibold">Maandag, 8 December 2024</p>
                      <p className="text-sm text-muted-foreground flex items-center mt-2">
                        <Eye className="mr-2 h-4 w-4" /> Ophalen: 09:00 - 11:00
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <Truck className="mr-2 h-4 w-4" /> Afleveren: 15:00 - 17:00
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4">Details Bekijken</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-7">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <XCircle className="mr-2 h-5 w-5" />
                    Service Beëindigen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reden voor beëindiging</Label>
                      <Select>
                        <SelectTrigger id="reason">
                          <SelectValue placeholder="Selecteer een reden" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deceased">Overlijden van de bewoner</SelectItem>
                          <SelectItem value="family-care">Familie neemt de was over</SelectItem>
                          <SelectItem value="unsatisfied">Ontevreden over de service</SelectItem>
                          <SelectItem value="other">Andere reden</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comments">Toelichting (optioneel)</Label>
                      <Textarea id="comments" placeholder="Geef hier eventueel een toelichting" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">Gewenste einddatum</Label>
                      <Input type="date" id="endDate" />
                    </div>
                    <p className="text-sm text-muted-foreground">Let op: er geldt een opzegtermijn van 30 dagen.</p>
                    <Button type="submit" variant="destructive">
                      <XCircle className="mr-2 h-4 w-4" />
                      Bevestig Beëindiging
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notificatie Voorkeuren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">E-mailnotificaties</Label>
                    <p className="text-sm text-muted-foreground">Ontvang updates via e-mail</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">SMS-notificaties</Label>
                    <p className="text-sm text-muted-foreground">Ontvang updates via SMS</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label>Notificaties voor:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="wasPickup" />
                      <Label htmlFor="wasPickup">Was ophalen herinnering</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="wasDelivery" />
                      <Label htmlFor="wasDelivery">Was afleveren melding</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="invoices" />
                      <Label htmlFor="invoices">Nieuwe facturen beschikbaar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="serviceUpdates" />
                      <Label htmlFor="serviceUpdates">Service updates en wijzigingen</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="laundry">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Wasschema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Uw vaste ophaaldag is: <strong>Maandag</strong></p>
                <p className="mb-4">Tijdvenster voor ophalen: <strong>09:00 - 11:00</strong></p>
                <p className="mb-4">Verwachte afleverdag: <strong>Woensdag</strong></p>
                <p>Tijdvenster voor afleveren: <strong>15:00 - 17:00</strong></p>
                <div className="mt-4">
                  <Button variant="outline">Bekijk Volledige Kalender</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Recente Meldingen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                    <div>
                      <p className="font-medium">Vermist item gemeld</p>
                      <p className="text-sm text-muted-foreground">23 november 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="mr-2 h-4 w-4 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium">Klacht opgelost</p>
                      <p className="text-sm text-muted-foreground">15 november 2024</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline">Alle Meldingen Bekijken</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Laatste Facturen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Factuur #INV-2024-11</p>
                      <p className="text-sm text-muted-foreground">1 november 2024</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-4 text-green-600 font-medium">€75,00</span>
                      <Button variant="outline" size="sm">Bekijk</Button>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Factuur #INV-2024-10</p>
                      <p className="text-sm text-muted-foreground">1 oktober 2024</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-4 text-green-600 font-medium">€72,50</span>
                      <Button variant="outline" size="sm">Bekijk</Button>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline">Alle Facturen Bekijken</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}