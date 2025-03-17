import { Box, Typography } from "@mui/material";
import { CustomTableV2 } from "@ui/CustomTableV2/CustomTableV2";
import { CitasRows } from "./CitasRows";
import { citas_headers } from "./CITAS_TABLE_HEADERS";

export const DashboardMedicoContent = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom color="primary" sx={{ letterSpacing: "4px"}}>
                Citas actuales
            </Typography>
            <CustomTableV2 headers={citas_headers}>
                <CitasRows />
            </CustomTableV2>
        </Box>
    );
}