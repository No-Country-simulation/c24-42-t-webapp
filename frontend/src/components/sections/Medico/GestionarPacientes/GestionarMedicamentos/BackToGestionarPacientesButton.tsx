import { CustomButton } from "@ui/CustomButton/CustomButton";
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BackToGestionarPacientesButton = () => {
    const navigate = useNavigate();
    const handleChangeToMedicationTable = () => {
        navigate("/medico/gestionar-pacientes");
    }
    return (
        <CustomButton startIcon={<ArrowBackIcon />} onClick={handleChangeToMedicationTable} sx={{textTransform: "none", marginBottom: "2rem"}}>
            Volver
        </CustomButton>
    );
}