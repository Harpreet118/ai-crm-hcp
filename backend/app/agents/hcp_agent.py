from langgraph.graph import StateGraph, END

from app.agents.state import AgentState

from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.search_hcp import search_hcp
from app.tools.generate_followup import generate_followup
from app.tools.summarize_interaction import summarize_interaction


def chatbot(state: AgentState):

    message = state["message"].lower()


    # Generate Follow-up
    if "follow" in message or "email" in message:

        result = generate_followup.invoke(
            {
                "hcp_name": "Dr. Smith",
                "interaction_summary": "Discussed Product X and shared brochures."
            }
        )

        return {
            "message": state["message"],
            "response": result,
            "tool_used": "generate_followup"
        }


    # Summarize Interaction
    if "summarize" in message or "summary" in message:

        if "smith" in message:
            hcp_name = "Dr. Smith"

        elif "john" in message:
            hcp_name = "Dr. John"

        else:
            hcp_name = "Unknown"


        result = summarize_interaction.invoke(hcp_name)


        return {
            "message": state["message"],
            "response": result,
            "tool_used": "summarize_interaction"
        }



    # Search HCP
    if "search" in message or "find" in message or "doctor" in message:

        if "smith" in message:
            hcp_name = "Dr. Smith"

        elif "john" in message:
            hcp_name = "Dr. John"

        else:
            hcp_name = "Unknown"


        result = search_hcp.invoke(hcp_name)


        return {
            "message": state["message"],
            "response": result,
            "tool_used": "search_hcp"
        }



    # Edit Interaction
    if "edit" in message or "update" in message or "change" in message:

        result = edit_interaction.invoke(
            {
                "interaction_id": 4,
                "sentiment": "Neutral"
            }
        )


        return {
            "message": state["message"],
            "response": result,
            "tool_used": "edit_interaction"
        }



    # Default Log Interaction
    result = log_interaction.invoke(message)


    return {
        "message": state["message"],
        "response": result,
        "tool_used": "log_interaction"
    }



graph = StateGraph(AgentState)


graph.add_node(
    "agent",
    chatbot
)


graph.set_entry_point("agent")


graph.add_edge(
    "agent",
    END
)


hcp_graph = graph.compile()