import CustomTable from "@ui/CustomTable/CustomTable";
import { CustomTableBody } from "@ui/CustomTable/CustomTableBody";
import { CustomTableHeader } from "@ui/CustomTable/CustomTableHeader";
import { PacientesRows } from "./PacienteRows";
import { PacientesHeaders } from "./PacientesHeaders";

export const PacienteTable = () => {
    return (
        <CustomTable>
            <CustomTableHeader>
                <PacientesHeaders />
            </CustomTableHeader>
            <CustomTableBody>
                <PacientesRows />
            </CustomTableBody>
        </CustomTable>
    );
}