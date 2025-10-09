# 🚀 Guía de Despliegue en Producción - Ferretería Village

## 📋 Requisitos para Poner la Aplicación Web Disponible al Público

### 🌐 **1. Hosting/Servidor Web**

**Opción A: Servicios en la Nube (Recomendado)**
- **Frontend (Next.js):** Vercel (gratis) o Netlify
- **Backend (FastAPI):** Render (gratis/pago) o Railway
- **Base de Datos:** PostgreSQL en la nube (Supabase, Railway, o Render)

**Opción B: VPS Tradicional**
- Servidor VPS (DigitalOcean, Linode, AWS EC2)
- Ubuntu 20.04+ con Docker instalado
- Mínimo: 2GB RAM, 1 CPU, 25GB almacenamiento

### 🔗 **2. Dominio y DNS**

**Dominio:**
- Registrar dominio: `ferreteria-village.com` o similar
- Costo: $10-15 USD/año en GoDaddy, Namecheap, etc.

**DNS:**
- Configurar DNS A/CNAME records apuntando al servidor
- Cloudflare (gratis) para CDN y protección DDoS

### 🔒 **3. Certificado SSL/HTTPS**

**Opciones gratuitas:**
- Let's Encrypt (certificado SSL gratuito)
- Cloudflare SSL (automático)
- Vercel/Netlify incluyen SSL automáticamente

### 🛠️ **4. Configuración de Producción**

**Variables de Entorno:**
```bash
# Backend
DATABASE_URL=postgresql://user:password@host:5432/ferreteria_village
SECRET_KEY=tu-clave-secreta-super-segura
CORS_ORIGINS=["https://ferreteria-village.com"]

# Frontend  
NEXT_PUBLIC_API_URL=https://api.ferreteria-village.com
```

**Optimizaciones:**
- Habilitar compresión GZIP
- Configurar caché de assets estáticos
- Optimizar imágenes y CSS
- Minificar JavaScript

### 💾 **5. Base de Datos en Producción**

**Opciones recomendadas:**
- **Supabase:** PostgreSQL gratuito hasta 500MB
- **Railway:** PostgreSQL con 5GB gratis
- **Render:** PostgreSQL desde $7/mes

**Configuración:**
- Backups automáticos diarios
- SSL habilitado
- Configuración de firewall (solo acceso desde backend)

### 📊 **6. Monitoreo y Analytics**

**Herramientas básicas:**
- Google Analytics (tráfico web gratuito)
- Google Search Console (SEO)
- Uptime monitoring (UptimeRobot gratis)

**Logs y errores:**
- Sentry (monitoreo de errores gratuito)
- LogRocket (análisis de sesiones)

## 🚀 **Opciones de Despliegue Rápido**

### **🎯 Opción 1: Despliegue Gratuito (Recomendado para empezar)**

**Total: $12/año (solo dominio)**

1. **Frontend en Vercel:**
   ```bash
   # Conectar GitHub repo a Vercel
   # Deploy automático desde main branch
   # SSL automático incluido
   ```

2. **Backend en Render:**
   ```bash
   # Plan gratuito: 750 horas/mes
   # Deploy desde GitHub
   # SSL automático
   ```

3. **Base de Datos en Supabase:**
   ```bash
   # PostgreSQL gratuito
   # 500MB storage
   # Panel de administración web
   ```

### **🎯 Opción 2: Despliegue VPS (Más control)**

**Total: $35-60/mes**

1. **VPS DigitalOcean/Linode:** $20-40/mes
2. **Dominio:** $12/año  
3. **Backup storage:** $5/mes

**Configuración VPS:**
```bash
# 1. Instalar Docker y Docker Compose
sudo apt update
sudo apt install docker.io docker-compose
sudo usermod -aG docker $USER

# 2. Clonar repositorio
git clone https://github.com/tu-usuario/ferreteria-village.git
cd ferreteria-village

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con valores de producción

# 4. Levantar servicios
docker-compose -f docker-compose.prod.yml up -d

# 5. Configurar Nginx reverse proxy
# 6. Configurar SSL con Certbot
```

## 📱 **Configuraciones Específicas para Colombia**

### **🌍 Localización:**
- Configurar timezone: America/Bogota
- Moneda: Pesos colombianos (COP)
- Idioma: Español (es-CO)
- Formato de teléfono: +57 XXX XXX XXXX

### **💳 Pagos en Línea:**
- **Mercado Pago:** Integración para Colombia
- **PayU:** Pasarela de pagos local
- **Wompi:** Solución colombiana
- **Efecty/Baloto:** Pagos en efectivo

### **🚚 Logística:**
- Integración con Servientrega
- Coordinadora de envíos
- TCC (Transporte Coordinado de Colombia)
- Entrega local en el pueblo

## 🔧 **Scripts de Despliegue Automático**

**deploy.sh:**
```bash
#!/bin/bash
echo "🚀 Desplegando Ferretería Village..."

# 1. Build frontend
cd frontend
npm run build

# 2. Deploy backend
cd ../backend
docker build -t ferreteria-backend .

# 3. Update database
python -m alembic upgrade head

# 4. Restart services
docker-compose restart

echo "✅ Despliegue completado!"
```

## 📊 **Costos Estimados Mensuales**

### **💚 Plan Básico (Gratis/Casi Gratis):**
- Frontend: Vercel (Gratis)
- Backend: Render Free (Gratis)
- DB: Supabase (Gratis)
- Dominio: $1/mes
- **Total: ~$1/mes**

### **🔥 Plan Profesional:**
- Frontend: Vercel Pro ($20/mes)
- Backend: Render Starter ($7/mes)
- DB: PostgreSQL ($15/mes)
- Dominio + SSL ($1/mes)
- CDN: Cloudflare Pro ($20/mes)
- **Total: ~$63/mes**

### **🚀 Plan Empresarial:**
- VPS: DigitalOcean ($40/mes)
- DB Managed: ($25/mes) 
- CDN + Security ($30/mes)
- Backup: ($10/mes)
- **Total: ~$105/mes**

## ⚡ **Pasos Inmediatos para Producción**

1. **Crear cuentas:**
   - GitHub (código fuente)
   - Vercel (frontend hosting)
   - Render (backend hosting)
   - Supabase (base de datos)

2. **Registrar dominio:**
   - ferreteria-village.com
   - ferreteria-mi-pueblo.com

3. **Configurar despliegues:**
   - Push código a GitHub
   - Conectar repos a servicios
   - Configurar variables de entorno

4. **Testing:**
   - Probar todas las funcionalidades
   - Verificar responsive design
   - Test de velocidad (Google PageSpeed)

## 🎯 **Recomendación para Empezar**

Para un pueblo de 7,000 habitantes, recomiendo **comenzar con la Opción 1 (Gratuita)**:

1. Deploy en Vercel + Render + Supabase
2. Dominio personalizado ($12/año)
3. Google Analytics para métricas
4. Empezar a captar usuarios locales
5. Escalar según crecimiento de tráfico

**Una vez funcionando y con usuarios, migrar al Plan Profesional para mayor estabilidad y features.**