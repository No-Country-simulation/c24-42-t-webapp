import { Container, Typography } from "@mui/material";

export const ErrorMessage = () => {
    return (
        <Container sx={{ textAlign: "center", mt: "2rem" }}>
            <Typography variant="h4" color="error" fontWeight="bold">
                Ocurrio un error desconocido
            </Typography>
        </Container>
    );
}