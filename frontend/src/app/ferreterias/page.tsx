'use client'

import { useEffect, useState } from 'react'

interface Ferreteria {
  id: number
  nombre: string
  direccion: string
  telefono: string
  user_id: number
}

export default function FerreteriasPage() {
  const [ferreterias, setFerreterias] = useState<Ferreteria[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFerreterias()
  }, [])

  const fetchFerreterias = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ferreterias`)
      if (!response.ok) {
        throw new Error('Error al cargar ferreterías')
      }
      const data = await response.json()
      setFerreterias(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando ferreterías...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={fetchFerreterias}
            className="btn-primary"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ferreterías del Pueblo</h1>
        <p className="text-gray-600">Descubre las ferreterías disponibles en tu comunidad</p>
      </div>

      {ferreterias.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No hay ferreterías registradas en este momento.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferreterias.map((ferreteria) => (
            <div key={ferreteria.id} className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🏪
              </div>

              <h3 className="text-xl font-semibold mb-2">{ferreteria.nombre}</h3>

              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-start">
                  <span className="font-medium mr-2">📍</span>
                  <span>{ferreteria.direccion}</span>
                </div>

                {ferreteria.telefono && (
                  <div className="flex items-center">
                    <span className="font-medium mr-2">📞</span>
                    <span>{ferreteria.telefono}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full btn-secondary text-sm">
                  Ver Productos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}