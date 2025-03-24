/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTableContext } from "@context/table.context";
import { Box, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { useUserStore } from "@store/user.store";
import { SubmitButton } from "@ui/SubmitButton/SubmitButton";
import { showSonnerToast } from "@utils/showSonnerToast";
import { useState } from "react";
import { MedicamentosFormData, medicamentosSchema, medicamentosUiSchema } from "./medicamentosFormSchema";
import { Form } from "@ui/Form/Form";
import { CustomError } from "@tipos/types";
import { editMedication } from "@services/editMedication";
import { useParams } from "react-router";
import { formatDate } from "@utils/date/formatDate";

export const EditMedicamentosForm = () => {
    const { itemData: data } = useModalStore(state => state.modalData.data);
    const initialData: MedicamentosFormData = {
        notes: data?.notes || "",
        dosage: data?.dosage,
        frequency: data?.frequency,
        medicationName: data?.medicationName,
        datePickerWithRange: {
            startDate: formatDate(data.startDate, "yyyy-MM-dd", "dd/MM/yyyy"),
            endDate: formatDate(data.endDate, "yyyy-MM-dd", "dd/MM/yyyy"),
        }
    };
    const [dataForm, setDataForm] = useState<MedicamentosFormData>(initialData);
    const [error, setError] = useState<CustomError>(null);
    const [loading, setLoading] = useState(false);
    const { refetchRows, handleSetError } = useTableContext();
    const token = useUserStore((state) => state.getToken)();
    const closeModal = useModalStore(state => state.closeModal);
    const pacienteId: string = useParams().id || "";

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
        setError(null);
        handleSetError(null);
        const response = await editMedication({ medicacionId: data.id, pacienteId, token, data: dataForm, setError });
        if (response) {
            showSonnerToast({
                title: response.status,
                description: "Se a asigno un nuevo medicamento al paciente",
                type: "success"
            });
            refetchRows();
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
                <SubmitButton label="Editar Medicamento" error={error} loading={loading} handleOnClick={handleSubmit} />
            </Box>
        </form>
    );
}