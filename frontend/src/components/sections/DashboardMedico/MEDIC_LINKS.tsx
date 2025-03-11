import { NavigationItemData } from "@tipos/component";
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const MEDIC_LINKS: NavigationItemData[] = [
    {
        to: "/medico/dashboard",
        ariaLabel: "navegar al inicio del dashboard",
        titulo: "Inicio",
        icon: <HomeIcon />
    },
    {
        to: "/medico/historial-citas",
        ariaLabel: "navegar al historial de citas del medico",
        titulo: "Historial de citas",
        icon: <EventNoteIcon />
    },
    {
        to: "/medico/historial-medico-pacientes",
        ariaLabel: "navegar al historial medico de los pacientes",
        titulo: "Gestionar Pacientes",
        icon: <PermContactCalendarIcon />
    },
    {
        to: "/medico/agenda",
        ariaLabel: "navegar al seccion agenda del medico",
        titulo: "Gestionar Agenda",
        icon: <DateRangeIcon />
    }
];