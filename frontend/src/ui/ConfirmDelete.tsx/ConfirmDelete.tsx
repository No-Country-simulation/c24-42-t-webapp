import { Box, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { CustomError } from "@tipos/types";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { SubmitButton } from "@ui/SubmitButton/SubmitButton";

interface Props {
    buttonLabel: string
    description: string
    loading: boolean
    error: CustomError
    handleClick: () => Promise<void>
}

export const ConfirmDelete = ({ buttonLabel, description, loading, error, handleClick }: Props) => {
    const closeModal = useModalStore(state => state.closeModal);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Typography variant="body1">
                {description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <SubmitButton loading={loading} error={error} label={buttonLabel} handleOnClick={handleClick} />
                <CustomButton onClick={() => closeModal()} sx={{ backgroundColor: "#c1c1c1", fontSize: "18px", textTransform: "none" }}>
                    Cancelar
                </CustomButton>
            </Box>
        </Box>
    );
}