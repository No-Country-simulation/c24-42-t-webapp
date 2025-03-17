/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomError } from "@tipos/types";
import { createContext, useContext } from "react";

const initValue: TableContextType = {
    dataRows: [],
    loadingTableRows: false,
    errorTableRows: null,
    refetchRows: null
};

export interface TableContextType {
    dataRows: any[]
    loadingTableRows: boolean
    errorTableRows: CustomError
    refetchRows: (() => void) | null
}

export const TableContext = createContext<TableContextType>(initValue);

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("el hook useTableContext se debe usar dentro de TableContextProvider");
    }
    return context;
}