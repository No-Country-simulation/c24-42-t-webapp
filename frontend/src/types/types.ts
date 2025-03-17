/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, ReactNode, SetStateAction } from "react";
import { PacienteData } from "./backendTypes";
import { UserRole } from "./store";

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

export interface UserMenuItems {
  to: string,
  ariaLabel: string,
  text: string
};

export interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  specialty: string;
  profile_img: string;
}

export type HexColor = `#${string}`;

interface ErrorData {
  description: string,
  type: "fetch" | "input" | "unknow",
  status?: string
}

export type CustomError = ErrorData | null;

export interface PacientesResponse {
  patients: PacienteData[]
}

export interface JwtData {
  iss: string,
  sub: string,
  iat: number,
  exp: number,
  role: UserRole
  jti: string
}

export interface HeaderSchema {
  id: string
  title: string
  width?: string
}

export interface Parameters {
  token: string
  idForEndpoint?: string
  setDataRows: Dispatch<SetStateAction<any[]>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<CustomError>>
}