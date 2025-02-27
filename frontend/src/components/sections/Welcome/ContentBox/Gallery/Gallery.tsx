import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Image } from "@tipos/types";
import { useState } from "react";
import { GalleryStyle, imgStyle } from "./GalleryStyle";
import SliderOne from "./img/ImagenSlider-1.webp";
import SliderTwo from "./img/ImagenSlider-2.webp";
import SliderThree from "./img/ImagenSlider-3.webp";

export const Gallery = () => {
    const [indexCurrent, setIndex] = useState<number>(0)
    const Images: Image[] = [
        { src: SliderOne, name: "Jorge Swong", specialty: "Endocrinólogo"},
        { src: SliderTwo, name: "Miranda Preslie", specialty: "Dermatóloga"},
        { src: SliderThree, name: "Milagros Fernandez", specialty: "Oftalmóloga"},
    ];
    const quantity: number = Images.length;

    const changeImage = (param: string) => {
        if(param === "previous"){
            setIndex(indexCurrent ==  0 ? quantity - 1 : indexCurrent - 1);
        } else{
            setIndex(indexCurrent == quantity - 1 ? 0 : indexCurrent + 1)
        }
    }

    return(
        <>
        <Box key="container" sx={GalleryStyle.galleryContainer}>
            <Box>
                <Typography fontFamily="Inria Sans Bold" variant="h4" sx={GalleryStyle.galleryTitle}>Nuestros profesionales</Typography>
            </Box>
            <Box sx={GalleryStyle.galleryContImage}>
                <IconButton onClick={() => changeImage("previous")}>
                    <ArrowCircleLeft sx={GalleryStyle.galleryIcon} fontSize="large" />
                </IconButton>
                <Box key="images" sx={GalleryStyle.galleryContDoctors}>
                    {Images.map((image, index: number) => {
                        return (
                            <Box key={index} sx={{
                                ...GalleryStyle.galleryImgText,
                                opacity: index === indexCurrent ? 1 : 0,
                                height: index === indexCurrent ? "auto" : 0,
                                overflow: index === indexCurrent ? "visible" : "hidden",
                            }}>
                                        
                                <Box sx={GalleryStyle.galleryImg}>
                                    <img key={index} src={image.src} alt={image.name} style={imgStyle}
                                    />
                                </Box>
                                <Box sx={GalleryStyle.textBox}>
                                    <Typography key={image.name} fontFamily="Inria Sans Bold" variant="body1" >{image.name}</Typography>
                                    <Typography key={image.specialty} fontFamily="Inria Sans" variant="body2" >{image.specialty}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <IconButton onClick={() => changeImage("next")} >
                    <ArrowCircleRight sx={GalleryStyle.galleryIcon} fontSize="large" />
                </IconButton>
            </Box>
        </Box>
        </>
    );
}