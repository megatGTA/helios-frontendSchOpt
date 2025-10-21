import React from "react";

/**
 * CapacityHeatmap
 * Displays a simple 3x4 (or 12x1) grid showing monthly capacity balance.
 *
 * Expected data shape:
 * [
 *   { month: "Jan", balance: -80 },
 *   { month: "Feb", balance: 40 },
 *   ...
 * ]
 */
export default function CapacityHeatmap({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-sm font-medium text-gray-600 mb-3 border-b pb-2">Capacity Heatmap</h2>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
        {data.map((item, idx) => {
          const bgColor =
            item.balance < 0
              ? "bg-red-100 text-red-700 border border-red-200"
              : item.balance > 0
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-gray-100 text-gray-700 border border-gray-200";

          return (
            <div
              key={idx}
              className={`rounded-xl py-4 flex flex-col items-center justify-center ${bgColor}`}
            >
              <span className="text-xs font-medium">{item.month}</span>
              <span className="text-lg font-bold">{item.balance}</span>
              <span className="text-[10px] text-gray-500">hrs</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        <span className="inline-block mr-4">
          <span className="inline-block w-3 h-3 bg-green-200 border border-green-300 rounded-sm mr-1"></span>
          Under Capacity
        </span>
        <span>
          <span className="inline-block w-3 h-3 bg-red-200 border border-red-300 rounded-sm mr-1"></span>
          Over Capacity
        </span>
      </div>
    </div>
  );
}