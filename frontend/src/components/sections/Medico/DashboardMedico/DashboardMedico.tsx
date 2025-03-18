import { TableContextProvider } from "@context/table.provider";
import { DashboardMedicoContent } from "./DashboardMedicoContent";
import { MEDIC_LINKS } from "../MEDIC_LINKS";
import { SectionWrapper } from "@components/layout/SectionWrapper";
import { getPacientes } from "@services/getPacientes";

export const DashboardMedico = () => {
    return (
        <SectionWrapper sideBarItems={MEDIC_LINKS}>
            <TableContextProvider fetchRows={getPacientes}>
                <DashboardMedicoContent />
            </TableContextProvider>
        </SectionWrapper>
    );
}