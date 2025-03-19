import { LoginFormData } from "@components/sections/Welcome/ModalMenu/Login/loginSchema";
import { CustomError } from "@tipos/types";
import { handleError } from "@utils/handleError";
import { Dispatch, SetStateAction } from "react";

interface Params {
    data: LoginFormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
}

export const loginUser = async ({ data, setError }: Params): Promise<string | null> => {

    const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
    const params: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
    }
    const token = await fetch(LOGIN_URL, params)
        .then(async (response) => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error(`${response.status}: cors`);
                } else {
                    const responseBody = await response.json();
                    throw new Error(`${response.status}: ${responseBody.error || responseBody.ERROR}`);
                }
            }
            return await response.json()
        })
        .then((response) => {
            return response.token;
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
            return null;
        })
    return token;
}