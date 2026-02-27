import Dashboard from "@/pages/Dashboard";
import Temporary from "@/pages/Temporary";

export default [
    { index: true, Component: Dashboard },
    { path: "/tasks", Component: Temporary },
    { path: "/calender", Component: Temporary },
    { path: "/analytics", Component: Temporary },
    { path: "/teams", Component: Temporary },
    { path: "/settings", Component: Temporary },
    { path: "/help", Component: Temporary },
];
