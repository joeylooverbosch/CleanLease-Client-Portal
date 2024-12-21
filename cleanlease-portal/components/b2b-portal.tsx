"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Sidebar from '@/components/Sidebar'
import Header from '@/components/b2b/Header'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, Package, BarChart2,  HelpCircle } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for charts
const orderData = [
  { month: "Jan", orders: 65 },
  { month: "Feb", orders: 59 },
  { month: "Mar", orders: 80 },
  { month: "Apr", orders: 81 },
  { month: "May", orders: 56 },
  { month: "Jun", orders: 55 },
]

const recentOrders = [
  { id: "ORD-2024-001", title: "Linnen Pakket Zorg", date: "10 Jan 2024", status: "In behandeling" },
  { id: "ORD-2024-002", title: "Werkkleding Horeca", date: "09 Jan 2024", status: "Verzonden" },
  { id: "ORD-2024-003", title: "Handdoeken Set", date: "08 Jan 2024", status: "Afgeleverd" },
]

export default function Dashboard() {
  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <Header searchPlaceholder="Zoek in dashboard..." />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Welkom terug</h1>
              
              {/* Stats overview */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Openstaande Issues</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{ color: '#005DAE' }}>3</div>
                    <p className="text-xs text-muted-foreground">2 hoge prioriteit</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Opgeloste Issues</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{ color: '#00B0D7' }}>28</div>
                    <p className="text-xs text-muted-foreground">Deze maand</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Klanttevredenheid</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{ color: '#005DAE' }}>98.5%</div>
                    <p className="text-xs text-muted-foreground">+0.5% t.o.v. vorige maand</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts section */}
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Issues Overzicht</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{
                      orders: {
                        label: "Issues",
                        color: "#005DAE",
                      },
                    }} className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={orderData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Bar dataKey="orders" fill="#005DAE" radius={[4, 4, 0, 0]} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent issues */}
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recente Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Referentie</TableHead>
                          <TableHead>Omschrijving</TableHead>
                          <TableHead>Datum</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.title}</TableCell>
                            <TableCell>{order.date}</TableCell>
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
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Support and Documentation */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      style={{ borderColor: '#005DAE', color: '#005DAE' }}
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Open support ticket
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      style={{ borderColor: '#00B0D7', color: '#00B0D7' }}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Bekijk veelgestelde vragen
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Onze klantenservice staat voor u klaar op werkdagen van 8:00 tot 17:00.
                    </p>
                    <Button 
                      className="w-full"
                      style={{ backgroundColor: '#005DAE' }}
                    >
                      Contact opnemen
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