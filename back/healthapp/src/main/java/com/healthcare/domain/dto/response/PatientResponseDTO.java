package com.healthcare.domain.dto.response;

import java.time.LocalDate;

import com.healthcare.domain.model.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientResponseDTO {
    private String firstName;
    private String lastName;
    private String documentId;
    private LocalDate birthDate;
    private Gender gender;
    private String phone;
    private String address;
    private String emergencyContactInfo;
}