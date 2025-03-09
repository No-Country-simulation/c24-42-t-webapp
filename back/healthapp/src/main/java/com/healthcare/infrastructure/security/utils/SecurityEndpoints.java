package com.healthcare.infrastructure.security.utils;

public class SecurityEndpoints {

    private SecurityEndpoints() {
    }

    public static String[] adminEndpoints() {
        return new String[] { "/api/v1/admin/**" };
    }

    public static String[] publicEndpoints() {
        return new String[] { "/api/v1/user/**",
                "/auth/**",
                "/swagger-ui.html",
                "/v3/api-docs/**",
                "/swagger-ui/**",
                "/api/v1/patient/**",
                "/api/v1/medic/**",
                "/api/v1/records/**" };
    }

}
