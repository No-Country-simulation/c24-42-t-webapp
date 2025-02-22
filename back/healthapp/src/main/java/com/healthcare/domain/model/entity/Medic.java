package com.healthcare.domain.model.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
    private Long id;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "dni")
    private Integer documentId;
    private String email;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String state;
    private String description;
    @Enumerated(EnumType.STRING)
    private Speciality speciality;
    @OneToMany(mappedBy = "medic", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Appointment> appointment;
    @OneToOne @JoinColumn(name = "user_id")
    private User user;
    @OneToOne @JoinColumn(name = "image_id")
    private Image image;
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
