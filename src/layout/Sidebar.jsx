// src/layout/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import LogoFull from "@/assets/GTA LOGO 1.png";
import LogoIcon from "@/assets/GTA LOGO 3.png";
import {
  Calendar,
  FileText,
  Home,
  Settings,
  Menu,
  User
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const NavItem = ({ href, icon: Icon, label }) => (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
        location.pathname === href
          ? "bg-primary text-white"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      title={collapsed ? label : undefined} // tooltip when collapsed
    >
      {Icon ? <Icon size={20} /> : <span>•</span>}
      {!collapsed && <span>{label}</span>}
    </Link>
  );

  return (
    <div
      className={cn(
        "flex flex-col bg-sidebar-background border-r border-border h-screen transition-width duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center justify-center px-4 pt-4 pb-3 border-b border-border">
        <img
          src={collapsed ? LogoIcon : LogoFull}
          className={cn("transition-all duration-300", collapsed ? "w-8 h-8" : "w-42 h-18")}
          alt="GTA Logo"
        />
        {!collapsed && (
          <p className="text-[14px] text-muted-foreground mt-4  text-center leading-tight">
            Aircraft Engine Maintenance
          </p>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-auto py-4 px-2 space-y-1">
        <NavItem href="/dashboard" icon={Home} label="Dashboard" />
        <NavItem href="/tasks" icon={FileText} label="Tasks" />
        <NavItem href="/task-card-library" icon={FileText} label="Task Card Library" />
        <NavItem href="/assets" icon={Settings} label="Assets" />
        <NavItem href="/schedule-optimization" icon={Calendar} label="Schedule Optimization" />
      </div>

      {/* Profile & Collapse */}
      <div className="border-t border-border px-3 py-4 flex flex-col gap-2">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">Workshop Manager</p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-3 w-full rounded-lg p-2 flex justify-center items-center hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
        >
          <Menu size={20} />
          {!collapsed && <span className="ml-3">Collapse</span>}
        </button>
      </div>
    </div>
  );
}
