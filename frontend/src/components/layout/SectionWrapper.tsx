import { Grid2 } from "@mui/material";
import { NavigationItemData } from "@tipos/component";
import { SideBar } from "@ui/SideBar/SideBar";
import { ReactNode } from "react";

interface Props {
    sideBarItems: NavigationItemData[]
    children: ReactNode
}

export const SectionWrapper = ({ sideBarItems, children }: Props) => {
    return (
        <Grid2 container sx={{
            width: "100%",
            minHeight: "calc(100vh - 80px)",
            backgroundColor: "#f1f1f1"
        }}>
            <SideBar links={sideBarItems} />
            <Grid2 size="grow" padding="2em">
                {children}
            </Grid2>
        </Grid2>
    );
}