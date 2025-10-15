# PLAN MAESTRO - FERRETERÍA VILLAGE MVP
## Guía Detallada para Desarrollo e Implementación

### 📋 Estado Actual del Proyecto (Análisis Completado)
Basado en la revisión del código existente, el proyecto tiene una estructura base pero requiere implementación completa de funcionalidades críticas.

#### ✅ Lo que YA está implementado:
- **Backend**: Estructura básica con FastAPI, modelos SQLAlchemy (User, Ferreteria, Producto, Pedido), endpoints GET básicos para productos y ferreterías
- **Frontend**: Páginas básicas (home, productos, ferreterías) con fetching de datos, layout responsive con Tailwind
- **Infraestructura**: Docker Compose configurado, PostgreSQL, Alembic para migraciones
- **Documentación**: Especificación completa en FERRETERIA_VILLAGE_SPEC.md

#### ❌ Lo que FALTA implementar:
- Autenticación real (JWT, registro/login)
- CRUD completo para ferreterías y productos
- Sistema de pedidos y carrito de compras
- Filtros, búsqueda y comparación de precios
- Paneles de administración
- Notificaciones (email/SMS)
- Pruebas unitarias e integración
- CI/CD y despliegue

---

## 🎯 ESTRATEGIA DE DESARROLLO
### Enfoque: Entregas Funcionales Parciales
Cada fase produce una versión funcional que se puede demostrar y usar, permitiendo feedback temprano y validación de requerimientos.

### 📅 Roadmap General (6-8 semanas)
- **Fase 1**: Infraestructura y autenticación (Semana 1-2)
- **Fase 2**: Gestión de ferreterías y productos (Semana 3-4)
- **Fase 3**: Carrito, pedidos y funcionalidades core (Semana 5-6)
- **Fase 4**: Administración, notificaciones y QA (Semana 7-8)

---

## 📝 PLAN DETALLADO POR FASES

### FASE 1: INFRAESTRUCTURA Y AUTENTICACIÓN
**Objetivo**: Sistema base funcional con usuarios registrados y acceso seguro.

#### 1.1 Backend - Autenticación Completa
- [ ] Implementar registro real de usuarios (`/auth/register`)
  - Validación de email único
  - Hash de contraseñas con bcrypt
  - Roles: 'user' y 'ferreteria'
- [ ] Implementar login real (`/auth/login`)
  - Verificación de credenciales
  - Generación de JWT tokens
  - Refresh token opcional
- [ ] Middleware de autenticación
  - Dependencia `get_current_user`
  - Validación de tokens en rutas protegidas
- [ ] Esquemas Pydantic completos
  - `UserCreate`, `UserResponse`, `Token`
- [ ] Servicios de autenticación
  - `create_user`, `authenticate_user`, `create_access_token`

#### 1.2 Base de Datos - Migraciones Iniciales
- [ ] Ejecutar migraciones Alembic
- [ ] Crear datos de prueba (seed)
  - 2-3 ferreterías de ejemplo
  - 10-15 productos por ferretería
- [ ] Verificar conexiones DB

#### 1.3 Frontend - Autenticación
- [ ] Página de registro (`/registro`)
  - Formulario con validación
  - Roles (usuario/ferreteria)
- [ ] Página de login (`/login`)
  - Formulario de credenciales
  - Manejo de tokens JWT
- [ ] Context/Auth Provider
  - Estado global de autenticación
  - Persistencia en localStorage
- [ ] Hook `useAuth`
  - Login, logout, registro
  - Estado de carga y errores
- [ ] Protección de rutas
  - Redirect no autenticados
  - Layout condicional

#### 1.4 Testing - Autenticación
- [ ] Tests unitarios backend
  - `test_auth.py`: registro, login, JWT
- [ ] Tests frontend
  - Componentes de auth con React Testing Library

**Entrega Parcial 1**: Sistema de registro/login funcional. Usuarios pueden crear cuentas y acceder al sistema.

---

### FASE 2: GESTIÓN DE FERRETERÍAS Y PRODUCTOS
**Objetivo**: Ferreterías pueden gestionar su perfil y catálogo de productos.

#### 2.1 Backend - CRUD Ferreterías
- [ ] Endpoints completos (`/ferreterias`)
  - `POST /ferreterias` - Crear ferretería (solo usuarios con rol 'ferreteria')
  - `PUT /ferreterias/{id}` - Actualizar (solo propietario)
  - `DELETE /ferreterias/{id}` - Eliminar (solo propietario)
