"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Volleyball, ArrowLeft, Save, Users, Calendar, Phone, Mail } from 'lucide-react'

export default function RegistraAtletaPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Dati bambino
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    birthPlace: '',
    
    // Dati famiglia
    parent1Name: '',
    parent1Phone: '',
    parent1Email: '',
    parent1Relationship: 'mother',
    parent2Name: '',
    parent2Phone: '',
    parent2Email: '',
    parent2Relationship: 'father',
    
    // Altri dati
    medicalCertificate: '',
    notes: '',
    category: 'S3_PRIMO_LIVELLO_MIXED'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simuliamo il salvataggio
    console.log('Dati atleta S3:', formData)
    
    setTimeout(() => {
      setIsLoading(false)
      alert(`🎉 Atleta registrato con successo!\n\n${formData.firstName} ${formData.lastName} è stato iscritto al Minivolley S3!`)
      
      // Reset form
      setFormData({
        firstName: '', lastName: '', birthDate: '', gender: '', birthPlace: '',
        parent1Name: '', parent1Phone: '', parent1Email: '', parent1Relationship: 'mother',
        parent2Name: '', parent2Phone: '', parent2Email: '', parent2Relationship: 'father',
        medicalCertificate: '', notes: '', category: 'S3_PRIMO_LIVELLO_MIXED'
      })
    }, 1500)
  }

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return ''
    const today = new Date()
    const birth = new Date(birthDate)
    const age = today.getFullYear() - birth.getFullYear()
    return age
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => window.location.href = '/dashboard'}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Torna alla Dashboard</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-lg">
                  <Volleyball className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Registrazione Atleta</h1>
                  <p className="text-sm text-gray-600">S3 Minivolley (6-10 anni)</p>
                </div>
              </div>
            </div>
            <Badge className="bg-purple-100 text-purple-800">S3 Minivolley</Badge>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Dati Bambino */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>Dati del Bambino/a</span>
              </CardTitle>
              <CardDescription>
                Informazioni anagrafiche del piccolo atleta (6-10 anni)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Nome e Cognome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Marco"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Cognome *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Rossi"
                    required
                  />
                </div>
              </div>

              {/* Data nascita e sesso */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Data di Nascita *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    min="2014-01-01"
                    max="2019-12-31"
                    required
                  />
                  {formData.birthDate && (
                    <p className="text-xs text-purple-600">
                      Età: {calculateAge(formData.birthDate)} anni
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label>Sesso *</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MALE">Maschio</SelectItem>
                      <SelectItem value="FEMALE">Femmina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Categoria S3</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S3_PRIMO_LIVELLO_MIXED">S3 Primo Livello (6-8 anni)</SelectItem>
                      <SelectItem value="S3_SECONDO_LIVELLO_MIXED">S3 Secondo Livello (8-10 anni)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Luogo nascita */}
              <div className="space-y-2">
                <Label htmlFor="birthPlace">Luogo di Nascita</Label>
                <Input
                  id="birthPlace"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                  placeholder="Roma (RM)"
                />
              </div>
            </CardContent>
          </Card>

          {/* Dati Genitori */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Contatti Famiglia</span>
              </CardTitle>
              <CardDescription>
                Dati di contatto dei genitori (obbligatori per minorenni)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Genitore 1 */}
              <div className="border rounded-lg p-4 bg-blue-50">
                <h3 className="font-semibold text-blue-800 mb-4">Primo Genitore/Tutore *</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome Completo *</Label>
                    <Input
                      value={formData.parent1Name}
                      onChange={(e) => handleInputChange('parent1Name', e.target.value)}
                      placeholder="Maria Rossi"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Parentela</Label>
                    <Select value={formData.parent1Relationship} onValueChange={(value) => handleInputChange('parent1Relationship', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">Madre</SelectItem>
                        <SelectItem value="father">Padre</SelectItem>
                        <SelectItem value="guardian">Tutore/Tutrice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label>Telefono *</Label>
                    <Input
                      type="tel"
                      value={formData.parent1Phone}
                      onChange={(e) => handleInputChange('parent1Phone', e.target.value)}
                      placeholder="3331234567"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={formData.parent1Email}
                      onChange={(e) => handleInputChange('parent1Email', e.target.value)}
                      placeholder="maria.rossi@email.it"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Genitore 2 (opzionale) */}
              <div className="border rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-800 mb-4">Secondo Genitore/Tutore (opzionale)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome Completo</Label>
                    <Input
                      value={formData.parent2Name}
                      onChange={(e) => handleInputChange('parent2Name', e.target.value)}
                      placeholder="Paolo Rossi"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Parentela</Label>
                    <Select value={formData.parent2Relationship} onValueChange={(value) => handleInputChange('parent2Relationship', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Padre</SelectItem>
                        <SelectItem value="mother">Madre</SelectItem>
                        <SelectItem value="guardian">Tutore/Tutrice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label>Telefono</Label>
                    <Input
                      type="tel"
                      value={formData.parent2Phone}
                      onChange={(e) => handleInputChange('parent2Phone', e.target.value)}
                      placeholder="3339876543"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.parent2Email}
                      onChange={(e) => handleInputChange('parent2Email', e.target.value)}
                      placeholder="paolo.rossi@email.it"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Note e Documenti */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span>Informazioni Aggiuntive</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              <div className="space-y-2">
                <Label>Certificato Medico</Label>
                <Select value={formData.medicalCertificate} onValueChange={(value) => handleInputChange('medicalCertificate', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Stato certificato medico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="present">Presente e valido</SelectItem>
                    <SelectItem value="pending">In attesa</SelectItem>
                    <SelectItem value="expired">Scaduto - da rinnovare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Note</Label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Eventuali informazioni aggiuntive, allergie, note particolari..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Bottone Submit */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.location.href = '/dashboard'}
            >
              Annulla
            </Button>
            
            <Button
              type="submit"
              disabled={isLoading || !formData.firstName || !formData.lastName || !formData.birthDate || !formData.parent1Name}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Registrazione...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Registra Atleta S3</span>
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}