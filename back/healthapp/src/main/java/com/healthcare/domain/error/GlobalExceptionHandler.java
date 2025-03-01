package com.healthcare.domain.error;

import java.util.HashMap;
import java.util.Map;

import com.healthcare.domain.exceptions.NotFoundInDatabaseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, String>> handleException(HttpMessageNotReadableException ex) {
        Map<String, String> errors = new HashMap<>();
    
        Map<String, String> errorPatterns = Map.of(
                "Required request body is missing", "El cuerpo de la consulta está vacío",
                "was expecting comma to separate", "Falta coma para separar algunos de los atributos",
                "expected close marker for Object", "Se espera cierre de llave al final",
                "Cannot deserialize value of type", "Hubo un error al deserializar, se esperaba solo un objeto y no un arreglo",
                "Cannot construct instance of", "Error de formato en la solicitud"
        );
    
        String errorMsg = errorPatterns.entrySet().stream()
                .filter(entry -> ex.getMessage().contains(entry.getKey()))
                .map(Map.Entry::getValue)
                .findFirst()
                .orElse("Error en la solicitud. Verifique el formato del JSON.");
    
        errors.put("error", errorMsg);
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundInDatabaseException.class)
    public ResponseEntity<?> notFoundInDataBase(NotFoundInDatabaseException ex) {
        return new ResponseEntity<>(Map.of("error", ex.getMessage()), HttpStatus.NOT_FOUND);
    }

}
