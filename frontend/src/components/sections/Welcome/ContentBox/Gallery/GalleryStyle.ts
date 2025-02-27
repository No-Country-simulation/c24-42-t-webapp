import { SxProps } from "@mui/material";

export const GalleryStyle: Record<string, SxProps> = {
    galleryContainer: {
        position: "relative",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    galleryTitle: {
        color: "#fff",
        textAlign: "center",
    },
    galleryContImage: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "392px",
    },
    galleryContDoctors: {
        postion: "relative",
    },
    galleryImgText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        transition: "opacity .2s ease-in-out",
    },
    galleryImg: {
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        overflow: "hidden",
    },
}