package com.naman.spring.taskmanager.TeamTaskManager.backend.service;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.AuthRequestDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.AuthResponseDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.RegisterDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Role;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.User;
import com.naman.spring.taskmanager.TeamTaskManager.backend.repository.UserRepository;
import com.naman.spring.taskmanager.TeamTaskManager.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public User register(RegisterDto dto) {

        User user = new User();

        user.setName(dto.getName());
        user.setEmail(dto.getEmail());

        user.setPassword(
                passwordEncoder.encode(dto.getPassword())
        );

        user.setRole(
                dto.getRole() != null
                        ? dto.getRole()
                        : Role.MEMBER
        );

        return userRepository.save(user);
    }

    public AuthResponseDto login(AuthRequestDto dto) {

        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                dto.getPassword(),
                user.getPassword()
        )) {

            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new AuthResponseDto(
                token,
                user.getRole().name()
        );
    }
}
