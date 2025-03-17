import { Grid2 } from "@mui/material";
import { MEDIC_LINKS } from "../MEDIC_LINKS";
import { AsideBar } from "@ui/AsideBar/AsideBar";
import { GestionarPacientesMainContent } from "./GestionarPacientesMainContent/GestionarPacientesMainContent";

export const GestionarPacientes = () => {
    return (
        <Grid2 container sx={{
            width: "100%",
            height: "calc(100vh - 90px)"
        }}>
            <AsideBar links={MEDIC_LINKS} />
            <GestionarPacientesMainContent />
        </Grid2>
    );
}