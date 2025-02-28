package com.healthcare.domain.service;

import com.healthcare.domain.model.entity.Patient;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface IPatientService {
    ResponseEntity<?> getAllPatients();
    ResponseEntity<?> getPatientById(Long id);
    ResponseEntity<?> savePatient(Patient patient);
    ResponseEntity<?> deletePatient(Long id);
}
