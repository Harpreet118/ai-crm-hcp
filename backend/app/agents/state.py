from typing import TypedDict, List, Any


class AgentState(TypedDict):
    message: str
    response: Any
    tool_used: str