import { ObjectStyles } from "@tipos/component";

export const CustomTableStyles: ObjectStyles = {
    container: {
        borderTopLeftRadius: "0"
    },
    header: {
        backgroundColor: "#198751",
        borderBottom: "1px solid #c1c1c1",
        "& th": {
            color: "#f1f1f1",
            padding: "1em"
        }
    },
    body: {
        "& td": {
            padding: "0.3em",
        }
    }
};
