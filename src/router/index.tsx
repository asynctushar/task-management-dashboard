import { createBrowserRouter } from "react-router";
import App from "../App";
import authRoutes from "./auth.route";
import privateRoutes from "./private.route";
import NotFound from "@/pages/NotFound";
import AuthRoute from "@/guards/AuthRoute";
import PrivateRoute from "@/guards/PrivateRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            // un-authenticated users only
            {
                element: <AuthRoute />,
                children: authRoutes
            },

            // 🔐 Authenticated users only
            {
                element: <PrivateRoute />,
                children: [
                    {
                        element: <DashboardLayout />,
                        children: privateRoutes,
                    },
                ],
            },
            { path: "*", Component: NotFound },
        ],
    },
]);

export default router;
