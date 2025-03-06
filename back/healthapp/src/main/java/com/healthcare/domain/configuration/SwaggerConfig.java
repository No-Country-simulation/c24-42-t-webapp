package com.healthcare.domain.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerConfig {

    @Value("${swagger.deployUrl}")
    private String deployUrl;
    @Value("${swagger.localhostUrl}")
    private String localhostUrl;

    @Bean
    OpenAPI customOpenAPI() {
        return new OpenAPI()
                .addServersItem(new Server().url(deployUrl).description("Deploy server"))
                .addServersItem(new Server().url(localhostUrl).description("Local server"))
                .components(new Components()
                    .addSecuritySchemes("bearer-key",
                        new SecurityScheme()
                            .type(SecurityScheme.Type.HTTP)
                            .scheme("bearer")
                            .bearerFormat("JWT")))
                .addSecurityItem(new SecurityRequirement().addList("bearer-key"));
    }
}
