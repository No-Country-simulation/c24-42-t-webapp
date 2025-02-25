package com.healthcare.domain.controller;

import com.healthcare.domain.model.entity.Medic;
import com.healthcare.domain.service.IMedicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/medic")
public class MedicController {

    @Autowired
    private IMedicService medicService;

    @GetMapping
    public ResponseEntity<?> getAllMedics() {
        return medicService.getAllMedics();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMedicById(@PathVariable Long id) {
        return medicService.getMedicById(id);
    }

    @PostMapping
    public ResponseEntity<?> createMedic(@RequestBody Medic medic) {
        return medicService.createMedic(medic);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMedic(@PathVariable Long id) {
        return medicService.deleteMedic(id);
    }
}