from fastapi import APIRouter
from fastapi.responses import JSONResponse
from models.user_admin import UserAdmin
from db.mongodb import db

auth_router = APIRouter()


@auth_router.post("/api/auth/login")
async def create_user(user: UserAdmin):
    print(user)
    user = await db.admins.insert_one(user.model_dump())
    return JSONResponse(content=user)

