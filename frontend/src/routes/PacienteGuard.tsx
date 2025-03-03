import { Navigate, Outlet } from "react-router";

export const PacienteGuard = () => {
    const isPaciente = true;
    const isAutenticated = true;
    return (!isAutenticated && !isPaciente) ? <Navigate to="/" replace /> : <Outlet />;
}