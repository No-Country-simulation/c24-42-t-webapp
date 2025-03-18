import { Grid2 } from "@mui/material";
import { ContenidoDatosDiagnosticoStyles } from "./ContenidoDatosDiagnosticoStyles";
import { SideBar } from "@ui/SideBar/SideBar";
import { PATIENT_LINKS } from "../PATIENT_LINKS.tsx";
import { DiagnosticoTable } from "./ContenidoDiagnosticoTable/DiagnosticoTable";


export const ContenidoDatosDiagnostico = () => {
    return (
        <Grid2 container sx={ContenidoDatosDiagnosticoStyles.container}>
            <SideBar links={PATIENT_LINKS} />
            <Grid2 size="grow" sx={ContenidoDatosDiagnosticoStyles.mainContent}>
                <DiagnosticoTable />
            </Grid2>
        </Grid2>
    );
}