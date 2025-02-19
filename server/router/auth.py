from fastapi import APIRouter
from fastapi.responses import JSONResponse
from schemas.users import AuthUser

auth_router = APIRouter()

@auth_router.post("/auth/login", tags=["auth"], response_model=AuthUser)
def login(auth_user: AuthUser):
    return {
        "email": auth_user.email,
        "password": auth_user.password,
    }
