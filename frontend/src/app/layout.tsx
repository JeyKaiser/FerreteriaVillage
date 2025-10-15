import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/hooks/useAuth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ferretería Village',
  description: 'Plataforma de comercio electrónico para ferreterías en Colombia',
  keywords: 'ferretería, construcción, ladrillos, cemento, varillas, Colombia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-900">
                      Ferretería Village
                    </h1>
                  </div>
                  <nav className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        Inicio
                      </a>
                      <a href="/productos" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        Productos
                      </a>
                      <a href="/ferreterias" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        Ferreterías
                      </a>
                      <a href="/login" className="btn-primary">
                        Iniciar Sesión
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="bg-gray-800 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ferretería Village</h3>
                    <p className="text-gray-300">
                      La plataforma que conecta ferreterías y clientes en tu pueblo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Enlaces</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li><a href="/" className="hover:text-white">Inicio</a></li>
                      <li><a href="/productos" className="hover:text-white">Productos</a></li>
                      <li><a href="/ferreterias" className="hover:text-white">Ferreterías</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>Email: info@ferreteria-village.com</li>
                      <li>Teléfono: +57 300 123 4567</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Síguenos</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                      <a href="#" className="text-gray-300 hover:text-white">WhatsApp</a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                  <p>&copy; 2024 Ferretería Village. Todos los derechos reservados.</p>
                </div>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}