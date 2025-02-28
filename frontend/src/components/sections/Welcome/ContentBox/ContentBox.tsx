import { Box } from "@mui/material";
import { Details } from "./Details/Details";
import { Gallery } from "./Gallery/Gallery";
import { ContentBoxStyle } from "./ContentBoxStyle";
import svg from "./img/wavesOpacity.svg";

export const ContentBox = () => {
    return (
        <>
        <img src={svg} alt="Ondas verdes" style={{
                                    width: "100%",
                                    transform: "rotate(180deg)",
                                    display: "block",
                                    backgroundColor: "#dadada",
                                    }}/>
        <Box sx={ContentBoxStyle.box}>
            <Gallery />
            <Details />
        </Box>
        <img src={svg} alt="Ondas verdes" style={{
                                    width: "100%",
                                    backgroundColor: "#f1f1f1",
                                    display: "block",
                                    }}/>
        </>
    );
}