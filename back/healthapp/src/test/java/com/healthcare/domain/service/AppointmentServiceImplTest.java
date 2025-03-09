package com.healthcare.domain.service;

import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertThrowsExactly;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ActiveProfiles;

import com.healthcare.domain.exceptions.CancelledAppointmentException;
import com.healthcare.domain.model.entity.Appointment;
import com.healthcare.domain.model.entity.Medic;
import com.healthcare.domain.model.entity.Patient;
import com.healthcare.domain.model.enums.Status;
import com.healthcare.domain.repository.AppointmentRepository;
import com.healthcare.domain.repository.MedicRepository;
import com.healthcare.domain.repository.PatientRepository;

@ActiveProfiles("test")
@ExtendWith(MockitoExtension.class)
class AppointmentServiceImplTest {

    @Mock
    private AppointmentRepository appointmentRepository;
    @Mock
    private MedicRepository medicRepository;
    @Mock
    private PatientRepository patientRepository;
    @InjectMocks
    private AppointmentServiceImpl appointmentServiceImpl;

    private Appointment mockAppointment;

    @BeforeEach
    void setup() {

        Patient mockPatient = new Patient();
        mockPatient.setId(1L);

        Medic mockMedic = new Medic();
        mockMedic.setId(2L);

        mockAppointment = new Appointment(1L, LocalDateTime.now(), "Prueba", Status.CANCELADA, mockMedic, mockPatient);
    }

    @Test
    void testCancelAppointment() {
        when(appointmentRepository.findById(any(Long.class))).thenReturn(Optional.of(mockAppointment));
    
        assertSame(Status.CANCELADA, mockAppointment.getStatus());
    
        assertThrowsExactly(CancelledAppointmentException.class,
        () -> appointmentServiceImpl.cancelAppointment(any(Long.class)));

        mockAppointment.setStatus(Status.CONFIRMADA);
        assertSame(Status.CONFIRMADA, mockAppointment.getStatus());
    }

    @Test
    void testGetAppointmentsByPatient() {

    }

    @Test
    void testScheduleAppointment() {

    }

    @Test
    void testUpdateAppointment() {

    }
}
