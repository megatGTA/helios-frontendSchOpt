import { createBrowserRouter } from "react-router-dom";
import Wrapper from "@/layout/Wrapper";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";

// Schedule Optimization Module Pages
import ScheduleOptimization from "@/modules/schedule-optimization/pages/ScheduleOptimization";
import PlanningDashboard from "@/modules/schedule-optimization/pages/PlanningDashboard";
import WorkforceMatrix from "@/modules/schedule-optimization/pages/WorkforceMatrix"; // ✅ Import added

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Wrapper>
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-50">
          <Navbar />
        </div>
      </Wrapper>
    ),
    children: [
      {
        path: "schedule-optimization",
        element: <ScheduleOptimization />, // ✅ main landing page
      },
      {
        path: "planning",
        element: <PlanningDashboard />, // ✅ planning dashboard
      },
      {
        path: "planning/matrix",
        element: <WorkforceMatrix />, // ✅ workforce matrix route added
      },
    ],
  },
]);

export default router;
