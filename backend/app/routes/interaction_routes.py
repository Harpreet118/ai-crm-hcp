from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.interaction import Interaction
from app.schemas.interaction_schema import InteractionCreate

router = APIRouter()


# Create Interaction
@router.post("/interaction")
def create_interaction(
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = Interaction(
        hcp_id=data.hcp_id,
        product=data.product,
        sentiment=data.sentiment,
        summary=data.summary,
        interaction_date=data.interaction_date,
        brochure_shared=str(data.brochure_shared)
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction


# Get All Interactions
@router.get("/interaction")
def get_interactions(
    db: Session = Depends(get_db)
):
    return db.query(Interaction).all()


# Get Single Interaction
@router.get("/interaction/{interaction_id}")
def get_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return {"message": "Interaction not found"}

    return interaction


# Update Interaction
@router.put("/interaction/{interaction_id}")
def update_interaction(
    interaction_id: int,
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return {"message": "Interaction not found"}

    interaction.hcp_id = data.hcp_id
    interaction.product = data.product
    interaction.sentiment = data.sentiment
    interaction.summary = data.summary
    interaction.interaction_date = data.interaction_date
    interaction.brochure_shared = str(data.brochure_shared)

    db.commit()
    db.refresh(interaction)

    return interaction

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.interaction import Interaction
from app.schemas.interaction_schema import InteractionCreate

router = APIRouter()


# Create Interaction
@router.post("/interaction")
def create_interaction(
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = Interaction(
        hcp_id=data.hcp_id,
        product=data.product,
        sentiment=data.sentiment,
        summary=data.summary,
        interaction_date=data.interaction_date,
        brochure_shared=str(data.brochure_shared)
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction


# Get All Interactions
@router.get("/interaction")
def get_interactions(
    db: Session = Depends(get_db)
):
    return db.query(Interaction).all()


# Get One Interaction
@router.get("/interaction/{interaction_id}")
def get_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return {"message": "Interaction not found"}

    return interaction


# Update Interaction
@router.put("/interaction/{interaction_id}")
def update_interaction(
    interaction_id: int,
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return {"message": "Interaction not found"}

    interaction.hcp_id = data.hcp_id
    interaction.product = data.product
    interaction.sentiment = data.sentiment
    interaction.summary = data.summary
    interaction.interaction_date = data.interaction_date
    interaction.brochure_shared = str(data.brochure_shared)

    db.commit()
    db.refresh(interaction)

    return interaction


# Delete Interaction
@router.delete("/interaction/{interaction_id}")
def delete_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return {"message": "Interaction not found"}

    db.delete(interaction)
    db.commit()

    return {
        "message": "Interaction deleted successfully"
    }


# Test Route
@router.get("/interaction-test")
def interaction_test():
    return {
        "message": "Interaction route working"
    }