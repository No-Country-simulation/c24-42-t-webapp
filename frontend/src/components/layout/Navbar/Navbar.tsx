import { Box, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { NavbarStyles } from "./NavbarStyles";
import { useLocation } from "react-router";
import { UserMenu } from "./UserMenu/UserMenu";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
    const { pathname } = useLocation();
    const isMedicosDisponibles = pathname === "/medicos-disponibles";
    const isInicio = pathname === "/";
    const shouldRenderNavLinks = isMedicosDisponibles || isInicio;

    return (
        <Box sx={NavbarStyles.nav}>
            <Box sx={NavbarStyles.logo} />
            <Box sx={NavbarStyles.items}>
                {isMedicosDisponibles && (
                    <Anchor to="/" ariaLabel="navegar a la pagina de inicio">
                        <Typography fontWeight="bold">Inició</Typography>
                    </Anchor>
                )}
                {isInicio && (
                    <Anchor to="/medicos-disponibles" ariaLabel="navegar a la pagina de medicos disponibles">
                        <Typography fontWeight="bold">Médicos Disponibles</Typography>
                    </Anchor>
                )}
                {shouldRenderNavLinks && <NavLinks />}
                {pathname.includes("dashboard") && <UserMenu />}
            </Box>
        </Box>
    );
};
