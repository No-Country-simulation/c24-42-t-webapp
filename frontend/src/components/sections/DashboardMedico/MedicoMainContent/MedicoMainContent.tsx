import { Grid2 } from "@mui/material";
import { MedicoMainContentStyles } from "./MedicoMainContentStyles";
import { CitasTable } from "../ContenidoCitasTable/CitasTable";

export const MedicoMainContent = () => {
    return (
        <Grid2 size="grow" sx={MedicoMainContentStyles.mainContent}>
            <CitasTable />
        </Grid2>
    );
}