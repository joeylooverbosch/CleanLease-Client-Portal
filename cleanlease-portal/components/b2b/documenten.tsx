"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Sidebar from '@/components/Sidebar'
import Header from '@/components/b2b/Header'
import { Download, Eye, Trash2, Upload } from 'lucide-react'

// Sample document data
const documents = [
  {
    naam: "Serviceovereenkomst_2023.pdf",
    type: "PDF",
    grootte: "1.2 MB",
    datum: "2023-07-01"
  },
  {
    naam: "Factuur_juni_2023.pdf",
    type: "PDF",
    grootte: "245 KB",
    datum: "2023-07-05"
  },
  {
    naam: "Prijslijst_Q3_2023.xlsx",
    type: "Excel",
    grootte: "500 KB",
    datum: "2023-07-10"
  },
  {
    naam: "Kwaliteitsrapport_Q2_2023.docx",
    type: "Word",
    grootte: "750 KB",
    datum: "2023-07-15"
  },
  {
    naam: "Leveringsvoorwaarden_2023.pdf",
    type: "PDF",
    grootte: "980 KB",
    datum: "2023-07-20"
  }
]

const recentDocuments = [
  "Kwaliteitsrapport_Q2_2023.docx",
  "Factuur_juni_2023.pdf",
  "Prijslijst_Q3_2023.xlsx"
]

const documentCategories = [
  "Contracten en Overeenkomsten",
  "Facturen en Financiële Documenten",
  "Kwaliteitsrapporten",
  "Prijslijsten en Catalogi"
]

export default function Documentbeheer() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <Header searchPlaceholder="Zoek in documenten..." />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Documenten Overzicht</h1>
                <Button style={{ backgroundColor: '#005DAE' }}>
                  <Upload className="mr-2 h-4 w-4" />
                  Nieuw document uploaden
                </Button>
              </div>

              {/* Documents table */}
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naam</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grootte</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acties</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((doc, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.naam}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.grootte}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.datum}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon">
                                  <Eye className="h-4 w-4" style={{ color: '#005DAE' }} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" style={{ color: '#00B0D7' }} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Shared Documents */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Gedeelde Documenten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {recentDocuments.map((doc, index) => (
                        <Button key={index} className="w-full justify-between" variant="outline">
                          {doc}
                          <Download className="h-4 w-4" style={{ color: '#00B0D7' }} />
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Document Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Documentcategorieën</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {documentCategories.map((category, index) => (
                        <Button key={index} className="w-full justify-start" variant="outline">
                          {category}
                        </Button>
                      ))}
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

