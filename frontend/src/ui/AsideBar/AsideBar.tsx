import { Grid2, List } from "@mui/material";
import { NavigationItemData } from "@tipos/component";
import { NavigationItem } from "./NavigationItem";
import { AsideBarStyles } from "./AsideBarStyles";
import { CloseAsideBarButton } from "./CloseAsideBarButton";
import { useState } from "react";

interface Props {
    links: NavigationItemData[];
}

export const AsideBar = ({ links }: Props) => {
    const [asideBarSize, setAsideBarSize] = useState<number>(2);

    const handleChangeSize = () => {
        const size = asideBarSize === 2 ? 0.5 : 2;
        setAsideBarSize(size);
    };

    return (
        <Grid2 size={asideBarSize} sx={AsideBarStyles.asideBar}>
            <CloseAsideBarButton asideBarSize={asideBarSize} handleChangeSize={handleChangeSize} />
            <List sx={AsideBarStyles.list}>
                {
                    links.map((item, index) =>
                        <NavigationItem key={index} {...item} />
                    )
                }
            </List>
        </Grid2>
    );
}