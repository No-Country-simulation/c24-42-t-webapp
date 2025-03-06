import Close from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { ReactNode } from "react";
import { ModalContentStyle } from "./CustomModalStyle";
import ErrorBoundary from '@components/layout/ErrorBoundary';

export const ModalContent = ({ children }: { children: ReactNode }) => {
    const modalDataTitle = useModalStore((state) => state.modalData.title);
    const closeModal = useModalStore((state) => state.closeModal);
    const handleClose = () => closeModal();
    return (
        <Box sx={ModalContentStyle.container}>
            <Box sx={ModalContentStyle.header}>
                <Box sx={ModalContentStyle.closeButton} >
                    <IconButton onClick={handleClose} aria-label="cerrar modal">
                        <Close />
                    </IconButton>
                </Box>
                <Typography fontFamily="Inria Sans Bold" sx={ModalContentStyle.title}>{modalDataTitle}</Typography>
            </Box>
            <Box sx={ModalContentStyle.body}>
                <ErrorBoundary fallback={<Typography variant='body2'>Ocurrio un error al mostrar el modal</Typography>}>
                    {children}
                </ErrorBoundary>
            </Box>
        </Box>
    );
}