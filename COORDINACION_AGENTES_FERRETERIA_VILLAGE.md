# 🚀 COORDINACIÓN DE AGENTES IA - FERRETERÍA VILLAGE MVP
## Plataforma de E-commerce para Pueblo Colombiano (7,000 habitantes)

### 📊 RESUMEN EJECUTIVO
Coordinación y orquestación del desarrollo de una plataforma de comercio electrónico que permite a múltiples ferreterías del pueblo publicar productos de construcción (ladrillos, cemento, varillas) y a los habitantes consultar, comparar precios y realizar pedidos en línea.

**Stack Tecnológico Obligatorio:**
- **Backend:** Python 3.11 + FastAPI + PostgreSQL + SQLAlchemy + Alembic + JWT + Docker
- **Frontend:** Next.js 14 + React 18 + Tailwind CSS + App Router + TypeScript + Docker

---

## 🤖 TABLA DE AGENTES ESPECIALIZADOS

| ID | Agente | Especialidad | Duración | Responsabilidades Clave |
|----|--------|--------------|----------|------------------------|
| **AG-01** | Product Owner (PO) | Gestión de Requerimientos | 6 semanas | Definir backlog, aprobar entregables, coordinar con stakeholders |
| **AG-02** | Arquitecto de Soluciones | Diseño de Arquitectura | 2 semanas | Diagramas C4, OpenAPI spec, patrones de diseño |
| **AG-03** | Ingeniero Backend | Python/FastAPI/DB | 4.5 semanas | Modelos SQLAlchemy, endpoints CRUD, autenticación JWT, tests |
| **AG-04** | Ingeniero Frontend | Next.js/React/Tailwind | 4 semanas | App Router, componentes UI, hooks API, tests |
| **AG-05** | Diseñador UI/UX | Experiencia de Usuario | 2.5 semanas | Wireframes Figma, guía de estilo, responsive design |
| **AG-06** | DevOps/Infraestructura | CI/CD/Deployment | 3 semanas | Docker-compose, GitHub Actions, deploy Render/Vercel |
| **AG-07** | Ingeniero QA | Testing/Calidad | 4 semanas | Tests unitarios, E2E Playwright, cobertura ≥80% |
| **AG-08** | Analista de Datos | Métricas/Analytics | 1.5 semanas | Google Analytics, panel de métricas básicas |

---

## 🗓️ ROADMAP DETALLADO - 6 SEMANAS

### **SEMANA 1: KICK-OFF Y DISEÑO**
**Objetivo Principal:** Fundamentos y arquitectura base

#### **Hitos de la Semana:**
- ✅ Reunión de visión y definición del backlog
- ✅ Diagramas C4 y esqueleto OpenAPI
- ✅ Wireframes y guía de estilo
- ✅ Creación de repositorios y base CI

#### **Tareas por Agente:**

**AG-01 (PO)** - Product Owner
- [ ] **Día 1-2:** Reunión kick-off con stakeholders
- [ ] **Día 3-4:** Definición y priorización de User Stories
- [ ] **Día 5:** Validación de criterios de aceptación

**AG-02 (Arquitecto)** - Arquitectura
- [ ] **Día 1-3:** Crear diagramas C4 (Contexto y Deployment)
- [ ] **Día 4-5:** Definir [`backend/openapi.yaml`](backend/openapi.yaml) esqueleto
- [ ] **Día 5:** Documentar patrones de arquitectura en [`ARCHITECTURE.md`](ARCHITECTURE.md)

**AG-05 (Diseñador)** - UI/UX
- [ ] **Día 1-3:** Crear wireframes en Figma para MVP
- [ ] **Día 4-5:** Definir guía de estilo (colores, tipografía, componentes)

**AG-06 (DevOps)** - Infraestructura
- [ ] **Día 1-2:** Crear repositorios `backend/` y `frontend/`
- [ ] **Día 3-4:** Setup CI básico (linters, estructura)
- [ ] **Día 5:** Documentar estructura en [`README_GLOBAL.md`](README_GLOBAL.md)

