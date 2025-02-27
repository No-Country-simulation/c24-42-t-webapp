package com.healthcare.domain.model.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "dx_images")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ImagesDx {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private String url;
    @ManyToOne
    @JoinColumn(name = "diagnostic_id")
    DiagnosticImages diagnosticImages;
}
