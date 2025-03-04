import { ObjectStyles } from "@tipos/component";

export const SearchBarStyles: ObjectStyles = {
    container: {
        gap: "0.5rem",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
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