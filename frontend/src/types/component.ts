import { SxProps } from "@mui/material";
import { HexColor, Url } from "./types";
import { ReactNode } from "react";

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

export type NavigationItemData = LinkMetaData & { icon: ReactNode };

export interface Option { value: string, label: string };

export type TypeAlert = "success" | "error";

export interface ToastProps {
    id: string | number;
    title: string;
    description: string;
    type: TypeAlert;
}

export interface AlertMetaData {
    bgColor: HexColor
    icon: ReactNode
}

export type Section = "gestionar_pacientes" | "tabla_medicamentos";

export type TabsAdmin = "pacientes" | "medicos";