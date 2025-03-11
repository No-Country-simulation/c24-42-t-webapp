import { ObjectStyles } from "@tipos/component";

const TabStyles = {
    height: "100%",
    width: "100px",
    padding: "1em",
    fontSize: "0.8em",
    backgroundColor: "#198751",
    color: "#f1f1f1",
    borderRadius: "0",
    textTransform: "none"
};

export const AdminMainContentStyles: ObjectStyles = {
    tabContainer: {
        height: "40px",
        position: "relative"
    },
    tab: {
        ...TabStyles
    },
    startTab: {
        ...TabStyles,
        borderTopLeftRadius: "10px"
    },
    endTab: {
        ...TabStyles,
        borderTopRightRadius: "10px",
        "::after": {
            content: "''",
            position: "absolute",
            height: "20px",
            width: "20px",
            backgroundColor: "#fff",
            zIndex: "10",
            right: "-20px",
            borderBottomLeftRadius: "10px",
            bottom: "0"
        },
        "::before": {
            content: "''",
            position: "absolute",
            height: "20px",
            width: "20px",
            backgroundColor: "#198751",
            zIndex: "9",
            right: "-20px",
            bottom: "0"
        }
    }
};
