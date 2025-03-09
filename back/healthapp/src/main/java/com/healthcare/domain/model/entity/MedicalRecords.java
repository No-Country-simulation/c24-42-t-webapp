package com.healthcare.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import com.healthcare.domain.dto.request.MedicalRecordsRequest;

@Entity
@Table(name = "medical_records")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MedicalRecords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "record_date")
    private LocalDate recordDate;
    @Column(name = "visit_reason")
    private String visitReason;
    private String symptoms;
    @Column(name = "symptoms_frequency")
    private String symptomsFrequency;
    @Column(name = "medical_history")
    private String medicalHistory;
    @Column(name = "smoking_habits")
    private Boolean smokingHabits;
    @Column(name = "activity_habits")
    private Boolean activityHabits;
    @Column(name = "additional_info")
    private String additionalInfo;
    private String diagnosis;
    private String treatment;
    @Column(name = "doctor_notes")
    private String doctorNotes;
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    public MedicalRecords(MedicalRecordsRequest request, Patient patient) {
        this.recordDate = request.getRecordDate();
        this.visitReason = request.getVisitReason();
        this.symptoms = request.getSymptoms();
        this.symptomsFrequency = request.getSymptomsFrequency();
        this.medicalHistory = request.getMedicalHistory();
        this.smokingHabits = request.getSmokingHabits();
        this.activityHabits = request.getActivityHabits();
        this.additionalInfo = request.getAdditionalInfo();
        this.diagnosis = request.getDiagnosis();
        this.treatment = request.getTreatment();
        this.doctorNotes = request.getDoctorNotes();
        this.patient = patient;
    }

}
