import { Grid2 } from "@mui/material";
import { ContenidoHistorialCitasStyles } from "./ContenidoHistorialCitasStyles.ts";
import { SideBar } from "@ui/SideBar/SideBar";
import { PATIENT_LINKS } from "../PATIENT_LINKS.tsx";
import { HistorialCitasTable } from "./ContenidoHistorialCitasTable/HistorialCitasTable.tsx";

export const ContenidoHistorialCitas = () => {
    return (
        <Grid2 container sx={ContenidoHistorialCitasStyles.container}>
            <SideBar links={PATIENT_LINKS} />
            <Grid2 size="grow" sx={ContenidoHistorialCitasStyles.mainContent}>
                <HistorialCitasTable />
            </Grid2>
        </Grid2>
        
    );
}