# 🏪 Ferretería Village - MVP E-commerce
## Plataforma de comercio electrónico para ferreterías de pueblo colombiano

### 📋 Descripción del Proyecto

Ferretería Village es una plataforma de comercio electrónico diseñada específicamente para un pueblo colombiano de 7,000 habitantes, donde múltiples ferreterías pueden publicar sus productos de construcción (ladrillos, cemento, varillas, etc.) y los usuarios pueden consultar, comparar precios y realizar pedidos en línea.

### 🛠️ Stack Tecnológico

- **Backend:** Python 3.11 + FastAPI + PostgreSQL + SQLAlchemy + Alembic + JWT + Docker
- **Frontend:** Next.js 14 + React 18 + Tailwind CSS + App Router + TypeScript + Docker
- **Base de Datos:** PostgreSQL 15
- **Contenedores:** Docker & Docker Compose

### 🚀 Inicio Rápido

#### Prerrequisitos
- Docker y Docker Compose instalados
- Git

#### Instalación y Ejecución

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-org/ferretera-village.git
cd ferretera-village
```

2. **Levantar el entorno completo:**
```bash
docker-compose up --build
```

3. **URLs de acceso:**
- **Frontend Web:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Documentación:** http://localhost:8000/docs
- **PostgreSQL:** localhost:5432

#### Desarrollo Individual

**Backend solamente:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend solamente:**
```bash
cd frontend
npm install
npm run dev
```

### 📁 Estructura del Proyecto

```
ferretera-village/
├── README.md                           # Este archivo
├── docker-compose.yml                  # Orquestación de servicios
├── .env.example                        # Variables de entorno ejemplo
├── .gitignore                          # Archivos ignorados por Git
│
├── backend/                            # API Backend con FastAPI
│   ├── Dockerfile                      # Imagen Docker del backend
│   ├── requirements.txt                # Dependencias Python
│   ├── alembic.ini                     # Configuración Alembic
│   ├── app/                            # Aplicación principal
│   │   ├── main.py                     # Punto de entrada FastAPI
│   │   ├── config.py                   # Configuraciones
│   │   ├── database.py                 # Conexión a base de datos
│   │   ├── api/                        # Endpoints API
│   │   ├── models/                     # Modelos SQLAlchemy
│   │   ├── schemas/                    # Schemas Pydantic
│   │   ├── services/                   # Lógica de negocio
│   │   └── utils/                      # Utilidades
│   └── tests/                          # Tests del backend
│
├── frontend/                           # Aplicación Next.js
│   ├── Dockerfile                      # Imagen Docker del frontend
│   ├── package.json                    # Dependencias Node.js
│   ├── next.config.js                  # Configuración Next.js
│   ├── tailwind.config.js              # Configuración Tailwind
│   ├── tsconfig.json                   # Configuración TypeScript
│   ├── src/                            # Código fuente
│   │   ├── app/                        # App Router (Next.js 14)
│   │   ├── components/                 # Componentes React
│   │   ├── hooks/                      # Custom hooks
│   │   ├── lib/                        # Utilidades y configuraciones
│   │   └── styles/                     # Estilos CSS
│   └── public/                         # Archivos estáticos
│
└── docs/                               # Documentación del proyecto
    ├── ARCHITECTURE.md                 # Documentación de arquitectura
    ├── API.md                          # Documentación de API
    └── DEPLOYMENT.md                   # Guía de despliegue
```

### 🎯 Funcionalidades del MVP

#### Para Usuarios (Habitantes del pueblo):
- ✅ Registro e inicio de sesión
- ✅ Búsqueda de productos por categoría y rango de precios  
- ✅ Comparación de precios entre ferreterías
- ✅ Carrito de compras persistente
- ✅ Proceso de checkout y creación de pedidos
- ✅ Historial de pedidos

#### Para Ferreterías:
- ✅ Registro de negocio con datos básicos (RUT, dirección)
- ✅ Panel de gestión de productos (CRUD completo)
- ✅ Gestión de inventarios y stock
- ✅ Notificaciones de nuevos pedidos (email/SMS)
- ✅ Dashboard con métricas básicas

#### Para Administradores:
- ✅ Panel de métricas y estadísticas
- ✅ Gestión de usuarios y ferreterías
- ✅ Reportes de ventas y productos más buscados

### 🧪 Testing

**Backend:**
```bash
cd backend
pytest tests/ -v
```

**Frontend:**
```bash
cd frontend
npm test
```

**E2E Tests:**
```bash
npx playwright test
```

### 📊 Métricas de Calidad

- ✅ Cobertura de tests ≥ 80%
- ✅ Tiempo de respuesta < 2 segundos
- ✅ UI responsive (mobile-first)
- ✅ Accesibilidad WCAG AA
- ✅ Seguridad: HTTPS, JWT, validación de inputs

### 🚢 Despliegue

#### Staging/Producción Sugerida:
- **Backend:** Render / Railway / AWS Elastic Beanstalk
- **Frontend:** Vercel / Netlify
- **Base de Datos:** PostgreSQL en la nube (RDS, PlanetScale, etc.)

#### Variables de Entorno Requeridas:

**Backend:**
```bash
DATABASE_URL=postgresql://user:pass@host:5432/ferretera
JWT_SECRET_KEY=tu-clave-secreta-muy-segura
CORS_ORIGINS=["https://tu-frontend.vercel.app"]
SENDGRID_API_KEY=tu-api-key-sendgrid  # Para emails
TWILIO_ACCOUNT_SID=tu-twilio-sid      # Para SMS
```

**Frontend:**
```bash
NEXT_PUBLIC_API_URL=https://tu-backend.render.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX       # Google Analytics
```

### 👥 Contribuir

1. Fork del repositorio
2. Crear rama para feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -am 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### 🤝 Soporte

Para soporte técnico o preguntas sobre el proyecto:
- 📧 Email: soporte@ferreteria-village.com
- 🐛 Issues: [GitHub Issues](https://github.com/tu-org/ferretera-village/issues)
- 📖 Documentación: [Wiki del proyecto](https://github.com/tu-org/ferretera-village/wiki)

---

**Desarrollado con ❤️ para la comunidad de ferreterías colombianas**