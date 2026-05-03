package com.naman.spring.taskmanager.TeamTaskManager.backend.repository;

import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
