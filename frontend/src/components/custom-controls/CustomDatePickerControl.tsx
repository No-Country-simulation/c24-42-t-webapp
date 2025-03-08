import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { DateValidationError, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, parse } from "date-fns";

const CustomDatePickerControl = ({ data, path, uischema, label, handleChange }: ControlProps) => {
    const key = uischema?.options?.key as string;
    const rawValue = data ? data[key] : null;
    const value = rawValue ? parse(rawValue, "dd/MM/yyyy", new Date()) : null;

    const onChange = (value: any, context: PickerChangeHandlerContext<DateValidationError>) => {
        const date = new Date(value);
        const correctDate = format(date, "dd/MM/yyyy");
        handleChange(`${path}.${key}`, correctDate);
    };
    return (
        <DatePicker
            sx={{ width: "100%" }}
            label={label}
            value={value}
            format="dd/MM/yyyy"
            onChange={onChange}
        />
    );
};

export default withJsonFormsControlProps(CustomDatePickerControl);
