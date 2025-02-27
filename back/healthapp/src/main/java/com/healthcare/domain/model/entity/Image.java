package com.healthcare.domain.model.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Image {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private String url;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diagnostic_images_id")
    private DiagnosticImages diagnosticImages;
}
