import { ListItem, ListItemText, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";
import { NavigationItemData } from "@tipos/component";
import { NavigationItemStyles, LinkCSS } from "./NavigationItemStyle";

export const NavigationItem = ({ ariaLabel, titulo, to, icon }: NavigationItemData) => {
    const pathname = useLocation().pathname;
    const isSelected = pathname === to;
    return isSelected
        ? (
            <ListItem sx={NavigationItemStyles.itemSelected}>
                {icon}
                <ListItemText sx={NavigationItemStyles.textContainer}>
                    <Typography variant="body2" sx={NavigationItemStyles.text}>
                        {titulo}
                    </Typography>
                </ListItemText>
            </ListItem>
        )
        : (
            <ListItem sx={NavigationItemStyles.item}>
                <Link aria-label={ariaLabel} to={to} style={LinkCSS}>
                    {icon}
                    <ListItemText sx={NavigationItemStyles.textContainer}>
                        <Typography variant="body2" sx={NavigationItemStyles.text}>
                            {titulo}
                        </Typography>
                    </ListItemText>
                </Link>
            </ListItem>
        );
}