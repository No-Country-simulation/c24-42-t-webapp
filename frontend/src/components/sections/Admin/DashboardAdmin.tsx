import { ReactNode, useState } from "react";
import { TabPacientes } from "./PacienteContent/TabPacientes";
import { TabMedico } from "./MedicosContent/TabMedico";
import { TabsAdmin } from "@tipos/component";

export const DashboardAdmin = () => {
    const [tab, setTab] = useState<TabsAdmin>("pacientes");

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
        </>
    );
}