import { PacienteRows } from "./PacienteRows";
import { CustomTableV2 } from "@ui/CustomTableV2/CustomTableV2";
import { pacientes_headers } from "./PACIENTE_TABLE_HEADERS";

export const PacienteContent = () => {
    return (
        <CustomTableV2 headers={pacientes_headers}>
            <PacienteRows />
        </CustomTableV2>
    );
}