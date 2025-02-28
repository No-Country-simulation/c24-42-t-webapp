import { ReactNode } from "react";

export type Image = {
    src: string;
    name: string;
    specialty: string;
}

export type Url = `/${string}` | "#";

export interface IconData {
    to: string,
    ariaLabel: string,
    Icon: ReactNode
};