import { UserMenuItems } from "@tipos/types";

export const ITEMS: UserMenuItems[] = [
    {
        to: "/paciente/settings",
        ariaLabel: "navegar a la configuración de perfil",
        text: "Perfil"
    },
    {
        to: "/paciente/settings",
        ariaLabel: "navegar a la seccion de configuración",
        text: "Configuración"
    },
    {
        to: "#",
        ariaLabel: "cerrar sesion del usuario",
        text: "Cerrar Sesion"
    }
];