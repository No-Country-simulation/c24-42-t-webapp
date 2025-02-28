import { Box } from "@mui/material";
import { ContentBoxStyle, WaveOneStyle, WaveTwoStyle } from "./ContentBoxStyle";
import { Details } from "./Details/Details";
import { Gallery } from "./Gallery/Gallery";
import svg from "./img/wavesOpacity.svg";

export const ContentBox = () => {
    return (
        <>
            <img src={svg} alt="Ondas verdes" style={WaveOneStyle} />
            <Box sx={ContentBoxStyle.box}>
                <Gallery />
                <Details />
            </Box>
            <img src={svg} alt="Ondas verdes" style={WaveTwoStyle} />
        </>
    );
}