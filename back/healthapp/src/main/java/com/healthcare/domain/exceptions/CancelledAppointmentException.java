package com.healthcare.domain.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CancelledAppointmentException extends RuntimeException {
    private String message;
}
