import CustomTable from "@ui/CustomTable/CustomTable";
import { CustomTableBody } from "@ui/CustomTable/CustomTableBody";
import { CustomTableHeader } from "@ui/CustomTable/CustomTableHeader";
import { CitasHeaders } from "./CitasHeaders";
import { CitasRows } from "./CitasRows";

export const CitasTable = () => {
    return (
        <CustomTable>
            <CustomTableHeader>
                <CitasHeaders />
            </CustomTableHeader>
            <CustomTableBody>
                <CitasRows />
            </CustomTableBody>
        </CustomTable>
    );
}