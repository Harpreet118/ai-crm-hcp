from langchain_core.tools import tool
from sqlalchemy.orm import Session

from app.database.session import SessionLocal
from app.models.hcp import HCP


@tool
def search_hcp(hcp_name: str):
    """
    Search HCP from PostgreSQL database.
    """

    db: Session = SessionLocal()

    try:
        hcp = (
            db.query(HCP)
            .filter(HCP.name == hcp_name)
            .first()
        )

        if not hcp:
            return {
                "message": "HCP not found"
            }

        return {
            "id": hcp.id,
            "name": hcp.name,
            "speciality": hcp.speciality,
            "location": hcp.location,
            "created_at": str(hcp.created_at)
        }

    finally:
        db.close()