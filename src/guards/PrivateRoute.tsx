import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/context/auth/useAuth";
import Loader from "@/components/shared/Loader";

const PrivateRoute = () => {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <Loader />;

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return <Outlet />;
};

export default PrivateRoute;
