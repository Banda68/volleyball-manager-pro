"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Lock, Volleyball } from 'lucide-react'

  export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  
  // Validazione semplice
  if (email && password) {
    setTimeout(() => {
      setIsLoading(false)
      // Reindirizzamento diretto che funziona
      window.location.href = '/dashboard'
    }, 1000)
  } else {
    setIsLoading(false)
    alert('Inserisci email e password')
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center p-4">
      {/* Background decorativo semplificato */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
            <Volleyball className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">VolleyManager Pro</h1>
          <p className="text-blue-100">Il gestionale #1 per la pallavolo italiana</p>
          <p className="text-blue-200 text-sm mt-1">Da S3 Minivolley alla Serie A1</p>
        </div>

        {/* Card Login */}
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Accedi alla tua società
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Inserisci le credenziali per accedere al gestionale
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Campo Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="presidente@societavolley.it"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              {/* Campo Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              {/* Link Password Dimenticata */}
              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Password dimenticata?
                </a>
              </div>

              {/* Bottone Login */}
              <Button 
                type="submit" 
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Accesso in corso...</span>
                  </div>
                ) : (
                  'Accedi al Gestionale'
                )}
              </Button>
            </form>

            {/* Separatore */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">oppure</span>
              </div>
            </div>

            {/* Registrazione */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Non hai ancora un account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                  Registra la tua società
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-blue-200 text-xs">
          <p>© 2025 VolleyManager Pro - Sviluppato per la FIPAV</p>
          <p className="mt-1">Gestione completa società sportive pallavolistiche</p>
        </div>
      </div>
    </div>
  )
}