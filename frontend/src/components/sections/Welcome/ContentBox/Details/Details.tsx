import { Box, Typography, IconButton } from "@mui/material";
import { DetailsStyle } from "./DetailsStyle";
import StethoscopeIcon from "./StethoscopeIcon";
import HospitalIcon from "./HospitalIcon";
import CoinIcon from "./CoinIcon";

export const Details = () => {
  return (
    <Box sx={DetailsStyle.rightContainer}>
      <Typography variant="h4" sx={DetailsStyle.sectionTitle}>
        Nuestra prioridad es la salud de nuestros clientes
      </Typography>

      <Box sx={DetailsStyle.sectionContainer}>
        <Box sx={DetailsStyle.iconContainer}>
          <IconButton>
            <HospitalIcon />
          </IconButton>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            Modernización clínica
          </Typography>
          <Typography variant="body1" color="white">
            Accede a una vasta lista de profesionales de la salud, agenda tu
            cita en minutos, chatea con tu médico de cabecera, nos adecuamos a
            tus necesidades.
          </Typography>
        </Box>
      </Box>

      <Box sx={DetailsStyle.sectionContainer}>
        <Box sx={DetailsStyle.iconContainer}>
          <IconButton>
            <CoinIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            Sin comisiones
          </Typography>
          <Typography variant="body1" color="white">
            No cobramos comisiones por agendar una cita médica, lo único que
            debes abonar es la cita con el médico que se adecúe a tus
            necesidades.
          </Typography>
        </Box>
      </Box>

      <Box sx={DetailsStyle.sectionContainer}>
        <Box sx={DetailsStyle.iconContainer}>
          <IconButton>
            <StethoscopeIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            Equipo de profesionales
          </Typography>
          <Typography variant="body1" color="white">
            Contamos con un equipo médico profesional que fue formado en
            universidades de prestigio y verificados por nuestros asistentes
            administrativos.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
