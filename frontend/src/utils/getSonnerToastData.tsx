import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AlertMetaData, TypeAlert } from '@tipos/component';

const ICONS_MAPPER: Record<TypeAlert, AlertMetaData> = {
    "error": {
        bgColor: "#ff2323",
        icon: <InfoIcon />
    },
    "success": {
        bgColor: "#198751",
        icon: <CheckCircleIcon />
    }
}

export function getSonnerToastData(type: TypeAlert): AlertMetaData {
    return ICONS_MAPPER[type];
}