- [ ] Autorización basada en roles
  - Solo propietarios pueden modificar su ferretería
- [ ] Validaciones
  - RUT único, dirección requerida
- [ ] Servicios de negocio
  - `ferreteria_service.py`: lógica CRUD

#### 2.2 Backend - CRUD Productos
- [ ] Endpoints completos (`/productos`)
  - `POST /productos` - Crear producto (solo ferretería propietaria)
  - `PUT /productos/{id}` - Actualizar (solo propietaria)
  - `DELETE /productos/{id}` - Eliminar (solo propietaria)
  - `GET /productos?ferreteria_id=X` - Filtrar por ferretería
- [ ] Gestión de stock
  - Validación stock >= 0
  - Campo `disponible` calculado
- [ ] Categorías predefinidas
  - ladrillos, cemento, varillas, herramientas, etc.
- [ ] Servicios de negocio
  - `producto_service.py`: lógica CRUD

#### 2.3 Frontend - Panel Ferretería
- [ ] Página perfil ferretería (`/mi-ferreteria`)
  - Ver/editar datos básicos
  - Solo accesible para rol 'ferreteria'
- [ ] Gestión de productos
  - Lista de productos propios
  - Formulario crear/editar producto
  - Eliminar producto
- [ ] Componentes reutilizables
  - `ProductForm.tsx`
  - `FerreteriaForm.tsx`
- [ ] Navegación condicional
  - Menú diferente para ferreterías

#### 2.4 Frontend - Mejoras Catálogo
- [ ] Filtros básicos
  - Por categoría
  - Por rango de precios
- [ ] Búsqueda por nombre
- [ ] Paginación
- [ ] Estado de stock visual

**Entrega Parcial 2**: Ferreterías pueden registrarse, gestionar perfil y productos. Catálogo con filtros básicos.

---

### FASE 3: CARRITO, PEDIDOS Y FUNCIONALIDADES CORE
**Objetivo**: Usuarios pueden comprar productos y gestionar pedidos.

#### 3.1 Backend - Sistema de Pedidos
- [ ] Modelo Pedido extendido
  - Items del pedido (relación muchos-a-muchos)
  - Estados: pending, confirmed, delivered, cancelled
- [ ] Endpoints pedidos (`/pedidos`)
  - `POST /pedidos` - Crear pedido desde carrito
  - `GET /pedidos` - Historial de usuario
  - `GET /pedidos/{id}` - Detalle de pedido
  - `PUT /pedidos/{id}/status` - Cambiar estado (solo ferretería)
- [ ] Lógica de negocio
  - Validación de stock disponible
  - Cálculo de totales
  - Actualización de inventario al confirmar
- [ ] Servicios
  - `pedido_service.py`: crear, actualizar, validar stock

#### 3.2 Frontend - Carrito de Compras
- [ ] Context de carrito
  - Estado global del carrito
  - Persistencia en localStorage
- [ ] Hook `useCart`
  - Agregar/quitar productos
  - Calcular totales
  - Validar stock
- [ ] Componente `CartSidebar`
  - Overlay/modal con items
  - Cantidades, precios, total
- [ ] Página checkout (`/checkout`)
  - Formulario dirección de entrega
  - Método de pago (mock)
  - Confirmación de pedido

#### 3.3 Frontend - Historial de Pedidos
- [ ] Página pedidos (`/mis-pedidos`)
  - Lista de pedidos del usuario
  - Estados y fechas
  - Detalle de cada pedido
- [ ] Notificaciones en UI
  - Mensajes de éxito/error
  - Loading states

#### 3.4 Comparación de Precios
- [ ] Componente `PriceComparison`
  - Tabla comparativa
  - Múltiples productos de diferentes ferreterías
- [ ] Página comparación (`/comparar`)
  - Seleccionar productos
  - Vista tabular con precios, stock, ferreterías

**Entrega Parcial 3**: Flujo completo de compra: carrito → checkout → pedido. Comparación de precios.

---

### FASE 4: ADMINISTRACIÓN, NOTIFICACIONES Y QA
**Objetivo**: Sistema completo con administración y calidad asegurada.

#### 4.1 Backend - Panel de Administración
- [ ] Endpoints admin (`/admin`)
  - `GET /admin/stats` - Métricas generales
  - `GET /admin/users` - Gestión de usuarios
  - `GET /admin/ferreterias` - Gestión de ferreterías
