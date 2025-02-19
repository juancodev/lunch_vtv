from fastapi import FastAPI
from config.database import engine, Base
# from middleware.error_handler import ErrorHandler
from router.auth import auth_router

app = FastAPI()

app.title = "Lunch VTV"
app.version = "0.0.1"

# app.add_middleware(ErrorHandler)

app.include_router(auth_router)

Base.metadata.create_all(bind=engine)