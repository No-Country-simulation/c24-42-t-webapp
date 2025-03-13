import { Box, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { NavbarStyles } from "./NavbarStyles";
import { useLocation, useNavigate, useParams } from "react-router";
import { UserMenu } from "./UserMenu/UserMenu";
import { NavLinks } from "./NavLinks";
import { Logo } from "../Footer/Logo";
import { useUserStore } from "@store/user.store";
import { containsAny } from "@utils/containsAny";
import { useMemo } from "react";

export const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const isUserLogged = useUserStore(state => state.isLogged)();
    const getDashboardUrl = useUserStore(state => state.getUserDashboardURL);

    // Funciones para verificar rutas
    const isRoute = (route: string) => pathname === route;
    const isAnyRoute = (routes: string[]) => routes.includes(pathname);

    // Lógica para mostrar enlaces
    const shouldRenderNavLinks = useMemo(
        () => isAnyRoute(["/", "/medicos-disponibles"]),
        [pathname]
    );

    const showUserMenu = useMemo(
        () => containsAny(pathname, ["/paciente/", "/medico/", "/admin/"]),
        [pathname]
    );

    const handleDashboard = () => navigate(getDashboardUrl());

    return (
        <Box sx={NavbarStyles.nav}>
            <Logo />
            <Box sx={NavbarStyles.items}>
                {isRoute("/medicos-disponibles") && (
                    <Anchor to="/" ariaLabel="navegar a la página de inicio">
                        <Typography fontWeight="bold">Inicio</Typography>
                    </Anchor>
                )}

                {isAnyRoute(["/", `/medico/${id}`]) && (
                    <Anchor to="/medicos-disponibles" ariaLabel="navegar a la página de médicos disponibles">
                        <Typography fontWeight="bold">Médicos Disponibles</Typography>
                    </Anchor>
                )}

                {isUserLogged && !showUserMenu && (
                    <CustomButton onClick={handleDashboard}>
                        <Typography fontWeight="bold" textTransform="none">Dashboard</Typography>
                    </CustomButton>
                )}

                {!isUserLogged && shouldRenderNavLinks && <NavLinks />}
                {showUserMenu && <UserMenu />}
            </Box>
        </Box>
    );
};
