import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const AddMedicButton = () => {
    const handleAddMedic = () => {
        // TODO agregar logica para agregar un medico
    }
    return (
        <Button onClick={handleAddMedic} variant="contained" color="primary" sx={{ textTransform: "none", height: "30px" }} disableElevation startIcon={<AddIcon />}>
            Agregar Medico
        </Button>
    );
}