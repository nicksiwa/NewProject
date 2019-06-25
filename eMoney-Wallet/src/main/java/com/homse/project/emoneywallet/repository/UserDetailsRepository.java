package com.homse.project.emoneywallet.repository;

import com.homse.project.emoneywallet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailsRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String name);
}
