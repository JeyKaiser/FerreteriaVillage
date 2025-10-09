from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import schemas
from app.database import get_db
from app.models import models

router = APIRouter()

@router.get("/", response_model=List[dict])
def get_ferreterias(db: Session = Depends(get_db)):
    ferreterias = db.query(models.Ferreteria).all()
    return [
        {
            "id": f.id,
            "nombre": f.nombre,
            "direccion": f.direccion,
            "telefono": f.telefono,
            "user_id": f.user_id
        }
        for f in ferreterias
    ]

@router.get("/{ferreteria_id}", response_model=dict)
def get_ferreteria(ferreteria_id: int, db: Session = Depends(get_db)):
    ferreteria = db.query(models.Ferreteria).filter(models.Ferreteria.id == ferreteria_id).first()
    if not ferreteria:
        raise HTTPException(status_code=404, detail="Ferretería no encontrada")
    return {
        "id": ferreteria.id,
        "nombre": ferreteria.nombre,
        "direccion": ferreteria.direccion,
        "telefono": ferreteria.telefono,
        "user_id": ferreteria.user_id
    }