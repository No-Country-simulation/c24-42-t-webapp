import { TableContextProvider } from "@context/table.provider";
import { DashboardMedicoContent } from "./DashboardMedicoContent";
import { MEDIC_LINKS } from "../MEDIC_LINKS";
import { SectionWrapper } from "@components/layout/SectionWrapper";
import { useUserStore } from "@store/user.store";
import { getMedicAppointments } from "@services/getMedicAppointments";

export const DashboardMedico = () => {
    const idUser = useUserStore(state => state.userData?.id);
    return (
        <SectionWrapper sideBarItems={MEDIC_LINKS}>
            <TableContextProvider fetchRows={getMedicAppointments} idForEndpoint={idUser}>
                <DashboardMedicoContent />
            </TableContextProvider>
        </SectionWrapper>
    );
}