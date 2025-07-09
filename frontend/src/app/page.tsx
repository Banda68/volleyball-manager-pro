"use client"

import { Button } from "@/components/ui/button"
import { Volleyball, Users, Trophy, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
            <Volleyball className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">VolleyManager Pro</h1>
          <p className="text-xl text-blue-100 mb-2">Il gestionale #1 per la pallavolo italiana</p>
          <p className="text-lg text-blue-200 mb-8">Da S3 Minivolley alla Serie A1 - Gestisci tutto in una piattaforma</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/login'}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-4"
            >
              Accedi al Gestionale
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4"
            >
              Scopri le Funzionalità
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Gestione Atleti</h3>
            <p className="text-blue-100">Dalla registrazione S3 ai contratti professionali. Gestisci tessere FIPAV, certificati medici e documenti.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Competizioni Live</h3>
            <p className="text-blue-100">Live scoring, statistiche real-time, gestione tornei e campionati. Dall'amichevole alla Serie A1.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Analytics Avanzate</h3>
            <p className="text-blue-100">Statistiche performance, scouting professionale, crescita atleti e business intelligence.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-blue-200">
          <p>© 2025 VolleyManager Pro - Sviluppato per la FIPAV</p>
          <p className="mt-1">La piattaforma completa per società sportive pallavolistiche</p>
        </div>
      </div>
    </div>
  )
}