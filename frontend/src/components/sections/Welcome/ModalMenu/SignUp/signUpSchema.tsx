export interface FormData {
    name: string | undefined;
    gender: string | undefined;
    dni: string | undefined;
    tel: string | undefined;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
}

export const signUpSchema = {
    type: 'object',
    "required": [
        "name",
        "gender",
        "dni",
        "tel",
        "email",
        "password",
        "confirmPassword",
    ],
    "properties": {
        "name" : {
            "type": "string",
        },
        "gender": {
            oneOf: [
                {
                    const: "male",
                    title: "Hombre"
                },
                {
                    const: "female",
                    title: "Mujer"
                },
                {
                    const: "other",
                    title: "Otro"
                }
            ],
        },
        "dni": {
            "type": "string",
            "pattern": "^[0-9]{8}$",
            "errorMessage": {
                "pattern": "El DNI debe tener 8 dígitos y debe ser escrito sin puntos"
            }
        },
        "tel": {
            "type": "string",
            "pattern": "^(11)?[0-9]{8}$",
            "errorMessage": {
                "pattern": 'El formato debe ser "11xxxxxxxx"'
            }
        },
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
        },
        "confirmPassword": {
            "type": "string",
            "pattern": "^(?=.*[a-z])(?=.*[A-Z]).+$",
            "errorMessage": {
                "pattern": "La contraseña debe contener letras mayúsculas y minúsculas"
            }
        },
    },
    "errorMessage": {
        "required": "El campo es obligatorio",
    },
}

export const signUpUiSchema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/name",
            "label": "Nombre completo",
        },
        {
            "type": "Control",
            "scope": "#/properties/gender",
            "label": "Género",
        },
        {
            "type": "Control",
            "scope": "#/properties/dni",
            "label": "DNI (sin puntos, ni espacios)",
        },
        {
            "type": "Control",
            "scope": "#/properties/tel",
            "label": "Número de celular",
        },
        {
            "type": "Control",
            "scope": "#/properties/email",
            "label": "Correo electrónico",
        },
        {
            "type": "Control",
            "scope": "#/properties/password",
            "label": "Contraseña",
        },
        {
            "type": "Control",
            "scope": "#/properties/confirmPassword",
            "label": "Confirmar contraseña",
        },
    ]
}