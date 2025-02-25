import { Box } from "@mui/material";
import { Details } from "./Details/Details";
import { Gallery } from "./Gallery/Gallery";
import { ContentBoxStyle } from "./ContentBoxStyle";

export const ContentBox = () => {
    return (
        <Box sx={ContentBoxStyle.box}>
            <Gallery />
            <Details />
        </Box>
    );
}