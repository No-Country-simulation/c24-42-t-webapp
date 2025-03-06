import { FormData } from "@components/sections/Welcome/ModalMenu/Login/loginSchema";
import { Dispatch, SetStateAction } from "react";

interface Params {
    data: FormData | undefined,
    error: Error | null,
    setError: Dispatch<SetStateAction<Error | null>>
    setFinishLog: Dispatch<SetStateAction<boolean>>
}

export const loginUser = ({ data, error, setError, setFinishLog }: Params) => {
    const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/auth/login`;
    const params: RequestInit = {
        method: "POST",
        // credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
    }
    fetch(LOGIN_URL, params)
        .then((response) => {
            if (!response.ok) {
                console.log(response.status);
                throw new Error(`Ocurrio un error desconocido ${JSON.stringify(response)}`);
            }
            return response.json();
        })
        .then((response) => console.log("fetch correcto: ", response))
        .catch((error) => setError(error))
        .finally(() => setFinishLog(true))

    if (!error) {
        // const dashboard = getDashboardUrl();
        // const to = (redirectTo !== null && redirectTo !== undefined) ? redirectTo : dashboard;
        // navigate(to);
    }
}