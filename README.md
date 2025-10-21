# Helios - Schedule Optimization (Frontend)

> Status: 🟡 In Development (Module: Schedule Optimization Only)  
> Clean and scalable React (Vite) architecture using Zustand, Axios, and React Router.

---

## Overview

This repository is part of the Helios Internal System, focused on the Schedule Optimization.

---
## What the module does and how it connects to the system
| Page                            | Core Question                                            | Purpose                                                                                                                                                            | Data Source(s) from within Helios                                                                                                               |
| ------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schedule (Calendar View)**    | “**WHAT** is happening and **WHEN**?”                    | Displays the scheduled start and end dates of all active Work Orders and their assigned tasks in a visual calendar format.                                         | 🎯 **Work Order Management** <br>↳ Task titles, start/end dates, statuses, assigned technicians                                                 |
| **Planning Dashboard**          | “**HOW** is our overall manpower capacity holding up?”   | Provides a high-level, annual summary of total available manhours, allocated workload, overall utilization, and highlights months that are over or under capacity. | 🎯 **Personnel Management / HR Data** (Available Hours) <br>+ 🎯 **Work Order Management** (Allocated Hours)                                    |
| **Workforce Allocation Matrix** | “**WHO** is doing **WHAT**, and **WHEN** are they busy?” | Displays a detailed grid showing workload distribution per technician and project across months, visualizing individual capacity and overloads.                    | 🎯 **Work Order Management** (Technician assignments) <br>+ 🎯 **Task Card Library** (Manhour estimates per task)                               |
| **Project Breakdown**           | “**WHERE** is our team’s time being spent?”              | Analyzes manpower utilization from the **project perspective**, comparing forecasted vs. actual hours for key programs (e.g., Safran HE, TP400).                   | 🎯 **Work Order Management** (Actual hours logged per task/project)                                                                             |
| **Optimization Workspace**      | “**HOW** can we make the schedule **better**?”           | Interactive sandbox for Workshop Managers to simulate changes, resolve conflicts, and rebalance workloads using live utilization and resource data.                | 🎯 **All of the above modules** <br>+ 🎯 **Asset Management** (Tool availability) <br>+ 🎯 **Certification Matrix** (Technician qualifications) |

---

## Tech Stack

| Purpose            | Library / Tool       |
|--------------------|----------------------|
| UI Framework       | React (Vite)        |
| State Management   | Zustand             |
| HTTP Client        | Axios               |
| Routing            | React Router v6+    |
| Styling            | Tailwind CSS        |
| Charts             | Recharts            |
| Drag & Drop (upcoming) | dnd-kit         |
| Icons              | lucide-react        |
---

## Project Structure

```
src/
  assets/              # logos, icons, SVGs
  components/          # reusable UI elements (Button, Table, Modal, etc)
    index.js           # export barrel
  pages/               # page-level views
  layout/              # layout components (Navbar.jsx, Sidebar.jsx, Wrapper.jsx)
  store/               # Zustand store logic
    index.js           # central export
    schedule.store.js
  api/                 # Axios instance + service modules
    httpClient.js
    schedule.api.js
    index.js           # export barrel
  hooks/               # reusable hooks (useFetch.js, useAuth.js)
    useFetch.js
    index.js           # export barrel
  utils/               # helper functions (formatDate, parseStatus, etc)
    index.js           # export barrel
  constants/           # API endpoints, enums, roles, etc
    index.js
  styles/              # theme overrides
    index.css
  router/              # Router setup
    index.jsx
  App.jsx
  main.jsx
```

---

##  Environment Setup

1) Install dependencies:
```bash
npm install
```

2) Start development:
```bash
npm run dev
```

3) Environment variables: copy `.env.example` → `.env` and update your API base URL.
```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

Note: Vite requires env vars to be prefixed with `VITE_`.



---

##  Collaboration Notes

- Branch naming convention: `feature/<module>`, `fix/<issue>`
- Recommended commit style: `feat: add schedule store`, `chore: setup router`, `style: adjust layout wrapper`

---
## 🧠 Current Module Pages

| Page | Path | Description | Status |
|------|------|--------------|---------|
| **Schedule Optimization** | `/schedule-optimization` | Module landing page | ✅ Completed |
| **Planning Dashboard** | `/planning` | KPIs + Charts + Heatmap view | ✅ Completed |
| **Workforce Matrix** | `/planning/matrix` | Manpower allocation table | ✅ Completed |
| **Project Breakdown** | `/planning/project` | Deep dive per project | 🔜 Planned |
| **Optimization Workspace** | `/optimize` | Interactive scheduling sandbox | 🔜 Planned |

---

## 🧱 Components Implemented

- `KPICard` – reusable metric display  
- `ChartCard` – consistent chart wrapper  
- `UtilizationChart` – workforce utilization line chart  
- `ProjectWorkloadChart` – stacked project workload bar chart  
- `CapacityHeatmap` – visual monthly capacity overview  
- `WorkforceMatrix` – tabular personnel allocation  
- `BreadcrumbNav` – contextual navigation  
- `Sidebar` – dropdown-based navigation with expandable Schedule Optimization section

---
#  Progress Summary (as of 21 Oct 2025)

✅ Sidebar UI redesigned with dropdown navigation
✅ Schedule Optimization Landing Page created
✅ Planning Dashboard fully implemented (KPI + Charts + Heatmap)
✅ Workforce Matrix table completed
🚧 Next: Project Breakdown page and Optimization Workspace

---
###  Maintainers

| Role | Name / Responsible |
|---|---|
| Dev Lead | Najmee Hellme |
| Frontend | megatGTA |

