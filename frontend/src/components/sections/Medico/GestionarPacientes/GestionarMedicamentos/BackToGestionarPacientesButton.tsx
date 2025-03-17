import { CustomButton } from "@ui/CustomButton/CustomButton";
import { useNavigate } from "react-router";

export const BackToGestionarPacientesButton = () => {
    const navigate = useNavigate();
    const handleChangeToMedicationTable = () => {
        navigate("/medico/gestionar-pacientes");
    }
    return (
        <CustomButton onClick={handleChangeToMedicationTable} sx={{textTransform: "none", marginBottom: "2rem"}}>
            Volver
        </CustomButton>
    );
}