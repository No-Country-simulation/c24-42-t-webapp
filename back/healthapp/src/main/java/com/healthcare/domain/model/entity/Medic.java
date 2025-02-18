package com.healthcare.domain.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Medic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "dni")
    private Integer documentId;
    private String email;
    @Enumerated
    private Speciality speciality;
}

enum Speciality {
    CLINICA,
    CARDIOLOGIA,
    NEUROLOGIA,
    PSIQUIATRIA,
    PSICOLOGIA,
    NUTRICION,
    DERMATOLOGIA,
    GINECOLOGIA
}

