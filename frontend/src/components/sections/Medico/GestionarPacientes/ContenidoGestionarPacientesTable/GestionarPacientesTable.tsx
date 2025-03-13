import CustomTable from "@ui/CustomTable/CustomTable";
import { CustomTableHeader } from "@ui/CustomTable/CustomTableHeader";
import { GestionarPacientesRows } from "../ContenidoGestionarPacientesTable/GestionarPacientesRows";
import { CustomTableBody } from "@ui/CustomTable/CustomTableBody";
import { GestionarPacientesHeaders } from "../ContenidoGestionarPacientesTable/GestionarPacientesHeaders";
import { useEffect, useState } from "react";
import { StatusTable } from "@ui/StatusTable/StatusTable";
import { CustomError, PacientesResponse } from "@tipos/types";
import { PacienteData } from "@tipos/backendTypes";
import { useUserStore } from "@store/user.store";

export const GestionarPacientesTable = () => {
    const [pacientes, setPacientes] = useState<PacienteData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<CustomError | null>(null);
    const getToken = useUserStore(state => state.getToken);

    useEffect(() => {
        setLoading(true);
        const token = getToken();
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/patient`, { method: "GET", headers: { 'Authorization': `${token}` } })
            .then(async (response) => {
                const responseBody = await response.json();
                if (!response.ok) {
                    throw new Error(responseBody.error);
                }
                return responseBody;
            })
            .then((result: PacientesResponse) => {
                setPacientes(result.patients);
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
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <StatusTable color="info" label="Cargando..." />;
    }

    return !error && !loading
        ? (
            <CustomTable>
                <CustomTableHeader>
                    <GestionarPacientesHeaders />
                </CustomTableHeader>
                <CustomTableBody>
                    <GestionarPacientesRows pacientes={pacientes} />
                </CustomTableBody>
            </CustomTable>
        )
        : (
            <StatusTable color="error" label={error?.description || ""} />
        )
}