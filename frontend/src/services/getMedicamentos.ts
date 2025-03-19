import { MedicacionData } from "@tipos/backendTypes";
import { Parameters } from "@tipos/types";
import { handleError } from "@utils/handleError";

export const getMedicamentos = ({ token, setDataRows, setLoading, setError, idForEndpoint: pacienteId }: Parameters) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/medication/${pacienteId}`, { method: "GET", headers: { 'Authorization': `${token}` } })
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status}: ${responseBody.error}`);
            }
            return responseBody;
        })
        .then((result: MedicacionData[]) => {
            setDataRows(result);
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
        })
        .finally(() => setLoading(false));
}