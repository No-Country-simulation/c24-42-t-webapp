import { CustomError } from "@tipos/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any): CustomError => {
    const errorMsg = error.message;
    
    if (errorMsg === "Failed to fetch") {
        return {
            description: "Falló la conexión",
            type: "fetch",
            status: error?.status
        }
    }

    return {
        description: errorMsg,
        type: "unknow",
        status: "unknow"
    }
}