package com.healthcare.domain.model.entity;

import java.time.LocalDateTime;

import com.healthcare.domain.model.enums.Status;
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
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "appointment_date", nullable = false)
    private LocalDateTime dateTime;
    @Column(name = "visit_reason")
    private String visitReason;
    @Enumerated(EnumType.STRING)
    private Status status;
    @ManyToOne
    @JoinColumn(name = "medic_id", nullable = false)
    private Medic medic;
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;
}