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
        },
        "password": {
            "type": "string",
            "description": "La contraseña debe contener letras mayúsculas y minúsculas.",
            "pattern": "^(?=.*[a-z])(?=.*[A-Z]).+$",
        }
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