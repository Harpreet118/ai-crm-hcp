from fastapi import APIRouter
from app.agents.hcp_agent import hcp_graph


router = APIRouter()


@router.post("/chat")
def chat(data: dict):

    message = data.get("message")


    result = hcp_graph.invoke(
        {
            "message": message
        }
    )


    return result