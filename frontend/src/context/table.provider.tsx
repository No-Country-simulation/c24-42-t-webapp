/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useCallback, useEffect, useState } from "react";
import { TableContext, TableContextType } from "./table.context";
import { CustomError, Parameters } from "@tipos/types";
import { useUserStore } from "@store/user.store";

interface TableProviderProps {
    children: ReactNode
    idForEndpoint?: string
    fetchRows: (params: Parameters) => any
    handleAdd?: (() => void) | null
}

export const TableContextProvider = ({ children, idForEndpoint = "", fetchRows, handleAdd = null }: TableProviderProps) => {
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [loadingTableRows, setLoadingTableRows] = useState(false);
    const [errorTableRows, setErrorTableRows] = useState<CustomError>(null);
    const token = useUserStore(state => state.getToken)();

    const handleFetchRows = useCallback(() => {
        setErrorTableRows(previuosState => null);
        fetchRows({ token, setDataRows, setError: setErrorTableRows, setLoading: setLoadingTableRows, idForEndpoint });
    }, []);

    const addRow = (newItem: any) => {
        setErrorTableRows(previuosState => null);
        setDataRows([...dataRows, newItem]);
    }

    const handleSetError = (error: CustomError) => {
        setErrorTableRows(error);
    }

    const removeRow = (idAEliminar: number) => {
        setDataRows(prevData => {
            const newData = [...prevData];
            const index = newData.findIndex(item => item.id === idAEliminar);
            if (index !== -1) {
                newData.splice(index, 1);
            }
            return newData;
        });
    };

    useEffect(() => {
        handleFetchRows();
    }, []);


    const value: TableContextType = {
        dataRows,
        loadingTableRows,
        errorTableRows,
        handleSetError,
        refetchRows: handleFetchRows,
        handleAdd,
        addRow,
        removeRow
    }

    return (
        <TableContext value={value}>
            {children}
        </TableContext>
    );
}