package com.example.spring_backend.controller;

import com.example.spring_backend.entity.Admin;
import com.example.spring_backend.repository.AdminRespository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminRespository adminRespository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Admin admin) {
        if (adminRespository.findByEmail(admin.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        adminRespository.save(admin);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody Admin admin) {
        Optional<Admin> existingUser = adminRespository.findByEmail(admin.getEmail());
        if (existingUser.isPresent() && passwordEncoder.matches(admin.getPassword(), existingUser.get().getPassword())) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.badRequest().body("Invalid credentials");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        // Spring Security handles the logout automatically
        new SecurityContextLogoutHandler().logout(request, response, null);

        return ResponseEntity.ok("Logged out successfully");
    }
}