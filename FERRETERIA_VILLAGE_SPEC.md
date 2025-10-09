# 📦 FERRETERÍA VILLAGE
## Plataforma e-commerce para ferreterías de un pueblo colombiano – 7,000 habitantes

## 📄 ÍNDICE

1. [Visión y alcance del MVP](#visión-y-alcance-del-mvp)
2. [Arquitectura y estructura de repositorios](#arquitectura-y-estructura-de-repositorios)
3. [Diagramas (Mermaid)](#diagramas-mermaid)
4. [Agentes IA y sus responsabilidades](#agentes-ia-y-sus-responsabilidades)
5. [Backlog de User Stories y Criterios de aceptación](#backlog-de-user-stories-y-criterios-de-aceptación)
6. [Tareas asignadas por agente (roadmap de 6 semanas)](#tareas-asignadas-por-agente-roadmap-de-6-semanas)
7. [Entregables concretos](#entregables-concretos)
8. [Prompt maestro para la IA](#prompt-maestro-para-la-ia)
9. [README global](#readme-global)
10. [Apéndices – snippets y ejemplos de artefactos](#apéndices-snippets-y-ejemplos-de-artefactos)

---

## 🎯 VISIÓN Y ALCANCE DEL MVP

| Campo | Descripción |
|-------|-------------|
| **Nombre provisional** | Pueblo Ferretería |
| **Cliente** | Gobierno Municipal |
| **Objetivo** | Permitir a cada ferretería del pueblo publicar sus productos de construcción en línea |
| **Público objetivo** | 7,000 habitantes (propietarios de ferreterías y compradores locales) |
| **MVP incluye** | • Registro e inicio de sesión (usuarios y ferreterías)<br>• Catálogo de productos con filtros y comparación de precios<br>• Carrito de compras<br>• Panel de gestión para ferreterías<br>• Notificaciones por correo electrónico/SMS<br>• Panel de métricas básicas (ventas por ferretería, productos más buscados) |
| **Tecnologías obligatorias** | **Backend:** Python 3.11, FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, Docker<br>**Frontend:** Next.js 14, React 18, Tailwind CSS, App Router, TypeScript, Docker |
| **Entorno de desarrollo** | `docker-compose up` levanta backend, frontend y base de datos en modo local |
| **Despliegue sugerido** | **Backend:** Render / Railway / AWS Elastic Beanstalk<br>**Frontend:** Vercel / Netlify |

---

## 🏗️ ARQUITECTURA Y ESTRUCTURA DE REPOSITORIOS

### Estructura del Proyecto

```
ferretera-village/
│
├─ backend/                 # Lógica de negocio, API y DB
│   ├─ app/
│   │   ├─ api/
│   │   │   ├─ v1/
│   │   │   │   ├─ auth.py
│   │   │   │   ├─ ferreterias.py
│   │   │   │   ├─ productos.py
│   │   │   │   └─ pedidos.py
│   │   ├─ core/
│   │   │   ├─ config.py
│   │   │   ├─ security.py
│   │   │   └─ dependencies.py
│   │   ├─ db/
│   │   │   ├─ models.py
│   │   │   ├─ base.py
│   │   │   └─ migrations/   # Alembic
│   │   ├─ schemas/
│   │   │   ├─ auth.py
│   │   │   ├─ ferreteria.py
│   │   │   ├─ producto.py
│   │   │   └─ pedido.py
│   │   └─ services/
│   │       ├─ ferreteria_service.py
│   │       ├─ producto_service.py
│   │       └─ pedido_service.py
│   ├─ tests/
│   │   ├─ unit/
│   │   └─ integration/
│   └─ Dockerfile
│
└─ frontend/
    ├─ src/
    │   ├─ app/
    │   │   ├─ layout.tsx
    │   │   └─ globals.css
    │   ├─ pages/               # (opcional, si se usa pages router)
    │   ├─ components/
    │   │   ├─ Navbar.tsx
    │   │   ├─ ProductCard.tsx
    │   │   ├─ CartSidebar.tsx
    │   │   └─ PriceComparison.tsx
    │   ├─ hooks/
    │   │   ├─ useAuth.ts
    │   │   ├─ useCart.ts
    │   │   └─ useProducts.ts
    │   ├─ lib/
    │   │   └─ api.ts          # wrappers fetch/axios
    │   └─ styles/
    │       └─ tailwind.css
    ├─ public/
    ├─ tests/
    │   ├─ unit/
    │   └─ e2e/
    ├─ tailwind.config.js
    ├─ tsconfig.json
    └─ Dockerfile
```

### Separación de Responsabilidades

- **backend/**: Contiene toda la lógica de negocio y la API
- **frontend/**: Contiene la UI y la capa de integración con la API
- **Comunicación**: La API está descrita en `openapi.yaml` (generado por el Arquitecto) y es consumida por los hooks del frontend

---

## 📊 DIAGRAMAS (MERMAID)

### Diagrama C4 – Nivel 1 (Contexto)

```mermaid
graph TB
    Usuario[Usuario - Habitante del pueblo]
    Ferreteria[Ferretería - Propietario]
    
    subgraph "Ferretera Village"
        Backend[API FastAPI]
        Frontend[Web App Next.js]
    end
    
    subgraph "Infraestructura Cloud"
        Postgres[(PostgreSQL RDS)]
        EmailSrv[Servicio Email - SendGrid]
        SMSSrv[Servicio SMS - Twilio]
    end
    
    Usuario --> Frontend
    Ferreteria --> Frontend
    Frontend --> Backend
    Backend --> Postgres
    Backend --> EmailSrv
    Backend --> SMSSrv
```

### Diagrama de Despliegue

```mermaid
graph TB
    subgraph "Cluster Kubernetes - Render"
        backend[backend Docker - FastAPI]
        frontend[frontend Docker - Next.js]
        db[(PostgreSQL - RDS)]
    end
    
    subgraph "PC / Smartphone"
        browser[Browser - HTML/CSS/JS]
    end
    
    browser --> frontend
    frontend --> backend
    backend --> db
```

---

## 🤖 AGENTES IA Y SUS RESPONSABILIDADES

| # | Agente | Especialidad | Responsabilidades clave |
|---|--------|--------------|------------------------|
| 1 | **Product Owner (PO)** | Gestión de requerimientos, priorización | • Definir backlog y user stories<br>• Aprobar entregables<br>• Coordinar stakeholders |
| 2 | **Arquitecto de Soluciones** | Diseño de arquitectura, contrato API | • Diagramas C4<br>• Especificaciones OpenAPI (`openapi.yaml`)<br>• Definir patrones (repositorio, capa de servicio) |
| 3 | **Ingeniero Backend** | Python, FastAPI, base de datos | • Modelado SQLAlchemy<br>• Endpoints CRUD, autenticación, pedidos<br>• Pruebas (pytest)<br>• Dockerfile y CI |
| 4 | **Ingeniero Frontend** | Next.js, React, Tailwind | • Rutas (App Router)<br>• Componentes UI<br>• Hooks de consumo API<br>• Pruebas (Jest/RTL) |
| 5 | **Diseñador UI/UX** | Experiencia de usuario, branding | • Wireframes y prototipo Figma<br>• Guía de estilo (colores, tipografía)<br>• Exportar assets |
| 6 | **DevOps / Infra** | CI/CD, implementación, monitoreo | • Docker-compose local<br>• Pipelines GitHub Actions<br>• Deploy en Render/Vercel<br>• Monitoreo (Prometheus) |
| 7 | **Ingeniero QA** | Calidad, pruebas | • Plan de pruebas (funcional, carga)<br>• Scripts Playwright (E2E)<br>• Cobertura ≥ 80% |
| 8 | **Analista de Datos (opcional)** | Métricas de negocio | • Definir eventos de seguimiento<br>• Configurar Google Analytics / Mixpanel<br>• Panel de métricas básicas |

---

## 📋 BACKLOG DE USER STORIES Y CRITERIOS DE ACEPTACIÓN

| ID | User Story | Criterios de Aceptación |
|----|------------|------------------------|
| **US-01** | Como habitante, quiero crear una cuenta y loguearme para poder comprar | • Registro con email + contraseña<br>• Login devuelve JWT válido<br>• Sesión persiste en el frontend (localStorage) |
| **US-02** | Como ferretería, quiero registrar mi negocio y gestionar mis productos | • Registro de ferretería con datos básicos (RUT, dirección)<br>• CRUD completo (imagen, descripción, stock, precio) |
| **US-03** | Como habitante, quiero buscar productos por categoría y rango de precios | • Filtros en la vista de catálogo<br>• Resultado muestra al menos 3 productos por página<br>• Cada tarjeta muestra foto, nombre, precio |
| **US-04** | Como habitante, quiero comparar precios entre ferreterías | • Botón "Comparar" agrega producto a tabla de comparación<br>• Tabla muestra nombre, ferretería, precio, disponibilidad |
| **US-05** | Como habitante, quiero agregar productos a un carrito y crear un pedido | • Carrito persiste mientras navega<br>• Checkout solicita dirección y método de pago<br>• Al confirmar, se crea registro de pedido y se envía email de confirmación |
| **US-06** | Como ferretería, quiero recibir notificaciones cuando llegue un nuevo pedido | • Email y/o SMS enviado al crear el pedido<br>• Dashboard muestra notificación "Nuevo pedido" |
| **US-07** | Como administrador del sistema, quiero ver métricas de ventas y productos más buscados | • Dashboard con gráficos (ventas por ferretería, top-5 productos)<br>• Datos actualizados al menos cada 15 min |
| **US-08** | Como usuario, quiero que la aplicación sea accesible en dispositivos móviles | • UI responsiva (mobile-first)<br>• Cumple WCAG AA (contraste, foco) |

---

## 📅 TAREAS ASIGNADAS POR AGENTE (ROADMAP DE 6 SEMANAS)

### Formato: Semana – Día X → Agente → Tarea → Entregable

| Semana | Objetivo principal | Agentes involucrados |
|--------|-------------------|---------------------|
| **1** | **Kick-off y Diseño** | PO, Arquitecto, Diseñador |
| | • Reunión de visión y definición del backlog | PO |
| | • Diagramas C4 y esqueleto OpenAPI | Arquitecto |
| | • Wireframes y guía de estilo | Diseñador |
| | • Creación de repositorios (`backend/`, `frontend/`) y base CI (linters) | DevOps |

| **2** | **Infra local y autenticación** | Arquitecto, Backend, Frontend, DevOps |
| | • `docker-compose.yml` (backend, frontend, postgres) | DevOps |
| | • Implementar modelo `User`, autenticación JWT, endpoints `/auth/register` y `/auth/login` | Backend |
| | • Pantalla de registro/login en Next.js | Frontend |
| | • Pruebas unitarios de autenticación + CI pipeline completo | Backend + QA |

| **3** | **Gestión de Ferreterías** | Backend, Frontend, QA |
| | • Endpoints CRUD `ferreterias` (incluye RUT, dirección) | Backend |
| | • UI "Mi Ferretería" → crear/editar perfil | Frontend |
| | • Pruebas de integración (FastAPI TestClient) | QA |

| **4** | **Catálogo y comparación** | Backend, Frontend, QA |
| | • Modelos `Producto`, filtros (categoría, precio, stock) | Backend |
| | • API `GET /productos?category=&price_min=&price_max=` | Backend |
| | • Componentes `ProductCard`, `PriceComparison` | Frontend |
| | • Prueba E2E: buscar + comparar 2 ferreterías | QA |

| **5** | **Carrito y pedidos** | Backend, Frontend, QA |
| | • Modelo `Pedido`, lógica de stock e historial | Backend |
| | • Endpoints `POST /pedidos`, `GET /pedidos/{id}` | Backend |
| | • Hook `useCart`, página `checkout` | Frontend |
| | • Notificaciones por email (mock SendGrid) | Backend |
| | • Test de checkout completo (Playwright) | QA |

| **6** | **Dashboard, QA final e implementación** | Analista, DevOps, PO |
| | • Métricas (ventas, top-productos) → endpoint `/stats` | Backend |
| | • Dashboard en Next.js (`/admin`) | Frontend |
| | • Revisión de cobertura (≥80%) y corrección de errores | QA |
| | • Configuración de deploy | DevOps |
| | • Demo final de PO y stakeholders | PO |
| | • Documentación final (README, OpenAPI, guía de deploy) | PO + Arquitecto |

---

## 📦 ENTREGABLES CONCRETOS

| Tipo | Ruta / Nombre | Descripción |
|------|---------------|-------------|
| **Arquitectura** | `ARCHITECTURE.md` | Diagramas C4 (Mermaid) y decisiones de diseño |
| **API Abierta** | `backend/openapi.yaml` | Spec completa (auth, ferreterías, productos, pedidos, estadísticas) |
| **Backend** | `backend/app/api/v1/auth.py` | Endpoints de registro e inicio de sesión |
| | `backend/app/api/v1/ferreterias.py` | CRUD ferretería + autorización |
| | `backend/app/api/v1/productos.py` | Listado, filtro, detalle, CRUD (solo ferretería propietaria) |
| | `backend/app/api/v1/pedidos.py` | Crear pedido, historial, cambio de estado |
| | `backend/app/db/models.py` | Modelos SQLAlchemy (Usuario, Ferreteria, Producto, Pedido) |
| | `backend/tests/unit/` | Pruebas unitarias (pytest) |
| | `backend/Dockerfile` | Varias etapas (python-slim → final) |
| **Frontend** | `frontend/src/app/layout.tsx` | Layout global + navbar |
| | `frontend/src/components/ProductCard.tsx` | Tarjeta producto reutilizable |
| | `frontend/src/components/PriceComparison.tsx` | Tabla comparativa de precios |
| | `frontend/src/hooks/useAuth.ts` | Hook de autenticación con JWT |
| | `frontend/src/hooks/useCart.ts` | Gestión de carrito (Context) |
| | `frontend/src/lib/api.ts` | Wrapper de fetch con refresh token |
| | `frontend/tests/unit/` | Jest + React Testing Library |
| | `frontend/Dockerfile` | Build multi-etapa (node → nginx) |
| **UI/UX** | `Figma – FerreteraVillage (link)` | Prototipo interactivo y guía de estilo |
| **Infra** | `.github/workflows/ci.yml` | Lint → Test → Build → Push a Docker Hub |
| | `docker-compose.yml` | Orquesta backend, frontend, postgres |
| | `README_GLOBAL.md` | Instrucciones de setup, desarrollo y deploy |
| **QA** | `qa/playwright/tests/checkout.spec.ts` | Escenario: buscar, comparar, agregar al carrito, pagar |
| **Analytics** | `frontend/src/lib/analytics.ts` | Wrapper para Google Analytics / Mixpanel (tracking de eventos) |

---

## 🤖 PROMPT MAESTRO PARA LA IA

```
ERES UN COORDINADOR DE PROYECTOS DE SOFTWARE CON ACCESO A UN CONJUNTO DE AGENTES IA ESPECIALIZADOS. TU TAREA ES ORGANIZAR Y ORQUESTAR EL DESARROLLO DE UNA PLATAFORMA DE COMERCIO ELECTRÓNICO (MVP) PARA UN PUEBLO COLOMBIANO DE 7,000 HABITANTES, DONDE VARIAS FERRETERÍAS PODRÁN PUBLICAR SUS PRODUCTOS (LADRILLOS, CEMENTO, VARILLAS, ETC.), LOS USUARIOS PODRÁN CONSULTAR, COMPARAR PRECIOS Y REALIZAR PEDIDOS EN LÍNEA.

### REGLAS GENERALES
1. Mantén la separación clara entre backend y frontend (dos carpetas: `backend/` y `frontend/`).
2. Usa el stack indicado: Python 3.11 + FastAPI + PostgreSQL + SQLAlchemy + Alembic + JWT + Docker; Next.js 14 + React 18 + Tailwind CSS + App Router + TypeScript + Docker.
3. Cada agente recibe una lista de tareas concretas, entregables, criterios de aceptación y fechas estimadas (en semanas/días).
4. Los entregables deben incluir código, pruebas, documentación y artefactos de CI/CD.
5. Los agentes deben comunicarse mediante "artefactos compartidos" (OpenAPI spec, docker-compose, etc.).
6. Al finalizar, genera un documento resumen con:
   - Tabla de agentes y responsabilidades.
   - Roadmap de 6 semanas con hitos.
   - Listado de repositorios y estructura de carpetas.
   - Enlaces ficticios a los artefactos (ej. `backend/app/api/v1/ferreterias.py`).

### PASOS A SEGUIR POR LA IA
1. Crear los agentes con nombre, rol y descripción (usa la tabla de "AGENTES ESPECIALISTAS" como guía).
2. Asignar tareas a cada agente siguiendo el formato del roadmap de 6 semanas.
```

---

## 📖 README GLOBAL

### Cómo levantar y desplegar

#### Setup Local
```bash
# Clonar repositorio
git clone https://github.com/tu-org/ferretera-village.git
cd ferretera-village

# Levantar entorno completo
docker-compose up --build

# URLs de acceso:
# Backend API: http://localhost:8000
# Frontend Web: http://localhost:3000
# PostgreSQL: localhost:5432
# API Docs: http://localhost:8000/docs
```

#### Desarrollo Individual
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

## 📎 APÉNDICES – SNIPPETS Y EJEMPLOS DE ARTEFACTOS

### 10.1 `backend/openapi.yaml` (esqueleto)

```yaml
openapi: 3.0.3
info:
  title: Ferretera Village API
  version: 1.0.0
servers:
  - url: http://localhost:8000
paths:
  /auth/register:
    post:
      summary: Registro de usuario o ferretería
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RegisterRequest'
      responses:
        '201':
          description: Usuario creado
        '400':
          description: Datos inválidos
  /auth/login:
    post:
      summary: Login y obtención de JWT
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          description: Token JWT
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TokenResponse'
        '401':
          description: Credenciales inválidas
  /ferreterias:
    get:
      summary: Listado de ferreterías
      security:
        - bearerAuth: []
      responses:
        '200':
          description: Lista de ferreterías
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Ferreteria'
    post:
      summary: Crear nueva ferretería
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/FerreteriaCreate'
      responses:
        '201':
          description: Ferretería creada
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    RegisterRequest:
      type: object
      required: [email, password, role]
      properties:
        email:
          type: string
          format: email
        password:
          type: string
          format: password
        role:
          type: string
          enum: [user, ferreteria]
    LoginRequest:
      type: object
      required: [email, password]
      properties:
        email:
          type: string
          format: email
        password:
          type: string
    TokenResponse:
      type: object
      properties:
        access_token:
          type: string
        token_type:
          type: string
          example: bearer
    Ferreteria:
      type: object
      properties:
        id:
          type: integer
        nombre:
          type: string
        direccion:
          type: string
        telefono:
          type: string
    FerreteriaCreate:
      allOf:
        - $ref: '#/components/schemas/Ferreteria'
        - type: object
          required: [nombre, direccion]
```

### 10.2 `docker-compose.yml` LOCAL

```yaml
version: "3.9"
services:
  postgres:
    image: postgres:15-alpine
    container_name: ferretera-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ferretera
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    container_name: ferretera-backend
    depends_on:
      - postgres
    environment:
      DATABASE_URL: postgresql+psycopg2://postgres:postgres@postgres:5432/ferretera
      JWT_SECRET_KEY: cambia-esto-por-una-clave-segura
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  frontend:
    build: ./frontend
    container_name: ferretera-frontend
    depends_on:
      - backend
    environment:
      NEXT_PUBLIC_API_URL: http://localhost:8000
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
    command: npm run dev

volumes:
  pgdata:
```

---

*Este documento es la especificación completa para el desarrollo del MVP Ferretería Village. Sigue las mejores prácticas de documentación técnica y está listo para ser utilizado por los agentes especializados.*