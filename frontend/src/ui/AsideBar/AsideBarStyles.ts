import { SxProps } from "@mui/material";
import { ObjectStyles } from "@tipos/component";
import { AnchorStyles } from "@ui/Anchor/AnchorStyles";
import { CSSProperties } from "react";

export const AsideBarStyles: ObjectStyles = {
    asideBar: {
        backgroundColor: "#484c4a",
        overflow: "hidden"
    },
    button: {
        marginTop: "0.5rem",
        padding: "10px",
        width: "100%",
        borderRadius: "0",
    },
    list: {
        padding: "10px"
    }
};

export const NavigationItemStyles: SxProps = {
    marginBottom: "0.5rem",
    paddingLeft: "4.5px",
    overflow: "hidden"
}

export const NavigationItemSelectedStyles: SxProps = {
    backgroundColor: "#198751",
    color: "#f1f1f1",
    borderRadius: "10px",
    fontSize: "1rem",
    ...NavigationItemStyles
};

export const NavigationItemStylesCSS: CSSProperties = {
    ...AnchorStyles.anchor,
    color: "#f1f1f1"
};