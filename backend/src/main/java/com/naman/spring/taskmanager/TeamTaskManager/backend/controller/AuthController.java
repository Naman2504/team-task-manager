package com.naman.spring.taskmanager.TeamTaskManager.backend.controller;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.AuthRequestDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.AuthResponseDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.RegisterDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.User;
import com.naman.spring.taskmanager.TeamTaskManager.backend.service.AuthService;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public User signup(
            @Valid @RequestBody RegisterDto dto
    ) {

        return authService.register(dto);
    }

    @PostMapping("/login")
    public AuthResponseDto login(
            @RequestBody AuthRequestDto dto
    ) {

        return authService.login(dto);
    }
}
