import { Facebook, Instagram, Language } from "@mui/icons-material";
import { IconData } from "@tipos/types";
import { FooterStyle } from "../FooterStyle";

export const ICONS: IconData[] = [
    {
        to: "https://www.facebook.com/nocountrytech/",
        ariaLabel: "ir a la cuenta de NoCountry en facebook",
        Icon: <Facebook sx={FooterStyle.footerIcons} />
    },
    {
        to: "https://www.instagram.com/nocountry.tech/",
        ariaLabel: "ir a la cuenta de NoCountry en Instagram",
        Icon: <Instagram sx={FooterStyle.footerIcons} />,
    },
    {
        to: "https://www.nocountry.tech",
        ariaLabel: "ir al sitio web de NoCountry",
        Icon: <Language sx={FooterStyle.footerIcons} />,
    }
];