#### **Entregables Semana 1:**
- [`ARCHITECTURE.md`](ARCHITECTURE.md) - Diagramas C4 y decisiones de diseño
- [`backend/openapi.yaml`](backend/openapi.yaml) - Especificación API esqueleto
- `Figma - FerreteraVillage` - Prototipo interactivo
- [`README_GLOBAL.md`](README_GLOBAL.md) - Instrucciones setup inicial

---

### **SEMANA 2: INFRA LOCAL Y AUTENTICACIÓN**
**Objetivo Principal:** Entorno de desarrollo y sistema de usuarios

#### **Hitos de la Semana:**
- ✅ Docker-compose funcional (backend, frontend, postgres)
- ✅ Modelo User, autenticación JWT, endpoints /auth/register y /auth/login
- ✅ Pantalla de registro/login en Next.js
- ✅ Tests unitarios de autenticación + CI pipeline completo

#### **Tareas por Agente:**

**AG-06 (DevOps)** - Infraestructura
- [ ] **Día 1-2:** Crear [`docker-compose.yml`](docker-compose.yml) completo
- [ ] **Día 3:** Setup PostgreSQL con volúmenes persistentes
- [ ] **Día 4-5:** Validar entorno local funcionando

**AG-03 (Backend)** - Python/FastAPI
- [ ] **Día 1:** Implementar modelo [`backend/app/db/models.py`](backend/app/db/models.py) - User
- [ ] **Día 2-3:** Crear [`backend/app/api/v1/auth.py`](backend/app/api/v1/auth.py) (register/login)
- [ ] **Día 4:** Configurar JWT en [`backend/app/core/security.py`](backend/app/core/security.py)
- [ ] **Día 5:** Setup Alembic migraciones

**AG-04 (Frontend)** - Next.js/React
- [ ] **Día 1-2:** Setup Next.js 14 con App Router y TypeScript
- [ ] **Día 3:** Crear [`frontend/src/app/layout.tsx`](frontend/src/app/layout.tsx) global
- [ ] **Día 4:** Implementar páginas login/register
- [ ] **Día 5:** Hook [`frontend/src/hooks/useAuth.ts`](frontend/src/hooks/useAuth.ts)

**AG-07 (QA)** - Testing
- [ ] **Día 3-4:** Tests unitarios autenticación
- [ ] **Día 5:** Setup pipeline CI completo

#### **Entregables Semana 2:**
- [`docker-compose.yml`](docker-compose.yml) - Orquestación completa
- [`backend/app/api/v1/auth.py`](backend/app/api/v1/auth.py) - Endpoints autenticación
- [`backend/app/db/models.py`](backend/app/db/models.py) - Modelo User SQLAlchemy
- [`frontend/src/app/login/page.tsx`](frontend/src/app/login/page.tsx) - Página login
- [`frontend/src/hooks/useAuth.ts`](frontend/src/hooks/useAuth.ts) - Hook autenticación
- [`backend/tests/unit/test_auth.py`](backend/tests/unit/test_auth.py) - Tests unitarios

---

### **SEMANA 3: GESTIÓN DE FERRETERÍAS**
**Objetivo Principal:** CRUD de ferreterías y perfiles

#### **Hitos de la Semana:**
- ✅ Endpoints CRUD `/ferreterias` (incluye RUT, dirección)
- ✅ UI "Mi Ferretería" → crear/editar perfil
- ✅ Tests de integración (FastAPI TestClient)

#### **Tareas por Agente:**

**AG-03 (Backend)** - API Ferreterías
- [ ] **Día 1:** Modelo [`Ferreteria`](backend/app/db/models.py) en models.py
- [ ] **Día 2-3:** [`backend/app/api/v1/ferreterias.py`](backend/app/api/v1/ferreterias.py) - CRUD completo
- [ ] **Día 4:** Schemas [`backend/app/schemas/ferreteria.py`](backend/app/schemas/ferreteria.py)
- [ ] **Día 5:** Autorización (solo propietario edita su ferretería)

