import { ObjectStyles } from "@tipos/component";

export const TabStyles: ObjectStyles = {
    container: {
        display: "flex",
        gap: "1rem",
        padding: "0 0.5em",
    },
    tab: {
        textTransform: "none",
        borderRadius: "0",
        fontWeight: "bold",
        borderBottom: "none",
        backgroundColor: "#c1c1c150",
        color: "#198751",
        padding: "0.4em 1em",
        clipPath: "polygon(90% 0, 100% 30%, 100% 100%, 0 100%, 0 0)",
    }
};
