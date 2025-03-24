import { ObjectStyles } from '@tipos/component';

export const CustomModalStyle: ObjectStyles = {
    modalLayout: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        position: 'absolute',
        bgcolor: '#f1f1f1',
        borderRadius: "20px",
    }
};

export const ModalContentStyle: ObjectStyles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        padding: "0 20px",
        textAlign: "center",
        lineHeight: "1.5rem"
    },
    title: {
        color: "#185D3B",
        fontSize: "1.7rem"
    },
    closeButton: {
        mt: "0.5rem",
        padding: "0 20px",
        display: "flex",
        justifyContent: "end"
    },
    body: {
        padding: "20px",
    }
};