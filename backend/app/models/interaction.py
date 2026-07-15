from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.connection import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_id = Column(Integer, ForeignKey("hcps.id"))
    product = Column(String)
    sentiment = Column(String)
    summary = Column(String)
    interaction_date = Column(String)
    brochure_shared = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    hcp = relationship("HCP", back_populates="interactions")