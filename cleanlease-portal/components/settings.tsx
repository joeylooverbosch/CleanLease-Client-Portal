'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Eye, Lock, Globe, Bell, Smartphone, HardDrive, HelpCircle, FileText, Moon, Sun } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { useTheme } from 'next-themes'

export default function SettingsPage() {
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSave = (setting: string) => {
    toast({
      title: "Instelling opgeslagen",
      description: `De ${setting} instelling is succesvol bijgewerkt.`,
    })
  }

  const handleDarkModeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    handleSave('donkere modus')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-gray-100">
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Instellingen</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              Toegankelijkheid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="font-size">Lettergrootte</Label>
              <Slider
                id="font-size"
                min={12}
                max={24}
                step={1}
                defaultValue={[16]}
                onValueChange={() => handleSave('lettergrootte')}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="high-contrast" onCheckedChange={() => handleSave('hoog contrast')} />
              <Label htmlFor="high-contrast">Hoog contrast modus</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Taal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={() => handleSave('taal')}>
              <SelectTrigger>
                <SelectValue placeholder="Selecteer een taal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">Nederlands</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">French</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Privacy en Beveiliging
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="two-factor" onCheckedChange={() => handleSave('twee-factor authenticatie')} />
              <Label htmlFor="two-factor">Twee-factor authenticatie</Label>
            </div>
            <Button className="mr-2" variant="outline" onClick={() => handleSave('inloggeschiedenis')}>Inloggeschiedenis bekijken</Button>
            <Button variant="outline" onClick={() => handleSave('apparaatbeheer')}>Apparaatbeheer</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Communicatievoorkeuren
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="email-notifications" onCheckedChange={() => handleSave('e-mailnotificaties')} />
              <Label htmlFor="email-notifications">E-mailnotificaties</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="sms-notifications" onCheckedChange={() => handleSave('sms-notificaties')} />
              <Label htmlFor="sms-notifications">SMS-notificaties</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Smartphone className="mr-2 h-5 w-5" />
              App-gedrag
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={handleDarkModeToggle}
              />
              <Label htmlFor="dark-mode" className="flex items-center cursor-pointer">
                {theme === 'dark' ? (
                  <Moon className="mr-2 h-4 w-4" />
                ) : (
                  <Sun className="mr-2 h-4 w-4" />
                )}
                Donkere modus
              </Label>
            </div>
            <Select onValueChange={() => handleSave('startpagina')}>
              <SelectTrigger>
                <SelectValue placeholder="Kies startpagina" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="wasschema">Wasschema</SelectItem>
                <SelectItem value="facturen">Facturen</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <HardDrive className="mr-2 h-5 w-5" />
              Gegevens en Opslag
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="mr-2" variant="outline" onClick={() => handleSave('cache wissen')}>Cache wissen</Button>
            <Button variant="outline" onClick={() => handleSave('gegevensgebruik')}>Gegevensgebruik bekijken</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              Hulp & Ondersteuning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="mr-2" variant="outline" onClick={() => handleSave('FAQ')}>Veelgestelde vragen</Button>
            <Button className="mr-2" variant="outline" onClick={() => handleSave('contact')}>Contact opnemen</Button>
            <Button variant="outline" onClick={() => handleSave('ondersteuningsticket')}>Ondersteuningsticket aanmaken</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Juridisch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="mr-2" variant="outline" onClick={() => handleSave('gebruiksvoorwaarden')}>Gebruiksvoorwaarden</Button>
            <Button variant="outline" onClick={() => handleSave('privacybeleid')}>Privacybeleid</Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}