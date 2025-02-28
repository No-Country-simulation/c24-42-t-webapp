import { Box, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { Anchor } from "@ui/Anchor/Anchor";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { NavbarStyles } from "./NavbarStyles";

export const Navbar = () => {
    const setModalData = useModalStore((state) => state.setModalData);

    const handleClickLogin = () => {
        setModalData({
            title: "Iniciar Sesión",
            operation: "login",
            showModal: true,
        });
    };
    const handleClickSignUp = () => {
        setModalData({
            title: "Registrarse",
            operation: "sign up",
            showModal: true,
        })
    };

    return (
        <Box sx={NavbarStyles.nav}>
            <Box sx={NavbarStyles.logo} />
            <Box sx={NavbarStyles.items}>
                <Anchor to="/medicos-disponibles" ariaLabel="navegar a la pagina de medicos disponibles">
                    <Typography fontWeight="bold">Médicos Disponibles</Typography>
                </Anchor>
                <Anchor to="#" onClick={handleClickSignUp} role="button" ariaLabel="navegar a la ventana de registro de usuarios">
                    <Typography fontWeight="bold">Registrarse</Typography>
                </Anchor>
                <CustomButton>
                    <Typography onClick={handleClickLogin} fontWeight="bold" textTransform="none">Iniciar Sesión</Typography>
                </CustomButton>
            </Box>
        </Box>
    );
}