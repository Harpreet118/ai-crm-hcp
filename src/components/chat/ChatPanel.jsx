import { Bot, SendHorizontal } from "lucide-react";

function ChatPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col">

      {/* Header */}
      <div className="border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Bot className="text-white" size={22} />
        </div>

        <div>
          <h2 className="font-bold text-slate-800">
            AI Assistant
          </h2>

          <p className="text-sm text-slate-500">
            Describe your HCP interaction naturally.
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-5 overflow-y-auto">

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-slate-700 max-w-md">
          👋 Hi! Tell me about your interaction with the Healthcare Professional.

          <br /><br />

          Example:

          <br />

          <span className="text-blue-700">
            Today I met Dr. Smith at City Hospital. We discussed Product X.
            The sentiment was positive and I shared brochures.
          </span>

        </div>

      </div>

      {/* Input */}
      <div className="border-t border-slate-200 p-5">

        <div className="flex gap-3">

          <textarea
            rows={3}
            placeholder="Type your interaction..."
            className="flex-1 border border-slate-300 rounded-xl p-3 resize-none outline-none focus:border-blue-500"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 rounded-xl flex items-center justify-center"
          >
            <SendHorizontal size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChatPanel;