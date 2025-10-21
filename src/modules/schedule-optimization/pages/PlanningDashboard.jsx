import BreadcrumbNav from "../components/BreadcrumbNav";
import KPICard from "../components/KPICard";
import ChartCard from "../components/ChartCard";
import UtilizationChart from "../components/UtilizationChart";
import ProjectWorkloadChart from "../components/ProjectWorkloadChart";
import CapacityHeatmap from "../components/CapacityHeatmap";

// Mock KPI summary data (for now)
const mockKPI = {
  totalHours: "8,240 h",
  allocatedHours: "7,860 h",
  utilization: "95 %",
  capacity: "+380 h",
};

// Mock utilization data (for chart)
const mockUtilizationData = [
  { month: "Jan", utilization: 75 },
  { month: "Feb", utilization: 80 },
  { month: "Mar", utilization: 92 },
  { month: "Apr", utilization: 88 },
  { month: "May", utilization: 95 },
  { month: "Jun", utilization: 90 },
  { month: "Jul", utilization: 93 },
  { month: "Aug", utilization: 94 },
  { month: "Sep", utilization: 89 },
  { month: "Oct", utilization: 96 },
  { month: "Nov", utilization: 91 },
  { month: "Dec", utilization: 97 },
];

const mockWorkLoadData = [
    { month: "Jan", safran: 120, tp400: 80, others: 40 },
    { month: "Feb", safran: 110, tp400: 90, others: 50 },
    { month: "Mar", safran: 130, tp400: 100, others: 70 },
    { month: "Apr", safran: 140, tp400: 85, others: 60 },
    { month: "May", safran: 160, tp400: 95, others: 65 },
    { month: "Jun", safran: 150, tp400: 100, others: 80 },
    { month: "Jul", safran: 170, tp400: 105, others: 90 },
    { month: "Aug", safran: 165, tp400: 110, others: 85 },
    { month: "Sep", safran: 180, tp400: 115, others: 95 },
    { month: "Oct", safran: 175, tp400: 120, others: 100 },
    { month: "Nov", safran: 160, tp400: 125, others: 90 },
    { month: "Dec", safran: 185, tp400: 130, others: 95 },
  ];

  const mockHeatmapData = [
    { month: "Jan", balance: -40 },
    { month: "Feb", balance: 25 },
    { month: "Mar", balance: 10 },
    { month: "Apr", balance: -15 },
    { month: "May", balance: 30 },
    { month: "Jun", balance: 0 },
    { month: "Jul", balance: 50 },
    { month: "Aug", balance: -20 },
    { month: "Sep", balance: 35 },
    { month: "Oct", balance: 40 },
    { month: "Nov", balance: -10 },
    { month: "Dec", balance: 20 },
  ];  

export default function PlanningDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <BreadcrumbNav />
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Available Hours"
          value={mockKPI.totalHours}
          subtitle="FY 2025 Target"
        />
        <KPICard
          title="Allocated Hours"
          value={mockKPI.allocatedHours}
          subtitle="+2% vs last month"
          trendColor="green"
        />
        <KPICard
          title="Utilization"
          value={mockKPI.utilization}
          subtitle="Optimal range 85–100%"
        />
        <KPICard
          title="Over / Under Capacity"
          value={mockKPI.capacity}
          subtitle="Over capacity"
          trendColor="red"
        />
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Workforce Utilization (%)">
          <UtilizationChart data={mockUtilizationData} />
        </ChartCard>
      </div>
      {/* Project Workload Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Project Workload">
  <ProjectWorkloadChart data={mockWorkLoadData} />
</ChartCard>
      </div>
      {/* Capacity Heatmap */}
      
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CapacityHeatmap data={mockHeatmapData} />
    </div>
  
    </div>
  );
}
