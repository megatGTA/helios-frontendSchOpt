import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * ProjectWorkloadChart
 * Displays stacked bar chart of manhour workloads per project by month.
 * 
 * Expected data shape:
 * [
 *   { month: "Jan", safran: 120, tp400: 80, others: 40 },
 *   { month: "Feb", safran: 100, tp400: 90, others: 60 },
 *   ...
 * ]
 */
export default function ProjectWorkloadChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
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
          unit="h"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="safran" stackId="a" fill="#3b82f6" name="Safran HE" />
        <Bar dataKey="tp400" stackId="a" fill="#10b981" name="TP400" />
        <Bar dataKey="others" stackId="a" fill="#f59e0b" name="Others" />
      </BarChart>
    </ResponsiveContainer>
  );
}
