import React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Convert path parts to clickable links
  const breadcrumbs = pathParts.map((part, index) => {
    const path = "/" + pathParts.slice(0, index + 1).join("/");
    const label = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()); // capitalize words
    const isLast = index === pathParts.length - 1;
    return (
      <div key={path} className="flex items-center">
        {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
        {isLast ? (
          <span className="text-gray-600 font-semibold">{label}</span>
        ) : (
          <Link to={path} className="text-gray-500 hover:text-blue-600">
            {label}
          </Link>
        )}
      </div>
    );
  });

  return (
    <nav className="flex items-center text-sm mb-4">{breadcrumbs}</nav>
  );
}
