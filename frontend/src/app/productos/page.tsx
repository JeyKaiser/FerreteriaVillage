'use client'

import { useEffect, useState } from 'react'

interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
  ferreteria_id: number
  ferreteria_nombre: string
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProductos()
  }, [])

  const fetchProductos = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`)
      if (!response.ok) {
        throw new Error('Error al cargar productos')
      }
      const data = await response.json()
      setProductos(data)
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
          <p className="mt-4 text-gray-600">Cargando productos...</p>
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
            onClick={fetchProductos}
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Productos Disponibles</h1>
        <p className="text-gray-600">Encuentra todo lo que necesitas para tu construcción</p>
      </div>

      {productos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No hay productos disponibles en este momento.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="card hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {producto.categoria}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {producto.descripcion}
              </p>

              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-primary">
                  ${producto.precio.toLocaleString('es-CO')}
                </span>
                <span className={`text-sm ${producto.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {producto.stock > 0 ? `${producto.stock} disponibles` : 'Agotado'}
                </span>
              </div>

              <div className="text-sm text-gray-500 mb-4">
                <strong>Ferretería:</strong> {producto.ferreteria_nombre}
              </div>

              <button
                className="w-full btn-primary"
                disabled={producto.stock === 0}
              >
                {producto.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}