**AG-04 (Frontend)** - UI Ferreterías
- [ ] **Día 1-2:** Componente [`frontend/src/components/FerreteriaCard.tsx`](frontend/src/components/FerreteriaCard.tsx)
- [ ] **Día 3:** Componente [`frontend/src/components/FerreteriaForm.tsx`](frontend/src/components/FerreteriaForm.tsx)
- [ ] **Día 4:** Página [`frontend/src/app/dashboard/ferreterias/page.tsx`](frontend/src/app/dashboard/ferreterias/page.tsx)
- [ ] **Día 5:** Hook [`frontend/src/hooks/useFerreterias.ts`](frontend/src/hooks/useFerreterias.ts)

**AG-07 (QA)** - Testing Integración
- [ ] **Día 3-5:** Tests integración [`backend/tests/integration/test_ferreterias.py`](backend/tests/integration/test_ferreterias.py)

#### **Entregables Semana 3:**
- [`backend/app/api/v1/ferreterias.py`](backend/app/api/v1/ferreterias.py) - CRUD ferretería + autorización
- [`backend/app/schemas/ferreteria.py`](backend/app/schemas/ferreteria.py) - Schemas Pydantic
- [`frontend/src/components/FerreteriaCard.tsx`](frontend/src/components/FerreteriaCard.tsx) - Componente reutilizable
- [`frontend/src/components/FerreteriaForm.tsx`](frontend/src/components/FerreteriaForm.tsx) - Formulario CRUD
- [`backend/tests/integration/test_ferreterias.py`](backend/tests/integration/test_ferreterias.py) - Tests integración

---

### **SEMANA 4: CATÁLOGO Y COMPARACIÓN**
**Objetivo Principal:** Productos, filtros y comparador de precios

#### **Hitos de la Semana:**
- ✅ Modelo `Producto`, filtros (categoría, precio, stock)
- ✅ API `GET /productos?category=&price_min=&price_max=`
- ✅ Componentes `ProductCard`, `PriceComparison`
- ✅ Test E2E: buscar + comparar 2 ferreterías

#### **Tareas por Agente:**

**AG-03 (Backend)** - API Productos
- [ ] **Día 1:** Modelo [`Producto`](backend/app/db/models.py) en models.py
- [ ] **Día 2-3:** [`backend/app/api/v1/productos.py`](backend/app/api/v1/productos.py) - Listado, filtros, CRUD
- [ ] **Día 4:** Schemas [`backend/app/schemas/producto.py`](backend/app/schemas/producto.py)
- [ ] **Día 5:** Optimización queries y paginación

**AG-04 (Frontend)** - UI Catálogo
- [ ] **Día 1:** Componente [`frontend/src/components/ProductCard.tsx`](frontend/src/components/ProductCard.tsx)
- [ ] **Día 2:** Componente [`frontend/src/components/ProductFilter.tsx`](frontend/src/components/ProductFilter.tsx)
- [ ] **Día 3:** Componente [`frontend/src/components/PriceComparison.tsx`](frontend/src/components/PriceComparison.tsx)
- [ ] **Día 4:** Página [`frontend/src/app/productos/page.tsx`](frontend/src/app/productos/page.tsx)
- [ ] **Día 5:** Hook [`frontend/src/hooks/useProducts.ts`](frontend/src/hooks/useProducts.ts)

**AG-07 (QA)** - Testing E2E
- [ ] **Día 4-5:** Test E2E [`qa/playwright/tests/product-comparison.spec.ts`](qa/playwright/tests/product-comparison.spec.ts)

