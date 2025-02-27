import { Box, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { MenuStyles } from "./MenuStyles";

export default function Menu() {
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
        <Box sx={MenuStyles.container}>
            <CustomButton onClick={handleClickLogin}>
                <Typography>
                    ¿Ya sos cliente?
                </Typography>
            </CustomButton>
            <CustomButton onClick={handleClickSignUp}>
                <Typography>
                    ¿Es tu primera vez?
                </Typography>
            </CustomButton>
        </Box>
    );
}