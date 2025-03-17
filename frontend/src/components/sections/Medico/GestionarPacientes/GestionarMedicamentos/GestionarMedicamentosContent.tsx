import { Box, Typography } from "@mui/material";
import { CustomTableV2 } from "@ui/CustomTableV2/CustomTableV2";
import { GestionarMedicamentosRows } from "./GestionarMedicamentosRows";
import { medicamentos_headers } from "./GESTIONAR_MEDICAMENTOS_TABLE_HEADERS";
import { BackToGestionarPacientesButton } from "./BackToGestionarPacientesButton";

export const GestionarMedicamentosContent = () => {

    return (
        <Box>
            <BackToGestionarPacientesButton />
            <Typography variant="h5" gutterBottom color="primary" sx={{ letterSpacing: "4px" }}>
                Administrar Medicamentos
            </Typography>
            <CustomTableV2 headers={medicamentos_headers}>
                <GestionarMedicamentosRows />
            </CustomTableV2>
        </Box>
    );
}