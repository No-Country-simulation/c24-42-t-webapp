import { CircularProgress, Typography } from "@mui/material";
import { CustomError } from "@tipos/types";
import { CustomButton } from "@ui/CustomButton/CustomButton";

interface Props {
    loading: boolean
    error: CustomError
    onSubmit: () => Promise<void>
}

export const SubmitMedicamentoButton = ({ error, loading, onSubmit }: Props) => {
    return (
        <CustomButton type="submit" onClick={onSubmit} disabled={error !== null && error?.type === "input"} fullWidth>
            {
                loading
                    ?
                    <CircularProgress color="inherit" size="25px" />
                    :
                    <Typography textTransform="none" fontSize="18px">
                        Agregar Medicamento
                    </Typography>
            }
        </CustomButton>
    );
}