import { FormData } from "@components/sections/Welcome/ModalMenu/Login/loginSchema";
import { CustomError } from "@tipos/types";
import { Dispatch, SetStateAction } from "react";

interface Params {
    data: FormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const loginUser = async ({ data, setError, setLoading }: Params): Promise<string | null> => {
    setLoading(true);
    const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/auth/login`;
    const params: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
    }
    const token = await fetch(LOGIN_URL, params)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ocurrio un error desconocido`);
            }
            return response.json();
        })
        .then((response) => {
            return response.token;
        })
        .catch((error) => {
            setError({
                description: error.message,
                status: "",
                type: "fetch"
            });
            return null;
        })
        .finally(() => setLoading(false));
    return token;
}