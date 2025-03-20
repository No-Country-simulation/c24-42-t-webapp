import { ReactNode, useState } from "react";
import { TabPacientes } from "./PacienteContent/TabPacientes";
import { TabMedico } from "./MedicosContent/TabMedico";
import { TabsAdmin } from "@tipos/component";
import { useModalStore } from "@store/modal.store";
import CustomModal from "@ui/CustomModal/CustomModal";
import { AdminFormContent } from "./Form/AdminFormContent";

export const DashboardAdmin = () => {
    const [tab, setTab] = useState<TabsAdmin>("pacientes");
    const showModal = useModalStore((state) => state.modalData.showModal);

    const handleChangeTab = (tab: TabsAdmin) => {
        setTab(tab);
    }

    const CONTENT_MAP: Record<TabsAdmin, ReactNode> = {
        pacientes: <TabPacientes handleChangeTab={handleChangeTab} />,
        medicos: <TabMedico handleChangeTab={handleChangeTab} />
    }

    return (
        <>
            {
                CONTENT_MAP[tab]
            }
            {
                showModal && (
                    <CustomModal>
                        <AdminFormContent />
                    </CustomModal>
                )
            }
        </>
    );
}