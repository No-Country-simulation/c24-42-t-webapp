import { ObjectStyles } from "@tipos/component";

export const SearchBarStyles: ObjectStyles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
    },
    label: {
        fontWeight: "bold",
        color: "#726969"
    },
    input: {
        width: "100%",
        height: "100%",
        minHeight: "100%",
        borderRight: "none"
    },
    button: {
        height: "56px",
        boxShadow: "none"
    }
}