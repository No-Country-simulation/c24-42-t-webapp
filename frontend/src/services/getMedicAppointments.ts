import { Parameters } from "@tipos/types";
import { handleError } from "@utils/handleError";

export const getMedicAppointments = ({ token, setDataRows, setLoading, setError, idForEndpoint }: Parameters) => {
    setLoading(true);
    const MEDIC_APPOINTMENTS_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/appointments/${idForEndpoint}`;
    fetch(MEDIC_APPOINTMENTS_URL, { method: "GET", headers: { 'Authorization': `${token}` } })
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status}: ${responseBody.error || responseBody.ERROR}`);
            }
            return responseBody;
        })
        .then((result) => {
            setDataRows(result);
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
        })
        .finally(() => setLoading(false));
}