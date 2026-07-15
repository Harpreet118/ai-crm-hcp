import { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

function InteractionForm() {
  const {
    hcpName,
    hospital,
    interactionDate,
    product,
    sentiment,
    brochureShared,
    notes,
  } = useSelector((state) => state.interaction);

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        hcp_id: 3,
        product: product,
        sentiment: sentiment,
        summary: notes,
        interaction_date: interactionDate,
        brochure_shared: Boolean(brochureShared),
      };

      console.log("Payload:", payload);

      const { data } = await api.post("/interaction", payload);

      alert("Interaction Saved Successfully ✅");
      console.log(data);

    } catch (error) {
      console.error("Save Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

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

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            HCP Name
          </label>

          <input
            type="text"
            value={hcpName}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Hospital
          </label>

          <input
            type="text"
            value={hospital}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Interaction Date
          </label>

          <input
            type="text"
            value={interactionDate}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Product Discussed
          </label>

          <input
            type="text"
            value={product}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sentiment
          </label>

          <input
            type="text"
            value={sentiment}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Brochure Shared
          </label>

          <input
            type="text"
            value={brochureShared ? "Yes" : "No"}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Notes
          </label>

          <textarea
            rows={5}
            value={notes}
            readOnly
            className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 resize-none"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 font-semibold transition"
        >
          {loading ? "Saving..." : "Save Interaction"}
        </button>

      </div>
    </div>
  );
}

export default InteractionForm;