from langchain_core.tools import tool


@tool
def generate_followup(
    hcp_name: str,
    interaction_summary: str
):
    """
    Generate follow up email for HCP.
    """

    email = f"""
Dear {hcp_name},

Thank you for your valuable time.

It was great discussing the product with you.
During our interaction we discussed:

{interaction_summary}

Please let me know if you need any further information.

Regards,
AI CRM Team
"""

    return {
        "hcp_name": hcp_name,
        "followup_email": email
    }