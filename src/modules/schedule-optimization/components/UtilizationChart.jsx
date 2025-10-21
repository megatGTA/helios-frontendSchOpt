import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/**
 * UtilizationChart
 * Shows workforce utilization % by month.
 * Accepts `data` prop in this format:
 * [
 *   { month: "Jan", utilization: 75 },
 *   { month: "Feb", utilization: 82 },
 *   ...
 * ]
 */
export default function UtilizationChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUtilization" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          domain={[0, 100]}
          unit="%"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
          formatter={(value) => [`${value}%`, "Utilization"]}
        />
        <Area
          type="monotone"
          dataKey="utilization"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#colorUtilization)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
