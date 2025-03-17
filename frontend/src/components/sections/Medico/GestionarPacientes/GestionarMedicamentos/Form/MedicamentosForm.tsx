/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { CustomError } from "@tipos/types";
import { Dispatch, SetStateAction, useState } from "react";
import { MedicamentosFormData, medicamentosSchema, medicamentosUiSchema } from "../../AdministrarMedicamentos/MedicamentosForm/medicamentosFormSchema";
import { Form } from "@ui/Form/Form";
import { MedicamentosFormFooter } from "../../AdministrarMedicamentos/MedicamentosForm/MedicamentosFormFooter";

interface Props {
    pacienteId: number | null
    setRefetch: Dispatch<SetStateAction<boolean>>
}

export const MedicamentosForm = ({ pacienteId, setRefetch }: Props) => {
    const [dataForm, setDataForm] = useState<MedicamentosFormData>();
    const [error, setError] = useState<CustomError>(null);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setDataForm(data);
        if (errors.length !== 0) {
            setError({ type: "input", description: "entrada invalida en formulario de inicio de sesion" })
        } else {
            setError(null);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box>
                    <Form schema={medicamentosSchema} uiSchema={medicamentosUiSchema} data={dataForm} onChange={handleChange} />
                    {
                        error?.type === "fetch" && <Typography color="error" textAlign="center">{error.description}</Typography>
                    }
                </Box>
                <MedicamentosFormFooter dataForm={dataForm} error={error} pacienteId={pacienteId}  setError={setError} setRefetch={setRefetch} />
            </Box>
        </form>
    );
}