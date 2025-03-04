package com.healthcare.domain.dto;

import com.healthcare.domain.model.entity.Appointment;
import com.healthcare.domain.model.enums.Status;

import java.time.LocalDateTime;

public record AppointmentDTO(Long id, Long patientId, Long medicId, LocalDateTime dateTime, Status status) {

    public static AppointmentDTO fromEntity(Appointment appointment) {
        return new AppointmentDTO(
                appointment.getId(),
                appointment.getPatient().getId(),
                appointment.getMedic().getId(),
                appointment.getDateTime(),
                appointment.getStatus()
        );
    }
}