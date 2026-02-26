import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/context/auth/useAuth";
import Loader from "@/components/shared/Loader";

const AuthRoute = () => {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <Loader />;

    // If logged in, block access to login
    if (isAuthenticated) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default AuthRoute;
