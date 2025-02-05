package com.example.spring_backend.repository;

import com.example.spring_backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRespository extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByEmail(String email);
}
