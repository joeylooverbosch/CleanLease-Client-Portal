"use client";

import { Card, CardHeader, CardContent, CardTitle } from './ui/card'; // Assuming your UI components are structured like this.
import { User, Building } from 'lucide-react'; // Icons from Lucide or similar.
import Link from "next/link";

export default function LoginRegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-gray-900">Welkom bij CleanLease</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-700 mb-6">Selecteer uw type account om door te gaan.</p>
          <div className="space-y-4">
            <button
              className="flex w-full items-center justify-between rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
              onClick={() => console.log('Navigate to B2C Login/Register')}
            >
              <div className="flex items-center">
                <User className="mr-3 h-6 w-6 text-blue-500" />
                <Link href="/b2c" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                <span className="font-medium">B2C Klant</span>
                </Link>
              </div>
              <span className="text-sm text-gray-500">Persoonlijke account</span>
            </button>
            <button
              className="flex w-full items-center justify-between rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
              onClick={() => console.log('Navigate to B2B Login/Register')}
            >
              <div className="flex items-center">
                <Building className="mr-3 h-6 w-6 text-green-500" />
                <span className="font-medium">B2B Klant</span>
              </div>
              <span className="text-sm text-gray-500">Zakelijke account</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
