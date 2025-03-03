import { Navigate, Outlet } from "react-router";

export const MedicoGuard = () => {
    const isMedico = true;
    const isAutenticated = true;
    return (!isAutenticated && !isMedico) ? <Navigate to="/" replace /> : <Outlet />;
}