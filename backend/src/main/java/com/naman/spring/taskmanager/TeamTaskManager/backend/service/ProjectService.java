package com.naman.spring.taskmanager.TeamTaskManager.backend.service;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.ProjectDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Project;
import com.naman.spring.taskmanager.TeamTaskManager.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project createProject(ProjectDto dto) {

        Project project = new Project();

        project.setName(dto.getName());
        project.setDescription(dto.getDescription());

        return projectRepository.save(project);
    }
}
