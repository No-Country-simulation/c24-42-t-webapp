import { MEDIC_LINKS } from "../MEDIC_LINKS";
import { SectionWrapper } from "@components/layout/SectionWrapper";
import { GestionarPacientesContent } from "./GestionarPacientesContent";
import { TableContextProvider } from "@context/table.provider";
import { getPacientes } from "@services/getPacientes";

export const GestionarPacientes = () => {
    return (
        <SectionWrapper asideBarItems={MEDIC_LINKS}>
            <TableContextProvider fetchRows={getPacientes}>
                <GestionarPacientesContent />
            </TableContextProvider>
        </SectionWrapper>
    );
}