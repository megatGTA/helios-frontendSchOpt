import React from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

/**
 * WorkforceAllocationMatrix Page
 * Shows a grid of personnel vs. monthly allocations.
 */
export default function WorkforceAllocationMatrix() {
  const mockData = [
    {
      name: "Ali",
      Jan: 140,
      Feb: 160,
      Mar: 150,
      Apr: 175,
      May: 180,
      Jun: 160,
    },
    {
      name: "Jean Paul",
      Jan: 130,
      Feb: 120,
      Mar: 160,
      Apr: 190,
      May: 200,
      Jun: 195,
    },
    {
      name: "Rahim",
      Jan: 180,
      Feb: 170,
      Mar: 165,
      Apr: 160,
      May: 175,
      Jun: 185,
    },
  ];

  // quick helper to choose background color
  const getCellColor = (value) => {
    if (value < 150) return "bg-green-100 text-green-700";
    if (value > 180) return "bg-red-100 text-red-700";
    return "bg-gray-50 text-gray-700";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <BreadcrumbNav />

      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-800">
        Workforce Allocation Matrix
      </h1>

      {/* Toolbar (filters placeholder) */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <select className="border rounded-lg p-2 text-sm text-gray-700">
          <option>Year: 2025</option>
        </select>
        <select className="border rounded-lg p-2 text-sm text-gray-700">
          <option>Project: All</option>
        </select>
        <select className="border rounded-lg p-2 text-sm text-gray-700">
          <option>View: Monthly</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">Personnel</th>
              {Object.keys(mockData[0])
                .filter((key) => key !== "name")
                .map((month) => (
                  <th key={month} className="px-4 py-3 font-semibold text-gray-700">
                    {month}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 font-medium text-gray-900">{row.name}</td>
                {Object.entries(row)
                  .filter(([key]) => key !== "name")
                  .map(([month, value]) => (
                    <td
                      key={month}
                      className={`px-4 py-2 text-center font-medium ${getCellColor(
                        value
                      )}`}
                    >
                      {value}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
