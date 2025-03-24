import { Box, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { CustomError } from "@tipos/types";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { SubmitButton } from "@ui/SubmitButton/SubmitButton";

interface Props {
    description: string
    loading: boolean
    error: CustomError
    handleClick: () => Promise<void>
}

export const ConfirmDelete = ({ description, loading, error, handleClick }: Props) => {
    const closeModal = useModalStore(state => state.closeModal);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Typography variant="body1" fontSize="1.2em" sx={{ color: "#726969"}}>
                {description}
            </Typography>
            <Box sx={{ alignSelf: "end", display: "flex", gap: "0.5rem" }}>
                <CustomButton onClick={() => closeModal()} color="secondary">
                    <Typography textTransform="none" fontSize="18px">
                        Cancelar
                    </Typography>
                </CustomButton>
                <SubmitButton loading={loading} error={error} label={"Eliminar"} handleOnClick={handleClick} />
            </Box>
        </Box>
    );
}