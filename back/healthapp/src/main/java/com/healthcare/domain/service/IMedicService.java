package com.healthcare.domain.service;

import com.healthcare.domain.model.entity.Medic;
import org.springframework.http.ResponseEntity;

public interface IMedicService {
    ResponseEntity<?> getAllMedics(String speciality, String gender, String state);
    ResponseEntity<?> getMedicById(Long id);
    ResponseEntity<?> createMedic(Medic medic);
    ResponseEntity<?> deleteMedic(Long id);
}