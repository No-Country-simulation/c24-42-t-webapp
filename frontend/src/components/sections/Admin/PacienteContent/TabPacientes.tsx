import { TableContextProvider } from "@context/table.provider";
import { PacienteContent } from "./PacienteContent";
import { getPacientes } from "@services/getPacientes";
import { Box } from "@mui/material";
import { TabsAdmin } from "@tipos/component";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { TabStyles } from "../TabStyles";
import CustomModal from "@ui/CustomModal/CustomModal";
import { AdminFormContent } from "../Form/AdminFormContent";
import { useModalStore } from "@store/modal.store";

interface Props {
    handleChangeTab: (tab: TabsAdmin) => void
}

export const TabPacientes = ({ handleChangeTab }: Props) => {
    const showModal = useModalStore((state) => state.modalData.showModal);
    return (
        <TableContextProvider fetchRows={getPacientes}>
            <Box sx={TabStyles.container}>
                <CustomButton onClick={() => handleChangeTab("pacientes")} sx={{ ...TabStyles.tab, backgroundColor: "#198751", color: "#f1f1f1" }}>
                    Tabla de Pacientes
                </CustomButton>
                <CustomButton onClick={() => handleChangeTab("medicos")} sx={TabStyles.tab}>
                    Tabla de Médicos
                </CustomButton>
            </Box>
            <PacienteContent />
            {
                showModal && (
                    <CustomModal>
                        <AdminFormContent />
                    </CustomModal>
                )
            }
        </TableContextProvider>
    );
} 