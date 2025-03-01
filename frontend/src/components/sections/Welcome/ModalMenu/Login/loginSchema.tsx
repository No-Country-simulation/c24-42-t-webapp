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
            "pattern": "^(?=.*[a-z])(?=.*[A-Z]).+$",
            "errorMessage": {
                "pattern": "La contraseña debe contener letras mayúsculas y minúsculas"
            }
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
            "label": "Contraseña"
        },
    ]
}