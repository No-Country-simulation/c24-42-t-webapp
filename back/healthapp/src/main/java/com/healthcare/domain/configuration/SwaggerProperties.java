package com.healthcare.domain.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:swagger.properties")
@ConfigurationProperties(prefix = "swagger")
public class SwaggerProperties {
    @SuppressWarnings("unused")
    private String deployUrl;
    @SuppressWarnings("unused")
    private String localhostUrl;
}
