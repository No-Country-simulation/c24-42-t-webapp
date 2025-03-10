import { useUserStore } from "@store/user.store";
import { UserRole } from "@tipos/store";
import { Navigate, Outlet } from "react-router";

export const MedicoGuard = () => {
    const hasRole = useUserStore(state => state.hasRole);
    const isLogged = useUserStore(state => state.isLogged);
    const isUserLogged = isLogged();
    return (isUserLogged && hasRole(UserRole.MEDICO)) ? <Outlet /> : <Navigate to="/" replace />;
}