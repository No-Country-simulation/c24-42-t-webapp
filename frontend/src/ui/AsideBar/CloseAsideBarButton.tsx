import { IconButton } from "@mui/material";
import { AsideBarStyles } from "./AsideBarStyles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    asideBarSize: number
    handleChangeSize: () => void
}

export const CloseAsideBarButton = ({ asideBarSize, handleChangeSize }: Props) => {
    return (
        <IconButton sx={AsideBarStyles.button} onClick={handleChangeSize}>
            {
                asideBarSize === 2
                ? <ArrowBackIosIcon sx={{ color: "#f1f1f1" }}/>
                : <ArrowForwardIosIcon sx={{ color: "#f1f1f1" }}/>
            }
        </IconButton>
    );
}