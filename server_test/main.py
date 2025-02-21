from fastapi import FastAPI
from router.auth import auth_router

app = FastAPI()

app.title = "Lunch VTV"
app.version = "0.0.1"

app.include_router(auth_router)