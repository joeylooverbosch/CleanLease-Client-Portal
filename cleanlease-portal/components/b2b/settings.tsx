"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from '@/components/Sidebar'
import Header from '@/components/b2b/Header'
import { Save, Lock, Database } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <Header searchPlaceholder="Zoek in instellingen..." />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Instellingen</h1>

              <Tabs defaultValue="account" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Meldingen</TabsTrigger>
                  <TabsTrigger value="security">Beveiliging</TabsTrigger>
                  <TabsTrigger value="data">Gegevenstoegang</TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Accountgegevens</CardTitle>
                      <CardDescription>Beheer uw accountinformatie en voorkeuren.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Bedrijfsnaam</Label>
                        <Input id="company-name" defaultValue="Voorbeeld B.V." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contactpersoon</Label>
                        <Input id="contact-name" defaultValue="Jan Jansen" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mailadres</Label>
                        <Input id="email" type="email" defaultValue="jan.jansen@voorbeeld.nl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoonnummer</Label>
                        <Input id="phone" type="tel" defaultValue="+31 6 12345678" />
                      </div>
                      <Button style={{ backgroundColor: '#005DAE' }}>
                        <Save className="mr-2 h-4 w-4" />
                        Wijzigingen opslaan
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meldingsvoorkeuren</CardTitle>
                      <CardDescription>Beheer hoe en wanneer u meldingen ontvangt.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>E-mailmeldingen</Label>
                          <p className="text-sm text-gray-500">Ontvang belangrijke updates via e-mail</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Leveringsbevestigingen</Label>
                          <p className="text-sm text-gray-500">Ontvang meldingen over leveringen</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Factuurherinneringen</Label>
                          <p className="text-sm text-gray-500">Ontvang herinneringen voor openstaande facturen</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Rapportmeldingen</Label>
                          <p className="text-sm text-gray-500">Ontvang meldingen wanneer nieuwe rapporten beschikbaar zijn</p>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Beveiligingsinstellingen</CardTitle>
                      <CardDescription>Beheer de beveiliging van uw account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Huidig wachtwoord</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nieuw wachtwoord</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Bevestig nieuw wachtwoord</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Tweefactorauthenticatie</Label>
                          <p className="text-sm text-gray-500">Verhoog de beveiliging van uw account</p>
                        </div>
                        <Switch />
                      </div>
                      <Button style={{ backgroundColor: '#005DAE' }}>
                        <Lock className="mr-2 h-4 w-4" />
                        Beveiligingsinstellingen bijwerken
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="data" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gegevenstoegang en -beheer</CardTitle>
                      <CardDescription>Beheer uw gegevenstoegang en -voorkeuren.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Gegevensexport</Label>
                          <p className="text-sm text-gray-500">Sta automatische export van uw gegevens toe</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>API-toegang</Label>
                          <p className="text-sm text-gray-500">Sta API-toegang toe voor integratie met uw systemen</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="api-key">API-sleutel</Label>
                        <Input id="api-key" defaultValue="uw-api-sleutel-hier" readOnly />
                      </div>
                      <Button style={{ backgroundColor: '#005DAE' }}>
                        <Database className="mr-2 h-4 w-4" />
                        Nieuwe API-sleutel genereren
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

