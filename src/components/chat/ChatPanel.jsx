import { Bot } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { setInteraction } from "../../redux/interactionSlice";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

function ChatPanel() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! Tell me about your interaction with the Healthcare Professional.",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const { data } = await api.post("/chat", {
        message: userMessage,
      });

      // ===== Debug =====
      console.log("Full API Response:", data);
      console.log("AI Response:", data.response);

      let aiReply = "";

      if (data.tool_used === "summarize_interaction") {
        aiReply = `
HCP Name: ${data.response?.hcp_name || ""}

Product: ${data.response?.product || ""}

Sentiment: ${data.response?.sentiment || ""}

Summary:
${data.response?.summary || ""}
`;
      } else if (data.tool_used === "search_hcp") {
        aiReply = `
Name: ${data.response?.name || ""}

Speciality: ${data.response?.speciality || ""}

Location: ${data.response?.location || ""}
`;
      } else if (data.tool_used === "generate_followup") {
        aiReply = data.response?.followup_email || "";
      } else if (data.tool_used === "edit_interaction") {
        aiReply = data.response?.message || "";
      } else {
        aiReply = JSON.stringify(data.response, null, 2);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
        },
      ]);

      const interactionData = {
        hcpName: data.response?.hcp_name || data.response?.name || "",
        hospital: data.response?.location || "",
        interactionDate: data.response?.interaction_date || "",
        product: data.response?.product || "",
        sentiment: data.response?.sentiment || "",
        brochureShared:
          typeof data.response?.brochure_shared === "boolean"
            ? data.response.brochure_shared
            : false,
        notes: data.response?.summary || "",
      };

      console.log("Redux Data:", interactionData);

      dispatch(setInteraction(interactionData));

    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow border border-slate-200 h-full flex flex-col">

      {/* Header */}
      <div className="border-b p-5 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Bot className="text-white" size={22} />
        </div>

        <div>
          <h2 className="font-bold text-lg">
            AI Assistant
          </h2>

          <p className="text-sm text-gray-500">
            AI Powered CRM Assistant
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            message={msg.text}
          />
        ))}

        {loading && (
          <ChatBubble
            sender="ai"
            message="Typing..."
          />
        )}
      </div>

      {/* Input */}
      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
        loading={loading}
      />
    </div>
  );
}

export default ChatPanel;