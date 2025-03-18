import { Grid2 } from "@mui/material";
import { DashboardPatientStyles } from "./DashboardPatientStyles";
import { SideBar } from "@ui/SideBar/SideBar";
import { PatientMainContent } from "./PatientMainContent/PatientMainContent";
import { PATIENT_LINKS } from "./PATIENT_LINKS.tsx";

export const DashboardPatient = () => {
    return (
        <Grid2 container sx={DashboardPatientStyles.container}>
            <SideBar links={PATIENT_LINKS} />
            <PatientMainContent />
        </Grid2>
    );
}