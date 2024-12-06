'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Truck, FileText, AlertTriangle, Calendar, Phone, Mail, Home, Info, Settings, Eye, XCircle, Save } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function AccountOverview() {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { toast } = useToast()

  const handleButtonClick = (action: string) => {
    toast({
      title: "Actie voltooid",
      description: `De actie "${action}" is succesvol uitgevoerd.`,
    })
  }

  const handleSave = (type: 'preferences' | 'info') => {
    toast({
      title: type === 'preferences' ? "Voorkeuren opgeslagen" : "Gegevens bijgewerkt",
      description: type === 'preferences' ? "Uw notificatie-instellingen zijn succesvol opgeslagen." : "Uw persoonlijke gegevens zijn succesvol bijgewerkt.",
      action: <ToastAction altText="Sluiten">Sluiten</ToastAction>,
    })
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Account Overzicht</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
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
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {isEditing ? (
                      <div className="flex space-x-2 w-full">
                        <Input defaultValue="Jan" placeholder="Voornaam" />
                        <Input defaultValue="de Vries" placeholder="Achternaam" />
                      </div>
                    ) : (
                      <span>Jan de Vries</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {isEditing ? (
                      <Input type="email" defaultValue="jan.devries@email.nl" placeholder="E-mailadres" className="w-full" />
                    ) : (
                      <span>jan.devries@email.nl</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {isEditing ? (
                      <Input type="tel" defaultValue="06-12345678" placeholder="Telefoonnummer" className="w-full" />
                    ) : (
                      <span>06-12345678</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    {isEditing ? (
                      <div className="flex space-x-2 w-full">
                        <Input defaultValue="De Boog" placeholder="Zorginstelling" className="w-1/2" />
                        <Input defaultValue="23-A" placeholder="Kamernummer" className="w-1/2" />
                      </div>
                    ) : (
                      <span>Zorginstelling De Boog, Kamer 23-A</span>
                    )}
                  </div>
                  <Button onClick={() => {
                    if (isEditing) {
                      handleButtonClick("Persoonlijke gegevens opgeslagen");
                    } else {
                      handleButtonClick("Gegevens bewerken gestart");
                    }
                    setIsEditing(!isEditing);
                  }}>
                    {isEditing ? 'Wijzigingen Opslaan' : 'Gegevens Bewerken'}
                  </Button>
                </div>
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
                <Button variant="outline" onClick={() => handleButtonClick("Servicepakket Details Bekijken")}>Servicepakket Details Bekijken</Button>
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
                    <Button variant="outline" onClick={() => handleButtonClick("Details Bekijken")}>Details Bekijken</Button>
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
                      <Input type="date" id="endDate" className="w-full" />
                    </div>
                    <p className="text-sm text-muted-foreground">Let op: er geldt een opzegtermijn van 30 dagen.</p>
                    <Button type="submit" variant="destructive" onClick={() => handleButtonClick("Service beëindiging aangevraagd")}>
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
          <div className="grid gap-6 md:grid-cols-2">
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
        <Button onClick={() => handleButtonClick("Notificatie voorkeuren opgeslagen")} className="w-full">
          <Save className="mr-2 h-4 w-4" />
          Voorkeuren Opslaan
        </Button>
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle className="text-xl flex items-center">
        <Info className="mr-2 h-5 w-5" />
        Voorbeeld Notificaties
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">SMS Voorbeeld</h3>
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm">CleanLease: Uw was wordt morgen tussen 09:00 en 11:00 opgehaald. Zorg ervoor dat uw wasgoed klaar staat. Vragen? Bel 0800-1234567</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">E-mail Voorbeeld</h3>
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm font-semibold">Onderwerp: Uw CleanLease wasservice voor morgen</p>
            <p className="text-sm mt-2">Beste heer/mevrouw De Vries,</p>
            <p className="text-sm mt-2">Wij herinneren u eraan dat uw was morgen tussen 09:00 en 11:00 wordt opgehaald. Zorgt u ervoor dat uw wasgoed klaar staat?</p>
            <p className="text-sm mt-2">Met vriendelijke groet,<br />Het CleanLease Team</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
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
                  <Button variant="outline" onClick={() => handleButtonClick("Bekijk Volledige Kalender")}>Bekijk Volledige Kalender</Button>
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
                  <Button variant="outline" onClick={() => handleButtonClick("Alle Meldingen Bekijken")}>Alle Meldingen Bekijken</Button>
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
                      <Button variant="outline" size="sm" onClick={() => handleButtonClick("Factuur #INV-2024-11 bekijken")}>Bekijk</Button>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Factuur #INV-2024-10</p>
                      <p className="text-sm text-muted-foreground">1 oktober 2024</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-4 text-green-600 font-medium">€72,50</span>
                      <Button variant="outline" size="sm" onClick={() => handleButtonClick("Factuur #INV-2024-10 bekijken")}>Bekijk</Button>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleButtonClick("Alle Facturen Bekijken")}>Alle Facturen Bekijken</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}