import React from 'react'

function StatsCard({
  title,
  value,
  icon,
  color = "bg-blue-600",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-xl text-white`}>
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatsCard;