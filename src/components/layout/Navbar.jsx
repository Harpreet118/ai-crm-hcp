import { BrainCircuit, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
            <BrainCircuit className="text-white" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              AI CRM
            </h1>

            <p className="text-sm text-slate-500">
              Healthcare Professional Interaction
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
          <Sparkles
            className="text-emerald-600"
            size={18}
          />

          <span className="text-sm font-medium text-emerald-700">
            AI Powered
          </span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;