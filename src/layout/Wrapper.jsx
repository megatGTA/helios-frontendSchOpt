import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <Navbar />

        {/* Page content */}
        <main className="p-6 bg-muted/30 flex-1 overflow-auto">
          <Outlet /> {/* ✅ THIS SHOWS CHILD ROUTES */}
        </main>
      </div>
    </div>
  );
}
