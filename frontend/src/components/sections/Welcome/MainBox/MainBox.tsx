import { Box, Typography } from "@mui/material";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { useModalStore } from "@store/modal.store";
import { MainBoxStyles } from "./MainBoxStyles";

export const MainBox = () => {
    const setModalData = useModalStore((state) => state.setModalData);
    const handleOpenModal = () => {
        setModalData({
            showModal: true,
            title: "¿Querés agendar una cita?",
            operation: "menu"
        });
    }
    return (
        <Box sx={MainBoxStyles.mainBox}>
            <Box sx={MainBoxStyles.welcomeBox}>
                <Box sx={MainBoxStyles.circle1} />
                <Box sx={MainBoxStyles.circle2} />
                <Box>
                    <Typography sx={MainBoxStyles.title}>
                        MedicalAppointment
                    </Typography>
                    <Typography sx={MainBoxStyles.subtitle}>
                        Tu lugar para pedir un turno
                    </Typography>
                </Box>
                <CustomButton onClick={handleOpenModal}>
                    <Typography fontFamily="Inria Sans Bold" textTransform="none">Agenda tu cita</Typography>
                </CustomButton>
            </Box>
        </Box>
    );
}