#### **Entregables Semana 4:**
- [`backend/app/api/v1/productos.py`](backend/app/api/v1/productos.py) - Listado, filtros, detalle, CRUD
- [`frontend/src/components/ProductCard.tsx`](frontend/src/components/ProductCard.tsx) - Tarjeta producto reutilizable
- [`frontend/src/components/PriceComparison.tsx`](frontend/src/components/PriceComparison.tsx) - Tabla comparativa
- [`frontend/src/app/productos/page.tsx`](frontend/src/app/productos/page.tsx) - Catálogo con filtros
- [`qa/playwright/tests/product-comparison.spec.ts`](qa/playwright/tests/product-comparison.spec.ts) - Test E2E comparación

---

### **SEMANA 5: CARRITO Y PEDIDOS**
**Objetivo Principal:** Sistema de compras completo

#### **Hitos de la Semana:**
- ✅ Modelo `Pedido`, lógica de stock e historial
- ✅ Endpoints `POST /pedidos`, `GET /pedidos/{id}`
- ✅ Hook `useCart`, página `checkout`
- ✅ Notificaciones por email (mock SendGrid)
- ✅ Test de checkout completo (Playwright)

#### **Tareas por Agente:**

**AG-03 (Backend)** - API Pedidos
- [ ] **Día 1:** Modelo [`Pedido`](backend/app/db/models.py) en models.py
- [ ] **Día 2:** [`backend/app/api/v1/pedidos.py`](backend/app/api/v1/pedidos.py) - Crear pedido, historial
- [ ] **Día 3:** Lógica de stock y validaciones
- [ ] **Día 4:** [`backend/app/services/notifications.py`](backend/app/services/notifications.py) - Mock email
- [ ] **Día 5:** Schemas [`backend/app/schemas/pedido.py`](backend/app/schemas/pedido.py)

**AG-04 (Frontend)** - UI Carrito
- [ ] **Día 1:** Hook [`frontend/src/hooks/useCart.ts`](frontend/src/hooks/useCart.ts) (Context)
- [ ] **Día 2:** Componente [`frontend/src/components/CartSidebar.tsx`](frontend/src/components/CartSidebar.tsx)
- [ ] **Día 3:** Página [`frontend/src/app/checkout/page.tsx`](frontend/src/app/checkout/page.tsx)
- [ ] **Día 4-5:** Páginas pedidos [`frontend/src/app/pedidos/page.tsx`](frontend/src/app/pedidos/page.tsx)

**AG-07 (QA)** - Testing Checkout
- [ ] **Día 4-5:** Test checkout [`qa/playwright/tests/checkout.spec.ts`](qa/playwright/tests/checkout.spec.ts)

#### **Entregables Semana 5:**
- [`backend/app/api/v1/pedidos.py`](backend/app/api/v1/pedidos.py) - Crear pedido, historial, cambio de estado
- [`frontend/src/hooks/useCart.ts`](frontend/src/hooks/useCart.ts) - Gestión carrito (Context)
- [`frontend/src/app/checkout/page.tsx`](frontend/src/app/checkout/page.tsx) - Proceso de compra
- [`backend/app/services/notifications.py`](backend/app/services/notifications.py) - Sistema notificaciones
- [`qa/playwright/tests/checkout.spec.ts`](qa/playwright/tests/checkout.spec.ts) - Test checkout completo

---

### **SEMANA 6: DASHBOARD, QA FINAL Y DEPLOY**
**Objetivo Principal:** Métricas, QA completo y despliegue

#### **Hitos de la Semana:**
- ✅ Métricas (ventas, top-productos) → endpoint `/stats`
- ✅ Dashboard en Next.js (`/admin`)
- ✅ Revisión cobertura (≥80%) y corrección de bugs
- ✅ Configuración deploy Render/Vercel
- ✅ Demo final PO y stakeholders
- ✅ Documentación final (README, OpenAPI, guía deploy)

#### **Tareas por Agente:**

