"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, FileText, HelpCircle, Menu, Plus, Search, Truck, User } from 'lucide-react'
import Link from "next/link"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for charts
const orderData = [
  { month: "Jan", orders: 65 },
  { month: "Feb", orders: 59 },
  { month: "Mar", orders: 80 },
  { month: "Apr", orders: 81 },
  { month: "May", orders: 56 },
  { month: "Jun", orders: 55 },
  { month: "Jul", orders: 40 },
]

const clientData = [
  { month: "Jan", clients: 200 },
  { month: "Feb", clients: 250 },
  { month: "Mar", clients: 300 },
  { month: "Apr", clients: 350 },
  { month: "May", clients: 400 },
  { month: "Jun", clients: 450 },
  { month: "Jul", clients: 500 },
]

const serviceTypeData = [
  { name: "Laundry", value: 400 },
  { name: "Dry Cleaning", value: 300 },
  { name: "Alterations", value: 200 },
  { name: "Other", value: 100 },
]

const clientAcquisitionData = [
  { month: "Jan", newClients: 20 },
  { month: "Feb", newClients: 25 },
  { month: "Mar", newClients: 30 },
  { month: "Apr", newClients: 35 },
  { month: "May", newClients: 40 },
  { month: "Jun", newClients: 45 },
  { month: "Jul", newClients: 50 },
]

export default function B2BDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 overflow-y-auto bg-white md:block">
        <div className="px-4 py-4">
          <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hOrLcbLZSnsAmevObVstEN6lxXlMcI.png"
            alt="CleanLease Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
          </Link>
        </div>
        <nav className="mt-5 px-2">
          <a href="#" className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white" style={{ backgroundColor: '#005DAE' }}>
            Dashboard
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
            Orders
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
            Reports
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden">
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-shrink-0 flex items-center">
                  {/* Mobile logo */}
                  <Image
                    src="/placeholder.svg"
                    alt="CleanLease"
                    width={32}
                    height={32}
                    className="block h-8 w-auto md:hidden"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Button size="sm" style={{ backgroundColor: '#00B0D7', color: 'white' }}>
                    <Plus className="h-5 w-5 mr-1" />
                    New Order
                  </Button>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Bell className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="ml-3 relative">
                    <div>
                      <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-haspopup="true">
                        <Image
                          src="/placeholder.svg"
                          alt="User"
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
            
            {/* Quick stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" style={{ color: '#005DAE' }}>1,284</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Deliveries</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" style={{ color: '#00B0D7' }}>32</div>
                  <p className="text-xs text-muted-foreground">-4% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" style={{ color: '#005DAE' }}>573</div>
                  <p className="text-xs text-muted-foreground">+18 new this month</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Order Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    orders: {
                      label: "Orders",
                      color: "#005DAE",
                    },
                  }} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={orderData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Bar dataKey="orders" fill="#005DAE" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Active Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    clients: {
                      label: "Clients",
                      color: "#00B0D7",
                    },
                  }} className="h-[300px] w-[460px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={clientData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Line type="monotone" dataKey="clients" stroke="#00B0D7" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Additional graphs */}
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Order Distribution by Service Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    value: {
                      label: "Orders",
                      color: "#005DAE",
                    },
                  }} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={serviceTypeData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#005DAE" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client Acquisition Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    newClients: {
                      label: "New Clients",
                      color: "#00B0D7",
                    },
                  }} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={clientAcquisitionData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Line type="monotone" dataKey="newClients" stroke="#00B0D7" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent activity and quick actions */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>You have 3 unread notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { title: "New order received", description: "Order #12345 from Client A", time: "2 hours ago" },
                      { title: "Delivery completed", description: "Order #12340 delivered to Client B", time: "5 hours ago" },
                      { title: "Invoice paid", description: "Invoice #INV-001 paid by Client C", time: "1 day ago" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="ml-auto font-medium text-sm text-muted-foreground">{item.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and reports</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button style={{ backgroundColor: '#005DAE', color: 'white' }}>
                      <Truck className="mr-2 h-4 w-4" />
                      Track Order
                    </Button>
                    <Button variant="outline" style={{ borderColor: '#00B0D7', color: '#00B0D7' }}>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Report Issue
                    </Button>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Generate Report" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily Summary</SelectItem>
                        <SelectItem value="weekly">Weekly Report</SelectItem>
                        <SelectItem value="monthly">Monthly Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search orders" className="pl-8" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}