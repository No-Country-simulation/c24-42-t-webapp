import { ObjectStyles } from "@tipos/component";

export const TableHeaderStyles: ObjectStyles = {
    container: {
        backgroundColor: "#198751",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3em",
        width: "100%",
        padding: "0 1rem"
    },
    counter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1.5rem",
        height: "1.5rem",
        color: "#198751",
        padding: "auto",
        borderRadius: "5px",
        backgroundColor: "#f1f1f1"
    },
    status: {
        borderRadius: "5px",
        minWidth: "150px",
        textAlign: "center"
    }
};