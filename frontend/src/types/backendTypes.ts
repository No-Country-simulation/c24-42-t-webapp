export interface DoctorData {
    id: number,
    first_name: string,
    last_name: string,
    specialty: string,
    profile_img: string
}

export interface PacienteData {
    id:                   number;
    firstName:            string;
    lastName:             string;
    documentId:           string;
    birthDate:            string;
    gender:               string;
    phone:                string;
    address:              string;
    emergencyContactInfo: string;
}

export interface MedicacionData {
    id:             number;
    medicationName: string;
    dosage:         string;
    frequency:      string;
    startDate:      Date;
    endDate:        Date;
    notes:          string;
}