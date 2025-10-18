import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";

export default function Navbar() {
  const [unreadNotifications] = useState(3);

  return (
    <div className={cn("h-16 border-b border-border px-6 flex items-center justify-between bg-background")}>
      {/* Page Title - Can change dynamically later */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary">
            <Bell className="h-5 w-5 text-foreground" />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-destructive rounded-full">
                {unreadNotifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
