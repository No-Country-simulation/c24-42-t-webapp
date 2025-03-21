/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { CustomError } from "@tipos/types";
import { useState } from "react";
import { Form } from "@ui/Form/Form";
import { MedicamentosFormData, medicamentosSchema, medicamentosUiSchema } from "./medicamentosFormSchema";
import { SubmitButton } from "@ui/SubmitButton/SubmitButton";
import { addMedication } from "@services/addMedication";
import { useUserStore } from "@store/user.store";
import { useModalStore } from "@store/modal.store";
import { showSonnerToast } from "@utils/showSonnerToast";

export const MedicamentosForm = () => {
    const [dataForm, setDataForm] = useState<MedicamentosFormData>();
    const [error, setError] = useState<CustomError>(null);
    const [loading, setLoading] = useState(false);
    const token = useUserStore((state) => state.getToken)();
    const { id: pacienteId } = useModalStore(state => state.modalData.data);
    const closeModal = useModalStore(state => state.closeModal);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setDataForm(data);
        if (errors.length !== 0 || dataForm?.datePickerWithRange.startDate === null || dataForm?.datePickerWithRange.endDate === null) {
            setError({ type: "input", description: "entrada invalida en formulario" })
        } else {
            setError(null);
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
        const response = await addMedication({ pacienteId, token, data: dataForm, setError });
        if (response) {
            showSonnerToast({
                title: "Medicamento añadido",
                description: "Se a asigno un nuevo medicamento al paciente",
                type: "success"
            });
            closeModal();
        }
        setLoading(false);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}>
                    <Form schema={medicamentosSchema} uiSchema={medicamentosUiSchema} data={dataForm} onChange={handleChange} />
                    {
                        error?.type === "fetch" && <Typography color="error" textAlign="center">{error.description}</Typography>
                    }
                </Box>
                <SubmitButton label="Agregar Medicamento" error={error} loading={loading} handleOnClick={handleSubmit} />
            </Box>
        </form>
    );
}