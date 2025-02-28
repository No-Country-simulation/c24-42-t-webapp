import { SxProps } from "@mui/material";
import { Url } from "./types";

export type ObjectStyles = Record<string, SxProps>;

export type LinkMetaData = {
    titulo: string,
    ariaLabel: string,
    to: Url
}

export interface LinkData {
    id: number,
    title: string,
    links: LinkMetaData[]
}
