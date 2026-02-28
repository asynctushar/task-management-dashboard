# Donezo — Smart Task Management Dashboard

A modern, responsive task management dashboard built with React and TypeScript. Organize, track, and complete your work efficiently with a clean and powerful interface.

**[Live Demo](http://task-management-dashboard-application.vercel.app/)** · **[GitHub](https://github.com/asynctushar/task-management-dashboard)**

![Donezo Dashboard](https://placehold.co/1280x640/f5f5f0/555?text=Donezo+Dashboard&font=raleway)

---

## Features

- **Dashboard Overview** — Real-time stats on total, active, inactive users and products at a glance
- **Analytics Chart** — Visual breakdown of views, clicks, and conversions over time
- **Progress Tracker** — Radial chart showing completed, in-progress, and pending work
- **Team Collaboration** — User list with join dates and activity status
- **Product Management** — Quick access to products with pricing and sales data
- **Time Tracker** — Built-in timer with pause and stop controls
- **Reminders** — Meeting and event reminders with a quick-join action
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Skeleton Loaders** — Polished loading states that mirror the real layout

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Charts | Recharts |
| Data Fetching | TanStack Query |
| Notifications | Sonner |
| Icons | Lucide React |
| Build Tool | Vite |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/asynctushar/task-management-dashboard.git
cd task-management-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── Header.tsx
│   │   ├── AnalyticsChart.tsx
│   │   ├── ProgressChart.tsx
│   │   ├── TimeTracker.tsx
│   │   └── Loader.tsx
│   ├── layouts/
│   │   └── DashboardLayout.tsx
│   │   └── DashboardNavbar.tsx
│   │   └── Sidebar.tsx
│   └── ui/              # shadcn/ui primitives
├── context/
│   └── auth/            # Auth context and hooks
├── pages/
│   ├── Dashboard.tsx
│   └── Temporary.tsx    # Temporary notice page
│   └── NotFound.tsx
├── router/              # React router setup
├── guards/              # Router guards
├── lib/                 # Library supports
├── types/               # Types
├── services/            # API service functions
├── index.css
└── App.tsx
└── main.tsx
```

---

## Design System

Donezo uses [shadcn/ui](https://ui.shadcn.com/) with a custom theme built on CSS variables and Tailwind CSS v4. The color palette supports both light and dark modes out of the box.

Primary accent color is a green `oklch(0.5568 0.121 156.34)`, chosen to convey productivity and clarity.

---

## License

MIT © [asynctushar](https://github.com/asynctushar)