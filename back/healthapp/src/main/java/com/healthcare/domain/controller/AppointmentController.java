package com.healthcare.domain.controller;

import com.healthcare.domain.dto.AppointmentDTO;
import com.healthcare.domain.service.IAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/appointments")
public class AppointmentController {

    @Autowired
    private IAppointmentService appointmentService;

    @PostMapping("/schedule")
    public ResponseEntity<?> scheduleAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        return appointmentService.scheduleAppointment(
                appointmentDTO.patientId(),
                appointmentDTO.medicId(),
                appointmentDTO.dateTime()
        );
    }

    @PutMapping("/update/{appointmentId}")
    public ResponseEntity<?> updateAppointment(
            @PathVariable Long appointmentId,
            @RequestBody AppointmentDTO appointmentDTO) {
        return appointmentService.updateAppointment(
                appointmentId,
                appointmentDTO.dateTime()
        );
    }

    @DeleteMapping("/cancel/{appointmentId}")
    public ResponseEntity<?> cancelAppointment(@PathVariable Long appointmentId) {
        return appointmentService.cancelAppointment(appointmentId);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<?> getAppointmentsByPatient(@PathVariable Long patientId) {
        return appointmentService.getAppointmentsByPatient(patientId);
    }
}