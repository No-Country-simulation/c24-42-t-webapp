import { Button, ButtonProps } from "@mui/material";

export const CustomButton = ({ children, onClick = undefined, variant = "contained", color = "primary", type="button" }: ButtonProps) => {
    return (
        <Button variant={variant} color={color} onClick={onClick} disableElevation={true} type={type}>
            {children}
        </Button>
    );
}