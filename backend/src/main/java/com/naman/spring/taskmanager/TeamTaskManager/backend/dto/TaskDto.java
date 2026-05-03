package com.naman.spring.taskmanager.TeamTaskManager.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class TaskDto {

    private String title;
    private String description;
    private String status;
    private LocalDate dueDate;

    private Long projectId;
    private Long assignedToId;
}
