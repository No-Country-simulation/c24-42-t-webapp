package com.healthcare.domain.repository;

import com.healthcare.domain.model.entity.Medic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MedicRepository extends JpaRepository<Medic, Long> {
    Optional<Medic> findByDocumentId (Integer documentId);
    Optional<Medic> findByEmail(String email);
}