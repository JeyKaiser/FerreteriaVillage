from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status
from app import models, schemas
from app.core.security import get_password_hash, verify_password, create_access_token
from datetime import timedelta

def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    """Crear un nuevo usuario con hash de contraseña"""
    # Verificar si el email ya existe
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Validar rol
    if user.role not in ["user", "ferreteria"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid role. Must be 'user' or 'ferreteria'"
        )

    # Crear usuario
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        password_hash=hashed_password,
        role=user.role
    )

    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

def authenticate_user(db: Session, email: str, password: str) -> models.User:
    """Autenticar usuario con email y contraseña"""
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        return None
    if not verify_password(password, user.password_hash):
        return None
    return user

def create_user_token(user: models.User) -> dict:
    """Crear token de acceso para usuario autenticado"""
    access_token_expires = timedelta(minutes=30)  # 30 minutos
    access_token = create_access_token(
        subject=user.email,
        expires_delta=access_token_expires
    )
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }