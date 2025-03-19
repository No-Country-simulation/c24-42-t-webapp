import { SignUpFormData } from "@components/sections/Welcome/ModalMenu/SignUp/signUpSchema";
import { PacienteInput } from "@tipos/backendTypes";
import { CustomError } from "@tipos/types";
import { formatDate } from "@utils/date/formatDate";
import { handleError } from "@utils/handleError";
import { Dispatch, SetStateAction } from "react";

interface Params {
    data: SignUpFormData | undefined,
    setError: Dispatch<SetStateAction<CustomError>>
}

export const signUpUser = async ({ data, setError }: Params) => {
    const SIGN_UP_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/patient`;
    const birthDateFormated = data?.customDatePicker.date ? new Date(formatDate(data?.customDatePicker.date, "dd/MM/yyyy", "yyyy-MM-dd")) : new Date();
    const pacienteSignUp: PacienteInput = {
        firstName: data?.first_name || "",
        lastName: data?.last_name || "",
        documentId: data?.dni || "",
        birthDate: birthDateFormated,
        gender: data?.customSelect.gender || "",
        phone: data?.phone || "",
        address: data?.address || "",
        emergencyContactInfo: data?.emergency_contact_info || "",
        user: {
            email: data?.email || "",
            password: data?.repeatPassword.password || ""
        }
    };
    const params: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pacienteSignUp),
    }
    const signUpresponse = await fetch(SIGN_UP_URL, params)
        .then(async (response) => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error(`${response.status}: cors`);
                } else {
                    const responseBody = await response.json();
                    throw new Error(`${response.status}: ${responseBody[0].error || responseBody[0].ERROR}`);
                }
            }
            return await response.json()
        })
        .then((response) => {
            return response;
        })
        .catch((e) => {
            const error = handleError(e);
            setError(error);
            return null;
        })
    return signUpresponse;
}