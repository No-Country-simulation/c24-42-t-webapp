import { NavigationItemData } from "@tipos/component";
import HomeIcon from '@mui/icons-material/Home';

export const ADMIN_LINKS: NavigationItemData[] = [
    {
        icon: <HomeIcon />,
        titulo: "Inicio",
        ariaLabel: "navegar al inicio del dashboard",
        to: "/admin/dashboard"
    }
];
