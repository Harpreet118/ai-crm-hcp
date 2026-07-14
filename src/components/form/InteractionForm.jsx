import React from "react";

function InteractionForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Interaction Details
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          This form is automatically populated by the AI Assistant.
        </p>
      </div>

      <div className="space-y-5">
        {/* HCP Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            HCP Name
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Hospital */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Hospital
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Interaction Date */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Interaction Date
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Product Discussed */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Product Discussed
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Sentiment */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sentiment
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Brochure */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Brochure Shared
          </label>
          <input
            type="text"
            placeholder="AI will fill this..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Notes
          </label>
          <textarea
            rows={5}
            placeholder="AI generated summary..."
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 outline-none resize-none"
          />
        </div>

        <button
          disabled
          className="w-full rounded-lg bg-slate-300 text-slate-600 py-3 font-semibold cursor-not-allowed"
        >
          Waiting for AI...
        </button>
      </div>
    </div>
  );
}

export default InteractionForm;