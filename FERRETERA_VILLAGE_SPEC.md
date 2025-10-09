📦 FERRETERA VILLAGE
(Plataforma e‑commerce para ferreterías de un pueblo colombiano – 7 000 habitantes)

📄 ÍNDICE
Visión y alcance del MVP
Arquitectura y estructura de repositorios.
Diagramas (Sirena)
Agentes IA y sus responsabilidades
Backlog de User Stories y Criterios de aceptación
Tareas asignadas por agente (roadmap de 6 semanas)
Entregables concretos (código, docs, pipelines, etc.)
Prompt maestro para la IA (copiar y pegar)
README global (cómo levantar y desplegar)
Apéndices – snippets y ejemplos de artefactos


Nombre provisional	Pueblo Ferretera
Cliente	Gobierno
Objetivo	Permitir a cada hurón
Público objetivo	7 000 habitantes (propietarios
MVP incluye	• Registro e inicio de sesión (usuarios y ferreterías). <br> • Catálogo de productos con filtros y comparación de precios. <br> • Carrito de compras<br> • Panel de<br> • Notificaciones por correo electrónico/SMS. <br> • Panel de métricas básicas (ventas por ferretería, productos más buscados).
Tecnologías obligatorias	Backend: Python 3.11, FastAPI,<br> Frontend: Next.js 14 (Aplicación
Entorno de desarrollo	
docker‑compose up

levanta backend, frontend y base de datos en modo local.
Despliegue sugerido	Backend → Renderizado / Ferrocarril / AWS Elastic Beanstalk. Frontend → Verc

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

    Separación clara :
backend/

Contiene toda la lógica de negocio y la API. `frontal/
frontend/

Contiene la UI y la capa de integración con la API.
Comunicación : La API está descrita en
openapi.yaml

(generado por el Arquitecto ) y es consumida por los ganchos del frontend.


DIAGRAMAS (SIRENA)
3.1 Diagrama C4 – Nivel 1 (Contexto)
C4Context
    Person(Usuario, "Habitante del pueblo")
    Person(Ferreteria, "Propietario de ferretería")
    System_Boundary(s1, "Ferretera Village")
        System(Backend, "API (FastAPI)")
        System(Frontend, "Web App (Next.js)")
    Enterprise_Boundary(e1, "Infra Cloud")
        System_Ext(Postgres, "PostgreSQL (RDS)")
        System_Ext(EmailSrv, "Servicio de Email (SendGrid)")
        System_Ext(SMSSrv, "Servicio SMS (Twilio)")

    Rel(Usuario, Frontend, "Usa UI (web/mobile)")
    Rel(Ferreteria, Frontend, "Usa UI (web)")
    Rel(Frontend, Backend, "Llamadas REST")
    Rel(Backend, Postgres, "Persistencia")
    Rel(Backend, EmailSrv, "Envía notificaciones")
    Rel(Backend, SMSSrv, "Envía SMS")

3.2 Diagrama de
C4Deployment
    Deployment_Node(k8s, "Cluster Kubernetes (Render)", "Linux")
        Container(backend, "backend (Docker)", "FastAPI")
        Container(frontend, "frontend (Docker)", "Next.js")
        Container(db, "PostgreSQL", "RDS")
    Deployment_Node(userPC, "PC / Smartphone", "Browser")
        Container(browser, "Browser", "HTML/CSS/JS")
    Rel(userPC, frontend, "HTTPS")
    Rel(frontend, backend, "HTTPS / API")
    Rel(backend, db, "SQL")


     4️⃣AGENTES IA Y SUS RESPONSABILIDADES
#	Agente	Especialidad	Responsabilidades clave
1	Propietario del producto (PO)	Gestión de requerimientos, priorización	• Definir backlog y user stories <br> • Aprobar entregables <br> • Coord
2	Arquitecto de Soluciones	Diseño de arquitectura, contrato API	• Diagramas C4 <br> • Especificaciones OpenAPI (
openapi.yaml

) <br> • Definir patrones (repositorio, capa de servicio)
3	Ingeniero Backend	Python, FastAPI, base de datos	• Modelado SQLAlchemy <br> • Puntos finales CRUD, autenticación, pedidos <br> • Pruebas (pytest) <<br> • Dockerfile y CI
4	Ingeniero Frontend	Next.js, React, Tailwind	• Rutas (App Router) <br> • Componentes UI <br> • Hooks de consumo API <br> • Pruebas (Jest/RTL)
5	Diseñador UI/UX	Experiencia de usuario, branding.	• Wireframes y prototipo Figma <br> • Guía de estilo (colores, tipografía) <br> • Exportar
6	DevOps / Infra	CI/CD, implementación, monitoreo	• Docker-compose local <br> • Pipelines Acciones de GitHub <br> • Implementar un Render/Vercel <br> • Monitoreo (Prometheus)
7	Ingeniero de control de calidad	Calidad, pruebas	• Plan de pruebas (funcional, carga) <br> • Guiones Dramaturgo (E2E) <br> • Cobertura ≥ 80 %
8	Analista de datos (opcional)	Métricas de	• Definir eventos de seguimiento <br> • Configurar Google Analytics / Mixpanel <br> • Panel de métricas básicas



5️⃣ BACKLOG DE HISTORIAS DE USUARIOS Y CRITERIOS DE ACEPTACIÓN
IDENTIFICACIÓN	Historial de usuario	Criterio de aceptación
US‑01	Como habitante , quiero crear una cuenta y loguearme para poder comprar.	- Registro con email + contraseña <br> - Login devuelve JWT válido <<br> - Sesión persiste en el frontend (localStorage)
US‑02	Como ferretería , quiero registrar mi negocio y gestionar mis productos.	- Registro de ferretería con datos básicos (RUT, dirección) <br> -<br> - CRUD completo (imagen, descripción, stock, precio)
US‑03	Como habitante , quiero buscar productos por categoría y rango de precios.	- Filtros en la vista de catálogo <br> - Resultado muestra al menos 3 productos por página <br> - Cada tarjeta muestra foto, nombre, precio
US‑04	Como habitante , quiero	- Botón “Comparar” agrega producto a tabla de comparación <br> - Tabla muestra nombre, ferretería, precio, disponibilidad
US‑05	Como habitante , quiero agregar productos a un carrito y crear un pedido.	- Carrito persiste mientras navega <br> - Checkout solicita dirección y método de<br> - Al confirmar, se crea registro de pedido y se envía correo electrónico de confirmación
US‑06	Como ferretería , quiero recibir notificaciones cuando llegue un nuevo pedido.	- Email y/o SMS enviado al crear el pedido <br> - Dashboard muestra notificación “Nuevo pedido”
Estados Unidos‑07	Como administrador del sistema , quiero ver métricas de ventas y productos más buscados.	- Dashboard con gráficos (ventas por ferretería, top‑5 productos) <br> - Datos actualizados al menos cada 15 min
Estados Unidos‑08	Como usuario , quiero que la aplicación sea accesible en dispositivos móviles.	- UI responsiva (mobile-first) <br> - Cumple WCAG AA (contraste, foco)


6️⃣ 
Formato:
Semana – Día X

→ Agente → Tarea → Entregable

Semana	Objetivo principal	Agentes involucrados
1	Kick-off y Diseño	PO, Arquitecto, Diseñador
• Reunión de visión y definición del backlog	correos
• Diagramas C4 y esqueleto OpenAPI	Arquitecto
•	Diseñador
• Creación de repositorios (
backend/

,
frontend/

) y base CI (pelusa)	DevOps
2	Infralocal y autenticación	Arquitecto, Backend, Frontend, DevOps
•
docker‑compose.yml

(backend, frontend, postgres)	DevOps
• Implementar modelo
User

, autenticación JWT, puntos finales
/auth/register

y
/auth/login

Backend
• Pantalla de registro/login en Next.js	Interfaz
• Pruebas unitarios de autenticación + CI pipeline completo	Backend + control de calidad
3	Gestión de Ferreterías	Backend, Frontend, Control de calidad
• Puntos finales CRUD
ferreterias

(incluye RUT, dirección)	Backend
• UI “Mi Ferretería” → crear/editar perfil	Interfaz
• Pruebas de integración (FastAPI TestClient)	Control de calidad
4	Catálogo y comparación	Backend,
• Modelos
Producto

, filtros (categoría, precio, stock)	Backend
• API
GET /productos?category=&price_min=&price_max=

Backend
• Componentes
ProductCard

,
PriceComparison

Interfaz
• Prueba E2E: buscar + comparar 2 ferreterías	Control de calidad
5	Carrito y pedidos	Backend, Frontend, Control de calidad
• Modelo
Pedido

, lógica de stock e historial	Backend
• Puntos finales
POST /pedidos

,
GET /pedidos/{id}

Backend
• Gancho
useCart

, página
checkout

Interfaz
• Notificaciones por correo electrónico (simulacro de SendGrid)	Backend
• Test de checkout completo (Dramaturgo)	Control de calidad
6	Panel de control, control de calidad final e implementación	Analista, DevOps, PO
• Métricas (ventas, top‑productos) → punto final
/stats

Backend
• Panel de control en Next.js (
/admin

)	Interfaz
• Revisión de cobertura (≥80%) y corrección de errores	Control de calidad
• Configuración de	DevOps
• Demostración final de PO y partes interesadas	Hacer
• Documentación final (README, OpenAPI, guía de implementación)	PO + Arquitecto


7️⃣ CONCRETOS ENTREGABLES
Tipo	Ruta / Nombre	Descripción
Arquitectura	
ARCHITECTURE.md

Diagramas C4 (Sirena) y decisiones de diseño.
API abierta	
backend/openapi.yaml

Spec completa (auth, ferreterías, productos, pedidos, estadísticas).
Backend	
backend/app/api/v1/auth.py

Puntos finales de registro e inicio de sesión.
backend/app/api/v1/ferreterias.py

CRUD ferretería + autorización.
backend/app/api/v1/productos.py

Listado, filtro, detalle, CRUD (solo ferretería propietaria).
backend/app/api/v1/pedidos.py

Crear pedido, historial, cambio de estado.
backend/app/db/models.py

Modelos SQLAlchemy (Usuario, Ferreteria, Producto, Pedido).
backend/tests/unit/

Pruebas unitarias (pytest).
backend/Dockerfile

Varias etapas (python-slim → final).
Interfaz	
frontend/src/app/layout.tsx

Diseño global + barra de navegación.
frontend/src/components/ProductCard.tsx

Tarjeta producto reutilizable.
frontend/src/components/PriceComparison.tsx

Tabla comparativa de precios.
frontend/src/hooks/useAuth.ts

Gancho de autenticación con JWT.
frontend/src/hooks/useCart.ts

Gestión de carrito (Contexto).
frontend/src/lib/api.ts

Envoltorio de búsqueda de token de refresco.
frontend/tests/unit/

Biblioteca de pruebas Jest + React.
frontend/Dockerfile

Construir en varias etapas (nodo → nginx).
Interfaz de usuario/experiencia de usuario	
Figma – FerreteraVillage (link)

Prototipo interactivo y guía de estilo.
Infra	
.github/workflows/ci.yml

Pelusa → Probar → Construir → Enviar a Docker Hub.
docker-compose.yml

Orquesta backend, frontend, postgres.
README_GLOBAL.md

Instrucciones de configuración, desarrollo y implementación.
Control de calidad	
qa/playwright/tests/checkout.spec.ts

Escenario: buscar, comparar, agregar al carrito, pagar.
Analítica	
frontend/src/lib/analytics.ts

Wrapper para Google Analytics / Mixpanel (seguimiento de eventos).


ERES UN COORDINADOR DE PROYECTOS DE SOFTWARE CON ACCESO A UN CONJUNTO DE AGENTES IA ESPECIALIZADOS. TU TAREA ES ORGANIZAR Y ORQUESTAR EL DESARROLLO DE UNA PLATAFORMA DE COMERCIO ELECTRÓNICO (MVP) PARA UN PUEBLO COLOMBIANO DE 7,000 HABITANTES, DONDE VARIAS FERRETERÍAS PODRÁN PUBLICAR SUS PRODUCTOS (LADRILLOS, CEMENTO, VARILLAS, ETC.), LOS USUARIOS PODRÁN CONSULTAR, COMPARAR PRECIOS Y REALIZAR PEDIDOS EN LÍNEA.

### REGLAS GENERALES
1. Mantén la separación clara entre backend y frontend (dos carpetas: `backend/` y `frontend/`).
2. Usa el stack indicado: Python 3.11 + FastAPI + PostgreSQL + SQLAlchemy + Alembic + JWT + Docker; Next.js 14 + React 18 + Tailwind CSS + App Router + TypeScript + Docker.
3. Cada agente recibe una lista de tareas concretas, entregables, criterios de aceptación y fechas estimadas (en semanas/días).
4. Los entregables deben incluir código, pruebas, documentación y artefactos de CI/CD.
5. Los agentes deben comunicarse mediante “artefactos compartidos” (OpenAPI spec, docker‑compose, etc.).
6. Al finalizar, genera un documento resumen con:
   - Tabla de agentes y responsabilidades.
   - Roadmap de 6 semanas con hitos.
   - Listado de repositorios y estructura de carpetas.
   - Enlaces ficticios a los artefactos (ej. `backend/app/api/v1/ferreterias.py`).

### PASOS A SEGUIR POR LA IA
1. Crear los agentes con nombre, rol y descripción (usa la tabla de “AGENTES ESPECIALISTAS” como guía).
2. Asignar tareas a cada agente siguiendo el formato:


## 10️⃣ APÉNDICES – SNIPPETS Y EJEMPLOS DE ARTEFACTOS  

### 10.1 `backend/openapi.yaml` (esqueleto)

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


LOCAL:
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