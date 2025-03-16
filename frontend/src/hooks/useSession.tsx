import { useUserStore } from "@store/user.store";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useSession = () => {
    const isLogged = useUserStore(state => state.isLogged)();
    const getUserDashboardURL = useUserStore(state => state.getUserDashboardURL);
    const isTokenExpired = useUserStore(state => state.isTokenExpired);
    const closeSession = useUserStore(state => state.closeSession);
    const navigate = useNavigate();

    useEffect(() => {
        // verifico si el usuario esta logeado
        if (isLogged) {
            // verifico si el token esta expirado
            if (isTokenExpired()) {
                // le cierro la sesion al usuario
                closeSession();
                navigate("/");
            } else {
                // redirecciono el usuario a su dashboard 
                const dashboard = getUserDashboardURL();
                navigate(dashboard);
            }
        }
    }, []);

}