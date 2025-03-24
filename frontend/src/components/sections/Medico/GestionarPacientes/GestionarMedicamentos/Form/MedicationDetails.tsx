import { Container, Grid2, Typography } from "@mui/material";
import { useModalStore } from "@store/modal.store";
import { MedicacionData } from "@tipos/backendTypes";
import { formatDate } from "@utils/date/formatDate";

export const MedicationDetails = () => {
    const { dosage, endDate, startDate, frequency, medicationName, notes }: MedicacionData = useModalStore(state => state.modalData.data).itemData;

    const DETAILS = [
        {
            label: "Dosis",
            value: dosage
        },
        {
            label: "Frecuencia",
            value: frequency
        },
        {
            label: "Desde",
            value: formatDate(startDate, "yyyy-MM-dd", "dd/MM/yyyy")
        },
        {
            label: "Hasta",
            value: formatDate(endDate, "yyyy-MM-dd", "dd/MM/yyyy")
        },
        {
            label: "Notas adicionales",
            value: notes
        }
    ];

    return (
        <Container sx={{ width: "400px", marginBottom: "1rem" }}>
            <Grid2 container rowSpacing={1}>
                <Grid2 size={12}>
                    <Typography
                        variant="body1"
                        color="primary"
                        fontSize="1.5em"
                        fontWeight="bold"
                        letterSpacing="0.1em"
                    >
                        {medicationName}
                    </Typography>
                </Grid2>
                {
                    DETAILS.map(({ label, value }) => (
                        <>
                            <Grid2 size={6}>
                                <Typography color="grey">
                                    {label}
                                </Typography>
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography color="primary">
                                    {value}
                                </Typography>
                            </Grid2>
                        </>
                    ))
                }
            </Grid2>
        </Container>
    );
}