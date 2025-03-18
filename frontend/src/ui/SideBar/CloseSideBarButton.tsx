import { IconButton } from "@mui/material";
import { SideBarStyles } from "./SideBarStyles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    sideBarSize: string
    handleChangeSize: () => void
}

export const CloseSideBarButton = ({ sideBarSize, handleChangeSize }: Props) => {
    const isExpanded = sideBarSize === "190px";
    return (
        <IconButton sx={{
            ...SideBarStyles.button,
            justifyContent: isExpanded ? "end" : "center"
        }} onClick={handleChangeSize}>
            {
                isExpanded
                    ? <>
                        <ArrowBackIosIcon sx={SideBarStyles.closeButton} />
                        <ArrowBackIosIcon sx={SideBarStyles.closeButton} />
                        <ArrowBackIosIcon sx={SideBarStyles.closeButton} />
                    </>
                    : <ArrowForwardIosIcon sx={SideBarStyles.closeButton} />
            }
        </IconButton>
    );
}