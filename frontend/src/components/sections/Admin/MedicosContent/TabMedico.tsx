import { TableContextProvider } from "@context/table.provider";
import { getMedicos } from "@services/getMedicos";
import { MedicoContent } from "./MedicoContent";
import { Box } from "@mui/material";
import { TabsAdmin } from "@tipos/component";
import { TabStyles } from "../TabStyles";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { useModalStore } from "@store/modal.store";
import CustomModal from "@ui/CustomModal/CustomModal";
import { AdminFormContent } from "../Form/AdminFormContent";

interface Props {
    handleChangeTab: (tab: TabsAdmin) => void
}

export const TabMedico = ({ handleChangeTab }: Props) => {
    const setModalData = useModalStore(state => state.setModalData);
    const showModal = useModalStore((state) => state.modalData.showModal);
    const handleAddMedico = () => {
        setModalData({
            showModal: true,
            title: "Crear Medico",
            operation: "create_medico"
        });
    }
    return (
        <TableContextProvider fetchRows={getMedicos} handleAdd={handleAddMedico}>
            <Box sx={TabStyles.container}>
                <CustomButton onClick={() => handleChangeTab("pacientes")} sx={TabStyles.tab}>
                    Tabla de Pacientes
                </CustomButton>
                <CustomButton onClick={() => handleChangeTab("medicos")} sx={{ ...TabStyles.tab, backgroundColor: "#198751", color: "#f1f1f1" }}>
                    Tabla de Médicos
                </CustomButton>
            </Box>
            <MedicoContent />
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