import { CircularProgress, Typography } from "@mui/material";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { loginUser } from "@services/loginUser";
import { useNavigate } from "react-router";
import { useUserStore } from "@store/user.store";
import { useModalStore } from "@store/modal.store";
import { Dispatch, SetStateAction, useState } from "react";
import { FormData } from "./loginSchema";
import { CustomError } from "@tipos/types";
import { jwtDecode } from "jwt-decode";
import { UserRole } from "@tipos/store";

interface Props {
    data: FormData | undefined
    error: CustomError
    setError: Dispatch<SetStateAction<CustomError>>
}

interface JwtData {
    iss: string,
    sub: string,
    iat: number,
    exp: number,
    role: UserRole
    jti: string
}

export const LoginButton = ({ data, error, setError }: Props) => {
    const navigate = useNavigate();
    const getDashboardUrl = useUserStore(state => state.getUserDashboardURL);
    const saveToken = useUserStore(state => state.saveToken);
    const setUserData = useUserStore(state => state.setUserData);

    const redirectTo = useModalStore(state => state.modalData.redirect);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError(null);
        setLoading(true);
        const token = await loginUser({ data, setError });
        if (token !== null) {
            saveToken(token);
            const decoded: JwtData = jwtDecode(token);
            const userData = {
                email: decoded.sub,
                role: UserRole[decoded.role]
            };
            setUserData(userData);
            const dashboard = getDashboardUrl();
            const to = (redirectTo !== null && redirectTo !== undefined) ? redirectTo : dashboard;
            setLoading(false);
            navigate(to);
        }
    }
    return (
        <CustomButton type="submit" onClick={handleLogin} disabled={error !== null && error?.type === "input"}>
            {
                loading
                    ?
                    <CircularProgress color="inherit" size="25px" />
                    :
                    <Typography textTransform="none" fontSize="18px">
                        Iniciar Sesión
                    </Typography>
            }
        </CustomButton>
    );
}