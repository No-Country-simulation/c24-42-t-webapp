package com.healthcare.infrastructure.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
public class SecurityConfig {

    private static final String ADMIN = "ADMIN";

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, JwtAuthenticationFilter jwtAuthFilter) throws Exception {
        return httpSecurity
                .cors(Customizer.withDefaults())
                .csrf(CsrfConfigurer::disable)
                .authorizeHttpRequests(httpRequest -> {
                    httpRequest.requestMatchers(adminEndpoints()).hasRole(ADMIN);
                    httpRequest.requestMatchers(medicEndpoints()).hasAnyRole(ADMIN, "MEDICO");
                    httpRequest.requestMatchers(patientEndpoints()).hasAnyRole(ADMIN, "PACIENTE");
                    httpRequest.requestMatchers(
                            publicEndpoints()).permitAll();
                    httpRequest.anyRequest().authenticated();
                })
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    private String[] adminEndpoints() {
        return new String[] { "/api/v1/admin/**" };
    }

    private String[] medicEndpoints() {
        return new String[] { "/api/v1/medics/**" };
    }

    private String[] patientEndpoints() {
        return new String[] { "/api/v1/patient/**" };
    }

    private String[] publicEndpoints() {
        return new String[] { "/auth/**",
                "/swagger-ui.html",
                "/v3/api-docs/**",
                "/swagger-ui/**"
        };
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
