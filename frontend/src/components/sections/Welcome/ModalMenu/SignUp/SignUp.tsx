/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "@ui/Form/Form";
import { SignUpFormData, signUpSchema, signUpUiSchema } from "./signUpSchema";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FormStyle } from "./SignUpStyles";
import { signUpUser } from "@services/signUpUser";
import { SignUpButton } from "./SignUpButton";
import { CustomError } from "@tipos/types";
import { showSonnerToast } from "@utils/showSonnerToast";
import { useModalStore } from "@store/modal.store";

export default function SignUp() {
    const [data, setData] = useState<SignUpFormData>();
    const [error, setError] = useState<CustomError>(null);
    const [loading, setLoading] = useState(false);
    const closeModal = useModalStore(state => state.closeModal);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setData(data);
        if (errors.length !== 0) {
            setError({ type: "input", description: "entrada invalida en formulario de registro" })
        } else {
            setError(null);
        }
    }

    const handleSignUp = async () => {
        setError(null);
        setLoading(true);
        const response = await signUpUser({ data, setError });
        if (response !== null) {
            showSonnerToast({
                title: "Registro Completo",
                description: "Ahora puede iniciar sesión como paciente",
                type: "success"
            });
            closeModal();
        }
        setLoading(false);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Box sx={FormStyle.container}>
                <Box sx={FormStyle.form}>
                    <Form schema={signUpSchema} uiSchema={signUpUiSchema} data={data} onChange={handleChange} />
                    {
                        error?.type === "fetch" && <Typography color="error" textAlign="center">{error.description}</Typography>
                    }
                </Box>
                <SignUpButton error={error} loading={loading} handleSignUp={handleSignUp} />
            </Box>
        </form>
    );
}