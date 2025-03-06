import { Avatar, Box, IconButton, Popover } from "@mui/material";
import { Anchor } from "@ui/Anchor/Anchor";
import { MouseEvent, useState } from "react";
import { UserMenuStyles } from "./UserMenuStyles";
import { ITEMS } from "./ITEMS";

export const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar alt="User" aria-describedby={id} />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box sx={UserMenuStyles.userMenu}>
                    {
                        ITEMS.map(({ ariaLabel, text, to }) => (
                            <Box sx={UserMenuStyles.link}>
                                <Anchor ariaLabel={ariaLabel} to={to}>{text}</Anchor>
                            </Box>
                        ))
                    }
                </Box>
            </Popover>
        </>
    );
}