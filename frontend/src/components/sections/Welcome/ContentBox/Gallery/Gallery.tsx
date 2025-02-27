import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";
import { GalleryStyle } from "./GalleryStyle";
import SliderOne from "./img/ImagenSlider-1.webp";
import SliderTwo from "./img/ImagenSlider-2.webp";
import SliderThree from "./img/ImagenSlider-3.webp";

type Image = {
    src: string;
    name: string;
    specialty: string;
}

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
            <Typography fontFamily="Inria Sans Bold" variant="h5" sx={GalleryStyle.galleryTitle}>Nuestros profesionales</Typography>
            <Box sx={GalleryStyle.galleryContImage}>
                <IconButton onClick={() => changeImage("previous")}>
                    <ArrowCircleLeft fontSize="large" />
                </IconButton>
                <Box key="images" sx={GalleryStyle.galleryContDoctors}>
                    {Images.map((image, index: number) => {
                                return (
                                    <>
                                    <Box key={index} sx={{
                                            ...(GalleryStyle.galleryImgText),
                                            opacity: index === indexCurrent ? 1 : 0,
                                            height: index === indexCurrent ? "auto" : 0,
                                            overflow: index === indexCurrent ? "visible" : "hidden",
                                            }}>
                                        
                                        <Box sx={GalleryStyle.galleryImg}>
                                            <img key={index} src={image.src} alt={image.name} />
                                        </Box>
                                        <Typography key={image.name} fontFamily="Inria Sans Bold" variant="body1" >{image.name}</Typography>
                                        <Typography key={image.specialty} fontFamily="Inria Sans" variant="body2" >{image.specialty}</Typography>
                                        
                                    </Box>
                                    </>
                                )
                    })}
                </Box>
                <IconButton onClick={() => changeImage("next")} >
                    <ArrowCircleRight fontSize="large" />
                </IconButton>
            </Box>
        </Box>
        </>
    );
}