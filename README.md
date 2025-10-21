# Helios - Schedule Optimization (Frontend)

> Status: 🟡 In Development (Module: Schedule Optimization Only)  
> Clean and scalable React (Vite) architecture using Zustand, Axios, and React Router.

---

## Overview

This repository is part of the Helios Internal System, focused on the Schedule Optimization.

---

##  Tech Stack

| Purpose | Library / Tool |
|---|---|
| UI Framework | React (Vite) |
| State Management | Zustand |
| HTTP Client | Axios |
| Routing | React Router v6+ |
| Styling  | Tailwind / CSS Modules |

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

###  Maintainers

| Role | Name / Responsible |
|---|---|
| Dev Lead | Najmee Hellme |
| Frontend | megatGTA |

