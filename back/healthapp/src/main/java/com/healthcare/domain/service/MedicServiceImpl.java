package com.healthcare.domain.service;

import com.healthcare.domain.model.entity.Medic;
import com.healthcare.domain.repository.MedicRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MedicServiceImpl implements IMedicService {

    @Autowired
    private MedicRepository medicRepository;

    @Override
    public ResponseEntity<?> getAllMedics() {
        List<Medic> medics = medicRepository.findAll();
        return ResponseEntity.ok(Map.of("medics", medics));
    }

    @Override
    public ResponseEntity<?> getMedicById(Long id) {
        Medic medic = medicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Médico no encontrado con ID: " + id));
        return ResponseEntity.ok(Map.of("medic", medic));
    }

    @Override
    @Transactional
    public ResponseEntity<?> createMedic(Medic medic) {
        Medic savedMedic = medicRepository.save(medic);
        return new ResponseEntity<>(Map.of(
                "message", "Médico creado con éxito", "medic", savedMedic),
                HttpStatus.CREATED);
    }

    @Override
    @Transactional
    public ResponseEntity<?> deleteMedic(Long id) {
        Medic medic = medicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Médico no encontrado con ID: " + id));
        medicRepository.delete(medic);
        return ResponseEntity.ok(Map.of("message", "Médico eliminado con éxito"));
    }
}