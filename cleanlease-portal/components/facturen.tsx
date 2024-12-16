import { Download, Search, CreditCard, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Component() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Facturen</h1>
          <p className="text-gray-600">Bekijk en beheer uw facturen en betalingsmethoden</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Factuuroverzicht</CardTitle>
                <CardDescription>
                  Alle facturen van de afgelopen 12 maanden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Filter op status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle facturen</SelectItem>
                        <SelectItem value="paid">Betaald</SelectItem>
                        <SelectItem value="pending">In afwachting</SelectItem>
                        <SelectItem value="overdue">Te laat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input className="pl-9" placeholder="Zoek facturen..." />
                    </div>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factuurnummer</TableHead>
                      <TableHead>Datum</TableHead>
                      <TableHead>Bedrag</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "F2024-001", date: "01/02/2024", amount: "€ 125,00", status: "Betaald" },
                      { id: "F2024-002", date: "15/01/2024", amount: "€ 145,50", status: "Betaald" },
                      { id: "F2024-003", date: "01/01/2024", amount: "€ 132,75", status: "Betaald" },
                      { id: "F2023-125", date: "15/12/2023", amount: "€ 118,25", status: "Betaald" },
                      { id: "F2023-124", date: "01/12/2023", amount: "€ 141,00", status: "Betaald" },
                    ].map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Betalingsmethode wijzigen</CardTitle>
                <CardDescription>
                  Kies uw voorkeursbetalingsmethode voor toekomstige facturen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="automatic" className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <RadioGroupItem value="automatic" id="automatic" />
                    <Label htmlFor="automatic" className="flex-1">
                      <div className="font-semibold">Automatische incasso</div>
                      <div className="text-sm text-gray-500">Het factuurbedrag wordt automatisch afgeschreven</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <RadioGroupItem value="manual" id="manual" />
                    <Label htmlFor="manual" className="flex-1">
                      <div className="font-semibold">Handmatige overboeking</div>
                      <div className="text-sm text-gray-500">U maakt zelf het bedrag over na ontvangst van de factuur</div>
                    </Label>
                  </div>
                </RadioGroup>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Voorkeur opslaan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Betaalgegevens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium">IBAN</div>
                  <div className="text-sm text-gray-500">NL02 INGB 0123 4567 89</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Ten name van</div>
                  <div className="text-sm text-gray-500">CleanLease B.V.</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Hulp nodig?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">
                  Heeft u vragen over uw factuur of betalingen? Neem contact op met onze klantenservice.
                </p>
                <Button className="w-full">Contact Klantenservice</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}