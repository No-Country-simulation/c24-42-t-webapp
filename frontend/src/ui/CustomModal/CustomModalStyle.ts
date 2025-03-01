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
        padding: "25px 20px"
    }
};

export const ModalContentStyle: ObjectStyles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        justifyContent: "center"
    },
    title: {
        color: "#185D3B",
        fontSize: "35px",
    },
    closeButton: {
        position: "absolute",
        right: "10px",
        top: "10px"
    },
    body: {
        padding: "20px",
        position: "relative"
    }
};