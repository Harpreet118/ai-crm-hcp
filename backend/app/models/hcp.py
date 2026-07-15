from sqlalchemy import Column, Integer, String, DateTime
from app.database.connection import Base
from datetime import datetime
from sqlalchemy.orm import relationship



class HCP(Base):
    __tablename__ = "hcps"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    speciality = Column(String)
    location = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    interactions = relationship(
    "Interaction",
    back_populates="hcp",
    cascade="all, delete"
)