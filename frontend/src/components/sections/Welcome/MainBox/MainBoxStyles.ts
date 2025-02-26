import { ObjectStyles } from "@tipos/component";


export const MainBoxStyles: ObjectStyles = {
    mainBox: {
        width: "100%",
        height: "900px",
        backgroundColor: "#DADADA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeBox: {
        backgroundColor: "#CCEFDD",
        boxShadow: "20px 20px 0px #25C274",
        textAlign: "end",
        width: "872px",
        height: "343px",
        padding: "20px 30px 10px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        gap: "2rem",
        position: "relative"
    },
    circle1: {
        content: '""',
        position: "absolute",
        backgroundColor: "#25C274",
        width: "300px",
        height: "300px",
        borderRadius: "9999px",
        filter: "drop-shadow(10px 10px 0px #19A05D)",
        left: "-150px",
        top: "-100px"
    },
    circle2: {
        content: '""',
        position: "absolute",
        backgroundColor: "#4DDB94",
        width: "130px",
        height: "130px",
        borderRadius: "9999px",
        filter: "drop-shadow(10px 10px 0px #25C274)",
        left: "80px",
        top: "-30px",
    },
    title: {
        color: "#185D3B",
        fontWeight: "bold",
        fontSize: "64px",
        margin: "0"
    },
    subtitle: {
        color: "#198751",
        fontSize: "36px",
    }
};
