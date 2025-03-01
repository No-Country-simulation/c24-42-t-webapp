package com.healthcare.domain.dto;

import com.healthcare.domain.model.entity.Medic;

public record MedicDTO(Long id, String name, String lastName, String email, String speciality, String description) {

    public static MedicDTO fromEntity(Medic medic) {
        return new MedicDTO(
                medic.getId(),
                medic.getName(),
                medic.getLastName(),
                medic.getEmail(),
                medic.getSpeciality().name(),
                medic.getDescription()
        );
    }

}
