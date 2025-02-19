from config.database import Base
from sqlalchemy import Column, Integer, String, Boolean


class AuthUser(Base):

    __tablename__ = "auth_users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)