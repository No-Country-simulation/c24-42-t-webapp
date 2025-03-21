import { ReactNode, useState } from "react";
import { TabPacientes } from "./PacienteContent/TabPacientes";
import { TabMedico } from "./MedicosContent/TabMedico";
import { TabsAdmin } from "@tipos/component";
import { Toaster } from "sonner";
import { SectionWrapper } from "@components/layout/SectionWrapper";
import { ADMIN_LINKS } from "./ADMIN_LINKS";

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
            <SectionWrapper sideBarItems={ADMIN_LINKS}>
                {
                    CONTENT_MAP[tab]
                }
            </SectionWrapper>
            <Toaster duration={10000} />
        </>
    );
}