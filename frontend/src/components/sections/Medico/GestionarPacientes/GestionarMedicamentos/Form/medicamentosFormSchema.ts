export interface MedicamentosFormData {
    medicationName: string,
    dosage: string
    frequency: string,
    notes: string
    datePickerWithRange: {
        startDate: Date,
        endDate: Date,
    }
}

export const medicamentosSchema = {
    "type": "object",
    "required": [
        "medicationName",
        "dosage",
        "frequency",
        "datePickerWithRange",
        "notes"
    ],
    "properties": {
        "medicationName": {
            "type": "string",
        },
        "dosage": {
            "type": "string",
        }
        ,
        "frequency": {
            "type": "string",
        },
        "datePickerWithRange": {
            "type": "object",
            "properties": {
                "startDate": {
                    "type": "string",
                },
                "endDate": {
                    "type": "string",
                }
            }
        }
        ,
        "notes": {
            "type": "string",
        }
    },
    "errorMessage": {
        "required": "El campo es obligatorio."
    }
};

export const medicamentosUiSchema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/medicationName",
                    "label": "Nombre medicación"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/dosage",
                    "label": "Dosis",
                },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/datePickerWithRange",
                    "label": "Consumir medicamento entre",
                    "options": {
                        "customControl": "datePickerWithRange",
                    }
                },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/frequency",
                    "label": "Frecuencia",
                },

                {
                    "type": "Control",
                    "scope": "#/properties/notes",
                    "label": "Notas adicionales",
                }
            ]
        }
    ]
}