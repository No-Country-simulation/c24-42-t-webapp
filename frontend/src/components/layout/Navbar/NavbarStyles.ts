import { SxProps } from "@mui/material";
import { ObjectStyles } from "@tipos/component";

const DisplayFlexStyles: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

export const NavbarStyles: ObjectStyles = {
    nav: {
        backgroundColor: "#F1F1F1",
        padding: "1.5rem",
        width: "100%",
        height: "80px",
        borderBottom: "1px solid #c1c1c1",
        ...DisplayFlexStyles
    },
    logo: {
        width: "70px",
        height: "70px",
        backgroundColor: "#4DDB94",
        border: "20px solid #25C274",
        borderRadius: "9999px"
    },
    items: {
        ...DisplayFlexStyles,
        gap: "1rem"
    }
};
