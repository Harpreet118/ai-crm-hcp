from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from app.core.llm import llm
from app.tools.log_interaction import log_interaction
from app.agents.hcp_agent import hcp_graph

from app.database.connection import engine, Base
from app.models import interaction
from app.models import hcp
from app.routes.hcp_routes import router as hcp_router
from app.routes.interaction_routes import router as interaction_router
from app.routes.chat_routes import router as chat_router


# Create database tables
Base.metadata.create_all(bind=engine)

# FastAPI app
app = FastAPI(
    title="AI CRM HCP API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# Include routes
app.include_router(hcp_router)
app.include_router(interaction_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "AI CRM Backend Running 🚀"
    }


@app.get("/test-ai")
def test_ai():
    response = llm.invoke(
        "Say hello from Groq in one sentence."
    )

    return {
        "response": response.content
    }


@app.get("/log-test")
def log_test():

    message = """
    Today I met Dr. Smith.

    We discussed Product X.

    The sentiment was positive.

    I shared brochures.
    """

    return log_interaction(message)


@app.get("/agent-test")
def agent_test():

    result = hcp_graph.invoke(
        {
            "message": """
            Today I met Dr. John.

            Discussed Product Y.

            Sentiment was positive.

            Shared brochures.
            """
        }
    )

    return result


@app.get("/edit-test")
def edit_test():

    result = hcp_graph.invoke(
        {
            "message": """
            Update interaction.
            Change sentiment from positive to neutral.
            """
        }
    )

    return result


@app.get("/search-test")
def search_test():

    result = hcp_graph.invoke(
        {
            "message": "Find details of Dr. Smith"
        }
    )

    return result


@app.get("/followup-test")
def followup_test():

    result = hcp_graph.invoke(
        {
            "message": "Generate follow up email for Dr. Smith"
        }
    )

    return result


@app.get("/summary-test")
def summary_test():

    result = hcp_graph.invoke(
        {
            "message": "Summarize my last interaction with Dr. Smith"
        }
    )

    return result