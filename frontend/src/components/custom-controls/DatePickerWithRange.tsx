/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { format, parse } from "date-fns";


type ErrorField = "start" | "end" | "both"

type ErrorData = {
    isError: boolean
    errorOn: ErrorField
    message: string
}

const DatePickerWithRange = ({ data, path, enabled, required, handleChange }: ControlProps) => {
    const startDate = data?.startDate ? parse(data.startDate, "dd/MM/yyyy", new Date()) : null;
    const endDate = data?.endDate ? parse(data.endDate, "dd/MM/yyyy", new Date()) : null;

    const handleErrorMsg = (): ErrorData => {
        if ((endDate !== null && startDate !== null) && endDate < startDate) {
            return {
                isError: true,
                errorOn: "both",
                message: "Rango Invalido"
            }
        }

        if ((required && (data?.startDate && !data?.endDate))) {
            return {
                isError: true,
                errorOn: 'end',
                message: "Debe seleccionar una fecha final"
            }
        }

        if ((required && (!data?.startDate && data?.endDate))) {
            return {
                isError: true,
                errorOn: 'start',
                message: "Debe seleccionar una fecha inicial"
            }
        }

        return {
            isError: false,
            errorOn: 'both',
            message: ""
        }
    }
    const dateRangeError: ErrorData = handleErrorMsg();

    const handleStartDateChange = (value: any) => {
        const date = new Date(value);
        const correctDate = format(date, "dd/MM/yyyy");
        handleChange(`${path}.startDate`, correctDate);
    }

    const handleEndDateChange = (value: any) => {
        const date = new Date(value);
        const correctDate = format(date, "dd/MM/yyyy");
        handleChange(`${path}.endDate`, correctDate);
    }

    return (
        <Box sx={{ display: "flex", gap: "1rem" }}>
            <DatePicker
                disabled={!enabled}
                value={startDate}
                name='startDate'
                format='dd/MM/yyyy'
                onChange={(value) => handleStartDateChange(value)}
                slotProps={{
                    textField: {
                        variant: 'outlined',
                        error: dateRangeError.isError && ["both", "start"].includes(dateRangeError.errorOn),
                        helperText: dateRangeError.isError && ["both", "start"].includes(dateRangeError.errorOn) ? dateRangeError.message : "",
                    },
                }}
            />
            <DatePicker
                disabled={!enabled}
                value={endDate}
                name='endDate'
                format='dd/MM/yyyy'
                onChange={(value) => handleEndDateChange(value)}
                slotProps={{
                    textField: {
                        variant: 'outlined',
                        error: dateRangeError.isError && ["both", "end"].includes(dateRangeError.errorOn),
                        helperText: dateRangeError.isError && ["both", "end"].includes(dateRangeError.errorOn) ? dateRangeError.message : "",
                    },
                }}
            />
        </Box>
    );
}

export default withJsonFormsControlProps(DatePickerWithRange);