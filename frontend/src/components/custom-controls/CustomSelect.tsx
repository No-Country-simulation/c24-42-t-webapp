import { ControlProps } from "@jsonforms/core";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { withJsonFormsControlProps } from "@jsonforms/react";
import { Option } from "@tipos/component";

const CustomSelect = ({ id, data, label, path, uischema, required, handleChange }: ControlProps) => {
    const value = data ? Object.values(data)[0] as string : null;
    const key = data ? Object.keys(data)[0] : null;
    const onChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string;
        handleChange(`${path}.${key}`, value);
    };
    const options = uischema?.options?.items || [];
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id={`select_${id}`}>{label}</InputLabel>
                <Select
                    labelId={`select_${id}`}
                    id={id}
                    value={value || ''}
                    label={label}
                    onChange={onChange}
                    required={required}
                >
                    {
                        options.map((option: Option) => (
                            <MenuItem value={option.value}>{option.label}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default withJsonFormsControlProps(CustomSelect);
