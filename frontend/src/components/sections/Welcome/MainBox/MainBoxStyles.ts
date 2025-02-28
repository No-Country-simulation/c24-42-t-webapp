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
        textAlign: "end",
        width: "800px",
        height: "400px",
        padding: "20px 80px 10px 20px",
        borderRadius: "39% 62% 50% 50% / 26% 56% 42% 72%",
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
        left: "-150px",
        top: "-100px",
        borderRadius: "78% 47% 59% 58% / 65% 55% 45% 48%",
    },
    circle2: {
        content: '""',
        position: "absolute",
        backgroundColor: "#4DDB94",
        width: "130px",
        height: "130px",
        left: "80px",
        top: "-30px",
        borderRadius: "72% 75% 89% 71% / 90% 56% 89% 76%",
    },
    title: {
        color: "#185D3B",
        fontWeight: "bold",
        fontSize: "56px",
        margin: "0",
        lineHeight: "1"
    },
    subtitle: {
        color: "#198751",
        fontSize: "30px",
    }
};
