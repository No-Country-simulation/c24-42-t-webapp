package com.healthcare.infrastructure.security.service;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.infrastructure.dto.request.RequestLoginDTO;
import com.healthcare.infrastructure.meta.DocumentedResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @DocumentedResponse(responseCode = "200",
    description = "Respuesta de login correcta",
    content = @Content(schema = @Schema(example = "{\"token\": \"jwt_token\"}")))
    @PostMapping("/login")
    public ResponseEntity<?> loggedIn(@RequestBody @Valid RequestLoginDTO login) {
        return authService.loginUser(login);
    }

}
