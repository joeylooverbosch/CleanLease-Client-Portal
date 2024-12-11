"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Building2, User, Loader2, WashingMachine, Shirt, Droplets, Wind, ShirtIcon as TShirt, FootprintsIcon as Socks, AnvilIcon as Iron } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [view, setView] = useState<"select" | "login">("select")
  const [accountType, setAccountType] = useState<"b2c" | "b2b" | null>(null)
  const router = useRouter()

  const handleAccountSelect = (type: "b2c" | "b2b") => {
    setAccountType(type)
    setView("login")
  }

  const handleBack = () => {
    setView("select")
    setAccountType(null)
  }

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (accountType) {
        router.push(`/${accountType}`)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4" style={{ backgroundImage: 'url(/images/banner-img-login.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Illustration and Icons */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              {/* Background pattern */}
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#small-grid)" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-grow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hOrLcbLZSnsAmevObVstEN6lxXlMcI.png"
                  alt="CleanLease Logo"
                  width={300}
                  height={80}
                  className="h-12 w-auto"
                />
                <p className="text-lg text-black-700 mb-8 mt-8">
                  Uw betrouwbare partner voor professionele wasservice
                </p>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <WashingMachine className="h-5 w-5 text-blue-500" />
                    </span>
                    Professionele wasservice
                  </p>
                  <p className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <Droplets className="h-5 w-5 text-blue-500" />
                    </span>
                    Milieuvriendelijke processen
                  </p>
                  <p className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <Shirt className="h-5 w-5 text-blue-500" />
                    </span>
                    Textielmanagement op maat
                  </p>
                </div>
              </div>
              {/* Animated laundry icons */}
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-around">
                  <WashingMachine className="h-12 w-12 text-blue-400 opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
                  <Wind className="h-10 w-10 text-blue-300 opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
                  <TShirt className="h-11 w-11 text-blue-500 opacity-20 animate-bounce" style={{ animationDuration: '3.5s' }} />
                  <Socks className="h-8 w-8 text-blue-400 opacity-20 animate-pulse" style={{ animationDuration: '4.5s' }} />
                  <Iron className="h-10 w-10 text-blue-300 opacity-20 animate-bounce" style={{ animationDuration: '3.2s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="md:w-1/2 p-8">
            <div className="w-full max-w-md mx-auto space-y-8">
              {view === "select" ? (
                <>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Welkom bij CleanLease</h2>
                    <p className="mt-2 text-gray-600">
                      Selecteer uw type account om door te gaan
                    </p>
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleAccountSelect("b2c")}
                      className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center">
                        <User className="h-6 w-6 text-blue-500 mr-3" />
                        <div className="text-left">
                          <p className="font-semibold">B2C Klant</p>
                          <p className="text-sm text-gray-500">Persoonlijke account</p>
                        </div>
                      </div>
                      <span className="text-blue-500">→</span>
                    </button>
                    <button
                      onClick={() => handleAccountSelect("b2b")}
                      className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center">
                        <Building2 className="h-6 w-6 text-blue-500 mr-3" />
                        <div className="text-left">
                          <p className="font-semibold">B2B Klant</p>
                          <p className="text-sm text-gray-500">Zakelijke account</p>
                        </div>
                      </div>
                      <span className="text-blue-500">→</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <button
                      onClick={handleBack}
                      className="mb-6 text-sm text-gray-500 hover:text-blue-500 flex items-center mx-auto"
                    >
                      ← Terug naar account selectie
                    </button>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {accountType === "b2c" ? "Persoonlijke Login" : "Zakelijke Login"}
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Log in op uw {accountType === "b2c" ? "persoonlijke" : "zakelijke"} account
                    </p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="email">
                          E-mailadres
                        </label>
                        <Input
                          id="email"
                          placeholder="naam@voorbeeld.nl"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="password">
                          Wachtwoord
                        </label>
                        <Input id="password" type="password" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                          Onthoud mij
                        </label>
                      </div>
                      <a className="text-sm text-blue-500 hover:text-blue-400" href="#">
                        Wachtwoord vergeten?
                      </a>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={handleLogin}
                      disabled={isLoading}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isLoading ? 'Inloggen...' : 'Inloggen'}
                    </Button>
                    
                    <div className="text-center">
                      <span className="text-sm text-gray-500">
                        Nog geen account?{" "}
                        <a className="text-blue-500 hover:text-blue-400" href="#">
                          Registreer nu
                        </a>
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}