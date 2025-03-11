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
            setError({
                description: error.message,
                status: error.status,
                type: "fetch"
            });
            return null;
        })
    return token;
}