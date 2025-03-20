/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomError } from "@tipos/types";
import { Form } from "@ui/Form/Form";
import { useState } from "react";
import { MedicoFormData, medicoFormSchema, medicoFormUiSchema } from "./medicoFormSchema";
import { Box, Typography } from "@mui/material";
import { SubmitButton } from "@ui/SubmitButton/SubmitButton";
import { useModalStore } from "@store/modal.store";
import { createMedico } from "@services/createMedico";

export const AdminFormContent = () => {
    const [data, setData] = useState<MedicoFormData>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<CustomError>(null);
    const closeModal = useModalStore(state => state.closeModal);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setData(data);
        if (errors.length !== 0) {
            setError({ type: "input", description: "entrada invalida en formulario" })
        } else {
            setError(null);
        }
    }

    const handleSubmit = async () => {
        setError(null);
        setLoading(true);
        const response = await createMedico({ data, setError });
        if (response !== null) {
            setLoading(false);
            closeModal();
        } else {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "500px",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}>
                    <Form
                        data={data}
                        onChange={handleChange}
                        schema={medicoFormSchema}
                        uiSchema={medicoFormUiSchema}
                    />
                    {
                        error?.type === "fetch" && <Typography color="error" textAlign="center">{error.description}</Typography>
                    }
                </Box>
                <SubmitButton label="Registrar Medico" error={error} loading={loading} handleOnClick={handleSubmit} />
            </Box>
        </form >
    );
}