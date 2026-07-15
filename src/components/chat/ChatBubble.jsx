import React from 'react'

function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        <p className="text-xs font-bold mb-1">
          {isUser ? "👤 You" : "🤖 AI"}
        </p>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatBubble;