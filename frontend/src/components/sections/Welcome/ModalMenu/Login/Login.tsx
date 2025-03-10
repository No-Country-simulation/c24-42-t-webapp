import { useState } from "react";
import { FormData } from "./loginSchema";
import { CustomError } from "@tipos/types";
import { ErrorBox } from "./ErrorBox";
import { LoginForm } from "./LoginForm";

export default function Login() {
    const [data, setData] = useState<FormData>();
    const [error, setError] = useState<CustomError>(null);

    const handleChange = ({ data, errors }: { data: any, errors: any[] }) => {
        setData(data);
        if (errors.length !== 0) {
            setError({ type: "input", description: "entrada invalida en formulario de inicio de sesion" })
        } else {
            setError(previousState => null);
        }
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {
                error?.type === "fetch"
                    ? <ErrorBox />
                    : <LoginForm data={data} error={error} setError={setError} handleChange={handleChange} />
            }
        </form >
    );
}