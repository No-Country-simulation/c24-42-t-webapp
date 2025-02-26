import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";

interface Props {
    schema: object;
    uiSchema: any;
    data: any;
    onChange: ({ data, errors }: { data: any, errors: any }) => void;
}

export const Form = ({ schema, uiSchema, data, onChange }: Props) => {
    return (
        <JsonForms
            schema={schema}
            uischema={uiSchema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={onChange}
        />
    );
}