package com.naman.spring.taskmanager.TeamTaskManager.backend.controller;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.ProjectDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Project;
import com.naman.spring.taskmanager.TeamTaskManager.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<Project> getProjects() {

        return projectService.getProjects();
    }

    @PostMapping
    public Project createProject(
            @RequestBody ProjectDto dto
    ) {

        return projectService.createProject(dto);
    }
}
