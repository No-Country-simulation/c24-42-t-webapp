package com.healthcare.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "lab_results")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LabResults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;
    @Column(name = "result_date")
    private LocalDate resultDate;
    @Column(name = "test_type")
    private String testType;
    private String results;
}
