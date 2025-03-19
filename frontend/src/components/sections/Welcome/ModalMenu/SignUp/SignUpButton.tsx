import { CircularProgress, Typography } from "@mui/material";
import { CustomError } from "@tipos/types";
import { CustomButton } from "@ui/CustomButton/CustomButton";

interface Props {
    loading: boolean
    error: CustomError
    handleSignUp: () => Promise<void>
}

export const SignUpButton = ({ error, loading, handleSignUp }: Props) => {
    return (
        <CustomButton type="submit" onClick={handleSignUp} disabled={error !== null && error?.type === "input"}>
            {
                loading
                    ?
                    <CircularProgress color="inherit" size="25px" />
                    :
                    <Typography textTransform="none" fontSize="18px">
                        Registrarse

                    </Typography>
            }
        </CustomButton>
    );
}