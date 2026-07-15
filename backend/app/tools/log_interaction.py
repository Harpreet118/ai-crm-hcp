from langchain_core.tools import tool
from app.core.llm import llm
import json


@tool
def log_interaction(user_message: str):
    """
    Extract HCP interaction details from user message.
    Used when user wants to log a new interaction.
    """

    prompt = """
You are an AI Healthcare CRM assistant.

Extract interaction details.

Return ONLY JSON.

Fields:
hcp_name
interaction_date
product
sentiment
brochure_shared
summary

User message:
""" + user_message

    response = llm.invoke(prompt)

    content = response.content.strip()

    if content.startswith("```"):
        content = content.replace("```json", "")
        content = content.replace("```", "")
        content = content.strip()

    return json.loads(content)