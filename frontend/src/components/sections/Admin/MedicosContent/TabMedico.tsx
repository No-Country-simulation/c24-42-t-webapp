import { SectionWrapper } from "@components/layout/SectionWrapper";
import { ADMIN_LINKS } from "../ADMIN_LINKS";
import { TableContextProvider } from "@context/table.provider";
import { getMedicos } from "@services/getMedicos";
import { MedicoContent } from "./MedicoContent";
import { Box, Typography } from "@mui/material";
import { TabsAdmin } from "@tipos/component";
import { TabStyles } from "../TabStyles";
import { CustomButton } from "@ui/CustomButton/CustomButton";

interface Props {
    handleChangeTab: (tab: TabsAdmin) => void
}

export const TabMedico = ({ handleChangeTab }: Props) => {
    return (
        <SectionWrapper sideBarItems={ADMIN_LINKS}>
            <TableContextProvider fetchRows={getMedicos}>
                <Box sx={TabStyles.container}>
                    <CustomButton onClick={() => handleChangeTab("pacientes")} sx={TabStyles.tab}>
                        Pacientes
                    </CustomButton>
                    <CustomButton onClick={() => handleChangeTab("medicos")} sx={{ ...TabStyles.tab, backgroundColor: "#198751", color: "#f1f1f1" }}>
                        Médicos
                    </CustomButton>
                </Box>
                <Typography variant="h5" gutterBottom color="primary" sx={{ letterSpacing: "4px" }}>
                    Tabla de Medicos
                </Typography>
                <MedicoContent />
            </TableContextProvider>
        </SectionWrapper>
    );
}