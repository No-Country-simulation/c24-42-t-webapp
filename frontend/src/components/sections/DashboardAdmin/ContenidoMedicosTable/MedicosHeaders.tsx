import { TableCell } from "@mui/material";

const headers = [
    {
        id: "1",
        title: "DNI",
    },
    {
        id: "2",
        title: "Nombre",
    },
    {
        id: "3",
        title: "Fecha de nacimiento",
    },
    {
        id: "4",
        title: "",
    }
];

export const MedicosHeaders = () => {
    return (
        <>
            {
                headers.map((item) => (
                    <TableCell key={item.id} align="center">{item.title}</TableCell>
                ))
            }
        </>
    );
}