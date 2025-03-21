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

    if (errorMsg.includes("403")) {
        return {
            description: "Acceso no autorizado",
            type: "fetch",
            status: "403"
        }
    }

    if (errorMsg.includes("404")) {
        return {
            description: errorMsg.replace("404: ", ""),
            type: "fetch",
            status: "403"
        }
    }

    if (errorMsg.includes("400")) {
        if (errorMsg.includes("There are not appointments")) {
            return {
                description: "No hay citas",
                type: "fetch",
                status: "400"
            }
        }
        return {
            description: "Se introdujo un campo invalido",
            type: "fetch",
            status: "400"
        }
    }

    return {
        description: errorMsg,
        type: "unknow",
        status: "unknow"
    }
}