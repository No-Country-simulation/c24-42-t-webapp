package com.healthcare.domain.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.domain.dto.request.MedicalRecordsRequest;
import com.healthcare.domain.dto.response.MedicalRecordsReponse;
import com.healthcare.domain.service.IMedicalRecordsService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/records")
public class MedicalRecordController {

    private final IMedicalRecordsService medicalRecordsService;

    @PreAuthorize("hasAnyRole({'ADMIN','MEDICO'})")
    @GetMapping("/{id}")
    public ResponseEntity<List<MedicalRecordsReponse>> getMedicalRecords(@PathVariable Long id){
        return new ResponseEntity<>(medicalRecordsService.retrieveRecords(id), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole({'ADMIN','MEDICO'})")
    @PostMapping("/{id}")
    public ResponseEntity<Map<String,String>> createMedicalRecord(@PathVariable Long id, @RequestBody @Valid MedicalRecordsRequest request){
        medicalRecordsService.createMedicalRecord(id, request); 
        return new ResponseEntity<>(Map.of("status", "Historial médico cargado exitosamente"), HttpStatus.CREATED);
    }
}
