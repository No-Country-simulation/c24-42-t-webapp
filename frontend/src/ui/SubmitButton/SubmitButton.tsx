import { CircularProgress, Typography } from "@mui/material";
import { CustomError } from "@tipos/types";
import { CustomButton } from "@ui/CustomButton/CustomButton";

interface Props {
    label: string
    loading: boolean
    error: CustomError
    handleOnClick: () => Promise<void>
}

export const SubmitButton = ({ label, error, loading, handleOnClick }: Props) => {
    return (
        <CustomButton type="submit" onClick={loading ? undefined : handleOnClick} disabled={error !== null && error?.type === "input"}>
            {
                loading
                    ?
                    <CircularProgress color="inherit" size="25px" />
                    :
                    <Typography textTransform="none" fontSize="18px">
                        {label}
                    </Typography>
            }
        </CustomButton>
    );
}