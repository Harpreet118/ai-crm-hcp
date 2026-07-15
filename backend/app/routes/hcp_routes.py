from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.hcp import HCP
from app.schemas.hcp_schema import HCPCreate

router = APIRouter()


@router.post("/hcp")
def create_hcp(
    data: HCPCreate,
    db: Session = Depends(get_db)
):
    hcp = HCP(
        name=data.name,
        speciality=data.speciality,
        location=data.location
    )

    db.add(hcp)
    db.commit()
    db.refresh(hcp)

    return hcp


@router.get("/hcp")
def get_hcps(db: Session = Depends(get_db)):
    return db.query(HCP).all()


@router.put("/hcp/{hcp_id}")
def update_hcp(
    hcp_id: int,
    data: HCPCreate,
    db: Session = Depends(get_db)
):
    hcp = db.query(HCP).filter(HCP.id == hcp_id).first()

    if not hcp:
        return {"message": "HCP not found"}

    hcp.name = data.name
    hcp.speciality = data.speciality
    hcp.location = data.location

    db.commit()
    db.refresh(hcp)

    return hcp


@router.delete("/hcp/{hcp_id}")
def delete_hcp(
    hcp_id: int,
    db: Session = Depends(get_db)
):
    hcp = db.query(HCP).filter(HCP.id == hcp_id).first()

    if not hcp:
        return {"message": "HCP not found"}

    db.delete(hcp)
    db.commit()

    return {"message": "HCP deleted successfully"}