import { SxProps } from "@mui/material";
import { ObjectStyles } from "@tipos/component";
import { AnchorStyles } from "@ui/Anchor/AnchorStyles";
import { CSSProperties } from "react";

export const AsideBarStyles: ObjectStyles = {
    asideBar: {
        backgroundColor: "#198751",
        overflow: "hidden"
    },
    button: {
        marginTop: "0.5rem",
        padding: "10px",
        width: "100%",
        borderRadius: "0",
        justifyContent: "end"
    },
    list: {
        padding: "10px"
    }
};

export const NavigationItemStyles: SxProps = {
    marginBottom: "0.5rem",
    paddingLeft: "4.5px"
}

export const NavigationItemSelectedStyles: SxProps = {
    backgroundColor: "#f1f1f1",
    color: "#198751",
    borderRadius: "10px",
    fontSize: "1rem",
    ...NavigationItemStyles
};

export const NavigationItemStylesCSS: CSSProperties = {
    ...AnchorStyles.anchor,
    color: "#f1f1f1"
};