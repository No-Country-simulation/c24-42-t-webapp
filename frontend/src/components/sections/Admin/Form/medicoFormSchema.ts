export interface MedicoFormData {
    email: string
    repeatPassword: {
        password: string
        repeatPassword: string
    },
    first_name: string
    last_name: string
    gender: string
    speciality: string
    dni: string
    phone: string
    status: string
    description: string
}

export const medicoFormSchema = {
    "type": 'object',
    "required": [
        "email",
        "repeatPassword",
        "first_name",
        "last_name",
        "gender",
        "speciality",
        "dni",
        "phone",
        "status",
        "description"
    ],
    "properties": {
        "email": {
            "type": "string",
            "format": "email",
            "errorMessage": {
                "format": "El correo electrónico no es válido."
            }
        },
        "repeatPassword": {
            "type": "object",
            "properties": {
                "password": {
                    "type": "string",
                },
                "repeatPassword": {
                    "type": "string",
                }
            }
        },
        "first_name": {
            "type": "string",
        },
        "last_name": {
            "type": "string",
        },
        "gender": {
            "type": "string",
            oneOf: [
                {
                    const: 'MALE',
                    title: 'Hombre'
                },
                {
                    const: 'FEMALE',
                    title: 'Mujer'
                },
            ]
        },
        "speciality": {
            "type": "string",
            oneOf: [
                {
                    const: 'CLINICA',
                    title: 'Clínica'
                },
                {
                    const: 'CARDIOLOGIA',
                    title: 'Cardiología'
                },
                {
                    const: 'NEUROLOGIA',
                    title: 'Neurología'
                },
                {
                    const: 'PSIQUIATRIA',
                    title: 'Psiquiatría'
                },
                {
                    const: 'PSICOLOGIA',
                    title: 'Psicología'
                },
                {
                    const: 'NUTRICION',
                    title: 'Nutrición'
                },
                {
                    const: 'DERMATOLOGIA',
                    title: 'Dermatología'
                },
                {
                    const: 'GINECOLOGIA',
                    title: 'Ginecología'
                },
            ]
        },
        "dni": {
            "type": "string",
            "pattern": "^[0-9]{8}$",
            "errorMessage": {
                "pattern": "El DNI debe tener 8 dígitos y debe ser escrito sin puntos"
            }
        },
        "phone": {
            "type": "string",
            "pattern": "^(\\+)?[0-9]{11,20}$",
            "errorMessage": {
                "pattern": 'El formato acepta solamente números y el signo +'
            }
        },
        "status": {
            "type": "string"
        },
        "description": {
            "type": "string"
        }
    },
    "errorMessage": {
        "required": "El campo es obligatorio",
    }
};

export const medicoFormUiSchema = {
    "type": "Categorization",
    "elements": [
        {
            "type": "Category",
            "label": "Credenciales",
            "elements": [
                {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/email",
                            "label": "Correo electrónico",
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/repeatPassword",
                            "options": {
                                "customControl": "passwordConfirm"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "Category",
            "label": "Datos Personales",
            "elements": [
                {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/first_name",
                                    "label": "Nombre",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/last_name",
                                    "label": "Apellido",
                                },
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/dni",
                                    "label": "DNI (sin puntos, ni espacios)",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/gender",
                                    "label": "Género"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "Category",
            "label": "Datos de contacto",
            "elements": [
                {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/phone",
                                    "label": "Número de celular",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/status",
                                    "label": "Estado",
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/speciality",
                                    "label": "Especialidad",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/description",
                                    "label": "Descripcion",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "options": {
        "variant": "stepper",
        "showNavButtons": false
    }
}