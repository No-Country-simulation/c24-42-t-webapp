import { MedicoFormData } from "@components/sections/Admin/Form/medicoFormSchema"
import { Gender, MedicoCreateResponse, MedicoInput, Speciality } from "@tipos/backendTypes"
import { CustomError } from "@tipos/types"
import { handleError } from "@utils/handleError"
import { Dispatch, SetStateAction } from "react"

interface Params {
    token: string
    data: MedicoFormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
}

export const createMedico = async ({ token, data, setError }: Params) => {
    setError(null);
    const CREATE_MEDIC_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/medic`;
    const speciality = Speciality[data?.speciality as Speciality];
    const gender = Gender[data?.gender as Gender];
    const medicoInput: MedicoInput = {
        description: data?.description || "",
        documentId: data?.dni || "",
        gender,
        lastname: data?.last_name || "",
        name: data?.first_name || "",
        phone: data?.phone || "",
        speciality,
        state: data?.status || "",
        user: {
            email: data?.email || "",
            password: data?.repeatPassword.password || ""
        }
    }
    const params: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`
        },
        body: JSON.stringify(medicoInput),
    }
    const responseCreateMedic = await fetch(CREATE_MEDIC_URL, params)
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
        .then((response: MedicoCreateResponse) => {
            return response;
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
            return null;
        })
    return responseCreateMedic;
}