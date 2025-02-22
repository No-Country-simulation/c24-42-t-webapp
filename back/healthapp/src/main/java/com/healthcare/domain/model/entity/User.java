package com.healthcare.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    @Column(name = "password_hash")
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
}

enum Role {
    ADMIN,
    MEDICO,
    PACIENTE
}