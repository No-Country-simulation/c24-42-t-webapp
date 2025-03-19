export interface LoginFormData {
    username: string | undefined;
    password: string | undefined;
}

export const loginSchema = {
    "type": "object",
    "required": [
        "email",
        "password"
    ],
    "properties": {
        "email": {
            "type": "string",
            "format": "email",
            "errorMessage": {
                "format": "El correo electrónico no es válido."
            }
        },
        "password": {
            "type": "string",
        }
    },
    "errorMessage": {
        "required": "El campo es obligatorio."
    }
};

export const loginUiSchema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/email",
            "label": "Correo Electrónico"
        },
        {
            "type": "Control",
            "scope": "#/properties/password",
            "label": "Contraseña",
            "options": {
                "format": "password"
            }
        },
    ]
}