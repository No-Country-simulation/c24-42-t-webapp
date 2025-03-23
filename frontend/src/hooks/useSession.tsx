import { useUserStore } from "@store/user.store";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const useSession = () => {
    const isLogged = useUserStore(state => state.isLogged)();
    const getUserDashboardURL = useUserStore(state => state.getUserDashboardURL);
    const isTokenExpired = useUserStore(state => state.isTokenExpired);
    const closeSession = useUserStore(state => state.closeSession);
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    useEffect(() => {
        // verifico si el usuario esta logeado
        if (isLogged) {
            // verifico si el token esta expirado
            if (isTokenExpired()) {
                // le cierro la sesion al usuario
                closeSession();
                navigate("/");
            } 
            
            // si me encuentro en el inicio del sitio web, redirecciono al usuario a su dashboard
            if (pathname === "/") {
                const dashboard = getUserDashboardURL();
                navigate(dashboard);
            }
        }
    }, []);

}