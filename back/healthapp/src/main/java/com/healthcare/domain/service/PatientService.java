package com.healthcare.domain.service;

import com.healthcare.domain.model.entity.Patient;
import com.healthcare.domain.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PatientService implements IPatientService{

    @Autowired
    private PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public ResponseEntity<?> getAllPatients(){
        List<Patient> patients = patientRepository.findAll();
        return ResponseEntity.ok(Map.of("patients", patients));
    }

    @Override
    public ResponseEntity<?> getPatientById(Long id){
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado con ID: " + id));
        return ResponseEntity.ok(Map.of("patient", patient));
    }

    @Override
    @Transactional
    public ResponseEntity<?> savePatient(Patient patient){
        Patient newPatient = patientRepository.save(patient);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPatient);
    }

    @Override
    @Transactional
    public ResponseEntity<?> deletePatient(Long id){
        if(patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
            return ResponseEntity.ok(Map.of("message", "Patient deleted successfully"));
        } else {
            throw new EntityNotFoundException("Patient not found by id: " + id);
        }
    }

}
