package com.healthcare.domain.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MedicalRecordsRequest {
    @NotNull private LocalDate recordDate;
    @NotNull @NotBlank private String visitReason;
    @NotNull @NotBlank private String symptoms;
    @NotNull @NotBlank private String symptomsFrequency;
    @NotNull @NotBlank private String medicalHistory;
    @NotNull private Boolean smokingHabits;
    @NotNull private Boolean activityHabits;
    @NotNull @NotBlank private String additionalInfo;
    @NotNull @NotBlank private String diagnosis;
    @NotNull @NotBlank private String treatment;
    @NotNull @NotBlank private String doctorNotes;
}