**AG-03 (Backend)** - API Métricas
- [ ] **Día 1:** Endpoint [`/api/v1/stats`](backend/app/api/v1/stats.py) - ventas, productos top
- [ ] **Día 2:** Optimización consultas dashboard

**AG-04 (Frontend)** - Dashboard Admin
- [ ] **Día 1-2:** Página [`frontend/src/app/admin/page.tsx`](frontend/src/app/admin/page.tsx)
- [ ] **Día 3:** Gráficos con Chart.js/Recharts

**AG-08 (Analytics)** - Métricas
- [ ] **Día 1:** Setup [`frontend/src/lib/analytics.ts`](frontend/src/lib/analytics.ts) - Google Analytics
- [ ] **Día 2:** Configurar eventos de tracking

**AG-07 (QA)** - QA Final
- [ ] **Día 1-3:** Revisión cobertura ≥80%, corrección bugs
- [ ] **Día 4:** Suite completa tests E2E

**AG-06 (DevOps)** - Deploy
- [ ] **Día 1-2:** Setup [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
- [ ] **Día 3-4:** Configuración Render (backend) + Vercel (frontend)

**AG-01 (PO)** - Cierre Proyecto
- [ ] **Día 5:** Demo final y documentación

#### **Entregables Semana 6:**
- [`backend/app/api/v1/stats.py`](backend/app/api/v1/stats.py) - Métricas ventas por ferretería
- [`frontend/src/app/admin/page.tsx`](frontend/src/app/admin/page.tsx) - Dashboard métricas
- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - Pipeline CI/CD completo
- [`frontend/src/lib/analytics.ts`](frontend/src/lib/analytics.ts) - Google Analytics wrapper
- Documentación final y guía de despliegue

---

## 📁 ESTRUCTURA COMPLETA DE REPOSITORIOS

```
ferretera-village/
├── README_GLOBAL.md                    # Instrucciones setup, desarrollo y deploy
├── docker-compose.yml                  # Orquesta backend, frontend, postgres
├── ARCHITECTURE.md                     # Diagramas C4 y decisiones de diseño
├── .env.example                        # Variables de entorno ejemplo
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── ci.yml                      # Lint → Test → Build → Push Docker Hub
│
├── backend/                            # Python 3.11 + FastAPI + PostgreSQL
│   ├── Dockerfile                      # Multi-stage (python-slim → final)
│   ├── requirements.txt
│   ├── alembic.ini
│   ├── openapi.yaml                   # Spec completa (auth, ferreterías, productos, pedidos, stats)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                    # FastAPI app principal
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── auth.py            # Endpoints registro e inicio de sesión
│   │   │       ├── ferreterias.py     # CRUD ferretería + autorización
│   │   │       ├── productos.py       # Listado, filtros, detalle, CRUD
│   │   │       ├── pedidos.py         # Crear pedido, historial, cambio estado
│   │   │       └── stats.py           # Métricas ventas por ferretería
│   │   ├── core/
│   │   │   ├── config.py              # Configuración app
│   │   │   ├── security.py            # JWT, hashing passwords
│   │   │   └── dependencies.py        # Dependencias inyección
│   │   ├── db/
│   │   │   ├── base.py                # Base SQLAlchemy
│   │   │   ├── models.py              # Modelos (User, Ferreteria, Producto, Pedido)
│   │   │   └── migrations/            # Alembic migrations
│   │   ├── schemas/
│   │   │   ├── auth.py                # Pydantic schemas autenticación
│   │   │   ├── ferreteria.py          # Pydantic schemas ferretería
│   │   │   ├── producto.py            # Pydantic schemas producto
│   │   │   └── pedido.py              # Pydantic schemas pedido
│   │   └── services/
│   │       ├── ferreteria_service.py  # Lógica negocio ferreterías
│   │       ├── producto_service.py    # Lógica negocio productos
│   │       ├── pedido_service.py      # Lógica negocio pedidos
│   │       └── notifications.py       # Mock SendGrid/Twilio
│   └── tests/
│       ├── __init__.py
│       ├── unit/                      # Tests unitarios (pytest)
│       │   ├── test_auth.py
│       │   ├── test_ferreterias.py
│       │   ├── test_productos.py
│       │   └── test_pedidos.py
│       └── integration/               # Tests integración
│           ├── test_ferreterias.py
│           └── test_api_integration.py
│
├── frontend/                           # Next.js 14 + React 18 + TypeScript
│   ├── Dockerfile                      # Multi-stage (node → nginx)
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app/                        # App Router Next.js 14
│   │   │   ├── layout.tsx              # Layout global + navbar
│   │   │   ├── page.tsx                # Página home
│   │   │   ├── globals.css             # Estilos Tailwind
│   │   │   ├── login/
│   │   │   │   └── page.tsx            # Página login
│   │   │   ├── register/
│   │   │   │   └── page.tsx            # Página registro
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx            # Dashboard principal
│   │   │   │   └── ferreterias/
│   │   │   │       └── page.tsx        # Gestión ferretería
│   │   │   ├── productos/
│   │   │   │   ├── page.tsx            # Catálogo productos
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx        # Detalle producto
│   │   │   ├── comparar/
│   │   │   │   └── page.tsx            # Comparador precios
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx            # Proceso compra
│   │   │   ├── pedidos/
│   │   │   │   ├── page.tsx            # Lista pedidos
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx        # Detalle pedido
│   │   │   └── admin/
│   │   │       └── page.tsx            # Dashboard métricas
│   │   ├── components/
│   │   │   ├── ui/                     # Componentes base
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Modal.tsx
│   │   │   ├── Navbar.tsx              # Navegación principal
│   │   │   ├── ProductCard.tsx         # Tarjeta producto reutilizable
│   │   │   ├── ProductFilter.tsx       # Filtros catálogo
│   │   │   ├── PriceComparison.tsx     # Tabla comparativa precios
│   │   │   ├── CartSidebar.tsx         # Carrito lateral
│   │   │   ├── FerreteriaCard.tsx      # Tarjeta ferretería
│   │   │   └── FerreteriaForm.tsx      # Formulario CRUD ferretería
│   │   ├── hooks/
│   │   │   ├── useAuth.ts              # Hook autenticación JWT
│   │   │   ├── useCart.ts              # Gestión carrito (Context)
│   │   │   ├── useProducts.ts          # Hook productos
│   │   │   └── useFerreterias.ts       # Hook ferreterías
│   │   ├── lib/
│   │   │   ├── api.ts                  # Wrapper fetch/axios con refresh token
│   │   │   ├── analytics.ts            # Google Analytics/Mixpanel wrapper
│   │   │   ├── utils.ts                # Utilidades generales
│   │   │   └── types.ts                # Tipos TypeScript
│   │   └── styles/
│   │       └── tailwind.css            # Configuración Tailwind
│   ├── public/
│   │   ├── icons/
│   │   └── images/
│   └── tests/
│       ├── unit/                       # Jest + React Testing Library
│       │   ├── components/
│       │   ├── hooks/
│       │   └── utils/
│       └── e2e/                        # Tests E2E (opcional)
│
└── qa/                                 # Testing E2E centralizado
    └── playwright/
        ├── playwright.config.ts
        └── tests/
            ├── product-comparison.spec.ts    # Buscar + comparar 2 ferreterías
            └── checkout.spec.ts              # Carrito → checkout → pedido completo
```

---

## 🔗 ARTEFACTOS COMPARTIDOS ENTRE AGENTES

### **1. OpenAPI Specification** - [`backend/openapi.yaml`](backend/openapi.yaml)
```yaml
openapi: 3.0.3
info:
  title: Ferretera Village API
  version: 1.0.0
paths:
  /auth/register:        # AG-03 → AG-04
  /auth/login:          # AG-03 → AG-04
  /ferreterias:         # AG-03 → AG-04
  /productos:           # AG-03 → AG-04
  /pedidos:             # AG-03 → AG-04
  /stats:               # AG-03 → AG-08
```

### **2. Docker Orchestration** - [`docker-compose.yml`](docker-compose.yml)
```yaml
version: "3.9"
services:
  postgres:     # AG-06 → AG-03
  backend:      # AG-06 → AG-03
  frontend:     # AG-06 → AG-04
```

### **3. CI/CD Pipeline** - [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
```yaml
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  lint:         # AG-06 → AG-03, AG-04
  test:         # AG-06 → AG-07
  build:        # AG-06 → ALL
  deploy:       # AG-06 → Staging/Prod
```

### **4. Design System** - Figma Prototype
- Components library compartida entre AG-05 y AG-04
- Design tokens exportados para Tailwind CSS
- Responsive breakpoints definidos

---

## ✅ USER STORIES Y CRITERIOS DE ACEPTACIÓN

| ID | User Story | Criterio de Aceptación | Agente Responsable |
|----|------------|----------------------|-------------------|
| **US-01** | Como habitante, quiero crear cuenta y loguearme | • Registro email+password<br>• Login devuelve JWT válido<br>• Sesión persiste (localStorage) | AG-03, AG-04 |
| **US-02** | Como ferretería, quiero registrar negocio y gestionar productos | • Registro con RUT, dirección<br>• CRUD productos (imagen, descripción, stock, precio) | AG-03, AG-04 |
| **US-03** | Como habitante, quiero buscar por categoría y rango precios | • Filtros en catálogo<br>• ≥3 productos por página<br>• Tarjeta con foto, nombre, precio | AG-03, AG-04 |
| **US-04** | Como habitante, quiero comparar precios entre ferreterías | • Botón "Comparar" agrega a tabla<br>• Muestra nombre, ferretería, precio, disponibilidad | AG-04 |
| **US-05** | Como habitante, quiero carrito y crear pedido | • Carrito persiste navegando<br>• Checkout solicita dirección y pago<br>• Email confirmación | AG-03, AG-04 |
| **US-06** | Como ferretería, quiero notificaciones nuevos pedidos | • Email/SMS al crear pedido<br>• Dashboard muestra "Nuevo pedido" | AG-03 |
| **US-07** | Como admin, quiero métricas ventas y productos top | • Dashboard con gráficos<br>• Datos actualizados cada 15min | AG-03, AG-08 |
| **US-08** | Como usuario, quiero app accesible en móvil | • UI responsive (mobile-first)<br>• WCAG AA (contraste, foco) | AG-04, AG-05 |

---

## 📊 CRITERIOS DE CALIDAD Y MÉTRICAS

### **Criterios Técnicos:**
- ✅ **Cobertura de Tests:** ≥80% (AG-07)
- ✅ **Performance:** Tiempo respuesta <2s (AG-03, AG-04)
- ✅ **Security:** HTTPS, JWT, validación inputs (AG-03)
- ✅ **Accessibility:** WCAG AA compliance (AG-04, AG-05)
- ✅ **Mobile:** Responsive design mobile-first (AG-04, AG-05)

### **Criterios Funcionales:**
- ✅ **Users:** 100 usuarios concurrentes (AG-03, AG-06)
- ✅ **Uptime:** 99.5% disponibilidad (AG-06)
- ✅ **Data:** PostgreSQL normalizada con migraciones (AG-03)
- ✅ **API:** RESTful con documentación OpenAPI (AG-02, AG-03)

### **Métricas de Desarrollo:**
- ✅ **Code Reviews:** Obligatorios entre agentes
- ✅ **Daily Sync:** Reuniones de 15 min
- ✅ **Weekly Demo:** Progreso stakeholders
- ✅ **Continuous Integration:** Tests automatizados

---

## 🚀 COMANDOS DE INICIO RÁPIDO

### **Setup Local:**
```bash
# Clonar repositorio
git clone https://github.com/tu-org/ferretera-village.git
cd ferretera-village

# Levantar entorno completo
docker-compose up --build

# URLs de acceso
# Backend API: http://localhost:8000
# Frontend Web: http://localhost:3000
# PostgreSQL: localhost:5432
# API Docs: http://localhost:8000/docs
```

### **Desarrollo Individual:**
```bash
# Backend solamente
cd backend && pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend solamente
cd frontend && npm install
npm run dev

# Tests
pytest backend/tests/          # Backend tests
npm test                       # Frontend tests
playwright test               # E2E tests
```

---

## 📝 COMUNICACIÓN Y COORDINACIÓN

### **Canales de Comunicación:**
- **Slack/Discord:** Canal #ferretera-village para sync diario
- **GitHub:** Issues y Pull Requests para tracking
- **Figma:** Colaboración en diseño UI/UX
- **Miro/Mural:** Brainstorming y arquitectura

### **Reuniones:**
- **Daily Standup:** Lunes a Viernes 9:00 AM (15 min)
- **Weekly Review:** Viernes 4:00 PM (1 hora)
- **Sprint Planning:** Lunes inicio de semana (2 horas)
- **Retrospective:** Viernes final (30 min)

### **Entregables y Reviews:**
- **Code Review:** Obligatorio 2 aprobaciones
- **Demo Stakeholders:** Cada viernes
- **Documentation:** Actualización continua
- **Quality Gate:** No merge sin tests passing

---

## 🎯 PRÓXIMOS PASOS - PLAN DE ACCIÓN

### **Semana 0 (Pre-Kick-off):**
1. **AG-01 (PO):** Confirmar stakeholders y cronograma
2. **AG-06 (DevOps):** Preparar repositorios y accesos
3. **AG-02 (Arquitecto):** Revisar especificaciones técnicas
4. **ALL:** Reunión kick-off Lunes Semana 1

### **Inicio Inmediato:**
```bash
# Crear repositorio principal
mkdir ferretera-village && cd ferretera-village
git init
git remote add origin https://github.com/tu-org/ferretera-village.git

# Estructura inicial
mkdir -p backend/{app/{api/v1,core,db,schemas,services},tests/{unit,integration}}
mkdir -p frontend/src/{app,components,hooks,lib,styles}
mkdir -p qa/playwright/tests
mkdir -p .github/workflows

# Primer commit
git add . && git commit -m "🚀 Initial project structure"
git push -u origin main
```

### **Success Metrics:**
- ✅ **Semana 3:** Demo funcional autenticación + ferreterías
- ✅ **Semana 4:** Demo catálogo + comparador funcional
- ✅ **Semana 5:** Demo checkout completo end-to-end
- ✅ **Semana 6:** MVP completo desplegado en producción

---

## 🏆 ENTREGA FINAL

**Fecha Objetivo:** Viernes Semana 6 - 2:00 PM
**Formato:** Demo en vivo + documentación completa
**Audiencia:** Stakeholders del pueblo, gobierno local

### **Checklist Final:**
- [ ] MVP funcionando en producción (Render + Vercel)
- [ ] 8 User Stories completadas y validadas
- [ ] Tests automatizados corriendo (≥80% cobertura)
- [ ] Documentación completa (README, API, Deploy)
- [ ] Métricas básicas configuradas (Google Analytics)
- [ ] Plan post-MVP y roadmap futuro

**Coordinador Responsable:** AG-01 (Product Owner)
**Aprobación Final:** Stakeholders + Gobierno Municipal

---

*Este documento es la guía maestra para la coordinación de todos los agentes IA especializados en el desarrollo del MVP Ferretería Village. Cada agente debe seguir su asignación específica y comunicarse proactivamente con el coordinador para resolver dependencias.*