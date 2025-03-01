import { Typography } from "@mui/material";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { Form } from "@ui/Form";
import { CSSProperties, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { loginSchema, loginUiSchema } from "./loginSchema";

const FormStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "300px",
}

interface FormData {
    username: string | undefined;
    password: string | undefined;
}

export default function Login() {
    const [data, setData] = useState<FormData>();
    const navigate = useNavigate();

    const handleChange = ({ data, errors }: { data: any, errors: any }) => {
        console.log(data, errors);
        if(!errors) setData(data);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/agenda-cita");
    }

    return (
        <form action="" method="POST" onSubmit={handleSubmit} style={FormStyle}>
            <Form schema={loginSchema} uiSchema={loginUiSchema} data={data} onChange={handleChange} />
            <CustomButton type="submit">
                <Typography textTransform="none" fontSize="18px">
                    Iniciar Sesión
                </Typography>
            </CustomButton>
        </form>
    );
}