import { IconData } from "@tipos/types";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Icons: IconData[] = [
    {
        to: "#",
        ariaLabel: "Correo del doctor",
        Icon: <EmailOutlinedIcon />
    },
    {
        to: "#",
        ariaLabel: "Teléfono del doctor",
        Icon: <LocalPhoneOutlinedIcon  />,
    },
    {
        to: "#",
        ariaLabel: "Whatsapp del doctor",
        Icon: <WhatsAppIcon  />,
    }
];

export const Characteristics: string[] = ["Mujer", "Neuróloga", "Buenos Aires", "IOSFA"];

export const Specialties: string[] = ["Mujer", "Neuróloga", "Buenos Aires", "IOSFA"];