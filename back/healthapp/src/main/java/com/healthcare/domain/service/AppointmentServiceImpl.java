package com.healthcare.domain.service;

import com.healthcare.domain.dto.AppointmentDTO;
import com.healthcare.domain.exceptions.*;
import com.healthcare.domain.model.entity.Appointment;
import com.healthcare.domain.model.entity.Medic;
import com.healthcare.domain.model.entity.Patient;
import com.healthcare.domain.model.enums.Status;
import com.healthcare.domain.repository.AppointmentRepository;
import com.healthcare.domain.repository.MedicRepository;
import com.healthcare.domain.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.healthcare.domain.model.enums.Status.CONFIRMADA;

@Service
public class AppointmentServiceImpl implements IAppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private MedicRepository medicRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Override
    @Transactional
    public ResponseEntity<?> scheduleAppointment(Long patientId, Long medicId, LocalDateTime dateTime) {
        Optional<Medic> medicOpt = medicRepository.findById(medicId);
        Optional<Patient> patientOpt = patientRepository.findById(patientId);

        if(medicOpt.isEmpty()){
            throw new MedicNotFoundException("Médico no encontrado");
        }

        if(patientOpt.isEmpty()){
            throw new PatientNotFoundException("Paciente no encontrado");
        }

        boolean isAvailable = appointmentRepository.findByMedicIdAndDateTime(medicId, dateTime)
                .filter(appointment -> !appointment.getStatus().equals(Status.CANCELADA)).isEmpty();

        if (!isAvailable) {
            throw new MedicScheduleConflictException("El médico ya tiene una cita en este horario");
        }

        Appointment appointment = Appointment.builder()
                .medic(medicOpt.get())
                .patient(patientOpt.get())
                .dateTime(dateTime)
                .status(CONFIRMADA)
                .build();

        appointmentRepository.save(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "message", "Cita agendada correctamente",
                "appointment", AppointmentDTO.fromEntity(appointment)
        ));
    }

    @Override
    @Transactional
    public ResponseEntity<?> updateAppointment(Long appointmentId, LocalDateTime newDateTime) {
        Optional<Appointment> appointmentOpt = appointmentRepository.findById(appointmentId);

        if(appointmentOpt.isEmpty()) {
            throw new AppointmentNotFoundException("Cita no encontrada");
        }

        Appointment appointment = appointmentOpt.get();

        if(appointment.getDateTime().equals(newDateTime)) {
            throw new AppointmentDateConflictException("La nueva fecha debe ser diferente a la actual");
        }

        if (appointment.getStatus().equals(Status.CANCELADA)) {
            throw new CancelledAppointmentException("No se puede modificar una cita cancelada");
        }

        boolean isAvailable = appointmentRepository
                .findByMedicIdAndDateTime(appointment.getMedic().getId(), newDateTime).isEmpty();

        if(!isAvailable) {
            throw new MedicScheduleConflictException("El médico ya tiene una cita en este horario");
        }

        appointment.setDateTime(newDateTime);
        appointmentRepository.save(appointment);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "message", "Cita reagendada correctamente",
                "appointment", AppointmentDTO.fromEntity(appointment)
        ));
    }

    @Override
    @Transactional
    public ResponseEntity<?> cancelAppointment(Long appointmentId) {
        Optional<Appointment> appointmentOpt = appointmentRepository.findById(appointmentId);

        if(appointmentOpt.isEmpty()) {
            throw new AppointmentNotFoundException("Cita no encontrada");
        }

        Appointment appointment = appointmentOpt.get();

        if(appointment.getStatus().equals(Status.CANCELADA)) {
            throw new CancelledAppointmentException("La cita ya esta cancelada");
        }

        appointment.setStatus(Status.CANCELADA);
        appointmentRepository.save(appointment);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "message", "Cita cancelada correctamente",
                "appointment", AppointmentDTO.fromEntity(appointment)
        ));
    }

    @Override
    public ResponseEntity<?> getAppointmentsByPatient(Long patientId) {
        Optional<Patient> patientOpt = patientRepository.findById(patientId);

        if(patientOpt.isEmpty()) {
            throw new PatientNotFoundException("Paciente no encontrado");
        }

        List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);

        if(appointments.isEmpty()) {
            throw new AppointmentNotFoundException("El paciente no tiene citas médicas registradas");
        }

        List<AppointmentDTO> appointmentDTOS = appointments.stream()
                .map(AppointmentDTO::fromEntity).toList();

        return ResponseEntity.ok(Map.of(
                "message", "Lista de citas médicas",
                "appointments", appointmentDTOS
        ));
    }
}