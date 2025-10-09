'use client'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Encuentra todo lo que necesitas para tu construcción
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Compara precios entre las mejores ferreterías del pueblo y realiza tus pedidos en línea
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/productos" className="btn-primary text-center">
            Ver Productos
          </a>
          <a href="/ferreterias" className="btn-secondary text-center">
            Explorar Ferreterías
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Categorías Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              🧱
            </div>
            <h3 className="text-xl font-semibold mb-2">Ladrillos</h3>
            <p className="text-gray-600 mb-4">
              Ladrillos de diferentes tipos y tamaños para tu construcción
            </p>
            <a href="/productos?categoria=ladrillos" className="text-primary font-medium hover:underline">
              Ver productos →
            </a>
          </div>
          
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              🏗️
            </div>
            <h3 className="text-xl font-semibold mb-2">Cemento</h3>
            <p className="text-gray-600 mb-4">
              Cemento de alta calidad para todos tus proyectos
            </p>
            <a href="/productos?categoria=cemento" className="text-primary font-medium hover:underline">
              Ver productos →
            </a>
          </div>
          
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-2">Varillas</h3>
            <p className="text-gray-600 mb-4">
              Varillas de acero para reforzar tus estructuras
            </p>
            <a href="/productos?categoria=varillas" className="text-primary font-medium hover:underline">
              Ver productos →
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          ¿Por qué elegir Ferretería Village?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2">Mejores Precios</h3>
            <p className="text-gray-600">
              Compara precios entre diferentes ferreterías y encuentra las mejores ofertas
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🚚
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">
              Recibe tus productos directamente en tu obra o domicilio
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2">Fácil de Usar</h3>
            <p className="text-gray-600">
              Plataforma intuitiva para realizar pedidos de forma rápida y sencilla
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Eres dueño de una ferretería?
        </h2>
        <p className="text-xl mb-6">
          Únete a nuestra plataforma y llega a más clientes
        </p>
        <a href="/registro-ferreteria" className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Registrar mi Ferretería
        </a>
      </section>
    </div>
  )
}