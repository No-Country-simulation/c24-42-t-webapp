import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { FooterStyle } from "./FooterStyle";

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={FooterStyle.footerContainer}
      maxWidth={false}
    >
      {/*1er Box - Logo y Title*/}
      <Box sx={FooterStyle.footerTitle}>
        <Anchor
          to="#"
          ariaLabel="logo de la pagina web"
        >
          MedicalAppointment {/* Appointment iría verde oscuro, falta logo */}
        </Anchor>
        <Typography variant="body2" color="textSecondary">
          © No Country 2025
        </Typography>
      </Box>

      {/* 2do Box - Secciones */}
      <Box sx={FooterStyle.footerLinks}>
        <Box sx={FooterStyle.footerLinksSection}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={FooterStyle.footerLinksSectionTitle}
          >
            NOSOTROS
          </Typography>
          <Anchor to="#" ariaLabel="navegar a seccion quienes somos">¿Quiénes somos?</Anchor>
        </Box>

        <Box sx={FooterStyle.footerLinksSection}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={FooterStyle.footerLinksSectionTitle}
          >
            SERVICIOS
          </Typography>
          <Anchor to="#" ariaLabel="navegar a la seccion de agendar cita">Agendá una cita</Anchor>
          <Anchor to="#" ariaLabel="navegar a la seccion consultar sobre nuestros medicos">Consulta sobre nuestros médicos</Anchor>
          <Anchor to="#" ariaLabel="navegar a la seccion ver tus citas">Ver tus citas</Anchor>
        </Box>

        <Box sx={FooterStyle.footerLinksSection}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={FooterStyle.footerLinksSectionTitle}
          >
            RECURSOS
          </Typography>
          <Anchor to="#" ariaLabel="navegar a la seccion de preguntas frecuentes">Preguntas frecuentes</Anchor>
        </Box>
      </Box>

      {/* 3er Box - Redes Sociales */}
      <Box sx={FooterStyle.footerSocial}>
        <Typography variant="subtitle1" fontWeight="bold">
          ¡SEGUINOS!
        </Typography>
        <Box sx={FooterStyle.footerIcons}>
          {/* Crear clase footer-icon que envuelva cada ícono en un círculo verde o editar el componente de cada ícono con MUI */}
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
