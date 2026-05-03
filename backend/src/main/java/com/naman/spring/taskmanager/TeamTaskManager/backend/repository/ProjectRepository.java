package com.naman.spring.taskmanager.TeamTaskManager.backend.repository;

import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
