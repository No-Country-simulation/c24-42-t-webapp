import { Grid2 } from "@mui/material";
import { NavigationItemData } from "@tipos/component";
import { AsideBar } from "@ui/AsideBar/AsideBar";
import { ReactNode } from "react";

interface Props {
    asideBarItems: NavigationItemData[]
    children: ReactNode
}

export const SectionWrapper = ({ asideBarItems, children }: Props) => {
    return (
        <Grid2 container sx={{
            width: "100%",
            minHeight: "calc(100vh - 80px)",
            backgroundColor: "#f1f1f1"
        }}>
            <AsideBar links={asideBarItems} />
            <Grid2 size="grow" padding="2em">
                {children}
            </Grid2>
        </Grid2>
    );
}