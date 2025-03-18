export interface DoctorData {
    id: number,
    first_name: string,
    last_name: string,
    specialty: string,
    profile_img: string
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface PacienteResponse {
    patients: PacienteData[]
}

export interface PacienteData {
    id: number;
    firstName: string;
    lastName: string;
    documentId: string;
    birthDate: string;
    gender: string;
    phone: string;
    address: string;
    emergencyContactInfo: string;
}

export interface MedicacionData {
    id: number;
    medicationName: string;
    dosage: string;
    frequency: string;
    startDate: string;
    endDate: string;
    notes: string;
}

export enum Speciality {
    CLINICA = "CLINICA",
    CARDIOLOGIA = "CARDIOLOGIA",
    NEUROLOGIA = "NEUROLOGIA",
    PSIQUIATRIA = "PSIQUIATRIA",
    PSICOLOGIA = "PSICOLOGIA",
    NUTRICION = "NUTRICION",
    DERMATOLOGIA = "DERMATOLOGIA",
    GINECOLOGIA = "GINECOLOGIA"
}

export interface MedicoResponse {
    medics: MedicoData[]
}

export interface MedicoData {
    id: number;
    name: string;
    lastname: string;
    description: string;
    state: string;
    documentId: string;
    gender: Gender;
    speciality: Speciality;
    phone: string;
}
