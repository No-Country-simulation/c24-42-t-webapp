import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { DateValidationError, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CustomDatePicker = ({ data, path, label, handleChange }: ControlProps) => {
    const onChange = (value: any, context: PickerChangeHandlerContext<DateValidationError>) => {
        handleChange(`${path}.date`, value);
    };
    return (
        <DatePicker
            sx={{ width: "100%" }}
            label={label}
            value={data?.birthDate || null}
            format="DD/MM/YYYY"
            onChange={onChange}
        />
    );
};

export default withJsonFormsControlProps(CustomDatePicker);
