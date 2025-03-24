import { MedicamentosFormData } from "@components/sections/Medico/GestionarPacientes/GestionarMedicamentos/Form/medicamentosFormSchema"
import { MedicationInput } from "@tipos/backendTypes"
import { CustomError } from "@tipos/types"
import { formatDate } from "@utils/date/formatDate"
import { handleError } from "@utils/handleError"
import { Dispatch, SetStateAction } from "react"

interface Params {
    medicacionId: string
    pacienteId: string
    token: string
    data: MedicamentosFormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
}

export const editMedication = ({ medicacionId, pacienteId, data, token, setError }: Params) => {
    const startDateFormated = data?.datePickerWithRange.startDate ? new Date(formatDate(data?.datePickerWithRange.startDate.toString(), "dd/MM/yyyy", "yyyy-MM-dd")) : new Date();
    const endDateFormated = data?.datePickerWithRange.endDate ? new Date(formatDate(data?.datePickerWithRange.endDate.toString(), "dd/MM/yyyy", "yyyy-MM-dd")) : new Date();

    const medicamentoData: MedicationInput = {
        dosage: data?.dosage || "",
        frequency: data?.frequency || "",
        notes: data?.notes || "sin notas",
        medicationName: data?.medicationName || "",
        startDate: startDateFormated,
        endDate: endDateFormated
    };
    const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/medication/${pacienteId}/${medicacionId}`;
    const params: RequestInit = {
        method: "PUT",
        headers: {
            "Authorization": `${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(medicamentoData),
    }
    const response = fetch(API_URL, params)
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status}: ${responseBody.error || responseBody.ERROR}`);
            }
            return responseBody;
        })
        .then((response) => response)
        .catch((e) => {
            const error = handleError(e);
            setError(error);
        });
    return response;
}