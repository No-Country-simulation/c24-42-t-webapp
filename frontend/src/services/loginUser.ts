import { FormData } from "@components/sections/Welcome/ModalMenu/Login/loginSchema";
import { CustomError } from "@tipos/types";
import { Dispatch, SetStateAction } from "react";

interface Params {
    data: FormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
}

export const loginUser = async ({ data, setError }: Params): Promise<string | null> => {

    const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/auth/login`;
    const params: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
    }
    const token = await fetch(LOGIN_URL, params)
        .then(async (response) => {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(responseBody.error || `Error ${response.status}: Ocurrió un error desconocido`);
            }
            return responseBody.token
        })
        .then((response) => {
            return response;
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
    return token;
}