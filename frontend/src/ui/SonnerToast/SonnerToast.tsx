import { Box, IconButton, Typography } from '@mui/material';
import { ToastProps } from '@tipos/component';
import { toast } from 'sonner';
import { SonnerToastStyles } from './SonnerToastStyles';
import CloseIcon from '@mui/icons-material/Close';
import { getSonnerToastData } from '@utils/getSonnerToastData';

export function SonnerToast(props: ToastProps) {
    const { id, title, description, type } = props;
    const metadata = getSonnerToastData(type);
    return (
        <Box sx={{ ...SonnerToastStyles.container, backgroundColor: metadata.bgColor }}>
            <Box>{metadata.icon}</Box>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "20px" }}>
                    <Box sx={{ justifySelf: "center" }}>
                        <Typography sx={SonnerToastStyles.title} variant='body1'>
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{ justifySelf: "end" }}>
                        <IconButton onClick={() => { toast.dismiss(id); }} size='small'>
                            <CloseIcon sx={{ color: '#fff' }} />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant='body2'>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
