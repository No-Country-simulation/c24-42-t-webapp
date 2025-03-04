import { ObjectStyles } from "@tipos/component";
import { CSSProperties } from "react";

export const GalleryStyle: ObjectStyles = {
    galleryContainer: {
        position: "relative",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem"
    },
    galleryTitle: {
        color: "#fff",
        textAlign: "center",
        height: "100px"
    },
    galleryContImage: {
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        minWidth: "392px",
    },
    galleryContDoctors: {
        postion: "relative",
    },
    galleryImgText: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        color: "#fff",
        transition: "opacity .2s ease-in-out",
    },
    galleryImg: {
        width: "300px",
        height: "300px"
    },
    galleryIcon: {
        color: "#fff"
    },
    textBox: {
        textAlign: "center"
    }
}

export const imgStyle: CSSProperties = {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover"
}