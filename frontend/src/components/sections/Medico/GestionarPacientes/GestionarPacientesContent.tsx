import { Box, Typography } from "@mui/material";
import { CustomTableV2 } from "@ui/CustomTableV2/CustomTableV2";
import { gestionar_pacientes_headers } from "./GESTIONAR_PACIENTES_TABLE_HEADERS";
import { GestionarPacientesRows } from "./GestionarPacientesRows";

export const GestionarPacientesContent = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom color="primary" sx={{ letterSpacing: "4px" }}>
                Tabla de pacientes
            </Typography>
            <CustomTableV2 headers={gestionar_pacientes_headers}>
                <GestionarPacientesRows />
            </CustomTableV2>
        </Box>
    );
}