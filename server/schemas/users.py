from pydantic import BaseModel

class AuthUser(BaseModel):
    email: str
    password: str

    # Example of the AuthUser model for the documentation

    class Config:
        json_schema_auth_user = {
            "example": {"email": "example@example.com", "password": "example"}
        }