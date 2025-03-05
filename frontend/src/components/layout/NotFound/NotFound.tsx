import { Box, Container, Typography } from "@mui/material";
import { NotFoundStyles } from "./NotFoundStyles";

export const NotFound = () => {
    return (
        <Container sx={NotFoundStyles.container}>
            <Box>
                <Typography variant="h1" sx={NotFoundStyles.title}>
                    Error 404
                </Typography>
                <Typography  variant="h3" sx={NotFoundStyles.text}>
                    Pagina no encontrada
                </Typography>
            </Box>
        </Container>
    );
}