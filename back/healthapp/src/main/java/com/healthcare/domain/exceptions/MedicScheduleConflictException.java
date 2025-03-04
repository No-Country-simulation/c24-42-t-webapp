package com.healthcare.domain.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MedicScheduleConflictException extends RuntimeException {
    private String message;
}
