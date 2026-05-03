package com.naman.spring.taskmanager.TeamTaskManager.backend.dto;

import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterDto {

    @NotBlank
    private String name;

    @Email
    private String email;

    @NotBlank
    private String password;

    private Role role;
}
