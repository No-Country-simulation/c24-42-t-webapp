package com.healthcare.domain.model.entity;

import com.healthcare.domain.dto.request.UserRequestDTO;
import com.healthcare.domain.model.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    @Column(name = "password_hash")
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @OneToOne(mappedBy = "user")
    private Admin admin;
    @OneToOne(mappedBy = "user")
    private Medic medic;
    @OneToOne(mappedBy = "user")
    private Patient patient;

    public User(UserRequestDTO userDTO,String encodedPassword, Role role) {
        this.email = userDTO.getEmail();
        this.password = encodedPassword;
        this.role = role;
    }

}