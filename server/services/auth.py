from models.auth import AuthUser as AuthUserModel
from schemas.users import AuthUser

class AuthUserService:

    def __init__(self, db) -> None:
        self.db = db

    def authenticate(self, auth_user: AuthUser):
        user_authenticated = self.db.query(AuthUserModel).filter_by(email=auth_user.email).first()
        print("user_authenticated -> ", user_authenticated)
        if user_authenticated:
            return user_authenticated
        else:
            return {"error-auth": "Credenciales incorrectas"}