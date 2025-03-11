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
    const [asideBarSize, setAsideBarSize] = useState<string>("190px");

    const handleChangeSize = () => {
        const size = asideBarSize === "190px" ? "53px" : "190px";
        setAsideBarSize(size);
    };

    return (
        <Grid2 width={asideBarSize} sx={AsideBarStyles.asideBar}>
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