package com.healthcare.infrastructure.security;

import java.io.IOException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.healthcare.infrastructure.security.service.AuthService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final AuthService authService;
    private static final String AUTHORIZATION = "Authorization";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if (!hasAuthorization(request)) {
            filterChain.doFilter(request, response);
            return;
        }
        String token = getTokenFromHeader(request);
        authService.validateUserToken(token);
        filterChain.doFilter(request, response);
    }

    private boolean hasAuthorization(HttpServletRequest request) {
        return (request.getHeader(AUTHORIZATION) == null || request.getHeader(AUTHORIZATION).isBlank());
    }
    private String getTokenFromHeader(HttpServletRequest request){
        return request.getHeader(AUTHORIZATION).replace("Bearer ", "");
    }
}
