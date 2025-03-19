import { CustomError } from "@tipos/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any): CustomError => {
    const errorMsg = error.message;
    if (errorMsg.includes("Failed to fetch")) {
        return {
            description: "Falló la conexión",
            type: "fetch",
            status: "unknow"
        }
    }

    if (errorMsg.includes("401")) {
        return {
            description: "Acceso no autorizado",
            type: "fetch",
            status: "401"
        }
    }

    return {
        description: errorMsg,
        type: "unknow",
        status: "unknow"
    }
}