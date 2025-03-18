import { CustomTableV2 } from "@ui/CustomTableV2/CustomTableV2";
import { medico_headers } from "./MEDICO_TABLE_HEADERS";
import { MedicoRows } from "./MedicoRows";

export const MedicoContent = () => {
    return (
        <CustomTableV2 headers={medico_headers}>
            <MedicoRows />
        </CustomTableV2>
    );
}