package com.healthcare.domain.dto.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MedicalRecordsReponse {
    private LocalDate recordDate;
    private String visitReason;
    private String symptoms;
    private String symptomsFrequency;
    private String medicalHistory;
    private Boolean smokingHabits;
    private Boolean activityHabits;
    private String additionalInfo;
    private String diagnosis;
    private String treatment;
    private String doctorNotes;
}
