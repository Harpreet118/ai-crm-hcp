from langchain_core.tools import tool

from app.database.session import SessionLocal
from app.models.interaction import Interaction


@tool
def edit_interaction(
    interaction_id: int,
    sentiment: str
):
    """
    Update interaction details.
    """

    db = SessionLocal()

    try:

        interaction = (
            db.query(Interaction)
            .filter(Interaction.id == interaction_id)
            .first()
        )


        if not interaction:
            return {
                "message": "Interaction not found"
            }


        interaction.sentiment = sentiment


        db.commit()
        db.refresh(interaction)


        return {
            "message": "Interaction updated successfully",
            "id": interaction.id,
            "sentiment": interaction.sentiment
        }


    finally:
        db.close()