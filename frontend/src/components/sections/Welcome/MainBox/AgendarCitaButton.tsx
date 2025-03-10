import { Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { useUserStore } from "@store/user.store";
import { useNavigate } from "react-router";

export const AgendarCitaButton = () => {
    const isLogged = useUserStore(state => state.isLogged);
    const isUserLogged = isLogged();
    const navigate = useNavigate();
    const setModalData = useModalStore((state) => state.setModalData);
    const handleOpenModal = () => {
        setModalData({
            showModal: true,
            title: "¿Querés agendar una cita?",
            operation: "menu"
        });
    }

    const handleAgendaCita = () => {
        if(isUserLogged){
            navigate("/agendar-cita");
        } else{
            handleOpenModal();
        }
    }

    return (
        <CustomButton onClick={handleAgendaCita}>
            <Typography fontFamily="Inria Sans Bold" textTransform="none" fontSize={"1.4rem"}>
                Agenda tu cita
            </Typography>
        </CustomButton>
    );
}
