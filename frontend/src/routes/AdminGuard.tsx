import { Navigate, Outlet } from "react-router";

export const AdminGuard = () => {
    const isAdmin = true;
    const isAutenticated = true;
    return (!isAutenticated && !isAdmin) ? <Navigate to="/" replace /> : <Outlet />;
}