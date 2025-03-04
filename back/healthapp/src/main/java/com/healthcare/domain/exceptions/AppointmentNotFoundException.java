package com.healthcare.domain.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AppointmentNotFoundException extends RuntimeException {
    private String message;
}
