import { ListItem, ListItemText, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";
import { NavigationItemSelectedStyles, NavigationItemStyles, NavigationItemStylesCSS } from "./AsideBarStyles";
import { NavigationItemData } from "@tipos/component";

export const NavigationItem = ({ ariaLabel, titulo, to, icon }: NavigationItemData) => {
    const pathname = useLocation().pathname;
    const isSelected = pathname === to;
    return isSelected
        ? (
            <ListItem sx={NavigationItemSelectedStyles}>
                {icon}
                <ListItemText sx={{ margin: "0 0 0 5px" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {titulo}
                    </Typography>
                </ListItemText>
            </ListItem>
        )
        : (
            <ListItem sx={NavigationItemStyles}>
                {icon}
                <Link aria-label={ariaLabel} to={to} style={NavigationItemStylesCSS}>
                    {titulo}
                </Link>
            </ListItem>
        );
}