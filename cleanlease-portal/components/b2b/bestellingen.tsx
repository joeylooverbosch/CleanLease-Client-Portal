"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/b2b/Header'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileText, Package, Filter, Download } from 'lucide-react'
import Sidebar from '@/components/Sidebar'

const orders = [
  { id: "ORD-2024-001", date: "2024-01-15", client: "Ziekenhuis Amsterdam", items: "Linnen Pakket Zorg", status: "In behandeling", total: "€1,250.00" },
  { id: "ORD-2024-002", date: "2024-01-14", client: "Hotel Luxe", items: "Handdoeken Set", status: "Verzonden", total: "€750.50" },
  { id: "ORD-2024-003", date: "2024-01-13", client: "Restaurant Gourmet", items: "Werkkleding Horeca", status: "Afgeleverd", total: "€500.00" },
  { id: "ORD-2024-004", date: "2024-01-12", client: "Sportclub Fit", items: "Sporthanddoeken", status: "In behandeling", total: "€300.00" },
  { id: "ORD-2024-005", date: "2024-01-11", client: "Kantoor Pro", items: "Schoonmaakpakket", status: "Verzonden", total: "€180.00" },
]

export default function Bestellingen() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
    <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <Header searchPlaceholder="Zoek in bestellingen..." />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Bestellingen</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Bestellingen Overzicht</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter op status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Alle statussen</SelectItem>
                          <SelectItem value="in-behandeling">In behandeling</SelectItem>
                          <SelectItem value="verzonden">Verzonden</SelectItem>
                          <SelectItem value="afgeleverd">Afgeleverd</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Geavanceerd filter
                      </Button>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Exporteer
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bestelnummer</TableHead>
                        <TableHead>Datum</TableHead>
                        <TableHead>Klant</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Totaal</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell>
                            <span 
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === 'Afgeleverd' 
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'Verzonden'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">{order.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Besteloverzicht</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Totaal bestellingen</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">152</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Openstaand</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">7</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Populaire Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>1. Linnen Pakket Zorg</span>
                        <span className="text-sm text-gray-500">32%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>2. Handdoeken Set</span>
                        <span className="text-sm text-gray-500">28%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>3. Werkkleding Horeca</span>
                        <span className="text-sm text-gray-500">15%</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Snelle Acties</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      style={{ borderColor: '#005DAE', color: '#005DAE' }}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Bekijk leveringsschema
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      style={{ borderColor: '#00B0D7', color: '#00B0D7' }}
                    >
                      <Package className="mr-2 h-4 w-4" />
                      Traceer zending
                    </Button>
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