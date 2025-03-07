import { Box, Typography } from "@mui/material";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { Form } from "@ui/Form/Form";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { FormData, loginSchema, loginUiSchema } from "./loginSchema";
import { FormStyle } from "./LoginStyles";
import { useUserStore } from "@store/user.store";
import { useModalStore } from "@store/modal.store";
import { loginUser } from "@services/loginUser";

export default function Login() {
    const [data, setData] = useState<FormData>();
    const [error, setError] = useState<Error | null>(null);
    const [finishLog, setFinishLog] = useState(false);
    // const navigate = useNavigate();
    // const getDashboardUrl = useUserStore(state => state.getUserDashboardURL);
    // const redirectTo = useModalStore(state => state.modalData.redirect);

    const handleChange = ({ data, errors }: { data: any, errors: any }) => {
        setData(data);
    }

    const handleLogin = () => {
        loginUser({ data, error, setError, setFinishLog });
    }

    return (
        <Box sx={FormStyle}>
            <Form schema={loginSchema} uiSchema={loginUiSchema} data={data} onChange={handleChange} />
            {
                finishLog && (
                    <Typography variant="body2" sx={{ color: !error ? "#198751" : "#f00" }}>
                        {!error ? "El usuario se logeo correctamente" : "Ocurrio un error desconocido"}
                    </Typography>
                )
            }
            <CustomButton type="submit" onClick={handleLogin}>
                <Typography textTransform="none" fontSize="18px">
                    Iniciar Sesión
                </Typography>
            </CustomButton>
        </Box>
    );
}