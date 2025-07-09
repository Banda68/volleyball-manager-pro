"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Trophy, Calendar, Volleyball, Medal, Clock, AlertTriangle } from 'lucide-react'

export default function DashboardPage() {
  // Dati di esempio per la società
  const societyData = {
    name: "ASD Pallavolo Roma",
    fipavCode: "RM001",
    totalAthletes: 156,
    totalTeams: 12,
    activeCompetitions: 8
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Volleyball className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VolleyManager Pro</h1>
                <p className="text-sm text-gray-600">{societyData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-blue-600">
                Codice FIPAV: {societyData.fipavCode}
              </Badge>
              <Badge className="bg-green-100 text-green-800">Attiva</Badge>
              <button 
                onClick={() => window.location.href = '/login'}
                className="ml-2 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Cards Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atleti Totali</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{societyData.totalAthletes}</div>
              <p className="text-xs text-muted-foreground">+12% rispetto al mese scorso</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Squadre Attive</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{societyData.totalTeams}</div>
              <p className="text-xs text-muted-foreground">Tutte le categorie da S3 a Senior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competizioni</CardTitle>
              <Medal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{societyData.activeCompetitions}</div>
              <p className="text-xs text-muted-foreground">Campionati e tornei attivi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prossime Partite</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Nei prossimi 7 giorni</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Panoramica</TabsTrigger>
            <TabsTrigger value="athletes">Atleti</TabsTrigger>
            <TabsTrigger value="matches">Partite</TabsTrigger>
            <TabsTrigger value="teams">Squadre</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attività Recenti</CardTitle>
                <CardDescription>Ultime attività della società</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Nuovo atleta tesserato</p>
                      <p className="text-xs text-gray-500">Marco Rossi - Under 16 M</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Partita completata</p>
                      <p className="text-xs text-gray-500">Under 14 F vince 3-1</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Certificato in scadenza</p>
                      <p className="text-xs text-gray-500">3 atleti - Rinnovo entro 15 giorni</p>
                    </div>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="athletes" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Gestione Atleti</h2>
                <p className="text-gray-600">Tutti gli atleti della società per categoria</p>
              </div>
              <Button 
                onClick={() => window.location.href = '/atleti/registra'}
                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Registra Nuovo Atleta S3</span>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Atleti per Categoria</CardTitle>
                <CardDescription>156 atleti totali registrati</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <div>
                      <h3 className="font-medium flex items-center space-x-2">
                        <Volleyball className="w-5 h-5 text-purple-600" />
                        <span>S3 Minivolley</span>
                      </h3>
                      <p className="text-sm text-gray-600">6-10 anni - La base della pallavolo</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-purple-100 text-purple-800 text-lg px-3 py-1">25 bambini</Badge>
                      <p className="text-xs text-gray-500 mt-1">Primo e secondo livello</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Under 12-16</h3>
                      <p className="text-sm text-gray-600">Categorie giovanili</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">83 atleti</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Senior</h3>
                      <p className="text-sm text-gray-600">Serie C e Prima Divisione</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">48 atleti</Badge>
                  </div>
                </div>

                {/* Lista atleti S3 di esempio */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-3 text-purple-800">Ultimi Atleti S3 Registrati:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { name: "Emma Bianchi", age: 7, parent: "Maria Bianchi", category: "S3 Primo" },
                      { name: "Luca Rossi", age: 6, parent: "Paolo Rossi", category: "S3 Primo" },
                      { name: "Sofia Verde", age: 8, parent: "Anna Verde", category: "S3 Secondo" },
                      { name: "Marco Blu", age: 9, parent: "Luigi Blu", category: "S3 Secondo" }
                    ].map((athlete, index) => (
                      <div key={index} className="p-3 border rounded-lg bg-purple-50">
                        <div className="font-medium text-purple-900">{athlete.name}</div>
                        <div className="text-sm text-gray-600">{athlete.age} anni - {athlete.category}</div>
                        <div className="text-xs text-gray-500">Genitore: {athlete.parent}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Prossime Partite</CardTitle>
                <CardDescription>Calendario partite della settimana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">Under 16 F</Badge>
                      <span className="text-sm">vs Volley Lazio</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Sabato 15:00</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">Serie C M</Badge>
                      <span className="text-sm">vs Roma Nord</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Domenica 18:00</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Le tue Squadre</CardTitle>
                <CardDescription>12 squadre attive della società</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">S3 Minivolley</h3>
                    <p className="text-sm text-gray-600">25 bambini</p>
                    <Badge variant="outline" className="mt-2">Anna Belli</Badge>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Under 16 Femminile</h3>
                    <p className="text-sm text-gray-600">12 atlete</p>
                    <Badge variant="outline" className="mt-2">Elena Neri</Badge>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Serie C Maschile</h3>
                    <p className="text-sm text-gray-600">15 atleti</p>
                    <Badge variant="outline" className="mt-2">Roberto Grigi</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}