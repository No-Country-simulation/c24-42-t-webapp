import { SectionWrapper } from "@components/layout/SectionWrapper";
import { TableContextProvider } from "@context/table.provider";
import { getMedicamentos } from "@services/getMedicamentos";
import { MEDIC_LINKS } from "../../MEDIC_LINKS";
import { GestionarMedicamentosContent } from "./GestionarMedicamentosContent";
import { useParams } from "react-router";

export const GestionarMedicamentos = () => {
    const id: string = useParams().id || "";
    return (
        <SectionWrapper sideBarItems={MEDIC_LINKS}>
            <TableContextProvider fetchRows={getMedicamentos} idForEndpoint={id}>
                <GestionarMedicamentosContent />
            </TableContextProvider>
        </SectionWrapper>
    );
}