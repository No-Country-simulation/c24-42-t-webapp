package com.healthcare.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity(name = "Patient")
@Table(name = "patients")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private Integer document;
    @Column(nullable = false)
    private LocalDate birthDate;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String phone;
    private String address;
    private String emergencyContactInfo;
    @OneToOne @JoinColumn(name = "user_id")
    private User user;
}

enum Gender {
    FEMALE,
    MALE
}