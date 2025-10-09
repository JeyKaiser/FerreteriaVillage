from fastapi import APIRouter
from app.api.v1.auth import router as auth_router
from app.api.v1.productos import router as productos_router
from app.api.v1.ferreterias import router as ferreterias_router

api_router = APIRouter()
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(productos_router, prefix="/productos", tags=["productos"])
api_router.include_router(ferreterias_router, prefix="/ferreterias", tags=["ferreterias"])