from pydantic import BaseModel


class InteractionCreate(BaseModel):
    hcp_id: int
    product: str
    sentiment: str
    summary: str
    interaction_date: str
    brochure_shared: bool