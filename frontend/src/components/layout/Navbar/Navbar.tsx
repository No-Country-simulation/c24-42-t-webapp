import { Box, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { NavbarStyles } from "./NavbarStyles";
import { useLocation, useNavigate } from "react-router";
import { UserMenu } from "./UserMenu/UserMenu";
import { NavLinks } from "./NavLinks";
import { Logo } from "../Footer/Logo";
import { useUserStore } from "@store/user.store";
import { useParams } from 'react-router';

export const Navbar = () => {
    const { pathname } = useLocation();
    const isMedicosDisponibles = pathname === "/medicos-disponibles";
    const isInicio = pathname === "/";
    const shouldRenderNavLinks = isMedicosDisponibles || isInicio;
    const isLogged = useUserStore(state => state.isLogged);
    const isUserLogged = isLogged();
    const getDashboardUrl = useUserStore(state => state.getUserDashboardURL);
    const navigate = useNavigate();
    const { id } = useParams();
    const isMedicoDetalles = pathname === `/medico/${id}`;

    const handleDashboard = () => {
        const dashboard = getDashboardUrl();
        navigate(dashboard);
    }

    return (
        <Box sx={NavbarStyles.nav}>
            <Logo />
            <Box sx={NavbarStyles.items}>
                {isMedicosDisponibles && (
                    <Anchor to="/" ariaLabel="navegar a la pagina de inicio">
                        <Typography fontWeight="bold">Inicio</Typography>
                    </Anchor>
                )}
                {(isInicio || isMedicoDetalles) && (
                    <Anchor to="/medicos-disponibles" ariaLabel="navegar a la pagina de medicos disponibles">
                        <Typography fontWeight="bold">Médicos Disponibles</Typography>
                    </Anchor>
                )}
                
                {isUserLogged && !pathname.includes("dashboard") && (
                    <CustomButton onClick={handleDashboard}>
                        <Typography fontWeight="bold" textTransform="none">Dashboard</Typography>
                    </CustomButton>
                )}
                {!isUserLogged && shouldRenderNavLinks && <NavLinks />}
                {pathname.includes("dashboard") && <UserMenu />}
            </Box>
        </Box>
    );
};
