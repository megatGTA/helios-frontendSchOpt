// src/modules/schedule-optimization/components/KPICard.jsx
import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you have one

/**
 * KPICard Component
 * Props:
 * - title: string (e.g., "Total Hours")
 * - value: string | number (e.g., "3,540")
 * - subtitle: string (optional, e.g., "+12% vs last month")
 * - trendColor: "green" | "red" | "gray" (optional, for subtitle text)
 * - icon: ReactNode (optional, lucide-react icon)
 */
export default function KPICard({ title, value, subtitle, trendColor = "gray", icon: Icon }) {
  const colorClass =
    trendColor === "green"
      ? "text-green-600"
      : trendColor === "red"
      ? "text-red-600"
      : "text-gray-500";

  return (
    <div
      className={cn(
        "bg-white shadow-sm rounded-2xl p-4 flex items-center justify-between transition-all hover:shadow-md"
      )}
    >
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        {subtitle && <p className={`text-xs mt-1 ${colorClass}`}>{subtitle}</p>}
      </div>
      {Icon && <Icon className="w-6 h-6 text-gray-400" />}
    </div>
  );
}
