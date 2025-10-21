import React from "react";

/**
 * ChartCard
 * A standard wrapper for charts with consistent style.
 * Props:
 * - title: string
 * - children: ReactNode (chart or content)
 */
export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow">
      {title && (
        <h2 className="text-sm font-medium text-gray-600 mb-3 border-b pb-2">
          {title}
        </h2>
      )}
      <div className="w-full h-64 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
