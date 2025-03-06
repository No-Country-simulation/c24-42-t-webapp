import { Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { Anchor } from "@ui/Anchor/Anchor";
import { CustomButton } from "@ui/CustomButton/CustomButton";

export const NavLinks = () => {
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
        <>
            <Anchor to="#" onClick={handleClickSignUp} role="button" ariaLabel="navegar a la ventana de registro de usuarios">
                <Typography fontWeight="bold">Registrarse</Typography>
            </Anchor>
            <CustomButton onClick={handleClickLogin}>
                <Typography fontWeight="bold" textTransform="none">Iniciar Sesión</Typography>
            </CustomButton>
        </>
    );
}