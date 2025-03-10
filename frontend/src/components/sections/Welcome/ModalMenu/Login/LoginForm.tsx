import { Box } from "@mui/material";
import { CustomError } from "@tipos/types";
import { Form } from "@ui/Form/Form";
import { Dispatch, SetStateAction } from "react";
import { LoginButton } from "./LoginButton";
import { FormData, loginSchema, loginUiSchema } from "./loginSchema";
import { FormStyle } from "./LoginStyles";

interface Props {
    data: FormData | undefined
    error: CustomError
    setError: Dispatch<SetStateAction<CustomError>>
    handleChange: ({ data, errors }: {
        data: any;
        errors: any[];
    }) => void
}

export const LoginForm = ({ data, error, setError, handleChange }: Props) => {
    return (
        <Box sx={FormStyle.form}>
            <Form schema={loginSchema} uiSchema={loginUiSchema} data={data} onChange={handleChange} />
            <LoginButton data={data} error={error} setError={setError} />
        </Box>
    );
}