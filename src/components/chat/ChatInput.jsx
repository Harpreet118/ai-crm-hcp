import { SendHorizontal } from "lucide-react";

function ChatInput({
  message,
  setMessage,
  handleSend,
  loading,
}) {
  return (
    <div className="border-t border-slate-200 p-5">
      <div className="flex gap-3">
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your interaction..."
          className="flex-1 border border-slate-300 rounded-xl p-3 resize-none outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 rounded-xl flex items-center justify-center"
        >
          {loading ? "..." : <SendHorizontal size={20} />}
        </button>
      </div>
    </div>
  );
}

export default ChatInput;