import { Box, Button, Grid2 } from "@mui/material";
import { DashboardAdminStyles } from "../DashboardAdminStyles";
import { PacienteTable } from "../ContenidoPacientesTable/PacienteTable";
import { useState } from "react";
import { MedicoTable } from "../ContenidoMedicosTable/MedicoTable";
import { AdminMainContentStyles } from "./AdminMainContentStyles";
import { AddMedicButton } from "./AddMedicButton/AddMedicButton";

type TabValues = "pacientes" | "medicos";

export const AdminMainContent = () => {
    const [tab, setTab] = useState<TabValues>("pacientes");

    const handleTab = (value: TabValues) => {
        setTab(value);
    }

    return (
        <Grid2 size="grow" sx={DashboardAdminStyles.mainContent}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "3rem" }}>
                <Box sx={AdminMainContentStyles.tabContainer}>
                    <Button sx={{ ...AdminMainContentStyles.startTab, color: tab === "pacientes" ? "#f1f1f1" : "#c1c1c1" }} onClick={() => handleTab("pacientes")}>
                        Pacientes
                    </Button>
                    <Button sx={{ ...AdminMainContentStyles.endTab, color: tab === "medicos" ? "#f1f1f1" : "#c1c1c1" }} onClick={() => handleTab("medicos")}>
                        Medicos
                    </Button>
                </Box>
                {
                    tab === "medicos" && <AddMedicButton />
                }

            </Box>
            {
                tab === "pacientes"
                    ? <PacienteTable />
                    : <MedicoTable />
            }
        </Grid2>
    );
}