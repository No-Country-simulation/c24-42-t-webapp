import { ObjectStyles } from "@tipos/component";
import { CSSProperties } from "react";

export const NavigationItemStyles: ObjectStyles = {
    item: {
        marginBottom: "0.3rem",
        paddingLeft: "4.5px",
        overflow: "hidden"
    },
    itemSelected: {
        backgroundColor: "#198751",
        color: "#f1f1f1",
        borderRadius: "10px",
        fontSize: "0.8rem",
        marginBottom: "0.3rem",
        paddingLeft: "4.5px",
        overflow: "hidden"
    },
    textContainer: { marginLeft: "0.5rem" },
    text: { fontWeight: "bold", whiteSpace: "nowrap" }
};

export const LinkCSS: CSSProperties = {
    display: "flex",
    alignItems: "center",
    color: "#198751",
    textDecoration: "none",
};