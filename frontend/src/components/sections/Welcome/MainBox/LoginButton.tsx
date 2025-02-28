import { Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { CustomButton } from "@ui/CustomButton/CustomButton";

export const LoginButton = () => {
    const setModalData = useModalStore((state) => state.setModalData);
    const handleOpenModal = () => {
        setModalData({
            showModal: true,
            title: "¿Querés agendar una cita?",
            operation: "menu"
        });
    }
    return (
        <CustomButton onClick={handleOpenModal}>
            <Typography fontFamily="Inria Sans Bold" textTransform="none" fontSize={"1.4rem"}>
                Agenda tu cita
            </Typography>
        </CustomButton>
    );
}