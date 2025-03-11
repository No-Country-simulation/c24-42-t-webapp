import { useUserStore } from "@store/user.store";
import { UserRole } from "@tipos/store";
import { Navigate, Outlet } from "react-router";

export const AdminGuard = () => {
    const hasRole = useUserStore(state => state.hasRole);
    const isLogged = useUserStore(state => state.isLogged);
    const isUserLogged = isLogged();
    const isAdmin = hasRole(UserRole.ADMIN);
    return (isUserLogged && isAdmin) ? <Outlet /> : <Navigate to="/" replace />;
}