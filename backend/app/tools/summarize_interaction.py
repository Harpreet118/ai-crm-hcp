from langchain_core.tools import tool

from app.database.session import SessionLocal
from app.models.interaction import Interaction
from app.models.hcp import HCP


@tool
def summarize_interaction(hcp_name: str):
    """
    Summarize the latest interaction with an HCP.
    """

    print("HCP Name Received:", hcp_name)

    db = SessionLocal()

    try:
        hcp = (
    db.query(HCP)
    .filter(HCP.name.ilike(f"%{hcp_name.strip()}%"))
    .first()
)
        if not hcp:
            return {
                "message": "HCP not found"
            }

        interaction = (
            db.query(Interaction)
            .filter(Interaction.hcp_id == hcp.id)
            .order_by(Interaction.created_at.desc())
            .first()
        )

        if not interaction:
            return {
                "message": "No interaction found"
            }

        return {
            "hcp_name": hcp.name,
            "summary": interaction.summary,
            "product": interaction.product,
            "sentiment": interaction.sentiment,
            "interaction_date": str(interaction.interaction_date)
        }

    finally:
        db.close()