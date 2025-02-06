from fastapi import FastAPI




app = FastAPI()

app.title = "Lunch VTV"
app.version = "0.0.1"

@app.get("/")
def read_root():
    return {"Hello": "World"}