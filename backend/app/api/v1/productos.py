from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import schemas
from app.database import get_db
from app.models import models

router = APIRouter()

@router.get("/", response_model=List[dict])
def get_productos(db: Session = Depends(get_db)):
    productos = db.query(models.Producto).all()
    return [
        {
            "id": p.id,
            "nombre": p.nombre,
            "descripcion": p.descripcion,
            "precio": p.precio,
            "stock": p.stock,
            "categoria": p.categoria,
            "ferreteria_id": p.ferreteria_id,
            "ferreteria_nombre": p.ferreteria.nombre if p.ferreteria else None
        }
        for p in productos
    ]

@router.get("/{producto_id}", response_model=dict)
def get_producto(producto_id: int, db: Session = Depends(get_db)):
    producto = db.query(models.Producto).filter(models.Producto.id == producto_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return {
        "id": producto.id,
        "nombre": producto.nombre,
        "descripcion": producto.descripcion,
        "precio": producto.precio,
        "stock": producto.stock,
        "categoria": producto.categoria,
        "ferreteria_id": producto.ferreteria_id,
        "ferreteria_nombre": producto.ferreteria.nombre if producto.ferreteria else None
    }