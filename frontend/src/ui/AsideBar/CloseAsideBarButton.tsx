import { IconButton } from "@mui/material";
import { AsideBarStyles } from "./AsideBarStyles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    asideBarSize: string
    handleChangeSize: () => void
}

export const CloseAsideBarButton = ({ asideBarSize, handleChangeSize }: Props) => {
    const isExpanded = asideBarSize === "190px";
    return (
        <IconButton sx={{
            ...AsideBarStyles.button,
            justifyContent: isExpanded ? "end" : "center"
        }} onClick={handleChangeSize}>
            {
                isExpanded
                    ? <>
                        <ArrowBackIosIcon sx={AsideBarStyles.closeButton} />
                        <ArrowBackIosIcon sx={AsideBarStyles.closeButton} />
                        <ArrowBackIosIcon sx={AsideBarStyles.closeButton} />
                    </>
                    : <ArrowForwardIosIcon sx={AsideBarStyles.closeButton} />
            }
        </IconButton>
    );
}