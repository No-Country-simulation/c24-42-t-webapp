/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomError } from "@tipos/types";
import { createContext, useContext } from "react";

const initValue: TableContextType = {
    dataRows: [],
    loadingTableRows: false,
    errorTableRows: null,
    handleAdd: null,
    handleSetError: (error) => {},
    refetchRows: () => {},
    addRow: (newItem: any) => {},
    removeRow: (idAEliminar) => {}
};

export interface TableContextType {
    dataRows: any[]
    loadingTableRows: boolean
    errorTableRows: CustomError
    handleSetError: (error: CustomError) => void
    refetchRows: () => void
    handleAdd: (() => void) | null
    addRow: (newItem: any) => void
    removeRow: (idAEliminar: number) => void
}

export const TableContext = createContext<TableContextType>(initValue);

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("el hook useTableContext se debe usar dentro de TableContextProvider");
    }
    return context;
}