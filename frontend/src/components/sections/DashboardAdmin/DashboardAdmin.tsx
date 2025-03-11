import { Grid2 } from "@mui/material";
import { DashboardAdminStyles } from "./DashboardAdminStyles";
import { AsideBar } from "@ui/AsideBar/AsideBar";
import { ADMIN_LINKS } from "./ADMIN_LINKS.tsx";
import { AdminMainContent } from "./AdminMainContent/AdminMainContent.tsx";

export const DashboardAdmin = () => {
    return (
        <Grid2 container sx={DashboardAdminStyles.container}>
            <AsideBar links={ADMIN_LINKS} />
            <AdminMainContent />
        </Grid2>
    );
}