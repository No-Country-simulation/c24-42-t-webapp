package com.healthcare.domain.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.healthcare.domain.dto.request.MedicalRecordsRequest;
import com.healthcare.domain.dto.response.MedicalRecordsReponse;
import com.healthcare.domain.exceptions.NotFoundInDatabaseException;
import com.healthcare.domain.model.entity.MedicalRecords;
import com.healthcare.domain.model.entity.Patient;
import com.healthcare.domain.repository.PatientRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MedicalRecordsServiceServiceImpl implements IMedicalRecordsService {

    private final ModelMapper modelMapper;
    private final PatientRepository patientRepository;

    @Override
    public List<MedicalRecordsReponse> retrieveRecords(Long patientId) {
        var listOfRecords = getPatient(patientId).getMedicalRecords();
        Assert.notEmpty(listOfRecords, "No se encontró ningún historial médico");
        return listOfRecords.stream()
                .map(records -> modelMapper.map(records, MedicalRecordsReponse.class))
                .toList();
    }

    @Override
    public void createMedicalRecord(Long patientId, MedicalRecordsRequest request) {
        Patient patient = getPatient(patientId);
        MedicalRecords medicalRecords = new MedicalRecords(request, patient);
        patient.getMedicalRecords().add(medicalRecords);
        patientRepository.save(patient);
    }

    private Patient getPatient(Long id) {
        Optional<Patient> patientOpt = patientRepository.findById(id);
        return patientOpt.orElseThrow(() -> new NotFoundInDatabaseException("Paciente no encontrado"));
    }

}
