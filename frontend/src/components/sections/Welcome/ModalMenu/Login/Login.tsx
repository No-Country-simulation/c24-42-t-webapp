/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FormData } from "./loginSchema";
import { CustomError } from "@tipos/types";
import { LoginForm } from "./LoginForm";

export default function Login() {
    const [data, setData] = useState<FormData>();
    const [error, setError] = useState<CustomError>(null);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setData(data);
        if (errors.length !== 0) {
            setError({ type: "input", description: "entrada invalida en formulario de inicio de sesion" })
        } else {
            setError(null);
        }
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <LoginForm data={data} error={error} setError={setError} handleChange={handleChange} />
        </form >
    );
}