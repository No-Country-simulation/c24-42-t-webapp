package com.healthcare.infrastructure.security.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.healthcare.domain.model.entity.Admin;
import com.healthcare.domain.model.entity.User;
import com.healthcare.domain.model.enums.Role;
import com.healthcare.domain.repository.AdminRepository;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner{

    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${admin.email}")
    private String email;
    @Value("${admin.password}")
    private String password;

    @Override
    public void run(String... args) throws Exception {
        if(adminRepository.count() == 0){
            createAdminUser(email, password);
        }
    }

    @Transactional
    public void createAdminUser(final String email, final String password){
        Assert.notNull(email, "Email is null");
        Assert.notNull(password, "Password is null");
        Admin a = Admin.builder()
        .firstName("Admin")
        .lastName("Tech")
        .build();
        User u = User.builder()
        .email(email)
        .password(passwordEncoder.encode(password))
        .role(Role.ADMIN)
        .build();        
        a.setUser(u);
        adminRepository.save(a);
    }
}
