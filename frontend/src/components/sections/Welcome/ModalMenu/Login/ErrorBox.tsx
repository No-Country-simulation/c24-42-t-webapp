import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import { FormStyle } from './LoginStyles';

export const ErrorBox = () => {
    return (
        <Box sx={FormStyle.errorBox}>
            <InfoIcon color='primary' fontSize='large'/>
            <Typography variant="h6">
                No se pudo iniciar sesión, intentelo nuevamente más tarde
            </Typography>
        </Box>
    );
}