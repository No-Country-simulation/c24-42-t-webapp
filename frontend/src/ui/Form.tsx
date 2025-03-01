import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
interface Props {
    schema: object;
    uiSchema: any;
    data: any;
    onChange: ({ data, errors }: { data: any, errors: any }) => void;
}

const ajv = new Ajv({allErrors: true});
addErrors(ajv);
addFormats(ajv);

export const Form = ({ schema, uiSchema, data, onChange }: Props) => {
    return (
        <JsonForms
            schema={schema}
            uischema={uiSchema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={onChange}
            ajv={ajv}
        />
    );
}