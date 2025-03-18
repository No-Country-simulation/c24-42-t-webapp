import { Grid2, List } from "@mui/material";
import { NavigationItemData } from "@tipos/component";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { SideBarStyles } from "./SideBarStyles";
import { CloseSideBarButton } from "./CloseSideBarButton";
import { useState } from "react";

interface Props {
    links: NavigationItemData[];
}

export const SideBar = ({ links }: Props) => {
    const [sideBarSize, setSideBarSize] = useState<string>("190px");

    const handleChangeSize = () => {
        const size = sideBarSize === "190px" ? "53px" : "190px";
        setSideBarSize(size);
    };

    return (
        <Grid2 width={sideBarSize} sx={SideBarStyles.sideBar}>
            <CloseSideBarButton sideBarSize={sideBarSize} handleChangeSize={handleChangeSize} />
            <List sx={SideBarStyles.list}>
                {
                    links.map((item, index) =>
                        <NavigationItem key={index} {...item} />
                    )
                }
            </List>
        </Grid2>
    );
}