import { Box } from "@mui/material";
import { ObjectStyles } from "@tipos/component";

export const MainBoxStyles: ObjectStyles = {
    mainBox: {
        width: "100%",
        height: "calc(100vh - 90px)",
        backgroundColor: "#DADADA"
    }
}

export const MainBox = () => {
    return(
        <Box sx={MainBoxStyles.mainBox}>
        </Box>
    );
}