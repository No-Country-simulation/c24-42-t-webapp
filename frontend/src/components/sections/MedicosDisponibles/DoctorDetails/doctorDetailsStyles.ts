import { ObjectStyles } from "@tipos/component";

export const DoctorDetailsStyles: ObjectStyles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        minHeight: "80vh",
        width: "50%",
        backgroundColor: "#fff"
    },
    left: {
        backgroundColor: "#dcdcdc",
        minHeight: "90vh",
        flexGrow: 2,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    right: {
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexGrow: 5,
        padding: "30px",
    },
    avatarContainer: {
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        border: "1px solid #ababab",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
    },
    socialCont: {
        width: "250px",
        display: "flex",
        justifyContent: "space-evenly",
    },
    buttonSocial: {
        height: "50px",
        width: "40px",
        backgroundColor: "#198751",
        borderRadius: "none",
        color: "#fff"
    },
    contTypo: {
        padding: "5px",
        maxHeight: "40px",
        width: "auto",
        backgroundColor: "#DDFBEB",
        borderRadius: "5px",
        border: "2px solid #198751",
    },
    specialtyCont: {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between", 
        Height: "100px"
    }
};