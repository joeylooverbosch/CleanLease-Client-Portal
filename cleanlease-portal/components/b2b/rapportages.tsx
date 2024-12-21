"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Sidebar from '@/components/Sidebar'
import Header from '@/components/b2b/Header'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Download } from 'lucide-react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const monthlyData = [
  { month: "Jan", linnen: 4000, werkkleding: 2400, overig: 1000 },
  { month: "Feb", linnen: 3000, werkkleding: 1398, overig: 900 },
  { month: "Mar", linnen: 2000, werkkleding: 9800, overig: 1100 },
  { month: "Apr", linnen: 2780, werkkleding: 3908, overig: 1400 },
  { month: "May", linnen: 1890, werkkleding: 4800, overig: 1700 },
  { month: "Jun", linnen: 2390, werkkleding: 3800, overig: 1500 },
]

const kpiData = [
  { month: "Jan", leveringsbetrouwbaarheid: 98, kwaliteit: 95 },
  { month: "Feb", leveringsbetrouwbaarheid: 97, kwaliteit: 96 },
  { month: "Mar", leveringsbetrouwbaarheid: 99, kwaliteit: 97 },
  { month: "Apr", leveringsbetrouwbaarheid: 98, kwaliteit: 95 },
  { month: "May", leveringsbetrouwbaarheid: 97, kwaliteit: 96 },
  { month: "Jun", leveringsbetrouwbaarheid: 98, kwaliteit: 98 },
]

export default function Rapportages() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
       <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <Header searchPlaceholder="Zoek in rapportages..." />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Rapportages</h1>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="month">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecteer periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Deze maand</SelectItem>
                      <SelectItem value="quarter">Dit kwartaal</SelectItem>
                      <SelectItem value="year">Dit jaar</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Aangepaste datum
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Verbruik per Productcategorie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="linnen" fill="#005DAE" name="Linnen" />
                        <Bar dataKey="werkkleding" fill="#00B0D7" name="Werkkleding" />
                        <Bar dataKey="overig" fill="#7CDDEE" name="Overig" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>KPI&apos;s</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={kpiData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="leveringsbetrouwbaarheid" stroke="#005DAE" name="Leveringsbetrouwbaarheid" />
                        <Line type="monotone" dataKey="kwaliteit" stroke="#00B0D7" name="Kwaliteit" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Totaal Verbruik</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#005DAE' }}>245,000 stuks</div>
                    <p className="text-sm text-gray-500">Totaal deze maand</p>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Groei</span>
                        <span className="text-sm font-medium text-green-600">+5.25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Leveringsbetrouwbaarheid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#00B0D7' }}>98.5%</div>
                    <p className="text-sm text-gray-500">Gemiddelde deze maand</p>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Verbetering</span>
                        <span className="text-sm font-medium text-green-600">+0.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Kwaliteitsscore</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#7CDDEE' }}>96.8%</div>
                    <p className="text-sm text-gray-500">Gemiddelde deze maand</p>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Verbetering</span>
                        <span className="text-sm font-medium text-green-600">+0.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Beschikbare Rapporten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-between" variant="outline">
                        Maandelijks Verbruiksoverzicht
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        Kwartaal KPI Rapport
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        Jaarlijkse Kostenanalyse
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        Duurzaamheidsrapport
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}