- [ ] Métricas de negocio
  - Ventas por ferretería
  - Productos más buscados/vendidos
  - Usuarios activos
- [ ] Autorización admin
  - Rol especial 'admin'

#### 4.2 Frontend - Dashboard Admin
- [ ] Página admin (`/admin`)
  - Gráficos de métricas
  - Tablas de usuarios/ferreterías
  - Filtros por fecha
- [ ] Componentes de gráficos
  - Charts.js o similar
- [ ] Navegación protegida

#### 4.3 Notificaciones
- [ ] Servicio de email mock
  - Plantillas HTML para confirmaciones
  - Integración SendGrid (configurada pero no implementada)
- [ ] Servicio SMS mock
  - Twilio integration preparada
- [ ] Triggers de notificación
  - Nuevo pedido → email a ferretería
  - Pedido confirmado → email a usuario

#### 4.4 Testing Completo
- [ ] Cobertura backend ≥80%
  - Tests unitarios para servicios
  - Tests integración para APIs
  - Fixtures de datos de prueba
- [ ] Tests frontend
  - Componentes con RTL
  - E2E con Playwright
- [ ] Tests de carga básicos
  - Simulación de usuarios concurrentes

#### 4.5 CI/CD y Despliegue
- [ ] GitHub Actions
  - Lint → Test → Build → Push Docker
- [ ] Configuración producción
  - Variables de entorno seguras
  - Docker Compose prod
  - Scripts de despliegue
- [ ] Monitoreo básico
  - Health checks
  - Logs centralizados

#### 4.6 Optimizaciones Finales
- [ ] Performance
  - Índices DB
  - Caching básico
  - Optimización imágenes
- [ ] Seguridad
  - Rate limiting
  - Validación inputs
  - CORS configurado
- [ ] Accesibilidad
  - WCAG AA compliance
  - Navegación por teclado
  - Screen readers

**Entrega Final**: MVP completo y funcional, listo para producción.

---

## 🔧 DEPENDENCIAS TÉCNICAS POR FASE

### Backend Adicionales
- `python-jose[cryptography]` - JWT
- `passlib[bcrypt]` - Hash passwords
- `python-multipart` - Form data
- `alembic` - Migrations (ya incluido)

### Frontend Adicionales
- `@types/jsonwebtoken` - Types
- `react-hook-form` - Form management
- `zod` - Schema validation
- `lucide-react` - Icons
- `chart.js` - Charts (admin)

### Testing
- `pytest` - Backend tests
- `@testing-library/react` - Frontend tests
- `@playwright/test` - E2E tests

---

## 📊 MÉTRICAS DE ÉXITO POR FASE

### Fase 1
- ✅ Registro/login funcionando
- ✅ JWT tokens válidos
- ✅ Protección de rutas

### Fase 2
- ✅ CRUD ferreterías completo
- ✅ CRUD productos completo
- ✅ Filtros básicos funcionando

### Fase 3
- ✅ Flujo compra completo
- ✅ Carrito persistente
- ✅ Comparación de precios

### Fase 4
- ✅ Dashboard admin funcional
- ✅ Notificaciones enviadas
- ✅ Cobertura tests ≥80%
- ✅ Despliegue automatizado

---

## 🚨 RIESGOS Y MITIGACIONES

### Riesgos Técnicos
- **Complejidad JWT**: Mitigación - Usar bibliotecas probadas, tests exhaustivos
- **Gestión de stock**: Mitigación - Transacciones DB, validaciones dobles
- **Performance con crecimiento**: Mitigación - Índices DB, paginación

### Riesgos de Proyecto
- **Alcance creep**: Mitigación - Entregas parciales, feedback temprano
- **Dependencias externas**: Mitigación - Mocks para email/SMS inicialmente
- **Curva de aprendizaje**: Mitigación - Documentación detallada, pair programming

---

## 📈 SIGUIENTES PASOS INMEDIATOS

1. **Comenzar Fase 1**: Implementar autenticación backend
2. **Crear rama feature/auth**: Trabajo en paralelo sin afectar main
3. **Setup local**: Verificar Docker Compose funcionando
4. **Primer commit**: Auth básica funcional

Este plan proporciona una ruta clara y estructurada para completar el MVP de Ferretería Village, con entregas incrementales que permiten validación continua y reducción de riesgos.