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
docker-compose -f ../docker-compose.prod.yml restart

echo "✅ Despliegue completado!"