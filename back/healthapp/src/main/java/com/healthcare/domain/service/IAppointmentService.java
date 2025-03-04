package com.healthcare.domain.service;

import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

public interface IAppointmentService {
    ResponseEntity<?> scheduleAppointment(Long patientId, Long medicId, LocalDateTime dateTime);
    ResponseEntity<?> updateAppointment(Long appointmentId, LocalDateTime newDateTime);
    ResponseEntity<?> cancelAppointment(Long appointmentId);
    ResponseEntity<?> getAppointmentsByPatient(Long patientId);
}