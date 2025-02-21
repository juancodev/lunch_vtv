from pydantic import BaseModel

class UserAdmin(BaseModel):
    id: str
    email: str
    password: str
    is_active: bool