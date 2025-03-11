import { Grid2 } from "@mui/material";
import { DashboardMedicoStyles } from "./DashboardMedicoStyles";
import { AsideBar } from "@ui/AsideBar/AsideBar";
import { MEDIC_LINKS } from "./MEDIC_LINKS";
import { MedicoMainContent } from "./MedicoMainContent/MedicoMainContent";

export const DashboardMedico = () => {
    return(
        <Grid2 container sx={DashboardMedicoStyles.container}>
            <AsideBar links={MEDIC_LINKS} />
            <MedicoMainContent />
        </Grid2>
    );
}