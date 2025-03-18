import { MedicoResponse } from "@tipos/backendTypes";
import { Parameters } from "@tipos/types";
import { handleError } from "@utils/handleError";

export const getMedicos = ({ token, setDataRows, setLoading, setError }: Parameters) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/medic`, { method: "GET", headers: { 'Authorization': `${token}` } })
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(responseBody.error);
            }
            return responseBody;
        })
        .then((result: MedicoResponse) => {
            setDataRows(result.medics);
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
        })
        .finally(() => setLoading(false));
}