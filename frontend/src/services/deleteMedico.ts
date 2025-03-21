import { CustomError } from "@tipos/types";
import { handleError } from "@utils/handleError";
import { Dispatch, SetStateAction } from "react";

interface Params {
    medicoId: string
    token: string
    setError: Dispatch<SetStateAction<CustomError>>
}

export const deleteMedico = async ({ medicoId, token, setError }: Params) => {
    const DELETE_MEDICO_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/medic/${medicoId}`;
    const response = fetch(DELETE_MEDICO_URL, { method: "DELETE", headers: { 'Authorization': `${token}` } })
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status}: ${responseBody.error || responseBody.ERROR}`);
            }
            return responseBody;
        })
        .then((result) => result)
        .catch((e) => {
            const error = handleError(e);
            setError(error);
        });
    return response;
}