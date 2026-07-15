from pydantic import BaseModel


class HCPCreate(BaseModel):
    name: str
    speciality: str
    location: str


class HCPResponse(BaseModel):
    id: int
    name: str
    speciality: str
    location: str

    class Config:
        from_attributes = True