import CustomTable from "@ui/CustomTable/CustomTable";
import { CustomTableBody } from "@ui/CustomTable/CustomTableBody";
import { CustomTableHeader } from "@ui/CustomTable/CustomTableHeader";
import { MedicosRows } from "./MedicosRows";
import { MedicosHeaders } from "./MedicosHeaders";

export const MedicoTable = () => {
    return (
        <CustomTable>
            <CustomTableHeader>
                <MedicosHeaders />
            </CustomTableHeader>
            <CustomTableBody>
                <MedicosRows />
            </CustomTableBody>
        </CustomTable>
    );
}