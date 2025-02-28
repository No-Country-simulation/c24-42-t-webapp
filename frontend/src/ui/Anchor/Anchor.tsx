import { AnchorHTMLAttributes, AriaRole, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link } from "react-router";
import { AnchorStyles } from "./AnchorStyles";

interface Props {
    to: string;
    ariaLabel: string;
    children: ReactNode;
    target?: HTMLAttributeAnchorTarget;
    role?: AriaRole;
    onClick?: () => void;
}

export const Anchor = ({ to, ariaLabel, children, target ="_self", role = "link", onClick = undefined }: Props) => {
    return (
        <Link className="link" target={target} to={to} aria-label={ariaLabel} style={AnchorStyles.anchor} role={role} onClick={onClick}>
            {children}
        </Link>
    );
}