import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { useModalStore } from '@store/modal.store';
import { ReactNode } from 'react';
import { CustomModalStyle } from './CustomModalStyle';
import { ModalContent } from './ModalContent';

export default function CustomModal({ children }: { children: ReactNode }) {
    const showModal = useModalStore((state) => state.modalData.showModal);
    const closeModal = useModalStore((state) => state.closeModal);

    if (!showModal) return;

    const onClose = () => closeModal();

    return (
        <div>
            <Modal
                aria-labelledby="titulo de ventana Modal"
                aria-describedby="ventana Modal"
                open={showModal}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}
                sx={CustomModalStyle.modalLayout}
            >
                <Fade in={showModal}>
                    <Box sx={CustomModalStyle.modalBox}>
                        <ModalContent>
                            {children}
                        </ModalContent>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
