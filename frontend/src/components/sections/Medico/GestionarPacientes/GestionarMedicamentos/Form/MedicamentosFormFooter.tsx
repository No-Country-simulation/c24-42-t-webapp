import { CustomError } from "@tipos/types";
import { SubmitMedicamentoButton } from "./SubmiMedicamentotButton";
import { Dispatch, SetStateAction, useState } from "react";
import { MedicamentosFormData } from "./medicamentosFormSchema";
import { useUserStore } from "@store/user.store";
import { format, parse } from "date-fns";

interface Props {
    dataForm: MedicamentosFormData | undefined
    error: CustomError
    pacienteId: number | null
    setError: Dispatch<SetStateAction<CustomError>>
    setRefetch: Dispatch<SetStateAction<boolean>>
}

export const MedicamentosFormFooter = ({ dataForm, error, pacienteId, setError, setRefetch }: Props) => {
    const [loading, setLoading] = useState(false);
    const token = useUserStore((state) => state.getToken)();
    const handleSubmit = async () => {
        setLoading(true);
        const startDateFormated = dataForm?.datePickerWithRange ? parse(dataForm?.datePickerWithRange.startDate.toString(), "dd/MM/yyyy", new Date()) : "";
        const endDateFormated = dataForm?.datePickerWithRange.endDate ? parse(dataForm?.datePickerWithRange.endDate.toString(), "dd/MM/yyyy", new Date()) : "";
        const startDateJava = format(startDateFormated, "yyyy-MM-dd");
        const endDateJava = format(endDateFormated, "yyyy-MM-dd");
        const medicamentoData = {
            dosage: dataForm?.dosage || "",
            frequency: dataForm?.frequency || "",
            notes: dataForm?.notes || "",
            medicationName: dataForm?.medicationName || "",
            startDate: startDateJava,
            endDate: endDateJava
        };
        const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/medication/${pacienteId}`;
        const params: RequestInit = {
            method: "POST",
            headers: {
                "Authorization": `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(medicamentoData),
        }
        fetch(API_URL, params)
            .then(async (response) => {
                const responseText = await response.text();
                if (responseText !== "") {
                    const responseBody = await response.json();
                    if (!response.ok) {
                        throw new Error(responseBody.error || `Error ${response.status}: Ocurrió un error desconocido`);
                    }
                    return responseBody;
                } else return responseText;

            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((response) => {
                setRefetch(true);
            })
            .catch((error) => {
                let errorMsg = error.message;

                if (error.message === "Failed to fetch") {
                    errorMsg = "Falló la conexión";
                }

                setError({
                    description: errorMsg,
                    type: "fetch",
                    status: error.status
                })
                return null;
            })
            .finally(() => setLoading(false));
    }

    return (
        <>
            <SubmitMedicamentoButton error={error} loading={loading} onSubmit={handleSubmit} />
        </>
    );
}