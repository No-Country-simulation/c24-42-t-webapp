export interface DoctorData {
    id: number,
    name: string,
    lastname: string,
    description: string,
    state: string,
    documentId: string,
    gender: string,
    speciality: string,
    phone: string,
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

export interface PacienteInput {
    firstName:            string;
    lastName:             string;
    documentId:           string;
    birthDate:            Date;
    gender:               string;
    phone:                string;
    address:              string;
    emergencyContactInfo: string;
    user:                 UserInput;
}

export interface UserInput {
    email:    string;
    password: string;
}


export interface CitasData {
    id: number;
    date: string;
    time: string;
    visitReason: string;
    status: string;
    medic: {
        id: number;
        name: string;
        lastname: string;
    }
}

export interface CitasPasadasData {
    id: number;
    recordDate: string;
    visitReason: string;
    symptoms: string;
    symptomsFrequency: string;
    medicalHistory: string;
    smokingHabits: boolean;
    activityHabits: boolean;
    additionalInfo: string;
    diagnosis: string;
    treatment: string;
    doctorNotes: string;
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
