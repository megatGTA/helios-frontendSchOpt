

---

```markdown
#  Helios - Schedule Optimization (Frontend)

> Status: 🟢 Active Development  
> Module: **Schedule Optimization**  
> Clean, modular React (Vite) architecture using Zustand, Axios, and React Router.

---

##  Overview

This repository is part of the **Helios Internal System**, focusing on the **Schedule Optimization Module** — a smart workforce and task scheduling interface.

The module provides:
- A high-level planning dashboard (KPIs, charts, and heatmaps)
- Manpower capacity visualization
- Workforce allocation matrix
- Future: optimization workspace (scenario planning & conflict resolution)

---

## 🧩 Tech Stack

| Purpose | Library / Tool |
|----------|----------------|
| UI Framework | React (Vite) |
| State Management | Zustand |
| HTTP Client | Axios |
| Routing | React Router v6+ |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Drag & Drop (upcoming) | dnd-kit |
| Icons | lucide-react |

---

## 🗂️ Project Structure

```

src/
assets/              # logos, icons, SVGs
components/          # reusable UI elements (Button, Table, Modal, etc.)
index.js           # export barrel
layout/              # layout components (Navbar.jsx, Sidebar.jsx, Wrapper.jsx)
modules/             # feature modules (Schedule Optimization)
schedule-optimization/
components/      # KPI, Chart, Heatmap, Matrix, etc.
pages/           # PlanningDashboard, WorkforceMatrix, etc.
store/               # Zustand store logic
index.js
schedule.store.js
api/                 # Axios instance + API services
httpClient.js
schedule.api.js
hooks/               # reusable hooks
useFetch.js
utils/               # helper functions (formatDate, parseStatus, etc.)
constants/           # endpoints, enums, and roles
styles/              # Tailwind + custom styles
router/              # Router setup
index.jsx
App.jsx
main.jsx

````

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

## ⚙️ Environment Setup

1️⃣ Install dependencies:
```bash
npm install
````

2️⃣ Start development server:

```bash
npm run dev
```

3️⃣ Environment variables:
Copy `.env.example` → `.env` and update your API base URL.

```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

*(Note: Vite requires all env variables to be prefixed with `VITE_`.)*

---

## 🧩 Collaboration Notes

* **Branch naming convention:**
  `feature/<module>`, `fix/<issue>`, `chore/<task>`
* **Commit style:**
  `feat: add KPI card component`
  `chore: setup router for planning pages`
  `style: adjust sidebar layout`

---

##  Maintainers

| Role     | Name              |
| -------- | ----------------- |
| Dev Lead | **Najmee Hellme** |
| Frontend | **megatGTA**      |

---

###  Progress Summary (as of 21 Oct 2025)

✅ Sidebar UI redesigned with dropdown navigation
✅ Schedule Optimization Landing Page created
✅ Planning Dashboard fully implemented (KPI + Charts + Heatmap)
✅ Workforce Matrix table completed
🚧 Next: Project Breakdown page and Optimization Workspace

---


